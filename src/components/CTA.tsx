export default function CTA() {
  return (
    <section className="section-container">
      <div className="bg-gradient-to-b from-accent/5 to-transparent border border-gray-800 rounded-3xl p-12 md:p-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Start Capturing Memories Today
          </h2>
          <p className="text-lg text-gray-300">
            Download TinyLapse and never miss a moment of your baby's precious growth
            journey.
          </p>
          <div className="pt-4">
            <a
              href="https://apps.apple.com/app/tinylapse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img 
                src="/download_badge.png" 
                alt="Download on the App Store" 
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </div>
          <p className="text-sm text-gray-500">Available on iOS 18.0 or later</p>
        </div>
      </div>
    </section>
  )
}

