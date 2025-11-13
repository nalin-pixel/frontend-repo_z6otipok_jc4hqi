import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Typewriter({ words, speed = 80, pause = 1200 }) {
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = words[index % words.length]
    let timer
    if (!deleting) {
      if (sub.length < full.length) {
        timer = setTimeout(() => setSub(full.slice(0, sub.length + 1)), speed)
      } else {
        timer = setTimeout(() => setDeleting(true), pause)
      }
    } else {
      if (sub.length > 0) {
        timer = setTimeout(() => setSub(full.slice(0, sub.length - 1)), speed / 2)
      } else {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      }
    }
    return () => clearTimeout(timer)
  }, [sub, deleting, index, words, speed, pause])

  return (
    <span className="font-mono text-cyan-300/90 [text-shadow:0_0_12px_rgba(34,211,238,0.8)]">
      {sub}
      <span className="ml-1 inline-block w-3 h-5 bg-cyan-300/80 animate-pulse align-middle rounded-sm" />
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#050811] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex min-h-[92vh] items-center">
        <div className="mx-auto max-w-7xl px-6 md:px-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Welcome to GenXCode
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight font-display">
              GenXCode
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]"> Code. Create. Conquer.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">
              A futuristic coding community pushing boundaries in AI, Web3, Apps, and Competitive Programming.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#join" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-6px_rgba(99,102,241,1)] hover:shadow-[0_0_40px_-4px_rgba(99,102,241,1)] transition">
                Join Now
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
                Learn more
              </a>
            </div>
            <motion.p className="mt-8 text-lg md:text-xl font-display" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <Typewriter words={["We Code.", "We Create.", "We Conquer."]} />
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="h-12 w-7 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <span className="inline-block h-2 w-2 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
    </section>
  )
}
