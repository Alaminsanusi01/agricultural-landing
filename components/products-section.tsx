import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ProductsSection() {
  const products = [
    {
      name: "Organic Seeds",
      description: "Non-GMO, heirloom seeds for a variety of crops",
      image: "organic seed.jpg",
    },
    {
      name: "Soil Enhancers",
      description: "Natural amendments to boost soil fertility and structure",
      image: "/soil enhances.jpg",
    },
    {
      name: "Irrigation Systems",
      description: "Water-efficient drip and sprinkler solutions",
      image: "/irrigation systems.jpg",
    },
  ]

  return (
    <section className="w-full py-20 bg-white" id="products">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 view-once:run-once">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Featured Products</h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Quality agricultural supplies designed with sustainability in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center group animate-in fade-in slide-in-from-bottom-8 duration-700 [--animation-delay:200ms] view-once:run-once"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-green-700 text-center mb-4">{product.description}</p>
              <Button className="bg-green-700 hover:bg-green-800 transition-all duration-300 hover:translate-y-[-4px]">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
