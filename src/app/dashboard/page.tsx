"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ArrowUpRight, Link as LinkIcon, Users, Wallet, Activity, CreditCard, ChevronRight, TrendingUp, Sparkles, Target } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <div className="flex-1 space-y-8 p-8 pt-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Dashboard</h2>
            <p className="text-slate-500 mt-2 text-lg">
              Welcome back, Creative Artist! Here's what's happening today.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard/post/create">
              <Button className="rounded-full shadow-lg shadow-indigo-500/20 bg-indigo-600 hover:bg-indigo-700 h-12 px-6">
                Create Post
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Goal Tracker */}
        <Card className="glass-card animate-in fade-in slide-in-from-top-4 duration-500 border-indigo-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <CardContent className="p-6 relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/30">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 w-full">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Monthly Revenue Goal</h3>
                  <p className="text-sm text-slate-500">You are on track to hit your $5,000 target by the 28th.</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-xl text-indigo-700">$3,450</span>
                  <span className="text-sm text-slate-500"> / $5,000</span>
                </div>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative overflow-hidden" style={{ width: '69%' }}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top-Level Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <Card className="glass-card hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Revenue</CardTitle>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-md">
                <Wallet className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">$12,450.00</div>
              <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1"/> +20.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Active Subscribers</CardTitle>
              <div className="p-2 bg-purple-50 text-purple-600 rounded-md">
                 <Users className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">+2,350</div>
              <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1"/> +180 since last week
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Recent Tips</CardTitle>
              <div className="p-2 bg-pink-50 text-pink-600 rounded-md">
                <CreditCard className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">$340.00</div>
              <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1"/> +19% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover:-translate-y-1 transition-transform cursor-pointer relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Profile Views</CardTitle>
              <div className="p-2 bg-amber-50 text-amber-600 rounded-md">
                <Activity className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">+12,234</div>
              <p className="text-xs text-amber-600 font-medium mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1"/> consistent with average
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200">
          
          {/* Quick Actions & Best Performing Posts */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="glass-card border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between border-b bg-white/40 mb-4 pb-4">
                <CardTitle>Top Performing Posts</CardTitle>
                <Button variant="ghost" size="sm" className="text-sm text-indigo-600 h-8 hover:bg-indigo-50">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Behind the scenes: Studio Setup", likes: 342, comments: 45, rev: "$120", trend: "+12%" },
                    { title: "Exclusive 4K Render Pack Download", likes: 890, comments: 112, rev: "$450", trend: "+55%" },
                    { title: "Weekly Q&A: Crypto Art Market", likes: 210, comments: 89, rev: "$60", trend: "+5%" }
                  ].map((post, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white/60 hover:border-indigo-200 hover:shadow-md transition-all group cursor-pointer">
                      <div className="space-y-1 flex-1">
                        <p className="text-sm font-semibold leading-none text-slate-800 group-hover:text-indigo-600 transition-colors">
                          {post.title}
                        </p>
                        <p className="text-xs text-slate-500">
                          {post.likes} likes • {post.comments} comments
                        </p>
                      </div>
                      <div className="text-right pl-4 border-l border-slate-100 flex items-center gap-4">
                        <div className="hidden sm:block">
                          <p className="text-xs text-emerald-600 font-bold">{post.trend}</p>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700">{post.rev}</p>
                          <p className="text-[10px] text-indigo-400 uppercase font-bold tracking-wider">Earned</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-0 overflow-hidden relative group cursor-pointer hover:shadow-xl hover:shadow-indigo-500/30 transition-all h-full">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                <CardHeader className="pb-4 relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <Sparkles className="h-8 w-8 text-indigo-200 mb-3" />
                    <CardTitle className="text-white text-xl">Share Link</CardTitle>
                    <CardDescription className="text-indigo-100/80 mt-1">Copy your public profile URL</CardDescription>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-white group-hover:underline">
                    creatorplatform.com/user <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </CardHeader>
              </Card>
              
              <Link href="/dashboard/fans" className="block h-full">
                <Card className="glass-card hover:-translate-y-1 transition-all duration-300 border-slate-200 cursor-pointer h-full group">
                  <CardHeader className="pb-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="p-3 bg-purple-50 w-fit rounded-lg mb-3 group-hover:bg-purple-100 transition-colors shadow-sm">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle className="text-slate-800 text-xl">Community</CardTitle>
                      <CardDescription className="mt-1">Manage 2,350 subscribers</CardDescription>
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium text-purple-600 group-hover:underline">
                      View all fans <ChevronRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>

          {/* Activity Feed */}
          <Card className="glass-card lg:col-span-3 border-slate-200 h-full flex flex-col">
            <CardHeader className="border-b bg-white/40 pb-4">
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Live updates from your community.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex-1 overflow-auto">
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-200 before:via-slate-200 before:to-transparent">
                
                {[
                  { user: "0x89...4fc2", action: "subscribed to Premium Tier", time: "2 mins ago", icon: Wallet, color: "bg-gradient-to-br from-purple-400 to-purple-600", border: "border-purple-100" },
                  { user: "Sarah J.", action: "tipped $50.00", time: "1 hour ago", icon: CreditCard, color: "bg-gradient-to-br from-emerald-400 to-emerald-600", border: "border-emerald-100" },
                  { user: "0x32...1aa4", action: "liked your video", time: "3 hours ago", icon: Activity, color: "bg-gradient-to-br from-blue-400 to-blue-600", border: "border-blue-100" },
                  { user: "Mike D.", action: "subscribed to Standard Tier", time: "5 hours ago", icon: Wallet, color: "bg-gradient-to-br from-indigo-400 to-indigo-600", border: "border-indigo-100" },
                  { user: "0x99...ca31", action: "commented on 'Studio Setup'", time: "Yesterday", icon: Activity, color: "bg-gradient-to-br from-amber-400 to-amber-600", border: "border-amber-100" },
                ].map((item, i) => (
                   <div key={i} className="relative flex items-center group">
                     <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 ${item.border} ${item.color} text-white shadow-md shrink-0 z-10 group-hover:scale-110 transition-transform`}>
                       <item.icon className="w-4 h-4" />
                     </div>
                     <div className="ml-4 w-full bg-white/80 backdrop-blur-sm border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-100 transition-all cursor-default">
                       <div className="flex items-center justify-between space-x-2 mb-1">
                         <div className="font-bold text-slate-800 text-sm">{item.user}</div>
                         <div className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{item.time}</div>
                       </div>
                       <div className="text-sm text-slate-600">{item.action}</div>
                     </div>
                   </div>
                ))}

              </div>
              <Button variant="outline" className="w-full mt-6 text-indigo-600 hover:bg-indigo-50 border-indigo-100 bg-white">
                Load More Activity
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
