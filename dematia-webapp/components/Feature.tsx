import React from 'react'
import { ArrowRight, CheckCircle, Zap } from 'lucide-react'

const Feature = () => {
  return (
<section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="p-3 rounded-full bg-purple-100">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Instant Answers</h3>
                <p className="text-sm text-gray-500">Get quick responses to your queries without leaving your current page.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="p-3 rounded-full bg-purple-100">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Smart Suggestions</h3>
                <p className="text-sm text-gray-500">Receive intelligent recommendations based on your browsing context.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="p-3 rounded-full bg-purple-100">
                  <ArrowRight className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Seamless Integration</h3>
                <p className="text-sm text-gray-500">Works smoothly with your favorite browsers and websites.</p>
              </div>
            </div>
          </div>
        </section>  )
}

export default Feature