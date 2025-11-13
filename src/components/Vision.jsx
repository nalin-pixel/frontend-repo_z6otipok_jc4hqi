import React from 'react'
import { motion } from 'framer-motion'

function VisionCard({ title, name, img, children }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_0_40px_-12px_rgba(147,51,234,0.7)]"
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-2xl group-hover:opacity-40 transition" />
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="h-14 w-14 rounded-xl object-cover ring-2 ring-purple-500/40" />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-white/70 text-sm">{name}</p>
        </div>
      </div>
      <p className="mt-4 text-white/80 leading-relaxed">{children}</p>
    </motion.div>
  )
}

export default function Vision() {
  return (
    <section id="vision" className="relative py-20 md:py-28 bg-[#050811] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Vision</h2>
          <p className="mt-3 text-white/70">Where ideas evolve into innovation.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <VisionCard title="President’s Vision" name="A. Sharma (President)" img="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop">
            “GenXCode is not just a club, it's a movement — where every idea becomes innovation. My vision is to build a hub of creators who redefine technology through passion and collaboration.”
          </VisionCard>
          <VisionCard title="Vice President’s Vision" name="R. Verma (Vice President)" img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop">
            “Together, we aim to empower every student to code without limits — exploring AI, Web3, and emerging technologies that define tomorrow.”
          </VisionCard>
        </div>
      </div>
    </section>
  )
}
