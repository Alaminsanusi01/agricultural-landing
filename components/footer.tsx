import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-12 bg-green-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 view-once:run-once">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">AgriSolutions</span>
            </div>
            <p className="text-green-200">Sustainable agricultural solutions for a greener tomorrow</p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 [--animation-delay:100ms] view-once:run-once">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 [--animation-delay:200ms] view-once:run-once">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Organic Farming
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Irrigation Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Soil Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Crop Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Equipment Rental
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 [--animation-delay:300ms] view-once:run-once">
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-green-200 mb-4">Subscribe to our newsletter for the latest agricultural tips and news</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md text-green-800 w-full focus:ring-2 focus:ring-green-500 transition-all"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md whitespace-nowrap transition-all hover:translate-y-[-2px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-700 text-center text-green-200 animate-in fade-in duration-1000 view-once:run-once">
          <p>&copy; {new Date().getFullYear()} Developed by Alamin Tech</p>
        </div>
      </div>
    </footer>
  )
}
