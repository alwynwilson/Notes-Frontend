import React from "react";

const LandingFooter = () => {
  return(
<footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">KeyNOtes</h2>
            <p className="text-sm text-gray-400">
              Organize your thoughts, keep track of ideas, and boost your productivity — all in one place.
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#download" className="hover:text-white">Download</a></li>
              <li><a href="#demo" className="hover:text-white">Live Demo</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#docs" className="hover:text-white">Documentation</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#feedback" className="hover:text-white">Give Feedback</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} KeyNOtes. All rights reserved.
        </div>
      </div>
    </footer>
  )
  
}

export default LandingFooter;
