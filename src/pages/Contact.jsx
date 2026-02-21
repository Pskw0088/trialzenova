import React from "react"
import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-14">

        {/* Back */}
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>

        {/* Header */}
        <h1 className="mt-6 text-4xl md:text-5xl font-black">
          Contact <span className="text-blue-600">Zenova Group</span>
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">
          Have questions about <b>Zenova Health</b>, <b>Zenova Education</b>, or collaborations?
          We usually reply within a few hours.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {/* LEFT: DIRECT CONTACT */}
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold">Direct Contact</h2>

            <p className="mt-3 text-sm text-zinc-600">
              Reach us directly for fast responses.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center">
                  ✉
                </span>
                <span>info@zenovagroup.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center">
                  📞
                </span>
                <span>+91 8595367745</span>
              </div>
            </div>

            <a
              href="https://wa.me/918595367745"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-bold hover:bg-blue-700 transition shadow"
            >
              💬 WhatsApp Now
            </a>

            <p className="mt-4 text-xs text-zinc-500 text-center">
              Available Mon–Sat • 10 AM – 7 PM
            </p>
          </div>

          {/* RIGHT: FORM */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-bold">Quick Message</h2>

            <p className="mt-3 text-sm text-zinc-600">
              Drop your details and we’ll get back to you.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 text-white font-bold hover:bg-blue-700 transition shadow"
              >
                Send Message →
              </button>
            </form>

            <p className="mt-4 text-xs text-zinc-500">
              🔒 We respect your privacy. No spam. No sharing.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}