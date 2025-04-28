import React from 'react'

const LandingFeature = () => {

    const features = [
        {
          title: 'End-to-End Authentication',
          description: 'Secure user login and data access using robust encryption and token-based authentication.',
          icon: '🔐',
        },
        {
          title: 'Compatible with All Devices',
          description: 'Access and edit your notes on mobile, tablet, or desktop with a fully responsive interface.',
          icon: '📱',
        },
        {
          title: 'Easy Note Management',
          description: 'Organize, search, and categorize notes effortlessly with an intuitive dashboard.',
          icon: '🗂️',
        },
      ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
        <p className="text-lg text-gray-600 mb-12">
          Everything you need to stay productive and organized, wherever you are.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4 grayscale">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LandingFeature
