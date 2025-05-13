import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section className="w-full py-20 bg-white" id="contact">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 view-once:run-once">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Have questions about our agricultural solutions? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 view-once:run-once">
            <div className="flex items-start hover:translate-x-2 transition-transform duration-300">
              <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Visit Us</h3>
                <p className="text-green-700">
                  123 Farm Road
                  <br />
                  Greenfield, CA 95432
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start hover:translate-x-2 transition-transform duration-300">
              <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Call Us</h3>
                <p className="text-green-700">
                  +1 (555) 123-4567
                  <br />
                  Monday - Friday, 8am - 6pm
                </p>
              </div>
            </div>

            <div className="flex items-start hover:translate-x-2 transition-transform duration-300">
              <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Email Us</h3>
                <p className="text-green-700">
                  info@agrisolutions.com
                  <br />
                  support@agrisolutions.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-right-8 duration-700 view-once:run-once">
            <h3 className="text-xl font-semibold text-green-800 mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-green-800">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="border-green-200 focus:border-green-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-green-800">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="border-green-200 focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-green-800">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Message subject"
                  className="border-green-200 focus:border-green-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-green-800">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[120px] border-green-200 focus:border-green-500 transition-colors"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 transition-all duration-300 hover:translate-y-[-4px]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
