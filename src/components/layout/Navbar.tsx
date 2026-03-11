"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-background/80 flex justify-center">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Creator<span className="text-muted-foreground">Platform</span></span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</Link>
          <Link href="/#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
          <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">Dashboard</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hidden md:block">
            <Button variant="ghost" size="sm">Log In</Button>
          </Link>
          <Link href="/signup" className="hidden md:block">
            <Button size="sm" className="rounded-full shadow-md">Sign Up</Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg p-4 flex flex-col space-y-4 md:hidden animate-in slide-in-from-top-2">
          <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-indigo-600 px-4 py-2 hover:bg-slate-50 rounded-lg">Features</Link>
          <Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-indigo-600 px-4 py-2 hover:bg-slate-50 rounded-lg">Pricing</Link>
          <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700 hover:text-indigo-600 px-4 py-2 hover:bg-slate-50 rounded-lg">Dashboard</Link>
          <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
             <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
               <Button variant="outline" className="w-full justify-center h-12 text-base font-bold bg-white">Log In</Button>
             </Link>
             <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
               <Button className="w-full justify-center h-12 text-base font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg text-white">Sign Up</Button>
             </Link>
          </div>
        </div>
      )}
    </header>
  )
}
