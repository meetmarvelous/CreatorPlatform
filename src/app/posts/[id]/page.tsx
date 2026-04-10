"use client"

import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Heart, MessageCircle, Share2, MoreHorizontal, ArrowLeft, Send, Lock, Star, Wallet, Smile } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PostDetailPage() {
  const [comment, setComment] = useState("");
  
  const post = {
    title: "Behind the scenes: Studio Setup 2026",
    creator: "Sarah Michaels",
    handle: "@creative_artist",
    date: "Oct 24, 2026",
    content: "Building this studio was a labor of love. I spent over 4 months researching the perfect lighting setup to eliminate shadows without flattening the image depth. Here is the first detailed look at the 12-point lighting array I eventually settled on. \n\nI'll be releasing a full hardware list for my Premium tier members later this week!",
    likes: "1,245",
    comments: 4,
    isPremium: true,
  }

  const commentsData = [
    { name: "John Doe", avatar: "JD", text: "This lighting is incredible. Are you using the new Aputure 600d Pro for the key?", date: "2h ago", likes: 12 },
    { name: "Emily Smith", avatar: "ES", text: "Can't wait for that hardware list! Setting up my own studio soon.", date: "4h ago", likes: 8 },
    { name: "Alex Jenkins", avatar: "AJ", text: "Brilliant depth of field here. Really pops.", date: "1d ago", likes: 24 },
    { name: "Digital Explorer", avatar: "DE", text: "Worth the subscription just for this breakdown. Thanks Sarah!", date: "2d ago", likes: 15 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 py-10 flex flex-col items-center">
        
        {/* Navigation */}
        <div className="w-full flex items-center justify-between mb-8 max-w-4xl">
           <Link href="/creative_artist">
             <Button variant="ghost" className="rounded-full text-slate-500 hover:text-indigo-600 hover:bg-white pl-0 pr-4">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Profile
             </Button>
           </Link>
           <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400">
              <MoreHorizontal className="h-5 w-5" />
           </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full max-w-6xl">
           
           {/* Left Column: Post Content */}
           <div className="lg:col-span-8 flex flex-col gap-6">
              <Card className="glass-card shadow-2xl border-white overflow-hidden rounded-[2rem]">
                 {/* Post Media Area */}
                 <div className="aspect-video bg-indigo-900/5 flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <div className="text-center">
                       <div className="w-20 h-20 rounded-full bg-indigo-100/50 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-indigo-200">
                          <Lock className="w-10 h-10 text-indigo-600" />
                       </div>
                       <p className="font-black text-2xl text-slate-900">Premium Content</p>
                       <p className="text-slate-500">Subscribe to view this exclusive post</p>
                    </div>
                 </div>

                 <CardContent className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-8">
                       <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center font-bold text-white shadow-lg text-lg ring-4 ring-indigo-50">SM</div>
                          <div>
                             <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">{post.title}</h1>
                             <p className="text-indigo-600 font-bold text-sm mt-1">{post.creator} <span className="text-slate-400 mx-1">•</span> {post.date}</p>
                          </div>
                       </div>
                       <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="rounded-full text-pink-500 hover:bg-pink-50 h-12 w-12">
                             <Heart className="w-6 h-6" />
                          </Button>
                          <Button variant="ghost" size="icon" className="rounded-full text-slate-400 h-12 w-12 hover:bg-slate-100">
                             <Share2 className="w-6 h-6" />
                          </Button>
                       </div>
                    </div>

                    <div className="prose prose-slate max-w-none">
                       <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line font-medium">{post.content}</p>
                    </div>

                    <div className="flex items-center justify-between mt-12 py-6 border-y border-slate-100">
                       <div className="flex items-center gap-8">
                          <div className="flex flex-col items-center">
                             <span className="font-extrabold text-2xl text-slate-900">{post.likes}</span>
                             <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Likes</span>
                          </div>
                          <div className="flex flex-col items-center">
                             <span className="font-extrabold text-2xl text-slate-900">{post.comments}</span>
                             <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Comments</span>
                          </div>
                       </div>
                       <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/20 px-8 h-12 font-bold group">
                          Unlock Full Gallery
                          <Star className="ml-2 w-4 h-4 text-amber-300 transition-transform group-hover:rotate-12" />
                       </Button>
                    </div>
                 </CardContent>
              </Card>

              {/* Comment Section (Mobile/Tablet display underneath) */}
              <div className="lg:hidden flex flex-col gap-6">
                 {/* Reusing comment structure below */}
              </div>
           </div>

           {/* Right Column: Interaction & Creators */}
           <div className="lg:col-span-4 flex flex-col gap-8">
              <Card className="glass-card sticky top-24 border-slate-100 overflow-hidden">
                 <CardHeader className="border-b bg-white/40 pb-6">
                    <CardTitle className="flex items-center gap-2">
                       <MessageCircle className="w-5 h-5 text-indigo-600" />
                       Interactions
                    </CardTitle>
                    <CardDescription>Join the conversation</CardDescription>
                 </CardHeader>
                 <CardContent className="p-0">
                    <div className="max-h-[500px] overflow-auto p-6 space-y-6">
                       {commentsData.map((c, i) => (
                         <div key={i} className="flex gap-3 items-start animate-in fade-in slide-in-from-right-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0 text-sm shadow-sm">{c.avatar}</div>
                            <div className="flex-1">
                               <div className="flex items-center justify-between mb-1">
                                  <span className="font-bold text-slate-900 text-sm">{c.name}</span>
                                  <span className="text-[10px] font-bold text-slate-400">{c.date}</span>
                               </div>
                               <p className="text-slate-600 text-sm leading-relaxed">{c.text}</p>
                               <div className="flex items-center gap-4 mt-2">
                                  <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700">Like ({c.likes})</button>
                                  <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600">Reply</button>
                               </div>
                            </div>
                         </div>
                       ))}
                    </div>
                    
                    {/* Add Comment Input */}
                    <div className="p-6 border-t bg-slate-50/50">
                       <div className="relative">
                          <Input 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Add a comment..." 
                            className="bg-white border-slate-200 pr-12 h-12 rounded-xl text-sm"
                          />
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute right-1 top-1 text-indigo-600 rounded-lg hover:bg-indigo-50"
                          >
                             <Send className="w-5 h-5" />
                          </Button>
                       </div>
                       <div className="flex items-center justify-between mt-3 px-1">
                          <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                             <Smile className="w-5 h-5" />
                          </button>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Post as {post.handle}</p>
                       </div>
                    </div>
                 </CardContent>
              </Card>

              {/* Bonus: Tip Shortcut */}
              <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-[2rem] border-0 shadow-xl shadow-indigo-500/20 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
                 <div className="relative z-10 text-center">
                    <Wallet className="w-10 h-10 text-indigo-200 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Love this post?</h3>
                    <p className="text-indigo-100 text-sm mb-6">Support the creator directly with a crypto tip.</p>
                    <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-black tracking-tight h-12 rounded-xl">
                       Send a Tip
                    </Button>
                 </div>
              </Card>
           </div>
        </div>
      </div>
    </div>
  )
}
