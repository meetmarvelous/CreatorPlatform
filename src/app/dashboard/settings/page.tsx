"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import { Settings, User, Wallet, Bell, Link as LinkIcon, Save, Heart, ShieldCheck, MailPlus } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <div className="flex-1 space-y-6 p-8 pt-10 max-w-6xl mx-auto w-full">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Settings</h2>
          <p className="text-slate-500 mt-2 text-lg">
            Manage your account preferences, public profile aesthetics, and security.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 items-start">
          {/* Sidebar Nav */}
          <div className="w-full md:w-64 space-y-2 sticky top-24 shrink-0">
            <Button variant="ghost" className="w-full justify-start bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-semibold h-11">
              <User className="mr-3 h-5 w-5" /> Public Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium h-11">
              <Settings className="mr-3 h-5 w-5" /> Platform Preferences
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium h-11">
              <Wallet className="mr-3 h-5 w-5" /> Wallets & Payouts
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium h-11">
              <Bell className="mr-3 h-5 w-5" /> Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium h-11">
              <ShieldCheck className="mr-3 h-5 w-5" /> Security
            </Button>
          </div>

          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500 w-full">
            {/* Visual Branding */}
            <Card className="glass-card shadow-lg shadow-indigo-100/50 border-slate-200 overflow-hidden">
              <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="text-xl text-slate-800">Visual Branding & Identity</CardTitle>
                <CardDescription>
                  This is exactly how fans will see you on CreatorPlatform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                
                {/* Avatar & Cover Upload */}
                <div className="space-y-4 rounded-xl border-2 border-dashed border-slate-200 p-6 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-8">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 border-4 border-white shadow-xl shadow-indigo-200/50 flex flex-col items-center justify-center cursor-pointer group hover:scale-105 transition-transform overflow-hidden relative">
                       <span className="text-4xl font-black text-indigo-800 group-hover:opacity-0 transition-opacity">C</span>
                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-white text-xs font-bold w-12 text-center leading-tight">CHOOSE FILE</span>
                       </div>
                    </div>
                    <div className="flex-1 space-y-2">
                       <h3 className="font-bold text-slate-700">Profile Picture</h3>
                       <p className="text-sm text-slate-500 mb-4 max-w-sm">We recommend an image of at least 400x400px. PNG or JPG is permitted.</p>
                       <div className="flex gap-2">
                         <Button variant="outline" className="bg-white hover:bg-slate-100 border-slate-200 shadow-sm text-sm h-9">Upload Image</Button>
                         <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50 text-sm h-9">Remove</Button>
                       </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Display Name <span className="text-red-500">*</span></label>
                    <Input placeholder="Creator Name" defaultValue="Creative Artist" className="h-11 bg-slate-50 focus:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Username / URL <span className="text-red-500">*</span></label>
                    <div className="flex shadow-sm rounded-md">
                      <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-slate-300 bg-slate-100 text-slate-500 sm:text-sm font-mono border-opacity-70">
                        creatorplatform.com/
                      </span>
                      <Input placeholder="username" defaultValue="creative_artist" className="rounded-l-none h-11 bg-slate-50 focus:bg-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex justify-between">
                    <span>Public Bio</span>
                    <span className="text-slate-400 font-normal">82 / 500</span>
                  </label>
                  <textarea 
                    className="flex min-h-[140px] w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:bg-white shadow-sm resize-y text-slate-700 leading-relaxed"
                    placeholder="Tell your fans a little bit about yourself..."
                    defaultValue="Digital artist and content creator forming exclusive boundaries around the best pieces of my work."
                  />
                  <p className="text-xs text-slate-500 font-medium mt-2">
                    A brief description for your profile. URLs are automatically hyperlinked.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-100 pt-6 pb-6 bg-slate-50/80 flex justify-end px-6">
                <Button className="rounded-full shadow-lg shadow-indigo-500/20 bg-indigo-600 hover:bg-indigo-700 px-8 h-11 text-base font-semibold">
                  <Save className="w-4 h-4 mr-2"/> Save Changes
                </Button>
              </CardFooter>
            </Card>

            {/* Social Links */}
            <Card className="glass-card shadow-xl shadow-indigo-100/30 border-slate-200">
              <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="text-xl text-slate-800">Social Connections</CardTitle>
                <CardDescription>
                  Help fans find your other platforms and verify your identity.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.1 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                    </div>
                    <Input placeholder="https://x.com/..." defaultValue="https://x.com/creative_art" className="h-11 bg-slate-50 focus:bg-white" />
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      <LinkIcon className="w-5 h-5" />
                    </div>
                    <Input placeholder="Personal Website URL" className="h-11 bg-slate-50 focus:bg-white" />
                  </div>
                </div>
                <Button variant="outline" className="w-full border-dashed border-2 border-slate-300 text-slate-600 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 h-11 bg-transparent">
                  <MailPlus className="w-4 h-4 mr-2" /> Add another connection
                </Button>
              </CardContent>
            </Card>

            {/* Visibility Mode */}
            <Card className="glass-card shadow-xl shadow-indigo-100/30 border-slate-200">
              <CardHeader className="bg-slate-50 border-b border-slate-100">
                <CardTitle className="text-xl text-slate-800">Profile Visibility</CardTitle>
                <CardDescription>Control who can discover your page.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                 <label className="flex items-start space-x-4 p-4 border-2 border-indigo-500 bg-indigo-50/50 rounded-xl cursor-pointer transition-all">
                    <input type="radio" name="visibility" className="mt-1 h-5 w-5 text-indigo-600 focus:ring-indigo-500" defaultChecked />
                    <div>
                      <p className="font-bold text-slate-900 text-base">Publicly Discoverable</p>
                      <p className="text-sm text-slate-600 mt-1">Your profile can be indexed by search engines and appears in platform recommendations.</p>
                    </div>
                 </label>
                 <label className="flex items-start space-x-4 p-4 border border-slate-200 hover:border-indigo-300 bg-white rounded-xl cursor-pointer transition-all opacity-80 hover:opacity-100">
                    <input type="radio" name="visibility" className="mt-1 h-5 w-5 text-indigo-600 focus:ring-indigo-500" />
                    <div>
                      <p className="font-bold text-slate-900 text-base">Private (Link Only)</p>
                      <p className="text-sm text-slate-600 mt-1">Only people with your exact link can view your profile. Hidden from platform discovery.</p>
                    </div>
                 </label>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
