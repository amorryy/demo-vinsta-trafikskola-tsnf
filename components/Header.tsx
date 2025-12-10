'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-700">Vinsta Trafikskola</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Hem</a>
            <a href="#tjanster" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Tjänster</a>
            <a href="#kontakt" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Kontakt</a>
          </nav>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:01266163" className="flex items-center text-gray-600 hover:text-blue-700 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              01266163
            </a>
            <a href="mailto:info@vinstatrafikskola.se" className="flex items-center text-gray-600 hover:text-blue-700 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              info@vinstatrafikskola.se
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Hem</a>
              <a href="#tjanster" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Tjänster</a>
              <a href="#kontakt" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Kontakt</a>
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:01266163" className="flex items-center text-gray-600 hover:text-blue-700 transition-colors mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  01266163
                </a>
                <a href="mailto:info@vinstatrafikskola.se" className="flex items-center text-gray-600 hover:text-blue-700 transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  info@vinstatrafikskola.se
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}