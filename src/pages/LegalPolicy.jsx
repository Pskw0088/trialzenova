import { Link } from "react-router-dom"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          ← Back to Home
        </Link>

        <h1 className="mt-6 text-4xl font-black">Privacy Policy</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-8 text-zinc-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold">1. Introduction</h2>
            <p className="mt-2">
              Zenova Group ("we", "our", "us") respects your privacy and is committed
              to protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">2. Information We Collect</h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Personal details such as name, email address, and phone number</li>
              <li>Payment-related information (processed securely via third-party gateways)</li>
              <li>Usage data like pages visited and interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold">3. How We Use Your Information</h2>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To process payments and enrollments</li>
              <li>To communicate updates, offers, or support</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold">4. Data Security</h2>
            <p className="mt-2">
              We implement industry-standard security measures to protect your data.
              However, no online system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">5. Third-Party Services</h2>
            <p className="mt-2">
              Payments and analytics may be handled by trusted third-party providers
              such as Razorpay. We are not responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">6. Your Rights</h2>
            <p className="mt-2">
              You may request access, correction, or deletion of your personal data
              by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold">7. Contact Us</h2>
            <p className="mt-2">
              For any privacy-related questions, contact us at:
              <br />
              <b>Email:</b> info@zenovagroup.com
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}