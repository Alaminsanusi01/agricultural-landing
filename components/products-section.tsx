"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Head from "next/head"

export function ProductsSection() {
  const products = [
    {
      name: "Organic Seeds",
      description: "Non-GMO, heirloom seeds for a variety of crops",
      image: "/organic seed.jpg",
      alt: "Collection of organic non-GMO heirloom seeds in sustainable packaging",
      slug: "organic-seeds",
      width: 800,
      height: 600,
    },
    {
      name: "Soil Enhancers",
      description: "Natural amendments to boost soil fertility and structure",
      image: "/soil enhances.jpg",
      alt: "Organic soil enhancers and natural fertilizers in eco-friendly containers",
      slug: "soil-enhancers",
      width: 800,
      height: 600,
    },
    {
      name: "Irrigation Systems",
      description: "Water-efficient drip and sprinkler solutions",
      image: "/irrigation systems.jpg",
      alt: "Modern water-efficient drip irrigation system installed in a garden",
      slug: "irrigation-systems",
      width: 800,
      height: 600,
    },
  ]

  const pageTitle = "Sustainable Agricultural Products | Organic Seeds, Soil Enhancers & Irrigation"
  const pageDescription =
    "Browse our featured sustainable agricultural products including organic non-GMO seeds, natural soil enhancers, and water-efficient irrigation systems."

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={products[0].image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={products[0].image} />
        <meta
          name="keywords"
          content="organic seeds, soil enhancers, irrigation systems, sustainable agriculture, non-GMO seeds, eco-friendly farming products"
        />
        <link rel="preload" href={products[0].image} as="image" />
      </Head>

      <section className="w-full py-20 bg-white" id="products" aria-label="Featured sustainable agricultural products">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 view-once:run-once">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Featured Products</h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Quality agricultural supplies designed with sustainability in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" itemScope itemType="https://schema.org/ItemList">
            {products.map((product, index) => (
              <div
                key={product.slug}
                className="flex flex-col items-center group animate-in fade-in slide-in-from-bottom-8 duration-700 view-once:run-once"
                style={{ animationDelay: `${index * 100}ms` }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.alt}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={index === 0 ? 85 : 80}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    itemProp="image"
                  />
                </div>
                <h3
                  className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors"
                  itemProp="name"
                >
                  {product.name}
                </h3>
                <p className="text-green-700 text-center mb-4" itemProp="description">
                  {product.description}
                </p>
                <Button
                  className="bg-green-700 hover:bg-green-700 transition-all duration-300 cursor-not-allowed opacity-80"
                  aria-label={`Learn more about ${product.name}`}
                  disabled
                >
                  Learn More
                </Button>

                <meta itemProp="url" content={`/products/${product.slug}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
