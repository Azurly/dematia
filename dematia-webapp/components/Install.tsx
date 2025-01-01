import { Download } from 'lucide-react'
import React from 'react'

const Install = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white">
    <div className="container px-4 md:px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">Ready to Transform Your Browsing?</h2>
      <p className="mx-auto max-w-[600px] mb-8 text-purple-100">
        Join thousands of satisfied users and experience the power of AI-assisted web browsing.
      </p>
      <button className="bg-white text-purple-600 hover:bg-purple-100">
        Install Demat IA Now
        <Download className="ml-2 h-4 w-4" />
      </button>
    </div>
  </section>  )
}

export default Install