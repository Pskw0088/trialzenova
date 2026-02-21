import React from "react"
import { Link } from "react-router-dom"

// Images
import healthImg from "../assets/health.png"
import eduImg from "../assets/education.png"
import aboutImg from "../assets/about.jpg"

export default function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-zinc-900">
      {/* Background Light */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white" />
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute left-1/2 top-[20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[160px]" />
      </div>

      {/* NAVBAR */}
      <header className="w-full">
        <div className="mx-auto max-w-6xl px-6 py-7 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black grid place-items-center">
              Z
            </div>
            <span className="font-semibold text-lg">Zenova Group</span>
          </Link>

          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition"
          >
            📩 Contact Us
          </Link>
        </div>
      </header>

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-6 pt-10 pb-16 text-center">
        <div className="px-5 py-2 inline-block rounded-full border border-blue-200 text-blue-700 text-xs font-semibold uppercase bg-blue-50">
          Building the future of business
        </div>

        <h1 className="mt-7 text-4xl md:text-6xl font-black">
          Empowering Excellence
        </h1>
        <h2 className="text-4xl md:text-6xl font-black text-blue-600">
          Across Industries
        </h2>

        <p className="mt-6 text-zinc-600 max-w-2xl mx-auto">
          A diversified parent company driving innovation in health and education
          with a commitment to excellence and growth.
        </p>

        {/* Stats */}
        <div className="mt-16 w-full max-w-3xl mx-auto grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-blue-600 text-3xl font-black">2</p>
            <p className="text-zinc-500 text-xs uppercase mt-1">Verticals</p>
          </div>
          <div className="text-center">
            <p className="text-blue-600 text-3xl font-black">100%</p>
            <p className="text-zinc-500 text-xs uppercase mt-1">Dedicated</p>
          </div>
          <div className="text-center">
            <p className="text-blue-600 text-3xl font-black">∞</p>
            <p className="text-zinc-500 text-xs uppercase mt-1">Potential</p>
          </div>
        </div>

        {/* Scroll */}
        <div className="mt-14">
          <div className="h-9 w-6 rounded-full border-2 border-blue-300 flex justify-center mx-auto">
            <div className="h-2 w-1.5 rounded-full bg-blue-600 mt-2 animate-bounce" />
          </div>
        </div>
      </main>

      {/* ECOSYSTEM */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-center text-3xl md:text-4xl font-black">
          Our <span className="text-blue-600">Ecosystem</span>
        </h2>

        <p className="text-center text-zinc-600 mt-3">
          Two distinct verticals, one unified vision of excellence
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* HEALTH */}
          <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition">
            <div className="h-44 bg-zinc-50">
              <img src={healthImg} alt="Zenova Health" className="w-full h-full object-cover" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">Zenova Health</h3>
              <p className="text-blue-600 text-sm font-semibold mt-1">
                Fat Loss for Professionals
              </p>

              <p className="text-zinc-600 text-sm mt-4">
                Science-backed fat loss programs designed for busy professionals
                with sustainable, real-world results.
              </p>

              <Link to="/health" className="mt-6 inline-flex text-blue-600 font-semibold text-sm">
                Explore More →
              </Link>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition">
            <div className="h-44 bg-zinc-50">
              <img src={eduImg} alt="Zenova Education" className="w-full h-full object-cover" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">Zenova Education</h3>
              <p className="text-blue-600 text-sm font-semibold mt-1">
                Coding, Design & Digital Skills
              </p>

              <p className="text-zinc-600 text-sm mt-4">
                Industry-relevant programming, creative software, and job-ready
                skills designed to build real careers.
              </p>

              <Link to="/education" className="mt-6 inline-flex text-blue-600 font-semibold text-sm">
                Explore More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
    <section id="about" className="mx-auto max-w-6xl px-6 pb-24">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
    <div>
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold uppercase">
        About Us
      </div>

      <h2 className="mt-6 text-3xl md:text-5xl font-black leading-tight">
        Building a Legacy of{" "}
        <span className="text-blue-600">Trust & Innovation</span>
      </h2>

      <p className="mt-5 text-zinc-600 leading-relaxed max-w-xl">
        Zenova Group is a diversified parent company committed to excellence
        across multiple sectors. Our mission is to create sustainable value
        through strategic investments and operational excellence.
      </p>

      {/* MSME CARD */}
      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white grid place-items-center">
            📄
          </div>
          <div>
            <h3 className="font-bold text-lg">MSME Registered & Certified</h3>
            <p className="text-zinc-600 text-sm mt-2">
              As a registered Micro, Small & Medium Enterprise, Zenova Group is
              committed to innovation, sustainability, and transparency.
            </p>
          </div>
        </div>
      </div>

      {/* CHECKLIST */}
      <div className="mt-8 space-y-4 text-zinc-600 text-sm">
        <div className="flex items-center gap-3">
          <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-xs">✓</span>
          <p>Diversified portfolio across health & education</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-xs">✓</span>
          <p>Commitment to innovation & sustainable practices</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-5 w-5 rounded-full bg-blue-600 text-white grid place-items-center text-xs">✓</span>
          <p>Focus on long-term value creation</p>
        </div>
      </div>
    </div>

    {/* RIGHT */}
    <div className="relative">
      <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-sm">
        <img
          src={aboutImg}
          alt="About Zenova Group"
          className="w-full h-[360px] md:h-[420px] object-cover"
        />
      </div>

      {/* FLOATING BADGES */}
      <div className="absolute top-6 right-6 rounded-2xl border bg-white px-4 py-3 shadow-sm">
        <p className="font-black">3+</p>
        <p className="text-xs text-zinc-500">Verticals</p>
      </div>

      <div className="absolute -bottom-6 left-8 rounded-2xl border bg-white px-4 py-3 shadow-sm">
        <p className="font-bold">MSME</p>
        <p className="text-xs text-zinc-500">Certified</p>
      </div>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white relative overflow-hidden">
  {/* soft glow */}
  <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />

  <div className="relative mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3">

    {/* BRAND */}
    <div>
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-2xl bg-blue-600 text-white font-black grid place-items-center shadow-lg">
          Z
        </div>
        <h3 className="text-xl font-bold">Zenova Group</h3>
      </div>

      <p className="mt-4 text-sm text-zinc-600 leading-relaxed max-w-sm">
        Building the future through <b>health</b> & <b>education</b> with a
        commitment to excellence, innovation, and long-term impact.
      </p>

      {/* socials */}
      <div className="flex gap-3 mt-6">
        {[
          { label: "in", href: "https://linkedin.com" },
          { label: "x", href: "https://x.com" },
          { label: "f", href: "https://facebook.com" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="h-11 w-11 rounded-2xl border border-zinc-200 bg-zinc-50 grid place-items-center font-bold text-zinc-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>

    {/* VERTICALS */}
    <div>
      <h4 className="font-bold text-zinc-900">Our Verticals</h4>
      <div className="mt-4 space-y-3 text-sm">
        <a href="/health" className="block text-zinc-600 hover:text-blue-600 transition">
          Zenova Health
        </a>
        <a href="/education" className="block text-zinc-600 hover:text-blue-600 transition">
          Zenova Education
        </a>
      </div>

      {/* MSME badge */}
      <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-blue-300 bg-blue-50 px-4 py-2 text-blue-700 font-semibold shadow-sm">
        🏅 MSME Registered
      </div>
    </div>

    {/* CONTACT */}
    <div>
      <h4 className="font-bold text-zinc-900">Contact</h4>

      <div className="mt-4 space-y-4 text-sm text-zinc-600">
        <div className="flex items-start gap-3">
          <span className="text-blue-600">✉</span>
          <span>info@zenovagroup.com</span>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-blue-600">📞</span>
          <span>+91 8595367745</span>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-blue-600">📍</span>
          <span>
            Business District <br />
            Corporate Tower, India
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-zinc-200">
    <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">

      <p>© 2026 Zenova Group. All rights reserved.</p>

      <div className="flex gap-5">
        <a href="/privacy-policy" className="hover:text-zinc-900">Privacy Policy</a>
        <a href="/terms" className="hover:text-zinc-900">Terms</a>
        <a href="/cookie-policy" className="hover:text-zinc-900">Cookies</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}