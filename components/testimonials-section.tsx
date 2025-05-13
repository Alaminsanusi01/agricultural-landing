"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Switching to sustainable farming methods has not only improved our crop yield but also reduced our overall costs. The support from the team has been invaluable.",
      name: "Sarah Johnson",
      role: "Organic Farmer, Iowa",
      avatar: "/image1.jpeg",
    },
    {
      quote:
        "The irrigation system recommended to us has cut our water usage by half while maintaining optimal soil moisture. I couldn't be happier with the results.",
      name: "Michael Rodriguez",
      role: "Vineyard Owner, California",
      avatar: "/image2.jpeg",
    },
    {
      quote:
        "As a small family farm, we were hesitant to try new methods. But the transition to organic practices has been smooth and the benefits to our land are already visible.",
      name: "Emma Thompson",
      role: "Family Farm Owner, Vermont",
      avatar: "/images3.jpeg",
    },
  ]

  return (
    <section className="w-full py-20 bg-green-50" id="about">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 view-once:run-once">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">What Our Farmers Say</h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Real stories from farmers who have transformed their operations with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: `float 6s ease-in-out infinite ${index * 1.5}s`,
              }}
            >
              <Card className="bg-white border-green-200 hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-2">
                <CardContent className="pt-6 relative">
                  <div className="absolute -top-6 -left-6 bg-green-100 rounded-full p-3 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <Quote className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="pt-4">
                    <p className="text-green-800 italic mb-6 relative">
                      <span className="text-4xl text-green-200 absolute -top-2 -left-2">"</span>
                      {testimonial.quote}
                      <span className="text-4xl text-green-200 absolute -bottom-6 -right-2">"</span>
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-green-100 pt-4 bg-green-50 rounded-b-lg">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 ring-2 ring-green-200 ring-offset-2 transition-all duration-300 hover:ring-green-400 animate-pulse">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-green-200 text-green-800">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-green-800">{testimonial.name}</p>
                      <p className="text-sm text-green-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
