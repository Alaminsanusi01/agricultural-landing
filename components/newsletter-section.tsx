"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Send, Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    // Simulate API call
    setStatus("loading")

    setTimeout(() => {
      // Simulate successful subscription
      setStatus("success")
      setEmail("")

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    }, 1500)
  }

  return (
    <section className="w-full py-20 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-green-700 p-8 md:p-12 flex items-center">
              <div className="animate-in fade-in slide-in-from-left-8 duration-700 view-once:run-once">
                <div className="inline-block p-3 bg-green-600 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-green-100 mb-6">
                  Subscribe to our newsletter for the latest agricultural tips, industry news, and exclusive offers.
                </p>
                <ul className="space-y-2 text-green-100">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-300" />
                    <span>Monthly agricultural insights</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-300" />
                    <span>Seasonal farming tips</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-300" />
                    <span>Early access to new products</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-300" />
                    <span>Exclusive subscriber discounts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="animate-in fade-in slide-in-from-right-8 duration-700 view-once:run-once">
                <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Join Our Newsletter</h3>
                <p className="text-green-700 mb-6">
                  Enter your email below to join our community of sustainable farmers and agricultural enthusiasts.
                </p>

                {status === "success" ? (
                  <Alert className="bg-green-50 border-green-200 text-green-800 animate-in fade-in zoom-in duration-300">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                      Thank you for subscribing to our newsletter. You'll start receiving updates soon!
                    </AlertDescription>
                  </Alert>
                ) : status === "error" ? (
                  <Alert className="bg-red-50 border-red-200 text-red-800 animate-in fade-in zoom-in duration-300">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-green-800">
                        Email Address
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pr-12 border-green-200 focus:border-green-500 transition-colors"
                          disabled={status === "loading"}
                        />
                        <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300 hover:translate-y-[-4px] group"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Subscribe <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-green-600 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
