import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Trophy, Code2 } from 'lucide-react'
import Modal from './Modal'

const items = [
  {
    title: 'AI Quiz Bot',
    badge: 'Project',
    icon: Code2,
    desc: 'An interactive AI-powered quiz bot for learning CS fundamentals.',
    details: 'Built with transformers and a custom knowledge base. Deployable on Discord and web.'
  },
  {
    title: 'Hack the Night 2.0',
    badge: 'Hackathon',
    icon: Trophy,
    desc: 'Our flagship 24-hour hackathon with 300+ participants.',
    details: 'Tracks include AI, Web3, EdTech, and Sustainability with 15+ sponsors.'
  },
  {
    title: 'Web3 Wallet Workshop',
    badge: 'Event',
    icon: Rocket,
    desc: 'Hands-on session on building and securing wallets.',
    details: 'Includes EVM basics, signing, gas, and dApp integration.'
  },
]

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-[#050811] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Projects & Events</h2>
            <p className="mt-3 text-white/70">Explore what our community is building and hosting.</p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#projects" className="rounded-xl border border-white/20 px-4 py-2">View All</a>
            <a href="#join" className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-semibold shadow-[0_0_20px_-6px_rgba(99,102,241,1)]">Submit Your Project</a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.button
              key={it.title}
              onClick={() => { setActive(it); setOpen(true) }}
              whileHover={{ y: -6 }}
              className="group text-left rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_-10px_rgba(56,189,248,0.7)]"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <it.icon className="h-6 w-6 text-cyan-300" />
                <span className="text-xs px-2 py-1 rounded-lg bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">{it.badge}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-white/75">{it.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-cyan-400/40 transition" />
            </motion.button>
          ))}
        </div>

        <div className="md:hidden mt-6 flex items-center gap-3">
          <a href="#projects" className="flex-1 text-center rounded-xl border border-white/20 px-4 py-2">View All</a>
          <a href="#join" className="flex-1 text-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 font-semibold shadow-[0_0_20px_-6px_rgba(99,102,241,1)]">Submit</a>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={active?.title}>
        <p className="text-white/80">{active?.details}</p>
      </Modal>
    </section>
  )
}
