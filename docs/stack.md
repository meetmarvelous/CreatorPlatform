## MVP Tech Stack Report: Crypto-Based Creator Platform

To build an effective and scalable MVP for your creator subscription platform in 2026, the following technology stack is recommended for its speed of development, **zero recurring service costs**, and native support for recurring crypto payments.

> For the full cost audit and comparison against the original stack, see [stack_alternatives.md](./stack_alternatives.md).

---

### 1. Core Framework & UI

- **Framework:** **Next.js (React)**. This handles both the "Creator Profiles" and the "Admin Panel" while providing high SEO visibility for creators.
- **Styling:** **Tailwind CSS**. Enables rapid building of a responsive "Creator Dashboard" and "Messaging" interface.

### 2. Authentication & Wallet Management

- **Platform Auth:** **Supabase Auth**. Included free with Supabase — supports email/password, magic links, OAuth (Google, Twitter, Discord, GitHub), and phone OTP. Handles email verification, password reset, JWT sessions, and Row Level Security (RLS) out of the box.
- **Wallet Connection:** **wagmi + RainbowKit**. Free, open-source libraries that let fans connect their own crypto wallets (MetaMask, Coinbase Wallet, WalletConnect) for payments and subscriptions.
- **Security:** Platform authentication is fully self-managed through Supabase (encrypted passwords, secure sessions). Wallet custody stays with the user — no third-party key management.

### 3. Subscription & Payment Engine

- **Protocol:** **Unlock Protocol**. This acts as the "Subscription System" by issuing time-bound NFTs (membership keys) to "Fans".

- **Logic:** It natively supports "Recurring income," "Direct Purchases," and "Tips" while allowing the platform to automatically deduct its "percentage fee".

- **Network:** **Base** or **Polygon**. These Layer 2 networks ensure that transaction fees for "Tips" and "Subscribing" remain under $0.01.

### 4. Backend & Data Storage

- **Database:** **Supabase (PostgreSQL)**. Used to manage "Subscriber management," "Earnings analytics," and "Content management".
- **Media Storage:** **Cloudflare R2**. Hosts the "exclusive content" (images/videos) with zero egress fees — critical for a content-heavy platform. S3-compatible API.
- **Small Assets:** **Supabase Storage**. Used for profile pictures, avatars, and other lightweight assets.

---

### Implementation Summary

| Component         | Technology               | Role in MVP                         |
| ----------------- | ------------------------ | ----------------------------------- |
| **Frontend**      | Next.js + Tailwind       | Creator Pages & Dashboard           |
| **Discovery**     | Explore Feed             | Cross-platform creator discovery    |
| **Marketplace**   | Digital Store / Shop     | Direct item purchases (no sub req)  |
| **Auth**          | Supabase Auth            | Email, OAuth, Magic Links — Free    |
| **Wallet**        | wagmi + RainbowKit       | Crypto Wallet Connection — Free     |
| **Payments**      | Unlock Protocol          | Crypto Subscriptions & Tips         |
| **Database**      | Supabase (PostgreSQL)    | User Data & Metadata                |
| **Media Storage** | Cloudflare R2            | Videos, Images — Zero Egress Fees   |
| **Admin Control** | Admin Panel              | Global user & transaction oversight |
| **Network**       | Base (L2)                | Fast, Low-Cost Transactions         |

### Why This Stack is Conclusive

This modular approach allows you to launch the **MVP Scope** (Accounts, Creator Pages, Content Posting, Subscriptions, and Payments) in weeks rather than months. It removes the "banking friction" of traditional platforms while maintaining a simple user experience for non-crypto fans.

**Cost advantage:** By replacing Privy with Supabase Auth + RainbowKit and offloading media to Cloudflare R2, the estimated monthly cost at 10k users drops from **~$550–2,050/mo** to **~$25–30/mo** — with no sacrifice in functionality.
