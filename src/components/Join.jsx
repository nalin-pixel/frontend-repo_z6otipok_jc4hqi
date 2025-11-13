import React from 'react'
import { motion } from 'framer-motion'

export default function Join() {
  return (
    <section id="join" className="relative py-20 md:py-28 bg-[#050811] text-white overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-60" aria-hidden>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Join Us</h2>
            <p className="mt-4 text-white/80 max-w-xl">Become part of a high-energy community where you’ll build projects, join hackathons, and level up your skills with peers and mentors.</p>
            <ul className="mt-6 grid gap-3 text-white/75 list-disc list-inside">
              <li>Weekly sprints and workshops</li>
              <li>Access to project mentors</li>
              <li>Early invites to events and hackathons</li>
            </ul>
          </div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_-12px_rgba(56,189,248,0.7)]">
            <iframe title="Join Form" src="https://docs.google.com/forms/d/e/1FAIpQLSd8dP-placeholder/viewform?embedded=true" className="w-full h-[480px] rounded-xl border-0"></iframe>
            <p className="text-xs text-white/50 mt-2">If the form doesn’t load, <a className="text-cyan-300 underline" href="https://forms.gle/" target="_blank" rel="noreferrer">open it here</a>.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
