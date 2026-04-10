"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Brand / Graphic Side */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-between p-12 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-purple-600/20 to-indigo-900/80 z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/30 blur-[120px] z-0" />
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/30 blur-[120px] z-0" />
        
        <Link href="/" className="relative z-10 flex items-center space-x-2 w-max group">
          <Sparkles className="h-6 w-6 text-indigo-400 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-bold tracking-tight">Creator<span className="text-slate-400">Platform</span></span>
        </Link>

        <div className="relative z-10 max-w-lg mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl font-bold tracking-tight mb-4 leading-tight">
            Welcome back to your <span className="text-indigo-400">digital empire</span>.
          </h2>
          <p className="text-lg text-indigo-100/80 mb-8">
            Access your dashboard to check insights, manage subscribers, and publish new content.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-indigo-200 to-purple-200"></div>
              ))}
            </div>
            <p className="text-sm font-medium text-slate-300">Join 10,000+ top creators</p>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 bg-white relative">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none lg:hidden">
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-100/40 blur-3xl opacity-50" />
        </div>

        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both">
          <Link href="/" className="flex items-center space-x-2 mb-10 group lg:hidden">
            <Sparkles className="h-6 w-6 text-indigo-500 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold tracking-tight">Creator<span className="text-muted-foreground">Platform</span></span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Sign in</h1>
            <p className="text-muted-foreground">Enter your email or connect your wallet to log in.</p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email address</label>
              <Input id="email" type="email" placeholder="m@example.com" className="h-11" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Password</label>
                <Link href="#" className="text-xs text-indigo-600 font-medium hover:underline">Forgot password?</Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" className="h-11" />
            </div>
            <Button className="w-full text-md h-12 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all bg-indigo-600 hover:bg-indigo-700 group">
              Sign In
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
              <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
              Connect Wallet
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-8">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
