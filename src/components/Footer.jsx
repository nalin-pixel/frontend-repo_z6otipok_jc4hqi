import React from 'react'
import { Github, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#050811] text-white">
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_18px_6px_rgba(99,102,241,0.6)]" />
            <div>
              <p className="font-semibold tracking-wider">GenXCode</p>
              <p className="text-xs text-white/70">Code. Create. Conquer.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Discord" className="rounded-lg border border-white/10 p-2 hover:bg-white/10"><MessageCircle className="h-5 w-5"/></a>
            <a href="#" aria-label="GitHub" className="rounded-lg border border-white/10 p-2 hover:bg-white/10"><Github className="h-5 w-5"/></a>
            <a href="#" aria-label="Instagram" className="rounded-lg border border-white/10 p-2 hover:bg-white/10"><Instagram className="h-5 w-5"/></a>
          </div>
        </div>
        <p className="mt-6 text-center text-white/50 text-xs">© {new Date().getFullYear()} GenXCode Club. All rights reserved.</p>
      </div>
    </footer>
  )
}
