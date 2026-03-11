"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Brand / Graphic Side */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-between p-12 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-600/20 to-indigo-900/80 z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/30 blur-[120px] z-0" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-pink-500/30 blur-[120px] z-0" />
        
        <Link href="/" className="relative z-10 flex items-center space-x-2 w-max group">
          <Sparkles className="h-6 w-6 text-purple-400 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-bold tracking-tight">Creator<span className="text-slate-400">Platform</span></span>
        </Link>

        <div className="relative z-10 max-w-lg mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl font-bold tracking-tight mb-4 leading-tight">
            Start keeping <span className="text-purple-400">100%</span> of what you earn.
          </h2>
          <p className="text-lg text-purple-100/80 mb-8">
            Set up your profile, define your tiers, and start accepting crypto subscriptions instantly without arbitrary wait times and platform fees.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="italic text-slate-200 mb-4 text-sm">"The onboarding was shockingly easy. My non-crypto fans pay with card, and I receive stablecoins in my wallet. Perfect."</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-400"></div>
              <div>
                <p className="text-sm font-bold">Alex Jenkins</p>
                <p className="text-xs text-slate-400">Video Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 bg-white relative">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none lg:hidden">
          <div className="absolute bottom-[20%] right-[20%] w-[60%] h-[60%] rounded-full bg-purple-100/40 blur-3xl opacity-50" />
        </div>

        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both">
          <Link href="/" className="flex items-center space-x-2 mb-10 group lg:hidden">
            <Sparkles className="h-6 w-6 text-purple-500 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold tracking-tight">Creator<span className="text-muted-foreground">Platform</span></span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Create an account</h1>
            <p className="text-muted-foreground">Start monetizing your audience effortlessly.</p>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First name</label>
                <Input id="first-name" placeholder="First" className="h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last name</label>
                <Input id="last-name" placeholder="Last" className="h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email address</label>
              <Input id="email" type="email" placeholder="m@example.com" className="h-11" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input id="password" type="password" placeholder="Create a password" className="h-11" />
            </div>
            
            <Button className="w-full text-md h-12 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 group border-0">
              Complete Sign Up
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground font-medium">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full h-12 bg-zinc-50 hover:bg-zinc-100 border-zinc-200">
              <svg className="mr-2 h-5 w-5 text-[#EA4335]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Google
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-8">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-600 hover:text-purple-700 font-semibold hover:underline transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
