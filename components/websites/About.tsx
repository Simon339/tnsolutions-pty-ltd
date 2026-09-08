"use client"

import { motion } from "framer-motion"

const TRUST_BADGES = [
  {
    label: "Quality Workmanship",
    path: "M5 13l4 4L19 7",
  },
  {
    label: "Professional Service",
    path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "COC Certified",
    path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
]

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="relative w-full overflow-hidden">
        <img
          src="/images/image3.jpg"
          alt="Our team of professionals working on electrical systems"
          className="h-48 w-full object-cover md:h-64 lg:h-96"
          loading="lazy"
          style={{ filter: "brightness(0.3) saturate(0.5)" }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-900/95 via-slate-900/70 to-slate-800/50" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Trusted Since 2021
            </span>
          </div>

          <h1 className="section_title">About Us</h1>
          <p className="section_subtitle" style={{ marginBottom: 0 }}>
            Professional Electrical &amp; Solar Solutions
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-1">
              <h2
                className="text-balance font-bold leading-tight tracking-tight text-white"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
              >
                Reliable power.
              </h2>
              <h2
                className="text-balance font-bold leading-tight tracking-tight text-blue-400"
                style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
              >
                Trusted partnerships.
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                <strong className="text-white font-semibold">Magotlho TN Solutions (Pty) Ltd</strong>, trading as TN Solutions, was established in 2021 as a professional technical services company.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We specialize in <strong className="text-white font-semibold">electrical installations, solar and backup power systems</strong>, and general electrical and solar maintenance services.
              </p>

              <div className="rounded-r-lg border-l-4 border-blue-400 bg-blue-400/5 p-4">
                <strong className="block text-white mb-1.5 text-sm tracking-wide">Our Mission</strong>
                <p className="text-slate-300 leading-relaxed text-sm">
                  To deliver high-quality electrical, solar, and security solutions through professional workmanship, continuous improvement, and customer-focused service.
                </p>
              </div>

              <div className="rounded-r-lg border-l-4 border-blue-400/50 bg-blue-400/5 p-4">
                <strong className="block text-white mb-1.5 text-sm tracking-wide">Our Vision</strong>
                <p className="text-slate-300 leading-relaxed text-sm">
                  To become a trusted and leading technical services provider in South Africa, delivering innovative, safe, and energy-efficient solutions that empower communities and businesses.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-700/60">
              {TRUST_BADGES.map(({ label, path }) => (
                <div key={label} className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                  </svg>
                  <span className="text-sm font-medium text-slate-300">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative flex flex-col items-center text-center"
          >
            <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-blue-400/10 blur-3xl opacity-60 pointer-events-none" />

            <div className="relative rounded-2xl bg-slate-800 p-8 shadow-2xl ring-1 ring-blue-400/20 border border-slate-700/50">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 h-16 w-16 rounded-tr-2xl"
                style={{
                  borderTop: "2px solid #60a5fa",
                  borderRight: "2px solid #60a5fa",
                  opacity: 0.5,
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-16 w-16 rounded-bl-2xl"
                style={{
                  borderBottom: "2px solid #60a5fa",
                  borderLeft: "2px solid #60a5fa",
                  opacity: 0.5,
                }}
              />
              <div className="rounded-full bg-transparent p-3 ring-1 ring-slate-700 inline-flex">
                <img
                  src="/about.png"
                  alt="Magotlho TN Solutions Company Logo"
                  className="h-40 w-40 object-contain md:h-52 md:w-52"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-8 space-y-1.5">
              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Magotlho TN Solutions</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-white">(PTY) LTD</p>
              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/60" />
                <span className="text-xs text-slate-300 tracking-widest uppercase">Electrical • Solar • Compliance</span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}