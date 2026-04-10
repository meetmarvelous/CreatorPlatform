"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search, Send, Paperclip, MoreHorizontal, Smartphone, Wallet, Info, ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(0);
  const [showChatMobile, setShowChatMobile] = useState(false);

  const contacts = [
    { id: 0, name: "Sarah Michaels", avatar: "SM", status: "online", lastMsg: "The new studio looks amazing!", time: "2m", unread: 2 },
    { id: 1, name: "Alex Jenkins", avatar: "AJ", status: "offline", lastMsg: "Did the render pack update?", time: "1h", unread: 0 },
    { id: 2, name: "Digital Explorer", avatar: "DE", status: "online", lastMsg: "Just tipped $50 for the help!", time: "3h", unread: 1 },
    { id: 3, name: "0x89...4fc2", avatar: "0x", status: "offline", lastMsg: "I want to upgrade to Premium", time: "1d", unread: 0 },
    { id: 4, name: "Creative Fan 1", avatar: "CF", status: "online", lastMsg: "Looking forward to Sunday's live", time: "2d", unread: 0 },
  ]

  const messages = [
    { id: 1, sender: "Sarah Michaels", text: "Hey! I just saw your updated studio setup.", time: "10:15 AM", isMe: false },
    { id: 2, sender: "Me", text: "Thanks Sarah! It took a while to get the lighting right.", time: "10:16 AM", isMe: true },
    { id: 3, sender: "Me", text: "I'll be posting the full gear list tonight for the Premium tier.", time: "10:16 AM", isMe: true },
    { id: 4, sender: "Sarah Michaels", text: "Can't wait! The new lighting makes the 4K renders pop so much more.", time: "10:18 AM", isMe: false },
    { id: 5, sender: "Sarah Michaels", text: "The new studio looks amazing!", time: "10:19 AM", isMe: false },
  ]

  const handleSelectContact = (id: number) => {
    setActiveChat(id);
    setShowChatMobile(true);
  }

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-slate-50/50">
      {/* Search & Contacts Sidebar */}
      <div className={`w-full md:w-80 lg:w-96 border-r bg-white flex flex-col shrink-0 ${showChatMobile ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Search fans or messages..." className="pl-10 h-11 bg-slate-50 border-0" />
          </div>
        </div>
        <div className="flex-1 overflow-auto divide-y divide-slate-50">
          {contacts.map((contact) => (
            <div 
              key={contact.id} 
              onClick={() => handleSelectContact(contact.id)}
              className={`p-4 flex items-start gap-3 cursor-pointer transition-colors ${activeChat === contact.id ? 'bg-indigo-50/50' : 'hover:bg-slate-50'}`}
            >
              <div className="relative shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${
                  activeChat === contact.id ? 'bg-indigo-500' : 'bg-slate-300'
                }`}>
                  {contact.avatar}
                </div>
                {contact.status === 'online' && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className={`font-bold truncate ${activeChat === contact.id ? 'text-indigo-900' : 'text-slate-800'}`}>
                    {contact.name}
                  </h3>
                  <span className="text-xs text-slate-400">{contact.time}</span>
                </div>
                <div className="flex justify-between items-center pr-1">
                  <p className="text-sm text-slate-500 truncate leading-snug">{contact.lastMsg}</p>
                  {contact.unread > 0 && (
                    <span className="bg-indigo-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center ml-2">
                       {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className={`flex-1 flex flex-col relative bg-white md:bg-transparent ${showChatMobile ? 'flex' : 'hidden md:flex'}`}>
        {/* Chat Header */}
        <div className="h-16 border-b md:border-t-0 px-4 md:px-6 bg-white flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
             <button 
               onClick={() => setShowChatMobile(false)}
               className="md:hidden p-2 -ml-2 text-slate-400 hover:text-indigo-600"
             >
                <ChevronLeft className="w-6 h-6" />
             </button>
             <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                {contacts[activeChat].avatar}
             </div>
             <div>
               <h3 className="font-bold text-slate-900 text-sm leading-none">{contacts[activeChat].name}</h3>
               <p className="text-[10px] text-emerald-500 font-medium uppercase tracking-wider mt-1 flex items-center">
                 <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1"></span> Online
               </p>
             </div>
          </div>
          <div className="flex items-center gap-2">
             <Button variant="outline" size="sm" className="hidden sm:flex rounded-full h-9 bg-white text-xs font-bold border-indigo-100 text-indigo-600 px-4">
                <Wallet className="w-3 h-3 mr-2" /> Send Tip
             </Button>
             <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Info className="h-5 w-5 text-slate-400" />
             </Button>
             <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <MoreHorizontal className="h-5 w-5 text-slate-400" />
             </Button>
          </div>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-auto p-4 md:p-6 space-y-4 bg-grid-pattern bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,white,transparent)]">
           <div className="flex justify-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Today</span>
           </div>
           
           {messages.map((msg) => (
             <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'} group animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`max-w-[85%] md:max-w-[60%] flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
                   {!msg.isMe && <span className="text-[10px] font-bold text-slate-400 mb-1 ml-1">{msg.sender}</span>}
                   <div className={`px-4 py-3 rounded-2xl shadow-sm text-sm ${
                     msg.isMe 
                     ? 'bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-tr-none' 
                     : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'
                   }`}>
                     {msg.text}
                   </div>
                   <span className="text-[10px] text-slate-400 mt-1.5 px-1">{msg.time}</span>
                </div>
             </div>
           ))}

           {/* Simulated Typing */}
           <div className="flex justify-start">
              <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-tl-none animate-pulse">
                 <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                 </div>
              </div>
           </div>
        </div>

        {/* Message Input Container */}
        <div className="p-4 md:p-6 bg-white border-t">
           <div className="relative flex items-center gap-2 max-w-5xl mx-auto">
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-indigo-600 rounded-full shrink-0">
                  <Paperclip className="h-5 w-5" />
                </Button>
              </div>
              <Input 
                placeholder="Type a message..." 
                className="flex-1 h-12 bg-slate-50 border-0 focus-visible:ring-1 focus-visible:ring-indigo-300 rounded-2xl px-6"
              />
              <Button size="icon" className="h-12 w-12 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 rounded-2xl shrink-0 group">
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
           </div>
           <p className="text-[10px] text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
              <Smartphone className="w-3 h-3" /> End-to-end encrypted direct messaging
           </p>
        </div>
      </div>
    </div>
  )
}

