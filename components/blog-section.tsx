import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    title: "10 Sustainable Farming Practices for 2025",
    excerpt:
      "Discover the latest eco-friendly farming techniques that are revolutionizing agriculture while preserving our planet.",
    image: "/sustanable farming.jpg",
    date: "May 10, 2025",
    author: "Emma Johnson",
    category: "Sustainability",
  },
  {
    title: "The Future of Irrigation: Smart Water Management",
    excerpt: "How AI and IoT are transforming water usage in agriculture, reducing waste and increasing crop yields.",
    image: "/irrigation.jpeg",
    date: "May 5, 2025",
    author: "Michael Chen",
    category: "Technology",
  },
  {
    title: "Organic Pest Control: Natural Solutions for Farmers",
    excerpt: "Effective and environmentally friendly ways to manage pests without harmful chemicals.",
    image: "/natural solutions.jpg",
    date: "April 28, 2025",
    author: "Sarah Williams",
    category: "Organic Farming",
  },
]

export function BlogSection() {
  return (
    <section className="w-full py-20 bg-white" id="blog">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 [--animation-delay:200ms] view-once:run-once">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Stay updated with the latest agricultural insights, tips, and industry news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-green-200 bg-white overflow-hidden group hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700 [--animation-delay:400ms] view-once:run-once"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-green-800 group-hover:text-green-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-700 text-base mb-4">{post.excerpt}</CardDescription>
                <div className="flex items-center text-sm text-green-600 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 [--animation-delay:600ms] view-once:run-once">
          <Button className="bg-green-700 hover:bg-green-800">View All Articles</Button>
        </div>
      </div>
    </section>
  )
}
