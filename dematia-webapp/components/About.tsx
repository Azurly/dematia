import React from 'react'

const About = () => {
  return (
<section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                { q: "Is Demat IA free to use?", a: "Yes, Demat IA offers a free version with basic features. We also have premium plans for advanced capabilities." },
                { q: "Which browsers are supported?", a: "Demat IA currently supports Chrome, Firefox, and Edge. We're working on expanding to other browsers soon." },
                { q: "Is my data safe with Demat IA?", a: "Absolutely. We prioritize user privacy and do not store any personal browsing data. All interactions are processed in real-time." },
                { q: "Can I customize Demat IA's behavior?", a: "Yes, you can adjust settings to tailor Demat IA's suggestions and interactions to your preferences." },
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-bold">{faq.q}</h3>
                  <p className="text-gray-500">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>  )
}

export default About