import React from 'react'

const PeopleSay = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "Alice Johnson", comment: "Demat IA has revolutionized my web browsing. It's like having a knowledgeable friend always ready to help!" },
          { name: "Bob Smith", comment: "I love how Demat IA seamlessly integrates with my workflow. It's a real time-saver!" },
          { name: "Carol Davis", comment: "The smart suggestions are spot-on. Demat IA seems to know what I need before I do!" },
        ].map((testimonial, index) => (
          <div key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
            <p className="flex-1 text-gray-500">&quot;{testimonial.comment}&quot;</p>
            <p className="mt-4 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>  )
}

export default PeopleSay