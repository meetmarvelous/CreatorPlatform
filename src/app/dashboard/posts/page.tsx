"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search, Filter, MoreVertical, Eye, MessageCircle, Heart, DollarSign, ExternalLink, Edit3, Trash2, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PostsPage() {
  const posts = [
    {
      id: 1,
      title: "Behind the scenes: Studio Setup 2026",
      status: "Premium",
      publishedAt: "Oct 24, 2026",
      views: "2.4k",
      engagement: "12%",
      revenue: "$1,240",
      thumbnail: "bg-indigo-100"
    },
    {
      id: 2,
      title: "Exclusive 4K Render Pack Download",
      status: "Premium",
      publishedAt: "Oct 20, 2026",
      views: "1.8k",
      engagement: "45%",
      revenue: "$3,890",
      thumbnail: "bg-purple-100"
    },
    {
      id: 3,
      title: "Weekly Q&A: Crypto Art Market Trends",
      status: "Public",
      publishedAt: "Oct 18, 2026",
      views: "5.2k",
      engagement: "8%",
      revenue: "$0",
      thumbnail: "bg-blue-100"
    },
    {
      id: 4,
      title: "Mastering Lighting in Digital Art",
      status: "Premium",
      publishedAt: "Oct 12, 2026",
      views: "980",
      engagement: "18%",
      revenue: "$850",
      thumbnail: "bg-pink-100"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <div className="flex-1 space-y-8 p-8 pt-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Content Manager</h2>
            <p className="text-slate-500 mt-2 text-lg">
              Manage your posts, track performance, and edit your exclusives.
            </p>
          </div>
          <Link href="/dashboard/post/create">
            <Button className="rounded-full shadow-lg shadow-indigo-500/20 bg-indigo-600 hover:bg-indigo-700 h-12 px-6">
              Create New Post
            </Button>
          </Link>
        </div>

        <Card className="glass-card border-slate-200">
          <CardHeader className="pb-4 border-b bg-white/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search posts..." className="pl-10 h-10 bg-white border-slate-200" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-10 bg-white border-slate-200">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
                <Button variant="outline" size="sm" className="h-10 bg-white border-slate-200">
                  Last 30 Days
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 border-b">
                  <tr>
                    <th className="px-6 py-4 font-bold">Content</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                    <th className="px-6 py-4 font-bold text-center">Engagement</th>
                    <th className="px-6 py-4 font-bold text-center">Earnings</th>
                    <th className="px-6 py-4 font-bold text-right text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {posts.map((post) => (
                    <tr key={post.id} className="bg-white/40 hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg ${post.thumbnail} shrink-0 flex items-center justify-center font-bold text-indigo-400/50`}>
                             IMG
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{post.title}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{post.publishedAt}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          post.status === 'Premium' 
                          ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' 
                          : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-6">
                           <div className="text-center">
                             <div className="font-bold text-slate-700">{post.views}</div>
                             <div className="text-[10px] text-slate-400 uppercase">Views</div>
                           </div>
                           <div className="text-center">
                             <div className="font-bold text-slate-700">{post.engagement}</div>
                             <div className="text-[10px] text-slate-400 uppercase">Rate</div>
                           </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="font-bold text-slate-900 text-lg">{post.revenue}</div>
                        <div className="text-[10px] text-emerald-500 font-bold uppercase">Settled</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600">
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Global Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card className="glass-card bg-indigo-50/50 border-indigo-100">
             <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-1">Success Rate</p>
                    <h3 className="text-2xl font-bold text-slate-900">84.2%</h3>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
             </CardContent>
           </Card>
           <Card className="glass-card bg-emerald-50/50 border-emerald-100">
             <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600 uppercase tracking-wider mb-1">Total Earned</p>
                    <h3 className="text-2xl font-bold text-slate-900">$14,250</h3>
                  </div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>
             </CardContent>
           </Card>
           <Card className="glass-card bg-slate-100/50 border-slate-200">
             <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-1">Engagement</p>
                    <h3 className="text-2xl font-bold text-slate-900">22.5%</h3>
                  </div>
                  <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center text-slate-600">
                    <Heart className="w-6 h-6" />
                  </div>
                </div>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
