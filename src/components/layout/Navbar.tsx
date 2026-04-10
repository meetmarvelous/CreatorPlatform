"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { Menu, X, Bell, User, Settings, LogOut, MessageSquare } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Simulated for demo

  const notifications = [
    { id: 1, text: "New subscriber: Alex Jenkins", time: "2m ago", unread: true },
    { id: 2, text: "You received a $50 tip from Sarah", time: "1h ago", unread: true },
    { id: 3, text: "New comment on your latest post", time: "3h ago", unread: false },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-background/80 flex justify-center">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Creator<span className="text-muted-foreground">Platform</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</Link>
          <Link href="/#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
          <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60 font-semibold text-indigo-600">Dashboard</Link>
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4">
          {!isLoggedIn ? (
            <>
              <Link href="/login" className="hidden md:block">
                <Button variant="ghost" size="sm">Log In</Button>
              </Link>
              <Link href="/signup" className="hidden md:block">
                <Button size="sm" className="rounded-full shadow-md">Sign Up</Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-1 md:space-x-3">
              {/* Notifications */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full relative"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                  <Bell className="h-5 w-5 text-slate-600" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </Button>

                {isNotificationsOpen && (
                  <div className="absolute top-12 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 animate-in fade-in zoom-in-95 duration-200 z-[100]">
                    <div className="px-4 py-2 border-b border-slate-50 flex justify-between items-center">
                      <span className="font-bold text-sm">Notifications</span>
                      <button className="text-xs text-indigo-600 font-semibold hover:underline">Mark all as read</button>
                    </div>
                    <div className="max-h-[300px] overflow-auto">
                      {notifications.map(n => (
                        <div key={n.id} className={`px-4 py-3 hover:bg-slate-50 cursor-pointer flex gap-3 items-start ${n.unread ? 'bg-indigo-50/30' : ''}`}>
                          <div className={`w-2 h-2 mt-1.5 rounded-full shrink-0 ${n.unread ? 'bg-indigo-500' : 'bg-transparent'}`}></div>
                          <div>
                            <p className="text-sm text-slate-700 leading-tight">{n.text}</p>
                            <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-slate-50 text-center">
                      <button className="text-xs text-slate-500 font-medium hover:text-indigo-600">View all notifications</button>
                    </div>
                  </div>
                )}
              </div>

              {/* Messages Shortcut */}
              <Link href="/dashboard/messages">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MessageSquare className="h-5 w-5 text-slate-600" />
                </Button>
              </Link>

              {/* Profile Avatar */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5 cursor-pointer hover:opacity-90 transition-opacity">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                   <User className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
            </div>
          )}
          
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

