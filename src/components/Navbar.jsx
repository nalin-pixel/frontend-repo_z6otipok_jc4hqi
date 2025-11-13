import React, { useState } from 'react'
import { Menu, X, Rocket, Users, FolderGit2, Info, UserPlus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about', icon: Info },
    { name: 'Vision', href: '#vision', icon: Rocket },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Team', href: '#team', icon: Users },
    { name: 'Join', href: '#join', icon: UserPlus },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_20px_6px_rgba(99,102,241,0.6)]" />
              <span className="font-semibold tracking-wider text-white">GenXCode</span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="group relative px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg">
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition" />
                </a>
              ))}
              <a href="#join" className="ml-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_-2px_rgba(99,102,241,0.9)] hover:shadow-[0_0_30px_-4px_rgba(99,102,241,1)] transition">
                Join Now
              </a>
            </div>
            <button onClick={() => setOpen(true)} className="md:hidden p-2 text-white">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute right-4 top-6 w-[88vw] max-w-sm rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#0b1224] border border-white/10 shadow-2xl p-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold text-white tracking-wide">GenXCode</span>
                <button onClick={() => setOpen(false)} className="p-2 text-white/80 hover:text-white"><X /></button>
              </div>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-white hover:bg-white/5">
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </a>
                ))}
                <a href="#join" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_-2px_rgba(99,102,241,0.9)]">
                  Join Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
