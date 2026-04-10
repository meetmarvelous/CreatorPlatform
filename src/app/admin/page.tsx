"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Users, Shield, BarChart3, AlertCircle, DollarSign, ArrowUpRight, CheckCircle2, XCircle, Search, Filter } from "lucide-react"

export default function AdminPage() {
  const stats = [
    { name: "Total Creators", value: "2,450", change: "+12%", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Total Platform Fees", value: "$45,200", change: "+24%", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
    { name: "Active Disputes", value: "12", change: "-5", icon: AlertCircle, color: "text-amber-600", bg: "bg-amber-50" },
    { name: "Content Moderated", value: "890", change: "+150", icon: Shield, color: "text-purple-600", bg: "bg-purple-50" },
  ]

  const creators = [
    { name: "Sarah Michaels", status: "Active", volume: "$12,450", joinDate: "Jan 12, 2026", flags: 0 },
    { name: "Coach Mike", status: "Active", volume: "$8,200", joinDate: "Feb 05, 2026", flags: 1 },
    { name: "Alex Jenkins", status: "Pending Approval", volume: "$0", joinDate: "Oct 24, 2026", flags: 0 },
    { name: "Unkown User", status: "Banned", volume: "$1,200", joinDate: "Jan 5, 2026", flags: 12 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <div className="flex-1 space-y-8 p-8 pt-10 max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-indigo-400 mb-2 border border-white/10">
               ADMIN DASHBOARD
            </div>
            <h2 className="text-4xl font-black tracking-tight">Platform Control Center</h2>
            <p className="text-slate-400 mt-2 text-lg">
              Manage ecosystem health, creators, and platform-wide revenue.
            </p>
          </div>
          <div className="flex items-center gap-2">
             <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold h-11 px-6">
                Generate Report
             </Button>
             <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-11 px-6 shadow-xl shadow-indigo-600/20">
                Creator Invites
             </Button>
          </div>
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {stats.map((s, i) => (
             <Card key={i} className="bg-white/5 border-white/10 hover:border-white/20 transition-all group">
                <CardContent className="p-6">
                   <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl ${s.bg} ${s.color} shadow-sm group-hover:scale-110 transition-transform`}>
                         <s.icon className="h-6 w-6" />
                      </div>
                      <span className={`text-xs font-black ${s.change.startsWith('+') ? 'text-emerald-400' : 'text-amber-400'}`}>
                         {s.change}
                      </span>
                   </div>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none mb-2">{s.name}</p>
                   <h3 className="text-3xl font-black text-white">{s.value}</h3>
                </CardContent>
             </Card>
           ))}
        </div>

        {/* Platform Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* User Management */}
           <Card className="lg:col-span-2 bg-white/5 border-white/10 overflow-hidden">
              <CardHeader className="border-b border-white/10 bg-white/[0.02]">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                       <CardTitle className="text-white">Creator Management</CardTitle>
                       <CardDescription className="text-slate-400">Review and moderate all registered creators.</CardDescription>
                    </div>
                    <div className="relative">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                       <Input placeholder="Search creators..." className="pl-10 h-10 bg-white/5 border-white/10 text-white text-sm w-full md:w-64" />
                    </div>
                 </div>
              </CardHeader>
              <CardContent className="p-0">
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                       <thead className="text-[10px] text-slate-500 uppercase font-black tracking-widest bg-white/[0.02] border-b border-white/10">
                          <tr>
                             <th className="px-6 py-4">Creator</th>
                             <th className="px-6 py-4">Status</th>
                             <th className="px-6 py-4">Total Volume</th>
                             <th className="px-6 py-4">Flags</th>
                             <th className="px-6 py-4 text-right">Actions</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5">
                          {creators.map((c, i) => (
                            <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                               <td className="px-6 py-4">
                                  <p className="font-bold text-slate-200">{c.name}</p>
                                  <p className="text-xs text-slate-500">{c.joinDate}</p>
                               </td>
                               <td className="px-6 py-4">
                                  <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tight border ${
                                    c.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                                    c.status === 'Banned' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                                    'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                  }`}>
                                     {c.status}
                                  </span>
                               </td>
                               <td className="px-6 py-4 font-bold text-slate-200">{c.volume}</td>
                               <td className="px-6 py-4">
                                  <span className={`font-bold ${c.flags > 5 ? 'text-red-400' : 'text-slate-500'}`}>{c.flags}</span>
                               </td>
                               <td className="px-6 py-4 text-right">
                                  <button className="text-slate-400 hover:text-white font-bold text-xs uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 transition-colors">
                                     Manage
                                  </button>
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </CardContent>
           </Card>

           {/* Platform Alerts & Health */}
           <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 overflow-hidden">
                 <CardHeader className="bg-indigo-600/10 border-b border-white/10">
                    <CardTitle className="text-white text-lg">System Health</CardTitle>
                 </CardHeader>
                 <CardContent className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <span className="text-sm font-bold text-slate-300">Payment Engine</span>
                       </div>
                       <span className="text-[10px] font-black uppercase text-emerald-400">Stable</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <span className="text-sm font-bold text-slate-300">Auth & AuthZ</span>
                       </div>
                       <span className="text-[10px] font-black uppercase text-emerald-400">Stable</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <span className="text-sm font-bold text-slate-300">Object Storage</span>
                       </div>
                       <span className="text-[10px] font-black uppercase text-emerald-400">Stable</span>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                       <div className="flex items-center gap-3">
                          <BarChart3 className="w-5 h-5 text-indigo-400" />
                          <div>
                             <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Network Traffic</p>
                             <p className="text-lg font-black text-white">4.2 TB <span className="text-xs text-slate-500 font-bold ml-1">/ mo</span></p>
                          </div>
                       </div>
                    </div>
                 </CardContent>
              </Card>

              <Card className="bg-red-500/10 border-red-500/20 overflow-hidden border-2">
                 <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-red-400">
                       <AlertCircle className="w-5 h-5" />
                       <CardTitle className="text-base">Pending Disputes</CardTitle>
                    </div>
                 </CardHeader>
                 <CardContent>
                    <p className="text-slate-400 text-sm mb-4">There are 12 chargeback or payout disputes that require your attention.</p>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-10 rounded-xl">
                       Resolve Now
                    </Button>
                 </CardContent>
              </Card>
           </div>
        </div>
      </div>
    </div>
  )
}
