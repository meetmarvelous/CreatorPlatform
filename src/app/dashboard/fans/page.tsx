"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import { Search, Mail, Filter, Download, UserPlus, TrendingUp, Medal, Star, Activity } from "lucide-react"

export default function FansPage() {
  const fans = Array.from({ length: 12 }).map((_, i) => {
    const isPremium = Math.random() > 0.6;
    return {
      id: i,
      address: `0x${Math.random().toString(16).substring(2, 8)}...${Math.random().toString(16).substring(2, 6)}`,
      joined: `${Math.floor(Math.random() * 30) + 1} days ago`,
      tier: isPremium ? "Premium ($10/mo)" : "Standard ($5/mo)",
      spent: `$${(Math.random() * 500).toFixed(2)}`,
      badge: isPremium && Math.random() > 0.5 ? "Top Fan" : null
    }
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <div className="flex-1 space-y-8 p-8 pt-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Community CRM</h2>
            <p className="text-slate-500 mt-2 text-lg">
              Manage your fans, send broadcasts, and view detailed subscriber analytics.
            </p>
          </div>
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none h-11 bg-white border-slate-200">
              <Download className="mr-2 h-4 w-4" /> Export CSV
            </Button>
            <Button className="flex-1 md:flex-none h-11 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md border-0">
              <Mail className="mr-2 h-4 w-4" /> New Broadcast
            </Button>
          </div>
        </div>

        {/* Analytics Highlights */}
        <div className="grid gap-6 md:grid-cols-4 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <Card className="glass-card bg-gradient-to-br from-indigo-50 to-white border-indigo-100 hidden md:block group hover:shadow-md transition-shadow">
            <CardHeader className="py-4 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-semibold text-indigo-800 uppercase tracking-wider">New Fans (7d)</CardTitle>
              <UserPlus className="w-5 h-5 text-indigo-300" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-indigo-950">+42</div>
              <p className="text-xs font-medium text-emerald-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> 12% increase
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card bg-gradient-to-br from-purple-50 to-white border-purple-100 hidden md:block group hover:shadow-md transition-shadow">
            <CardHeader className="py-4 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-semibold text-purple-800 uppercase tracking-wider">Retention Rate</CardTitle>
              <Activity className="w-5 h-5 text-purple-300" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-purple-950">94.2%</div>
              <p className="text-xs font-medium text-emerald-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> 1.2% increase
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card bg-gradient-to-br from-pink-50 to-white border-pink-100 hidden md:block group hover:shadow-md transition-shadow">
            <CardHeader className="py-4 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-semibold text-pink-800 uppercase tracking-wider">Top Tier Mix</CardTitle>
              <Star className="w-5 h-5 text-pink-300" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-pink-950">38%</div>
              <p className="text-xs font-medium text-emerald-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> Up from 32%
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card bg-gradient-to-br from-emerald-50 to-white border-emerald-100 hidden md:block group hover:shadow-md transition-shadow">
            <CardHeader className="py-4 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-semibold text-emerald-800 uppercase tracking-wider">Avg LTV</CardTitle>
              <Medal className="w-5 h-5 text-emerald-300" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-emerald-950">$142</div>
              <p className="text-xs font-medium text-slate-500 mt-1">
                Lifetime Value per sub
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Directory Table */}
        <Card className="glass-card animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 border-slate-200 shadow-xl shadow-slate-200/40">
          <CardHeader className="border-b bg-white/60 pb-4 sticky top-0 z-10 backdrop-blur-md rounded-t-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <CardTitle className="text-xl">Subscriber Directory</CardTitle>
                <CardDescription>View and interact with your community members.</CardDescription>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="search"
                    placeholder="Search an address..."
                    className="pl-9 h-11 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>
                <Button variant="outline" size="icon" className="shrink-0 h-11 w-11 bg-white">
                  <Filter className="h-4 w-4 text-slate-600" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50/80 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 font-bold tracking-wider">Fan Address</th>
                    <th className="px-6 py-4 font-bold tracking-wider hidden sm:table-cell">Joined</th>
                    <th className="px-6 py-4 font-bold tracking-wider">Tier Status</th>
                    <th className="px-6 py-4 font-bold tracking-wider text-right">Lifetime Spent</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white/40">
                  {fans.map((fan) => (
                    <tr key={fan.id} className="hover:bg-indigo-50/50 transition-colors group cursor-default">
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-sm">
                            <UserPlus className="w-4 h-4 text-indigo-500" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-700 font-mono text-xs">{fan.address}</span>
                            {fan.badge && (
                              <span className="text-[10px] font-bold text-amber-600 flex items-center mt-0.5">
                                <Star className="w-3 h-3 mr-0.5 fill-amber-400" /> {fan.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-slate-500 font-medium hidden sm:table-cell">
                        {fan.joined}
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${fan.tier.includes('Premium') ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                          {fan.tier}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right font-bold text-slate-700 text-base">
                        {fan.spent}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 hover:text-indigo-700 font-semibold hover:bg-indigo-50">
                          Message
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t border-slate-100 p-4 bg-white/60 backdrop-blur-md rounded-b-xl">
            <p className="text-sm font-medium text-slate-500">Showing 1 to 12 of 2,350 fans</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled className="bg-white border-slate-200">Previous</Button>
              <Button variant="outline" size="sm" className="bg-white border-slate-200 hover:bg-slate-50 hover:text-slate-900">Next</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
