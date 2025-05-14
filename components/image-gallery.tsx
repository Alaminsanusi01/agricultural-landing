"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Head from "next/head"

const galleryImages = [
  { src: "/tech6.png", alt: "Aerial view of organic farm fields", category: "Farms" },
  { src: "/tech7.png", alt: "Close-up of wheat crop", category: "Crops" },
  { src: "/image4.jpeg", alt: "Modern irrigation system in action", category: "Technology" },
  { src: "/tech1.jpeg", alt: "Farmer inspecting organic vegetables", category: "Organic" },
  { src: "/tech2.jpeg", alt: "Sustainable greenhouse operation", category: "Sustainability" },
  { src: "/tech3.jpeg", alt: "Farm equipment working in field", category: "Equipment" },
  { src: "/tech4.jpeg", alt: "Harvesting organic fruits", category: "Harvest" },
  { src: "/image6.jpeg", alt: "Soil testing and analysis", category: "Science" },
]

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null)
  const [filter, setFilter] = useState("All")
  const [visibleImages, setVisibleImages] = useState<Record<number, boolean>>({})
  const imageRefs = useRef<Array<HTMLDivElement | null>>([])

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const galleryTitle = "Agricultural Image Gallery | Farm & Sustainable Practices"
  const galleryDescription =
    "Explore our collection of high-quality agricultural images showcasing organic farms, sustainable practices, modern equipment, and technological innovations in farming."

  // Lazy load logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            if (!isNaN(index)) {
              setVisibleImages((prev) => ({ ...prev, [index]: true }))
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { root: null, rootMargin: "100px", threshold: 0.1 }
    )

    imageRefs.current = imageRefs.current.slice(0, filteredImages.length)

    imageRefs.current.forEach((ref, index) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [filteredImages])

  const handleImageClick = (image: typeof galleryImages[0]) => {
    const preload = new Image()
    preload.src = image.src
    setSelectedImage(image)
  }

  return (
    <>
      <Head>
        <title>{galleryTitle}</title>
        <meta name="description" content={galleryDescription} />
        <meta property="og:title" content={galleryTitle} />
        <meta property="og:description" content={galleryDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={galleryImages[0].src} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={galleryTitle} />
        <meta name="twitter:description" content={galleryDescription} />
        <meta name="twitter:image" content={galleryImages[0].src} />
        <meta
          name="keywords"
          content="agricultural images, farm gallery, sustainable farming, organic agriculture, farming technology, agricultural equipment"
        />
        <link rel="preload" href={filteredImages[0]?.src} as="image" />
        {filteredImages[1] && <link rel="preload" href={filteredImages[1].src} as="image" />}
      </Head>

      <section className="w-full py-20 bg-white" id="gallery" aria-label="Agricultural image gallery">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 view-once:run-once">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Image Gallery</h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Explore our collection of agricultural images showcasing our farms, products, and sustainable practices
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setFilter(category)
                  setVisibleImages({})
                }}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === category ? "bg-green-700 text-white" : "bg-green-100 text-green-800 hover:bg-green-200"
                }`}
                role="tab"
                aria-selected={filter === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="gallery-images">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                data-index={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleImageClick(image)}
                tabIndex={0}
                role="button"
                aria-label={`View larger image of ${image.alt}`}
                onKeyDown={(e) => e.key === "Enter" && handleImageClick(image)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 z-10" />
                {(visibleImages[index] || index < 4) && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading={index < 4 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={index < 4 ? 85 : 75}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <p className="text-white text-sm">{image.alt}</p>
                  <span className="text-xs text-green-200 mt-1 inline-block">{image.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Dialog */}
          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
              <div className="relative aspect-[4/3] w-full">
                {selectedImage && (
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    priority
                    quality={90}
                  />
                )}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Close image preview"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              {selectedImage && (
                <div className="bg-white p-4 rounded-b-lg">
                  <h3 className="text-lg font-medium text-green-800">{selectedImage.alt}</h3>
                  <p className="text-sm text-green-600">{selectedImage.category}</p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  )
}
