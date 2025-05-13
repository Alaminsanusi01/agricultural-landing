"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Leaf className={`h-6 w-6 mr-2 ${isScrolled ? "text-green-700" : "text-white"}`} />
            <span className={`text-xl font-bold ${isScrolled ? "text-green-800" : "text-white"}`}>AgriSolutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Products", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-green-500 transition-colors ${
                  isScrolled ? "text-green-800" : "text-white"
                }`}
              >
                {item}
              </Link>
            ))}
            <Button className="bg-green-700 hover:bg-green-800">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-green-800" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-green-800" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-in slide-in-from-top duration-300 bg-white shadow-lg rounded-b-lg absolute left-0 right-0 top-full border-t border-green-100">
            <div className="flex flex-col space-y-4 p-4">
              {["Home", "About", "Services", "Products", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-green-800 hover:text-green-500 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-green-700 hover:bg-green-800 w-full mt-2">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
