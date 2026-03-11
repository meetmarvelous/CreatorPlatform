"use client"

import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import { Image as ImageIcon, Video, Heart, Share2, MessageCircle, Lock, Star, ShieldCheck, Mail, MapPin, Link as LinkIcon, CheckCircle2 } from "lucide-react"

export default function CreatorProfilePage({ params }: { params: { username: string } }) {
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
          {/* Main Profile Info Card */}
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

          {/* Membership Tiers Sidebar */}
          <div className="space-y-4 pt-4">
             <h3 className="text-lg font-bold text-slate-900 px-2 uppercase tracking-wide text-xs">Membership Tiers</h3>
             
             {/* Tier 1 */}
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

             {/* Tier 2 */}
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

        {/* Right Column - Feed */}
        <div className="flex-1 w-full space-y-6 md:mt-[76px]">
          
          {/* Feed Filter (Optional visual) */}
          <div className="flex items-center gap-4 border-b border-slate-200 pb-2 mb-6 pointer-events-none sticky top-20 bg-slate-50/80 backdrop-blur-md z-20 pt-4">
             <span className="font-bold text-slate-900 border-b-2 border-indigo-600 pb-2">Recent Posts</span>
             <span className="font-bold text-slate-400 pb-2">Media</span>
             <span className="font-bold text-slate-400 pb-2">Locked</span>
          </div>

          {[...Array(5)].map((_, i) => {
            const isLocked = i === 1 || i === 3; // 2nd and 4th posts are locked
            return (
              <Card key={i} className="glass-card shadow-sm border-slate-200 overflow-hidden group">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-200 border-2 border-white shadow-sm flex items-center justify-center shrink-0">
                    <span className="font-bold text-indigo-400 text-xs">CA</span>
                  </div>
                  <div>
                    <CardTitle className="text-base text-slate-900">Creative Artist</CardTitle>
                    <CardDescription className="text-xs">
                      {i === 0 ? "2 hours ago" : i === 1 ? "Yesterday" : i === 2 ? "3 days ago" : "Last week"}
                      {isLocked && <span className="ml-2 text-indigo-500 font-medium flex-inline items-center"><Lock className="w-3 h-3 inline mr-1 -mt-0.5" />Premium Only</span>}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {i === 0 && <p className="text-slate-700">Just finished the final render for this week's project! I've been experimenting with new lighting setups. What do you guys think? Drop a comment below!</p>}
                  {i === 2 && <p className="text-slate-700">Quick sketch. Working on something big for next month's drop.</p>}
                  
                  {isLocked ? (
                    <div className="relative h-[400px] w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex flex-col items-center justify-center">
                       {/* Blurred Background effect */}
                       <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-pink-200 opacity-60 blur-md"></div>
                       <div className="absolute inset-0 bg-white/20 backdrop-blur-xl"></div>
                       
                       <div className="relative z-10 p-8 flex flex-col items-center text-center">
                         <div className="w-20 h-20 rounded-full bg-white/80 shadow-lg flex items-center justify-center mb-6">
                           <Lock className="w-8 h-8 text-indigo-600" />
                         </div>
                         <h3 className="text-2xl font-bold text-slate-900 mb-2">Unlock this post</h3>
                         <p className="text-slate-700 font-medium mb-6 max-w-sm">
                           Subscribe to the Premium Tier to unlock this image, along with dozens of other exclusive posts.
                         </p>
                         <Button className="rounded-full shadow-lg shadow-indigo-500/20 bg-indigo-600 hover:bg-indigo-700 px-8 h-12 text-base">
                           Unlock for $10/mo
                         </Button>
                       </div>
                    </div>
                  ) : (
                    <div className="h-[400px] w-full bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 overflow-hidden relative group-hover:bg-slate-200 transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 opacity-50"></div>
                      <ImageIcon className="h-12 w-12 text-slate-300 relative z-10" />
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t border-slate-100 pt-4 flex space-x-6 text-slate-500 bg-slate-50/50">
                  <button className="flex items-center space-x-2 hover:text-indigo-600 transition-colors font-medium">
                    <Heart className="h-5 w-5" /> <span>{Math.floor(Math.random() * 500) + 50}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-indigo-600 transition-colors font-medium">
                    <MessageCircle className="h-5 w-5" /> <span>{Math.floor(Math.random() * 50) + 5}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-indigo-600 transition-colors ml-auto font-medium">
                    <Share2 className="h-5 w-5" />
                  </button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
