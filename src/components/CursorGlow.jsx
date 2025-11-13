import React, { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', handler)
    return () => window.removeEventListener('pointermove', handler)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen"
      aria-hidden
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: 220,
          height: 220,
          background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(56,189,248,0.25) 40%, rgba(0,0,0,0) 70%)',
          filter: 'blur(24px)'
        }}
      />
    </div>
  )
}
