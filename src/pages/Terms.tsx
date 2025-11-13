import SEO from '../components/SEO'

export default function Terms() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <SEO
        title="Terms & Conditions | TinyLapse"
        description="Read the Terms & Conditions for using TinyLapse app."
        canonicalUrl="https://tinylapse.app/terms"
      />

      <section className="section-container pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-400">Last updated: {currentDate}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Please read these Terms & Conditions carefully before using TinyLapse. By
                accessing or using the app, you agree to be bound by these terms.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By downloading, installing, or using TinyLapse, you agree to these Terms &
                Conditions. If you do not agree with any part of these terms, you may not
                use the app.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed">
                TinyLapse grants you a personal, non-exclusive, non-transferable license to
                use the app on your iOS device, subject to these Terms & Conditions.
              </p>
              <p className="text-gray-300 leading-relaxed">You may not:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Modify or copy the app</li>
                <li>Reverse engineer or attempt to extract the source code</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Transfer the app to another person or device without authorization</li>
                <li>Use the app for any commercial purposes without permission</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. User Accounts</h2>
              <p className="text-gray-300 leading-relaxed">
                TinyLapse uses your Apple ID and iCloud account for data synchronization.
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Maintaining the security of your Apple ID</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring you have sufficient iCloud storage</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Content Ownership</h2>
              <p className="text-gray-300 leading-relaxed">
                You retain all rights to the photos and videos you create using TinyLapse.
                We do not claim any ownership over your content. However, you are
                responsible for ensuring you have the right to photograph any individuals
                appearing in your photos.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Subscriptions and Payments</h2>
              <p className="text-gray-300 leading-relaxed">
                TinyLapse offers both free and premium features:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                  Subscriptions are managed through the Apple App Store and are subject to
                  Apple's terms
                </li>
                <li>
                  You will be charged through your Apple ID account at confirmation of
                  purchase
                </li>
                <li>
                  Subscriptions automatically renew unless auto-renew is turned off at
                  least 24 hours before the end of the current period
                </li>
                <li>Refunds are handled according to Apple's refund policy</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Limitations</h2>
              <p className="text-gray-300 leading-relaxed">
                TinyLapse is provided "as is" without warranties of any kind. We do not
                guarantee that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>The app will be error-free or uninterrupted</li>
                <li>All features will work on all devices</li>
                <li>Your data will never be lost (please backup important photos)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We are not liable for any damages resulting from the use or inability to
                use the app.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms & Conditions at any time. We
                will notify users of any material changes through the app or via email.
                Continued use of the app after changes constitutes acceptance of the new
                terms.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may terminate or suspend your access to TinyLapse immediately, without
                prior notice, if you breach these Terms & Conditions. Upon termination, you
                must cease all use of the app.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">9. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms & Conditions are governed by and construed in accordance with
                applicable laws. Any disputes shall be resolved in the appropriate
                jurisdiction.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                10. Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact
                us:
              </p>
              <p className="text-gray-300">
                Email:{' '}
                <a
                  href="mailto:support@tinylapse.app"
                  className="text-brand-green hover:text-brand-blue transition-colors"
                >
                  support@tinylapse.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

