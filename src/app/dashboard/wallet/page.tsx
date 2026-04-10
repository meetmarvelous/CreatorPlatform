"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Search, Wallet, ArrowUpRight, ArrowDownLeft, Filter, History, DollarSign, ExternalLink, ShieldCheck, CreditCard, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function WalletPage() {
  const transactions = [
    { id: 1, type: "Subscription", user: "John Doe", amount: "+$14.99", date: "Oct 24, 2026", status: "Settled", icon: ArrowDownLeft, color: "text-emerald-600", bg: "bg-emerald-50" },
    { id: 2, type: "Tip", user: "Sarah J.", amount: "+$50.00", date: "Oct 22, 2026", status: "Settled", icon: ArrowDownLeft, color: "text-emerald-600", bg: "bg-emerald-50" },
    { id: 3, type: "Withdrawal", user: "Main Wallet", amount: "-$1,200.00", date: "Oct 20, 2026", status: "Completed", icon: ArrowUpRight, color: "text-slate-600", bg: "bg-slate-100" },
    { id: 4, type: "Sale", user: "Emily S.", amount: "+$35.00", date: "Oct 18, 2026", status: "Settled", icon: ArrowDownLeft, color: "text-emerald-600", bg: "bg-emerald-50" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <div className="flex-1 space-y-8 p-8 pt-10 max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Payments & Wallet</h2>
            <p className="text-slate-500 mt-2 text-lg">
              Manage your earnings, view history, and withdraw to your crypto wallet.
            </p>
          </div>
          <Button className="rounded-full shadow-lg shadow-indigo-500/20 bg-indigo-600 hover:bg-indigo-700 h-12 px-6">
            Add Funds
          </Button>
        </div>

        {/* Balance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <Card className="glass-card bg-indigo-600 text-white border-0 shadow-2xl shadow-indigo-500/30 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
              <CardHeader className="pb-4 relative z-10">
                 <div className="flex items-center justify-between">
                    <CardTitle className="text-indigo-100 text-sm font-bold uppercase tracking-widest">Available Balance</CardTitle>
                    <Wallet className="h-5 w-5 text-indigo-300" />
                 </div>
              </CardHeader>
              <CardContent className="relative z-10">
                 <div className="text-5xl font-black mb-6 tracking-tighter">$14,250.00</div>
                 <div className="flex gap-4">
                    <Button className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold px-6 h-12 rounded-xl flex-1">
                       Withdraw
                    </Button>
                    <Button variant="ghost" className="bg-indigo-500/20 hover:bg-indigo-500/40 text-white font-bold h-12 rounded-xl">
                       <ExternalLink className="h-5 w-5" />
                    </Button>
                 </div>
              </CardContent>
           </Card>

           <Card className="glass-card border-slate-200">
              <CardHeader className="pb-2">
                 <CardTitle className="text-slate-400 text-xs font-bold uppercase tracking-widest">Incoming Today</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="text-3xl font-black text-slate-900 mb-4">$420.50</div>
                 <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit text-xs font-bold">
                    <ArrowDownLeft className="h-4 w-4" /> +12.5% vs yesterday
                 </div>
              </CardContent>
           </Card>

           <Card className="glass-card border-slate-200">
              <CardHeader className="pb-2">
                 <CardTitle className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Withdrawn</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="text-3xl font-black text-slate-900 mb-4">$112,000</div>
                 <p className="text-xs text-slate-400 font-medium leading-relaxed">Across 24 successful transfers to your connected wallet ending in 0x4fc2.</p>
              </CardContent>
           </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Transaction History */}
           <Card className="glass-card lg:col-span-8 border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between border-b bg-white/40 mb-4 pb-4">
                <div>
                   <CardTitle>Recent Transactions</CardTitle>
                   <CardDescription>Track all subscriptions, tips, and sales.</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="h-9 bg-white border-slate-200">
                   <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </CardHeader>
              <CardContent>
                 <div className="space-y-1">
                    {transactions.map((tx) => (
                       <div key={tx.id} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-slate-100">
                          <div className="flex items-center gap-4">
                             <div className={`h-12 w-12 rounded-xl ${tx.bg} flex items-center justify-center ${tx.color} shadow-sm shrink-0`}>
                                <tx.icon className="h-6 w-6" />
                             </div>
                             <div>
                                <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{tx.type} from {tx.user}</p>
                                <p className="text-xs text-slate-400 mt-0.5">{tx.date}</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className={`font-black text-lg ${tx.color}`}>{tx.amount}</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{tx.status}</p>
                          </div>
                       </div>
                    ))}
                 </div>
                 <Button variant="outline" className="w-full mt-6 text-slate-500 hover:bg-slate-50 h-10 font-bold bg-white">
                    Download Full History (CSV)
                 </Button>
              </CardContent>
           </Card>

           {/* Security & Settings */}
           <div className="lg:col-span-4 space-y-6">
              <Card className="glass-card border-indigo-100 bg-indigo-50/30 overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-4">
                    <ShieldCheck className="w-8 h-8 text-indigo-200/50" />
                 </div>
                 <CardHeader>
                    <CardTitle className="text-indigo-900">Wallet Connection</CardTitle>
                    <CardDescription className="text-indigo-700/60 font-medium">Your payouts are sent to this address.</CardDescription>
                 </CardHeader>
                 <CardContent>
                    <div className="bg-white border border-indigo-100 rounded-xl p-4 flex items-center justify-between mb-4 shadow-sm">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                             <Wallet className="h-4 w-4" />
                          </div>
                          <span className="font-bold text-slate-800 text-sm">0x89...4fc2</span>
                       </div>
                       <span className="text-[10px] font-bold text-emerald-500 uppercase">Verified</span>
                    </div>
                    <Button variant="outline" className="w-full h-10 border-indigo-200 text-indigo-600 bg-white hover:bg-indigo-50 font-bold text-xs">
                       Update Destination Wallet
                    </Button>
                 </CardContent>
              </Card>

              <Card className="glass-card border-slate-200">
                 <CardHeader>
                    <CardTitle>Platform Settings</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
                       <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-bold text-slate-700">Auto-Withdrawals</span>
                       </div>
                       <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
                       <div className="flex items-center gap-3">
                          <History className="w-5 h-5 text-slate-400" />
                          <span className="text-sm font-bold text-slate-700">Tax Reporting (1099)</span>
                       </div>
                       <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600" />
                    </div>
                 </CardContent>
              </Card>
           </div>
        </div>
      </div>
    </div>
  )
}
