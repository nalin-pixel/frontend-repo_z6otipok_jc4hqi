import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const members = [
  { name: 'Aarav Sharma', role: 'President', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop', gh: '#', li: '#' },
  { name: 'Riya Verma', role: 'Vice President', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop', gh: '#', li: '#' },
  { name: 'Kabir Singh', role: 'Tech Lead', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop', gh: '#', li: '#' },
  { name: 'Ishita Patel', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop', gh: '#', li: '#' },
]

export default function Team() {
  return (
    <section id="team" className="relative py-20 md:py-28 bg-[#050811] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Core Team</h2>
          <p className="mt-3 text-white/70">The humans behind the neon.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <motion.div key={m.name} whileHover={{ y: -6, rotateX: 2, rotateY: -2 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)]">
              <div className="relative">
                <img src={m.img} alt={m.name} className="h-40 w-full rounded-xl object-cover ring-2 ring-purple-500/40" />
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
              <p className="text-white/70 text-sm">{m.role}</p>
              <div className="mt-4 flex items-center gap-3">
                <a href={m.gh} className="rounded-lg border border-white/10 p-2 hover:bg-white/10"><Github className="h-5 w-5"/></a>
                <a href={m.li} className="rounded-lg border border-white/10 p-2 hover:bg-white/10"><Linkedin className="h-5 w-5"/></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
