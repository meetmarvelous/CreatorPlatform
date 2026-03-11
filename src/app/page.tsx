"use client"

import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { ArrowRight, Sparkles, Wallet, Lock, TrendingUp, CheckCircle2, MessageCircle, Star } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background overflow-hidden relative">
      {/* Background glowing effects & abstract shapes */}
      <div className="absolute top-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-200/40 blur-[100px] opacity-60" />
        <div className="absolute top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-200/40 blur-[100px] opacity-60" />
      </div>

      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 px-4 md:px-6 flex flex-col items-center text-center relative">
        <div className="inline-flex items-center rounded-full border border-indigo-100 px-4 py-1.5 text-sm text-indigo-800 mb-8 bg-indigo-50/50 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both shadow-sm cursor-default hover:bg-indigo-100/50 transition-colors">
          <Sparkles className="mr-2 h-4 w-4 text-indigo-600" />
          <span className="font-medium">The future of creator monetization is here</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 max-w-5xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 ease-out fill-mode-both leading-[1.1]">
          Own your audience. <br className="hidden md:block"/>
          <span className="text-gradient drop-shadow-sm">Keep 100% of your earnings.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mb-10 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 ease-out fill-mode-both font-medium">
          A premium subscription platform powered by crypto. Zero platform platform fees, instant lock-up free payouts, and direct connection with your biggest fans.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 ease-out fill-mode-both">
          <Link href="/signup">
            <Button size="lg" className="rounded-full w-full sm:w-auto px-10 h-14 text-base shadow-xl shadow-indigo-500/20 group hover:shadow-indigo-500/40 transition-all">
              Start Earning Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto px-10 h-14 text-base bg-white/70 backdrop-blur-md border-indigo-100 hover:bg-indigo-50">
              See How It Works
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 border-y border-border/50 bg-white/40 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/50">
          <div className="flex flex-col items-center justify-center p-2">
            <p className="text-4xl font-bold text-indigo-900 mb-1">$0</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Platform Fees</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <p className="text-4xl font-bold text-indigo-900 mb-1">&lt; 1s</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Payout Time</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <p className="text-4xl font-bold text-indigo-900 mb-1">10k+</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Creators</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <p className="text-4xl font-bold text-indigo-900 mb-1">100%</p>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Ownership</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="w-full py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl w-full flex flex-col items-center mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-subtle">Built for Modern Creators</h2>
            <p className="text-slate-600 max-w-2xl text-balance text-lg mx-auto">
              Everything you need to run a successful membership business without the traditional banking friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <Card className="glass-card flex flex-col items-start pt-8 pb-8 px-8 group">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Wallet className="w-8 h-8" />
              </div>
              <CardTitle className="mb-3 text-2xl">Instant Payouts</CardTitle>
              <CardDescription className="text-base text-slate-600 leading-relaxed">
                Your fans pay in crypto and the funds go directly to your wallet. No waiting for 30-day clearance cycles, no minimum withdrawal limits. Your money is yours, instantly.
              </CardDescription>
            </Card>
            
            <Card className="glass-card flex flex-col items-start pt-8 pb-8 px-8 group">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8" />
              </div>
              <CardTitle className="mb-3 text-2xl">Gated Content</CardTitle>
              <CardDescription className="text-base text-slate-600 leading-relaxed">
                Easily lock your premium posts, high-res videos, and exclusive images behind secure membership tiers driven by immutable smart contracts on the blockchain.
              </CardDescription>
            </Card>

            <Card className="glass-card flex flex-col items-start pt-8 pb-8 px-8 group">
              <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <CardTitle className="mb-3 text-2xl">Zero Platform Fees</CardTitle>
              <CardDescription className="text-base text-slate-600 leading-relaxed">
                Why pay 10-20% when you can pay nothing? You keep exactly what your subscribers pay. We make money by providing optional premium tools, not by taxing your connection to fans.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="w-full py-24 bg-zinc-50/50 border-y border-border/50 flex justify-center px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Start monetizing in 3 simple steps</h2>
              <p className="text-lg text-slate-600 mb-8 text-balance">
                We've abstracted away all the complex web3 onboarding. Your fans can pay with crypto, or simply use their credit card to purchase an on-ramp seamlessly under the hood.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Create your profile</h3>
                    <p className="text-slate-600">Sign up and customize your creator page. Set up your membership tiers and pricing in minutes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Post exclusive content</h3>
                    <p className="text-slate-600">Upload your videos, art, writing, or courses. Lock them behind specific membership tiers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Share and earn directly</h3>
                    <p className="text-slate-600">Share your link. When fans subscribe, funds flow instantly to your wallet. No middleman holding your money.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl transform rotate-3 opacity-20 blur-xl"></div>
              <Card className="glass-panel border-white shadow-2xl overflow-hidden rounded-2xl relative z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/80 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <div className="ml-4 font-mono text-xs text-slate-400">creatorplatform.com/creative_artist</div>
                </div>
                <div className="p-8 bg-zinc-50/80 aspect-[4/3] flex flex-col justify-center">
                  <div className="space-y-4 max-w-sm mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-indigo-100"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 bg-slate-200 rounded w-24"></div>
                        <div className="h-3 bg-slate-100 rounded w-32"></div>
                      </div>
                    </div>
                    <div className="h-32 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center flex-col gap-2">
                       <Lock className="w-8 h-8 text-slate-300" />
                       <div className="h-3 bg-slate-200 rounded w-32"></div>
                       <div className="h-10 bg-indigo-500 rounded-full w-48 mt-2"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
            "Switching to CreatorPlatform was the best decision for my business. I instantly gained 15% more revenue just from avoiding the traditional platform fees."
          </h2>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 p-1">
               <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-xl text-indigo-900">
                 SM
               </div>
            </div>
            <div>
              <p className="font-bold text-lg">Sarah Michaels</p>
              <p className="text-slate-500">Digital Artist, 12k Subscribers</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="w-full py-24 border-t border-border/50 bg-white/40">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Do my fans need to know how to use Crypto?",
                a: "No! We've integrated seamless fiat on-ramps. Your fans can pay with a standard credit card, and the system handles the crypto conversion automatically."
              },
              {
                q: "How does the 'zero fees' model work?",
                a: "You keep 100% of the subscription revenue. Traditional platforms charge 10-20% because they manage risk and banking infrastructure. Since crypto is peer-to-peer, those costs disappear."
              },
              {
                q: "When do I get paid?",
                a: "Immediately. The smart contracts route funds from the subscriber directly to your connected wallet the second the transaction executes on the blockchain."
              }
            ].map((faq, i) => (
              <Card key={i} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 ml-10">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 px-4 flex flex-col items-center text-center relative overflow-hidden bg-slate-900 text-white mt-12 w-[calc(100%-2rem)] max-w-7xl mx-auto rounded-3xl mb-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-0"></div>
        <div className="absolute top-0 right-0 p-32 bg-purple-500/20 blur-[100px] rounded-full z-0"></div>
        <div className="absolute bottom-0 left-0 p-32 bg-indigo-500/20 blur-[100px] rounded-full z-0"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Ready to take back control?</h2>
          <p className="text-indigo-100 mb-10 max-w-2xl text-balance text-xl">
            Join thousands of creators who are already using crypto to monetize their audience effectively and completely independently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/signup">
              <Button size="lg" className="rounded-full px-12 h-14 text-lg bg-white text-indigo-900 hover:bg-slate-100 shadow-xl w-full sm:w-auto">
                Create Your Profile
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            <span className="text-lg font-bold">CreatorPlatform</span>
          </div>
          <p className="text-sm text-slate-500">© 2026 CreatorPlatform MVP. Built for the future.</p>
          <div className="flex gap-4 text-sm font-medium text-slate-600">
            <Link href="#" className="hover:text-indigo-600 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-indigo-600 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
