# Stack Cost Audit & Alternatives

A review of the current Creator Platform stack, identifying services that will cost money at scale and suggesting feasible, self-managed or free alternatives.

---

## Current Stack at a Glance

| Component        | Current Choice       | Free Now? | Will Cost Later? |
|------------------|----------------------|-----------|------------------|
| **Framework**    | Next.js (React)      | ✅ Yes    | ⚠️ Hosting only   |
| **Styling**      | Tailwind CSS         | ✅ Yes    | ❌ No             |
| **Auth**         | Privy / Dynamic      | ❌ Freemium | ✅ **Yes, expensive** |
| **Payments**     | Unlock Protocol      | ✅ Yes (on-chain) | ⚠️ Gas fees only |
| **Database**     | Supabase (Postgres)  | ⚠️ Free tier | ✅ **Yes, at scale** |
| **File Storage** | Supabase Storage     | ⚠️ Free tier | ✅ **Yes, at scale** |
| **Network**      | Base / Polygon (L2)  | ✅ Yes    | ⚠️ Gas fees only   |

---

## 🔴 1. Authentication — Privy / Dynamic → Self-Hosted Auth

### The Problem

- **Privy** charges per Monthly Active User (MAU) after the free tier (~1,000 MAUs). At scale (10k+ users), this becomes a significant recurring bill ($500–$2,000+/month).
- **Dynamic** has a similar pricing model.
- Both are "embedded wallet" providers — you're paying for wallet abstraction + auth combined.

### Recommended Alternatives

| Alternative | Type | Cost | Wallet Support | Difficulty |
|------------|------|------|----------------|------------|
| **NextAuth.js (Auth.js)** | Self-hosted | **Free forever** | Add-on needed | ⭐⭐ Medium |
| **Supabase Auth** | Bundled with DB | **Free (included)** | Add-on needed | ⭐ Easy |
| **Lucia Auth** | Self-hosted, lightweight | **Free forever** | Add-on needed | ⭐⭐ Medium |

### 🏆 Best Pick: Supabase Auth (already using Supabase)

**Why:**

- You're already planning to use Supabase for your database — **auth is included free** with unlimited users on all plans.
- Supports: Email/password, magic links, OAuth (Google, Twitter, Discord, GitHub), phone OTP.
- Built-in: Email verification, password reset, JWT sessions, Row Level Security (RLS).
- Satisfies every auth requirement in the PRD (Section 4.1 & Section 8).

**For the crypto wallet part**, instead of Privy's embedded wallets:

- Use **wagmi + RainbowKit** or **wagmi + ConnectKit** (both free, open-source) to let users connect their own wallets (MetaMask, Coinbase Wallet, WalletConnect).
- Users who don't have a wallet can create one for free via Coinbase Wallet or MetaMask in seconds.
- This separates **platform auth** (Supabase) from **payment wallet** (user's own), which is simpler and cleaner.

### Runner-Up: NextAuth.js (Auth.js)

- If you want the auth layer completely independent from your database.
- Supports dozens of OAuth providers out of the box.
- Free, OSS, community-maintained.
- You'd pair this with a Supabase adapter for session/user storage.

---

## 🟡 2. Database & Storage — Supabase Free Tier Limits

### The Problem

Supabase is excellent but the **free tier** has limits:

- **500 MB** database storage
- **1 GB** file storage
- **2 GB** bandwidth
- **50,000** monthly active users (auth)

For a creator platform with video/image uploads, you'll hit storage limits fast.

### Recommendations

| Strategy | Details |
|----------|---------|
| **Stay with Supabase (Pro plan)** | $25/month is very reasonable for what you get. This is a fair cost. |
| **Self-host Supabase** | Run the open-source Supabase stack on a $5–$20/mo VPS (Hetzner, Contabo). Database + Auth + Storage fully self-hosted. **$0 to Supabase.** |
| **Use a separate object storage for media** | Store large files (videos, images) on **Cloudflare R2** (free egress, 10GB free storage) or **Backblaze B2** (10GB free). Keep Supabase for metadata only. |

### 🏆 Best Pick: Supabase (DB + Auth) + Cloudflare R2 (Media Storage)

- Keeps your database + auth on Supabase (free tier lasts much longer if you're not storing large files there).
- Offloads heavy media to **Cloudflare R2**, which has **zero egress fees** — critical for a content platform where fans are constantly streaming/downloading content.
- R2 is S3-compatible, so your code barely changes.

---

## 🟢 3. Payments — Unlock Protocol (Keep As-Is)

### Assessment

Unlock Protocol is already **free to use** (it's an on-chain protocol). You only pay gas fees, which on Base L2 are fractions of a cent. This is a good choice.

### One Consideration

If you later want to support **fiat payments** alongside crypto (credit cards, etc.), consider:

- **Stripe** (industry standard, pay-per-transaction only, no monthly fee)
- **LemonSqueezy** (simpler, handles taxes for you)

But for MVP with crypto-only, Unlock Protocol + Base L2 is solid.

---

## 🟢 4. Framework & Styling — Next.js + Tailwind (Keep As-Is)

Both are completely free and open-source. No changes needed.

### Hosting Options (when you deploy)

| Host | Free Tier | Notes |
|------|-----------|-------|
| **Vercel** | Generous free tier | Best DX for Next.js, limits on commercial use |
| **Cloudflare Pages** | Very generous free tier | Pair with R2 for a full free stack |
| **Self-hosted (VPS)** | $5–10/mo | Full control, no limits |

---

## Summary of Recommended Changes

| Component | Before | After | Savings |
|-----------|--------|-------|---------|
| **Auth** | Privy / Dynamic | Supabase Auth + wagmi/RainbowKit | ~$500–2,000/mo |
| **Media Storage** | Supabase Storage | Cloudflare R2 | Zero egress fees |
| **Database** | Supabase | Supabase (no change) | — |
| **Payments** | Unlock Protocol | Unlock Protocol (no change) | — |
| **Frontend** | Next.js + Tailwind | Next.js + Tailwind (no change) | — |

---

## Cost Comparison at Scale (10k users)

| Expense | Original Stack | Recommended Stack |
|---------|---------------|-------------------|
| **Auth** | ~$500–2,000/mo (Privy) | **$0** (Supabase Auth) |
| **Database** | $25/mo (Supabase Pro) | $25/mo (same) |
| **Media Storage** | $25+/mo (Supabase) | **$0–5/mo** (Cloudflare R2) |
| **Wallet UX** | Included in Privy | **$0** (RainbowKit/wagmi) |
| **Payments** | Gas fees only | Gas fees only (same) |
| **Total Monthly** | **~$550–2,050/mo** | **~$25–30/mo** |

---

## Trade-Off: Privy vs Supabase Auth + RainbowKit

| | Privy Approach | Supabase Auth + RainbowKit |
|---|---|---|
| **Onboarding UX** | Seamless — fan signs up with email, wallet is invisible | Fan needs to connect a wallet separately for payments |
| **Complexity** | One integration | Two integrations (auth + wallet) |
| **Cost** | High at scale | Free |
| **Control** | Vendor lock-in | Full ownership |
| **Wallet custody** | Privy holds keys | User holds keys (more decentralized) |

The trade-off is **slightly more friction** during the wallet-connect step for fans, but you gain **full control, zero vendor lock-in, and save $500+/month** at scale. For most users in 2026, connecting a wallet (especially via Coinbase Wallet or MetaMask mobile) is a 10-second process.
