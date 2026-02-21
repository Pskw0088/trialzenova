import { Link } from "react-router-dom"

export default function LegalCookies() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-16">

        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl md:text-5xl font-black">
          Cookies <span className="text-blue-600">Policy</span>
        </h1>

        <p className="mt-4 text-zinc-600">
          Last updated: {new Date().getFullYear()}
        </p>

        {/* SECTION */}
        <section className="mt-10 space-y-6 text-zinc-700 leading-relaxed">

          <p>
            This Cookies Policy explains how <b>Zenova Group</b> uses cookies and
            similar technologies to recognize you when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900">
            What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your device that help websites
            function properly, improve performance, and enhance user experience.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900">
            How We Use Cookies
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To ensure the website works correctly</li>
            <li>To understand how users interact with our site</li>
            <li>To improve content, design, and performance</li>
            <li>To remember user preferences</li>
          </ul>

          <h2 className="text-2xl font-bold text-zinc-900">
            Types of Cookies We Use
          </h2>

          <div className="space-y-3">
            <p><b>Essential Cookies:</b> Required for basic site functionality.</p>
            <p><b>Analytics Cookies:</b> Help us understand site usage and improve performance.</p>
            <p><b>Preference Cookies:</b> Remember your settings and preferences.</p>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900">
            Managing Cookies
          </h2>
          <p>
            You can control or delete cookies through your browser settings.
            Disabling cookies may affect some parts of the website.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900">
            Updates to This Policy
          </h2>
          <p>
            We may update this Cookies Policy from time to time. Any changes will
            be posted on this page.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900">
            Contact Us
          </h2>
          <p>
            If you have questions about this Cookies Policy, contact us at:
            <br />
            <b>info@zenovagroup.com</b>
          </p>
        </section>
      </div>
    </div>
  )
}