import React from 'react'
import { Brain, Code2, Cpu, Atom } from 'lucide-react'
import { motion } from 'framer-motion'

const cards = [
  { title: 'AI & ML', icon: Brain, desc: 'Research and build intelligent systems—from LLMs to computer vision.' },
  { title: 'Web3', icon: Atom, desc: 'Explore decentralized apps, smart contracts, and blockchain tooling.' },
  { title: 'App Dev', icon: Cpu, desc: 'Craft polished mobile and desktop apps with modern frameworks.' },
  { title: 'CP & DSA', icon: Code2, desc: 'Sharpen problem-solving through contests, algorithms, and data structures.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#050811] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">About GenXCode</h2>
          <p className="mt-4 max-w-3xl text-white/80">
            GenXCode is a community of passionate developers and innovators shaping the future with code. We believe in learning, building, and growing together to conquer the digital world.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div key={c.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_-8px_rgba(56,189,248,0.6)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}>
              <div className="flex items-center gap-3">
                <c.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="text-lg font-semibold">{c.title}</h3>
              </div>
              <p className="mt-3 text-white/80">{c.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-cyan-400/40 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
