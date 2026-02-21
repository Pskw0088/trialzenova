import { Link } from "react-router-dom"

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-black">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Effective from {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-zinc-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using Zenova Group services, you agree to be bound
              by these Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">2. Services</h2>
            <p className="mt-2">
              Zenova Group provides services across health and education domains.
              Course access, content, and pricing may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">3. Payments & Refunds</h2>
            <p className="mt-2">
              All payments are processed securely. Once a course is purchased,
              refunds are not guaranteed unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">4. User Responsibilities</h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>You must provide accurate information</li>
              <li>You may not misuse or redistribute course content</li>
              <li>You are responsible for maintaining account security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold">5. Intellectual Property</h2>
            <p className="mt-2">
              All content, branding, and materials belong to Zenova Group and may
              not be copied or redistributed without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">6. Limitation of Liability</h2>
            <p className="mt-2">
              Zenova Group is not liable for indirect or incidental damages arising
              from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">7. Governing Law</h2>
            <p className="mt-2">
              These terms are governed by the laws of India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">8. Contact</h2>
            <p className="mt-2">
              For any questions regarding these terms:
              <br />
              <b>Email:</b> info@zenovagroup.com
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}