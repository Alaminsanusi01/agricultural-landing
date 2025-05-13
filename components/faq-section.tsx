"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is sustainable agriculture?",
    answer:
      "Sustainable agriculture is a farming approach that aims to meet society's present food needs without compromising the ability of future generations to meet their own needs. It focuses on three main goals: environmental health, economic profitability, and social equity. This includes practices like crop rotation, reduced tillage, integrated pest management, and water conservation techniques.",
  },
  {
    question: "How do organic farming practices benefit the environment?",
    answer:
      "Organic farming benefits the environment in multiple ways: it reduces pollution from pesticides and fertilizers, conserves water, reduces soil erosion, increases soil fertility, and uses less energy. Organic practices also promote biodiversity by providing habitats for wildlife and beneficial insects, and help mitigate climate change by sequestering carbon in the soil.",
  },
  {
    question: "What irrigation systems are most water-efficient?",
    answer:
      "Drip irrigation is typically the most water-efficient system, delivering water directly to plant roots with minimal evaporation or runoff. Other efficient systems include micro-sprinklers, subsurface drip irrigation, and precision sprinklers with soil moisture sensors. The best system depends on your specific crops, soil type, climate, and water availability.",
  },
  {
    question: "How can I transition my conventional farm to organic?",
    answer:
      "Transitioning to organic farming typically takes 3 years, during which you must follow organic practices while your soil recovers from conventional methods. Start by developing a transition plan, including crop rotation strategies and natural pest management. Seek certification guidance from organizations like USDA or local organic associations. Consider transitioning in phases to manage risks and learn as you go.",
  },
  {
    question: "What government programs support sustainable farming?",
    answer:
      "Many governments offer programs supporting sustainable agriculture, including conservation grants, cost-sharing for implementing sustainable practices, tax incentives, certification assistance, and research funding. In the US, the USDA offers programs like the Environmental Quality Incentives Program (EQIP), Conservation Stewardship Program (CSP), and organic certification cost-share programs.",
  },
  {
    question: "How does climate change affect agricultural practices?",
    answer:
      "Climate change affects agriculture through increased temperatures, changing precipitation patterns, more frequent extreme weather events, and shifting growing seasons. Farmers are adapting by diversifying crops, improving water management, using drought-resistant varieties, implementing conservation practices, and exploring renewable energy. These adaptations help build resilience against climate uncertainties.",
  },
]

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>("item-0")

  return (
    <section className="w-full py-20 bg-white" id="faq">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 view-once:run-once">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
            <HelpCircle className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Find answers to common questions about sustainable agriculture and our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            value={openItem || undefined}
            onValueChange={(value) => setOpenItem(value)}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-green-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 text-green-800 hover:text-green-600 hover:no-underline">
                  <span className="text-left font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-green-700">
                  <div className="pt-2 animate-in fade-in slide-in-from-top-2 duration-300">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 [--animation-delay:600ms] view-once:run-once">
            <p className="text-green-700">
              Still have questions? Feel free to{" "}
              <a href="#contact" className="text-green-600 font-medium hover:underline">
                contact us
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
