import React from 'react'
import {  Download } from 'lucide-react'

export const Hero = () => {
  return (
<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Meet Demat IA: Your AI-Powered Web Assistant
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Enhance your browsing experience with intelligent assistance, right at your fingertips.
                </p>
              </div>
              <div className="space-x-4">
                <button className="bg-purple-600 hover:bg-purple-700">
                  Install Now
                  <Download className="ml-2 h-4 w-4" />
                </button>
                <button >Learn More</button>
              </div>
            </div>
          </div>
        </section>  )
}
