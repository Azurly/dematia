import React from 'react'

const HowItWorks = () => {
  return (
<section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold">Install the Extension</h3>
                <p className="text-sm text-gray-500">Add Demat IA to your browser with just a few clicks.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold">Browse as Usual</h3>
                <p className="text-sm text-gray-500">Continue your normal web activities with Demat IA ready to assist.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold">Get Instant Help</h3>
                <p className="text-sm text-gray-500">Activate Demat IA whenever you need assistance or information.</p>
              </div>
            </div>
          </div>
        </section>  )
}

export default HowItWorks