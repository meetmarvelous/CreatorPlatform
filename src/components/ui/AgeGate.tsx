"use client"

import { useState, useEffect } from "react"
import { Button } from "./Button"
import { Shield, Lock, AlertTriangle } from "lucide-react"

export function AgeGate() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasVerified = localStorage.getItem("age-verified")
    if (!hasVerified) {
      setIsVisible(true)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem("age-verified", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-6 text-white text-center">
      <div className="max-w-md w-full animate-in fade-in zoom-in-95 duration-500">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/20 ring-4 ring-indigo-500/10">
            <Shield className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-black tracking-tight mb-4">Age Verification Required</h1>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          This platform contains exclusive content intended for mature audiences only. By entering, you confirm you are at least 18 years of age.
        </p>

        <div className="space-y-4">
          <Button 
            onClick={handleVerify}
            className="w-full h-14 rounded-2xl text-lg font-bold bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/20 group"
          >
            I am 18 or older
            <Lock className="ml-2 w-5 h-5 group-hover:rotate-6 transition-transform" />
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = "https://google.com"}
            className="w-full h-14 rounded-2xl text-slate-400 hover:text-white hover:bg-white/5 font-bold"
          >
            I am under 18 (Exit)
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-slate-500">
           <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-bold">18+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Mature Content</span>
           </div>
           <div className="w-px h-8 bg-white/10"></div>
           <div className="flex flex-col items-center gap-1">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Privacy Policy</span>
           </div>
        </div>
      </div>
    </div>
  )
}
