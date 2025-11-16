import SEO from '../components/SEO'

export default function Privacy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <SEO
        title="Privacy Policy | TinyLapse"
        description="Learn about how TinyLapse protects your privacy and handles your data."
        canonicalUrl="https://tinylapse.app/privacy"
      />

      <section className="section-container pt-36 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: {currentDate}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                At TinyLapse, we take your privacy seriously. This Privacy Policy explains
                how we collect, use, and protect your information when you use our mobile
                application.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                1. Information We Collect
              </h2>
              <p className="text-gray-300 leading-relaxed">
                TinyLapse is designed with privacy in mind. We collect minimal information
                to provide you with the best experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                  <strong>Photos:</strong> All photos you capture are stored locally on
                  your device and synced to your personal iCloud account. We never have
                  access to your photos.
                </li>
                <li>
                  <strong>Album Data:</strong> Album names, dates, and settings are stored
                  on your device and iCloud.
                </li>
                <li>
                  <strong>Usage Data:</strong> We may collect anonymous usage statistics to
                  improve the app, such as feature usage and crash reports.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Provide and maintain the TinyLapse service</li>
                <li>Generate timelapse videos from your photos</li>
                <li>Send you reminder notifications (if enabled)</li>
                <li>Improve app performance and fix bugs</li>
                <li>Develop new features based on usage patterns</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                3. Data Storage and Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your photos and data are stored securely:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                  All photos are stored on your device and synced with your personal iCloud
                  account
                </li>
                <li>We use industry-standard encryption for data transmission</li>
                <li>We never store your photos on our servers</li>
                <li>
                  Your iCloud data is protected by Apple's security measures and your
                  Apple ID
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                You have the following rights regarding your data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Access and export your photos at any time</li>
                <li>Delete your albums and photos permanently</li>
                <li>Disable iCloud sync</li>
                <li>Turn off notifications and reminders</li>
                <li>Request deletion of any data we may have collected</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                TinyLapse uses the following third-party services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                  <strong>iCloud:</strong> For photo backup and sync (subject to Apple's
                  Privacy Policy)
                </li>
                <li>
                  <strong>Apple Analytics:</strong> For anonymous crash reports and usage
                  statistics
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                6. Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                While TinyLapse is used to capture photos of children, the app is designed
                for use by parents and guardians. We do not knowingly collect personal
                information from children under 13.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                7. Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of
                any changes by posting the new Privacy Policy in the app and updating the
                "Last updated" date.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
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

