import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Droplets, Sun, Wind, Sprout, Tractor } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      title: "Organic Farming",
      description: "Sustainable practices that preserve soil health and biodiversity",
    },
    {
      icon: <Droplets className="h-10 w-10 text-blue-600" />,
      title: "Water Conservation",
      description: "Smart irrigation systems that reduce water usage by up to 60%",
    },
    {
      icon: <Sun className="h-10 w-10 text-yellow-500" />,
      title: "Solar Powered",
      description: "Renewable energy solutions for farm operations and equipment",
    },
    {
      icon: <Wind className="h-10 w-10 text-teal-600" />,
      title: "Climate Resilient",
      description: "Crops and techniques designed to withstand changing weather patterns",
    },
    {
      icon: <Sprout className="h-10 w-10 text-green-500" />,
      title: "Seed Innovation",
      description: "Naturally developed seed varieties with higher yields and nutrition",
    },
    {
      icon: <Tractor className="h-10 w-10 text-green-700" />,
      title: "Modern Equipment",
      description: "Precision farming tools that maximize efficiency and minimize waste",
    },
  ]

  return (
    <section className="w-full py-20 bg-green-50" id="services">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 view-once:run-once">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Sustainable Agricultural Solutions</h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Our innovative approaches to farming combine traditional wisdom with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-green-200 bg-white hover:shadow-lg transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8 duration-700 [--animation-delay:200ms] view-once:run-once"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-green-800 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-700 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
