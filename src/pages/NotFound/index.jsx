import React from 'react'
import { Link } from 'react-router-dom' // Si tu utilises React Router

export default function NotFound() {
  return (
    <div className="flex flex-col items-center mt-24 gap-16 h-screen text-center bg-green-page-background">
      <h1 className="text-9xl font-bold text-custom-gray-900">404</h1>
      <p className="text-2xl text-custom-gray-400 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-white bg-custom-green-300 rounded-lg transition-colors duration-300 hover:bg-custom-gray-900 hover:text-white"
      >
        Go back to Home
      </Link>
    </div>
  )
}
