import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-2">Page Not Found</p>
            <p className="mb-6 text-center text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
            <Link 
                to="/" 
                className="bg-gray-900 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
            >
                Go Home
            </Link>
        </div>
  )
}

export default Error

