import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'

interface Screenshot {
  image: string
  title: string
  description: string
}

export default function AppScreenshots() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const screenshotImages = ['/albumspage.PNG', '/videopage.PNG', '/videoeditorpage.PNG', '/accountpage.PNG']

  const screenshots: Screenshot[] = t.appScreenshots.screenshots.map((screenshot, index) => ({
    image: screenshotImages[index],
    title: screenshot.title,
    description: screenshot.description,
  }))

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const ref = scrollRef.current
    if (!ref) return

    const preventClick = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    ref.addEventListener('click', preventClick, true)
    return () => ref.removeEventListener('click', preventClick, true)
  }, [isDragging])

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.appScreenshots.title}{' '}
            <span className="gradient-text">{t.appScreenshots.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t.appScreenshots.subtitle}
          </p>
        </div>

        {/* Screenshots Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900/90 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-3 transition-all duration-300 hover:scale-110 hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-brand-green" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900/90 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-3 transition-all duration-300 hover:scale-110 hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-brand-green" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-12 pb-8 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              userSelect: isDragging ? 'none' : 'auto',
            }}
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center"
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* iPhone Mockup */}
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-brand-green/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Phone Frame */}
                    <div className="relative bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-900 dark:to-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-[3rem] p-3 sm:p-4 w-72 sm:w-80 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 dark:bg-black rounded-b-3xl z-10"></div>

                      {/* Screen */}
                      <div className="relative w-full bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                        <img
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center space-y-2 max-w-xs">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {screenshot.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
