import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { ImageGallery } from "@/components/image-gallery"
import { NewsletterSection } from "@/components/newsletter-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WeatherWidget } from "@/components/weather-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <div className="container px-4 md:px-6 py-10">
        <WeatherWidget />
      </div>
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
      <ImageGallery />
      <BlogSection />
      <NewsletterSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
