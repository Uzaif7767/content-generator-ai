import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { howItWorks } from "@/data/howItWorks";
import { faqs } from "@/data/faqs";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import HeroSection from "./features/hero";

const Home: FC = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-xl relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-16 text-white">
            ✨ AI-Powered Features Content Creation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="relative group flex h-full">
                <div className="absolute inset-0 rounded-2xl border-[3px] border-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 animate-moving-border"></div>
                <div className="relative z-10 overflow-hidden border-2 border-white/30 group-hover:border-transparent transition-all duration-300 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 rounded-2xl p-6 flex flex-col justify-between h-full">
                  <div className="pt-6 text-center flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="text-primary text-5xl">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Dark Blur Background */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-black/40 pointer-events-none"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "10K", text: "Articles Generated", suffix: "+" },
              { number: "5M", text: "Words Written", suffix: "+" },
              { number: 98, text: "User Satisfaction", suffix: "%" },
              { number: "24/7", text: "AI Assistance", suffix: "" },
            ].map((item, index) => (
              <div key={index} className="card p-8 rounded-lg text-center bg-white/10 backdrop-blur-xl">
                <h3 className="text-5xl font-bold text-white">
                  {item.number}{item.suffix}
                </h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Dark Blur Background */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-black/40 pointer-events-none"></div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
            <p className="text-gray-300">Four simple steps to generate high-quality AI-powered content</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-black dark:text-gray-300 w-8 h-8">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-500">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-extrabold tracking-tighter text-center mb-12 mt-20 text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image width={40} height={40} src={testimonial.image} alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-muted/50" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-gray-300 italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">&quot;</span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">&quot;</span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-lg relative">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-gray-300">
              Find answers to common questions about our AI-powered content generation platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible className="w-full">
                <AccordionItem
                  value={`item-${index}`}
                  className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-lg shadow-lg overflow-hidden"
                >
                  <AccordionTrigger className="text-white px-4 py-3">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-4 py-3 max-h-60 overflow-y-auto">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="cmx-auto py-10 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Ready to Generate High-Quality AI Content?
            </h2>
            <p className="mx-auto max-w-[600px] text-blue-950 md:text-xl">
              Join creators and businesses using AI to generate compelling and unique content effortlessly.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="animate-bounce h-11 mt-5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Start Creating Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full bg-black backdrop-blur-lg py-16">
  <div className="max-w-screen-lg mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
      Have any questions or need support? We're here to help!
    </p>

    <form className="mt-8 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-md text-white focus:ring-2 focus:ring-primary" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-md text-white focus:ring-2 focus:ring-primary" />
      </div>
      <textarea placeholder="Your Message" className="w-full mt-4 px-4 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-md text-white focus:ring-2 focus:ring-primary h-32"></textarea>
      
      <button type="submit" className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        Send Message
      </button>
    </form>

    <div className="mt-8 text-gray-400">
      <p>Email: <a href="example.com" className="text-gray-700 hover:underline">uzaifsid83@gmail.com</a></p>
      <p>Phone: <a href="tel:+91 12345678" className="text-gray-700 hover:underline">tel:+91 7773006366</a></p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
