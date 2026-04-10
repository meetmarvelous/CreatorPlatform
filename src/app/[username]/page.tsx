"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Video, Heart, Share2, MessageCircle, Lock, Star, ShieldCheck, MapPin, Link as LinkIcon, CheckCircle2, CreditCard } from "lucide-react"
import Link from "next/link"

export default function CreatorProfilePage({ params }: { params: { username: string } }) {
  const [activeTab, setActiveTab] = useState("Feed")
  const username = params.username || "creator"
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50 pb-20">
      {/* Cover Image */}
      <div className="w-full h-[250px] md:h-[350px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
        
        {/* Cover Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
           <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
             <Share2 className="w-4 h-4" />
           </Button>
           <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
             <Heart className="w-4 h-4" />
           </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full -mt-20 relative z-10 flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left Column - Identity & Tiers */}
        <div className="w-full md:w-[350px] shrink-0 space-y-6">
          <Card className="glass-card shadow-xl border-slate-200 overflow-hidden">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-white border-4 border-slate-50 p-1 mb-4 shadow-lg shrink-0 -mt-16">
                 <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-black text-indigo-400">CA</span>
                 </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center justify-center gap-2">
                Creative Artist <ShieldCheck className="w-6 h-6 text-indigo-500" />
              </h1>
              <p className="text-slate-500 font-medium mb-4">@{username}</p>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Digital artist and content creator forming exclusive boundaries around the best pieces of my work. Specializing in 3D modeling and crypto-art.
              </p>
              
              <div className="flex items-center gap-4 text-sm font-semibold text-slate-600 mb-6 bg-slate-50 px-4 py-2 rounded-xl">
                 <span className="flex flex-col"><span className="text-xl text-slate-900">45.2K</span> Followers</span>
                 <span className="w-px h-8 bg-slate-200"></span>
                 <span className="flex flex-col"><span className="text-xl text-slate-900">128</span> Posts</span>
              </div>
              
              <div className="w-full space-y-3">
                 <Button className="w-full shadow-lg shadow-indigo-500/20 bg-indigo-600 hover:bg-indigo-700 h-12 text-base font-bold rounded-xl space-x-2">
                    <Star className="w-4 h-4 fill-white" />
                    <span>Become a Member</span>
                 </Button>
                 <Button variant="outline" className="w-full h-12 text-base font-bold rounded-xl bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50">
                    Follow for free
                 </Button>
              </div>
            </div>
            <div className="bg-slate-50 border-t border-slate-100 p-4 px-6 flex flex-col gap-2 text-sm text-slate-600 font-medium">
               <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> New York, NY</span>
               <span className="flex items-center gap-2"><LinkIcon className="w-4 h-4 text-slate-400" /> <span className="text-indigo-600 hover:underline cursor-pointer">creativeartist.art</span></span>
            </div>
          </Card>

          <div className="space-y-4 pt-4">
             <h3 className="text-lg font-bold text-slate-900 px-2 uppercase tracking-wide text-xs">Membership Tiers</h3>
             <Card className="border border-slate-200 bg-white hover:border-indigo-300 transition-colors shadow-sm">
                <CardHeader className="pb-2">
                   <div className="flex justify-between items-start mb-2">
                     <CardTitle className="text-lg text-slate-800">Standard Tier</CardTitle>
                     <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-lg text-sm">$5 <span className="text-indigo-400 text-xs font-medium">/mo</span></span>
                   </div>
                   <CardDescription>Access to standard locked content.</CardDescription>
                </CardHeader>
                <CardContent className="pt-2 pb-4">
                   <ul className="space-y-2 mb-4">
                     {["Weekly updates", "High-res images", "Discord access"].map((benefit, i) => (
                       <li key={i} className="flex items-center text-sm text-slate-600 font-medium">
                         <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                         {benefit}
                       </li>
                     ))}
                   </ul>
                   <Button variant="outline" className="w-full h-10 border-indigo-200 text-indigo-700 hover:bg-indigo-50 bg-indigo-50/30">Select</Button>
                </CardContent>
             </Card>

             <Card className="border-2 border-purple-500 bg-gradient-to-b from-purple-50/50 to-white shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Most Popular</div>
                <CardHeader className="pb-2">
                   <div className="flex justify-between items-start mb-2">
                     <CardTitle className="text-lg text-purple-900">Premium Pass</CardTitle>
                     <span className="px-3 py-1 bg-purple-100 text-purple-800 font-bold rounded-lg text-sm">$15 <span className="text-purple-400 text-xs font-medium">/mo</span></span>
                   </div>
                   <CardDescription className="text-purple-700/70">Everything in Standard, plus source files.</CardDescription>
                </CardHeader>
                <CardContent className="pt-2 pb-4">
                   <ul className="space-y-2 mb-4">
                     {["All standard benefits", "Raw .blend source files", "Monthly 1-on-1 critique", "Merch discounts"].map((benefit, i) => (
                       <li key={i} className="flex items-center text-sm text-purple-900 font-medium">
                         <Star className="w-4 h-4 text-purple-500 fill-purple-200 mr-2 shrink-0" />
                         {benefit}
                       </li>
                     ))}
                   </ul>
                   <Button className="w-full h-10 bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/20">Subscribe Now</Button>
                </CardContent>
             </Card>
          </div>
        </div>

        {/* Right Column - Tabs & Content */}
        <div className="flex-1 w-full space-y-6 md:mt-[76px]">
          <div className="flex border-b border-slate-100 mb-8 sticky top-16 bg-white/80 backdrop-blur-md z-30">
            {["Feed", "Media", "Shop"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm font-bold tracking-tight transition-all relative ${
                  activeTab === tab 
                  ? "text-indigo-600" 
                  : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-full animate-in fade-in zoom-in-50 duration-300"></div>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {activeTab === "Feed" ? (
               <>
                 {[1, 2, 3, 4].map((post) => (
                   <Card key={post} className="glass-card overflow-hidden group border-slate-100 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500">
                     <div className="aspect-video bg-indigo-900/5 flex items-center justify-center relative">
                       <div className="absolute top-4 right-4 z-10">
                          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 flex items-center shadow-sm">
                             <Lock className="w-3 h-3 mr-1" />
                             Premium
                          </div>
                       </div>
                       <div className="flex flex-col items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-indigo-600 border border-white">
                             <Lock className="w-5 h-5 shadow-sm" />
                          </div>
                          <p className="text-sm font-bold text-slate-800">Locked Post</p>
                       </div>
                     </div>
                     <CardContent className="p-6">
                       <div className="flex justify-between items-start mb-4">
                         <div>
                           <h3 className="font-bold text-lg text-slate-900 leading-tight">Post Title #{post}</h3>
                           <p className="text-xs text-slate-400 font-bold mt-1">OCTOBER {20 + post}, 2026</p>
                         </div>
                       </div>
                       <p className="text-slate-500 text-sm line-clamp-2 mb-6">
                         This is an exclusive post for my premium subscribers only. Unlock to see the full content and updates.
                       </p>
                       <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                          <div className="flex gap-4">
                             <div className="flex items-center gap-1 text-slate-400">
                                <Heart className="w-4 h-4" /> <span className="text-xs font-bold">2.4k</span>
                             </div>
                             <div className="flex items-center gap-1 text-slate-400">
                                <MessageCircle className="w-4 h-4" /> <span className="text-xs font-bold">120</span>
                             </div>
                          </div>
                          <Link href={`/posts/1`}>
                             <Button variant="ghost" className="text-indigo-600 font-bold text-xs h-8 hover:bg-indigo-50">
                               View Teaser
                             </Button>
                          </Link>
                       </div>
                     </CardContent>
                   </Card>
                 ))}
               </>
            ) : activeTab === "Shop" ? (
               <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "Raw Project Files", price: "$45.00", type: "Digital Zip" },
                    { name: "Studio Lighting Masterclass", price: "$99.00", type: "Video Course" },
                    { name: "Custom Brush Pack v2", price: "$15.00", type: "Included" },
                  ].map((item, i) => (
                    <Card key={i} className="glass-card overflow-hidden group border-slate-100 hover:shadow-2xl transition-all h-full flex flex-col">
                      <div className="aspect-square bg-slate-100 flex items-center justify-center relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-700"></div>
                         <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 relative z-10">
                            <CreditCard className="w-8 h-8" />
                         </div>
                         {item.price === "Included" && (
                           <div className="absolute top-3 right-3 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">Free for Subs</div>
                         )}
                      </div>
                      <CardContent className="p-6 flex-1 flex flex-col justify-between">
                         <div>
                            <p className="text-[10px] font-black uppercase text-indigo-400 tracking-widest mb-1">{item.type}</p>
                            <h4 className="font-bold text-lg text-slate-900">{item.name}</h4>
                         </div>
                         <div className="mt-8">
                            <div className="text-2xl font-black text-slate-900 mb-4">{item.price}</div>
                            <Button className="w-full h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold">
                               Buy Now
                            </Button>
                         </div>
                      </CardContent>
                    </Card>
                  ))}
               </div>
            ) : (
               <div className="col-span-1 md:col-span-2 py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100/50">
                     <Video className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-400">No media yet</h3>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
