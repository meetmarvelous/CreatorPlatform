"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import { ArrowLeft, Image as ImageIcon, Video, FileText, Lock, Globe, Mic, BarChart, X, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function CreatePostPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <div className="flex-1 space-y-8 p-8 pt-10 max-w-5xl mx-auto w-full">
        <div className="flex items-center space-x-4 mb-2">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Create New Post</h2>
            <p className="text-slate-500 font-medium">
              Publish exclusive media, updates, or polls to your community.
            </p>
          </div>
        </div>

        {/* Content Type Tabs */}
        <div className="flex items-center space-x-2 p-1 bg-slate-200/50 rounded-xl w-max animate-in fade-in slide-in-from-top-4 duration-500">
          <Button variant="ghost" className="bg-white shadow-sm text-indigo-700 hover:text-indigo-800 font-bold px-6 h-10 rounded-lg">
             <ImageIcon className="w-4 h-4 mr-2" /> Media / Text
          </Button>
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-medium px-6 h-10 rounded-lg">
             <Mic className="w-4 h-4 mr-2" /> Audio
          </Button>
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-medium px-6 h-10 rounded-lg">
             <BarChart className="w-4 h-4 mr-2" /> Poll
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            
            {/* Media Upload Area */}
            <Card className="glass-card shadow-md border-0 bg-transparent">
              <div className="border-2 border-dashed border-indigo-200 bg-indigo-50/50 rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:bg-indigo-100/50 transition-colors cursor-pointer group shadow-inner">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="flex text-indigo-500">
                    <ImageIcon className="h-6 w-6 relative -mr-2 z-10" />
                    <Video className="h-6 w-6 opacity-70" />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-slate-800">Drag media here, or <span className="text-indigo-600 underline decoration-indigo-300 underline-offset-4">browse</span></h3>
                <p className="text-sm font-medium text-slate-500 mt-3 max-w-sm">Support for high-res images (up to 50MB) and 4K videos (up to 2GB). PDF attachments permitted.</p>
              </div>
            </Card>

            <Card className="glass-card shadow-xl border-slate-200">
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <Input placeholder="Post Title (Optional)" className="text-xl py-6 bg-slate-50 focus:bg-white font-semibold border-slate-200 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <textarea 
                    className="flex min-h-[300px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-base placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:bg-white shadow-sm resize-y leading-relaxed text-slate-700"
                    placeholder="Write your update here... Use Markdown for formatting."
                  />
                  <div className="flex justify-between items-center text-xs text-slate-400 font-medium px-1">
                    <span>Markdown supported</span>
                    <span>0 words</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200">
            <Card className="glass-card shadow-xl border-slate-200 overflow-hidden">
              <CardHeader className="bg-slate-50 border-b border-slate-100 flex flex-row items-center justify-between py-4">
                <CardTitle className="text-base font-bold text-slate-800">Post Access</CardTitle>
                <Lock className="w-4 h-4 text-indigo-500" />
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex flex-col space-y-3">
                  <label className="flex items-start space-x-3 p-3 border border-slate-200 rounded-xl bg-white cursor-pointer hover:border-indigo-400 transition-all opacity-70 hover:opacity-100">
                    <input type="radio" name="access" className="mt-0.5 h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                    <div>
                      <p className="font-bold text-sm text-slate-900 flex items-center"><Globe className="w-3.5 h-3.5 mr-1 text-slate-500" /> Public</p>
                      <p className="text-xs text-slate-500 mt-0.5">Visible to everyone. Great for teasers.</p>
                    </div>
                  </label>
                  
                  <label className="flex items-start space-x-3 p-3 border-2 border-indigo-500 rounded-xl bg-indigo-50/30 cursor-pointer transition-all">
                    <input type="radio" name="access" className="mt-0.5 h-4 w-4 text-indigo-600 focus:ring-indigo-500" defaultChecked />
                    <div className="flex-1 w-full">
                      <div className="flex justify-between w-full pr-1">
                        <p className="font-bold text-sm text-indigo-900 flex items-center"><Lock className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Subscribers</p>
                      </div>
                      <p className="text-xs text-indigo-700/70 mt-0.5 mb-2 font-medium">Only paid members can view the content</p>
                      
                      {/* Tier Selectors */}
                      <div className="space-y-1.5 mt-2 pt-2 border-t border-indigo-200/50">
                        <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer hover:text-indigo-700">
                          <input type="checkbox" defaultChecked className="rounded text-indigo-600" /> <span>Standard Tier ($5/mo)</span>
                        </label>
                        <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer hover:text-indigo-700">
                          <input type="checkbox" defaultChecked className="rounded text-indigo-600" /> <span>Premium Tier ($10/mo)</span>
                        </label>
                      </div>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-xl border-slate-200 overflow-hidden">
               <CardContent className="p-0">
                  <Button variant="ghost" className="w-full justify-between rounded-none h-14 font-semibold text-slate-700 hover:text-slate-900 bg-white border-b border-slate-100">
                    Advanced Settings <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Button>
               </CardContent>
            </Card>

            <div className="pt-4 flex gap-3">
              <Button variant="outline" className="flex-1 bg-white border-slate-200 text-slate-600 hover:text-slate-900 h-12 shadow-sm">Save Draft</Button>
              <Button className="flex-1 shadow-lg shadow-indigo-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0 h-12">Publish Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
