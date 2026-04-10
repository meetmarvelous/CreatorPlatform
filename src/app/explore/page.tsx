"use client"

import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Search, MapPin, Users, Heart, Star, Flame, Sparkles, Filter } from "lucide-react"
import Link from "next/link"

export default function ExplorePage() {
  const categories = ["All", "Fitness", "Education", "Music", "Lifestyle", "Gaming", "Art", "Finance"]
  
  const creators = [
    { name: "Sarah Michaels", handle: "@creative_artist", bio: "Digital artist & Lighting maven", subs: "12k+", category: "Art", img: "bg-indigo-100" },
    { name: "Coach Mike", handle: "@fitness_pro", bio: "High-intensity training & Nutrition", subs: "8k+", category: "Fitness", img: "bg-emerald-100" },
    { name: "Nina Jones", handle: "@piano_lessons", bio: "Classical piano and theory for all ages", subs: "3k+", category: "Music", img: "bg-amber-100" },
    { name: "Tech Guru", handle: "@tech_tips", bio: "Latest gadget reviews and dev hacks", subs: "15k+", category: "Education", img: "bg-blue-100" },
  ]

  const trendingPosts = [
    { title: "My Workflow Tips", creator: "Sarah Michaels", likes: "1.2k", views: "10k", price: "Premium" },
    { title: "10 Min Morning HIIT", creator: "Coach Mike", likes: "890", views: "5.4k", price: "Free" },
    { title: "Chopin Masterclass", creator: "Nina Jones", likes: "560", views: "2k", price: "Premium" },
  ]

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50/30">
      {/* Search Header */}
      <section className="w-full py-16 bg-white border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50"></div>
        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-slate-900">Discover your next <span className="text-indigo-600">obsession.</span></h1>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">Browse thousands of world-class creators and join their private communities.</p>
          
          <div className="max-w-2xl mx-auto relative flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input 
                placeholder="Search creators by name, niche, or keyword..." 
                className="pl-12 h-14 bg-white border-slate-200 rounded-2xl shadow-sm focus:ring-indigo-500"
              />
            </div>
            <Button className="h-14 px-8 rounded-2xl bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/20">
              Search
            </Button>
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat, i) => (
              <button 
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                  cat === "All" 
                  ? "bg-indigo-600 text-white border-indigo-600" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-indigo-400 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto w-full px-4 md:px-6 py-16 space-y-20">
        
        {/* Featured Creators */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Top Creators</h2>
            </div>
            <button className="text-sm font-bold text-indigo-600 hover:underline">View all</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.map((c, i) => (
              <Card key={i} className="glass-card hover:-translate-y-2 transition-transform duration-300 border-slate-100 overflow-hidden group">
                <div className={`h-32 ${c.img} relative`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                </div>
                <CardContent className="p-6 pt-0 -mt-8 relative z-10 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white border-4 border-white shadow-xl mx-auto mb-4 overflow-hidden flex items-center justify-center font-bold text-slate-300">
                    AVATAR
                  </div>
                  <h3 className="font-bold text-xl text-slate-900">{c.name}</h3>
                  <p className="text-sm text-indigo-600 font-medium mb-4">{c.handle}</p>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-6 h-10">{c.bio}</p>
                  
                  <div className="flex items-center justify-between border-t border-slate-50 pt-4 mb-4">
                     <div className="text-center flex-1">
                        <p className="text-xs font-bold text-slate-400 uppercase">Fans</p>
                        <p className="font-bold text-slate-800">{c.subs}</p>
                     </div>
                     <div className="w-px h-8 bg-slate-100"></div>
                     <div className="text-center flex-1">
                        <p className="text-xs font-bold text-slate-400 uppercase">Category</p>
                        <p className="font-bold text-slate-800">{c.category}</p>
                     </div>
                  </div>
                  
                  <Link href={`/creative_artist`}>
                    <Button className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 font-bold group">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Global Feed Section */}
        <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[50%] h-full bg-indigo-600/20 blur-3xl rounded-full translate-x-1/2"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-indigo-400 mb-6 border border-white/10">
                    <Flame className="w-3 h-3 mr-2" />
                    TRENDING NOW
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">See what the world <br /> is creating today.</h2>
                 <p className="text-slate-400 text-lg mb-8 max-w-lg">Access direct feeds from creators across every industry before they hit mainstream media.</p>
                 <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/20 px-10 h-14 text-lg font-bold">
                    Start Browsing
                 </Button>
              </div>
              
              <div className="space-y-4">
                {trendingPosts.map((p, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors">
                     <div className="flex-1 min-w-0 pr-4">
                        <h4 className="font-bold text-xl truncate">{p.title}</h4>
                        <p className="text-indigo-400 text-sm font-medium">by {p.creator}</p>
                        <div className="flex items-center gap-4 mt-2 text-slate-400 text-xs font-bold">
                           <span className="flex items-center"><Heart className="w-3 h-3 mr-1 fill-white/10" /> {p.likes}</span>
                           <span className="flex items-center"><Users className="w-3 h-3 mr-1" /> {p.views}</span>
                        </div>
                     </div>
                     <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${
                       p.price === 'Premium' ? 'bg-amber-400 text-amber-900 shadow-lg shadow-amber-400/20' : 'bg-indigo-500 text-white'
                     }`}>
                       {p.price}
                     </span>
                  </div>
                ))}
              </div>
           </div>
        </section>

      </main>
    </div>
  )
}
