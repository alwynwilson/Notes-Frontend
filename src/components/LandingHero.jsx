import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../assets/Home.png'

const LandingHero = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between">
      
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Our Product,<br/> <span className='mt-30'>Your Productivity</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Experience the simplicity and focus.  Discover the features  that make your time worth.
          Easily create, manage, and access your personal notes with built-in authentication. Your thoughts, safely stored and always within reach.
        </p>
        <Link to='/signup'>
        <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Get Started
        </button>
        </Link>
        
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={Hero}
          alt="Product"
          className="max-w-full h-auto rounded shadow-2xl shadow-gray-900 grayscale"
        />
      </div>
    </div>
  </section>
  )
}

export default LandingHero
