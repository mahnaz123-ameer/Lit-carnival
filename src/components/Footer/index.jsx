import React from 'react';
import { BookOpen, Mail, MapPin, Calendar, Phone, Facebook } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/segments', label: 'Segments' },
    { path: '/registration', label: 'Registration' },
    { path: '/about', label: 'About Us' },
    { path: '/sponsers', label: 'Sponsers' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 relative">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4 sm:mb-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm sm:text-xl md:text-lg font-bold leading-tight">Foodi Presents <br></br> EWU Lit-Carnival</h3>
                <p className="text-sm sm:text-base text-white font-medium">2025</p>
              </div>
            </div>
            <p className="text-white text-sm sm:text-base mb-4 sm:mb-6 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Celebrating literature through creativity, performance, and imagination. Join us for an unforgettable experience of literary arts.
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-md touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg text-yellow-200">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <a 
                    href={link.path}
                    className="text-white hover:text-yellow-200 transition-all duration-300 text-sm sm:text-base block w-full text-center lg:text-left py-2 sm:py-1 hover:underline hover:translate-x-1 transform transition-transform touch-manipulation"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg text-yellow-200">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              
              {/* Email */}
              <div className="flex items-start justify-center lg:justify-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-blue-300 flex-shrink-0" />
                <div className="text-center lg:text-left min-w-0">
                  <p className="text-sm sm:text-base text-yellow-100 font-medium mb-1">Email</p>
                  <a 
                    href="mailto:lit-carnival@ewubd.edu" 
                    className="text-sm sm:text-base text-white hover:text-yellow-200 transition-colors break-all touch-manipulation"
                  >
                    lit-carnival@ewubd.edu
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start justify-center lg:justify-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-blue-300 flex-shrink-0" />
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base text-yellow-100 font-medium mb-1">Venue</p>
                  <p className="text-sm sm:text-base text-white leading-relaxed">
                    East West University<br />
                    <span className="text-gray-200">Dhaka, Bangladesh</span>
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start justify-center lg:justify-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-blue-300 flex-shrink-0" />
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base text-yellow-100 font-medium mb-1">Phone</p>
                  <a 
                    href="tel:09666775577" 
                    className="text-sm sm:text-base text-white hover:text-yellow-200 transition-colors touch-manipulation"
                  >
                    09666775577 Ext: 316
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Important Dates & Fees */}
          <div className="text-center lg:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg text-yellow-200">Important Dates</h4>
            
            {/* Dates */}
            <div className="space-y-3 mb-4 sm:mb-6">
              <div className="flex items-start justify-center lg:justify-start space-x-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-orange-300 flex-shrink-0" />
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base text-orange-100 mb-1">Registration Deadline</p>
                  <p className="text-sm sm:text-base text-white font-semibold">September 05, 2025</p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start space-x-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-green-300 flex-shrink-0" />
                <div className="text-center lg:text-left">
                  <p className="text-sm sm:text-base text-green-100 mb-1">Event Date</p>
                  <p className="text-sm sm:text-base text-white font-semibold">October 16, 2025</p>
                </div>
              </div>
            </div>
            
            {/* Registration Fees */}
            <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <h5 className="font-medium mb-3 text-sm sm:text-base text-yellow-200">Registration Fees</h5>
              <div className="space-y-2 text-sm sm:text-base text-white">
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Drama Team:</span>
                  <span className="text-yellow-300 font-semibold">Tk. 1000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Other Segments:</span>
                  <span className="text-yellow-300 font-semibold">Tk. 200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white border-opacity-20 mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="order-2 sm:order-1">
              <p className="text-sm sm:text-base text-gray-200">
                &copy; 2025 Department of English, East West University . All rights reserved.
              </p>
            </div>
            <div className="order-1 sm:order-2">
              <p className="text-sm sm:text-base text-gray-200">
               Developed by <strong> Mahnaz Ameer </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements - Responsive */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-yellow-400 bg-opacity-10 rounded-full -mr-12 sm:-mr-16 md:-mr-20 lg:-mr-24 xl:-mr-32 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-48 xl:h-48 bg-orange-400 bg-opacity-10 rounded-full -ml-10 sm:-ml-12 md:-ml-16 lg:-ml-18 xl:-ml-24 -mb-10 sm:-mb-12 md:-mb-16 lg:-mb-18 xl:-mb-24 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-400 bg-opacity-5 rounded-full animate-bounce delay-500"></div>
      <div className="absolute top-1/4 right-1/3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-pink-400 bg-opacity-5 rounded-full animate-bounce delay-700"></div>
    </footer>
  );
};

export default Footer;