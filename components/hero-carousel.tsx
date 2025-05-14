"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Head from "next/head"

const carouselImages = [
  {
    src: "/hero1.jpg",
    alt: "Lush green farm field with crops",
    title: "Growing a Better Tomorrow",
    description: "Sustainable agricultural solutions for farmers who care about the future of our planet",
  },
  {
    src: "/new hero 2.jpeg",
    alt: "Modern farming equipment in action",
    title: "Modern Farming Technology",
    description: "Cutting-edge equipment and techniques to maximize your farm's productivity",
  },
  {
    src: "/hero3.jpeg",
    alt: "Organic produce freshly harvested",
    title: "Organic Farming Solutions",
    description: "Grow healthier, more nutritious crops while preserving the environment",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState([false, false, false])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))
  }

  // Preload the next image when the current slide changes
  useEffect(() => {
    const nextSlideIndex = currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1
    
    // Create a new temporary image object to preload the next image
    if (!imagesLoaded[nextSlideIndex]) {
      const img = new window.Image()
      img.src = carouselImages[nextSlideIndex].src
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev]
          newState[nextSlideIndex] = true
          return newState
        })
      }
    }
  }, [currentSlide, imagesLoaded])

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  // SEO metadata
  const pageTitle = "Agricultural Solutions | Modern Farming Technology"
  const pageDescription = "Discover sustainable agricultural solutions, modern farming technology, and organic farming practices for a greener tomorrow."

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={carouselImages[0].src} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={carouselImages[0].src} />
        <meta name="keywords" content="sustainable agriculture, modern farming, agricultural solutions, organic farming, farm technology" />
        <link rel="preload" href={carouselImages[0].src} as="image" />
      </Head>

      <section 
        className="relative w-full h-[90vh] overflow-hidden" 
        id="home"
        aria-label="Hero showcase of agricultural solutions"
      >
        {/* Carousel Images */}
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0 || index === 1} // Prioritize first two slides
              sizes="100vw" // Hero image takes full viewport width
              quality={90} // Higher quality for hero images
              onLoad={() => {
                if (!imagesLoaded[index]) {
                  setImagesLoaded(prev => {
                    const newState = [...prev]
                    newState[index] = true
                    return newState
                  })
                }
              }}
            />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                {carouselImages[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                {carouselImages[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg"
                  aria-label="Explore our agricultural solutions"
                >
                  Explore Solutions
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
                  aria-label="Learn more about our farming technology"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2" role="tablist">
          {carouselImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white w-6" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}: ${image.title}`}
              aria-selected={index === currentSlide}
              role="tab"
            />
          ))}
        </div>
      </section>
    </>
  )
}