import React from 'react';
import { BookOpen, Mail, MapPin, Calendar, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'segments', label: 'Segments' },
    { id: 'registration', label: 'Registration' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white">
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">EWU Lit-Carnival</h3>
                <p className="text-sm text-white">2025</p>
              </div>
            </div>
            <p className="text-white text-sm mb-4">
              Celebrating literature through creativity, performance, and imagination. Join us for an unforgettable experience of literary arts.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => setCurrentPage(link.id)}
                    className="text-white hover:text-white transition-colors text-sm block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-sm text-whitw">Email</p>
                  <p className="text-sm text-white">lit-carnival@ewubd.edu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-sm text-white">Venue</p>
                  <p className="text-sm text-white">East West University<br />Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                <div>
                  <p className="text-sm text-white">Phone</p>
                  <p className="text-sm text-white">+880-1234-567890</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Important Dates */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Important Dates</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Calendar className="w-4 h-4 mt-0.5 text-orange-400" />
                <div>
                  <p className="text-sm text-white">Registration Deadline</p>
                  <p className="text-sm text-white font-semibold">August 20, 2025</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="w-4 h-4 mt-0.5 text-green-400" />
                <div>
                  <p className="text-sm text-white">Event Date</p>
                  <p className="text-sm text-white font-semibold">October 16, 2025</p>
                </div>
              </div>
            </div>
            
            {/* Registration Fees */}
            <div className="mt-6">
              <h5 className="font-medium mb-2 text-sm">Registration Fees</h5>
              <div className="space-y-1 text-sm text-white">
                <p>Drama Team: <span className="text-white">Tk. 1000</span></p>
                <p>Other Segments: <span className="text-white">Tk. 200</span></p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-white">
                &copy; 2025 East West University Department of English. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-white">
                Designed with ❤️ for literary enthusiasts
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Balls */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 bg-opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 bg-opacity-10 rounded-full -ml-24 -mb-24"></div>
    </footer>
  );
};

export default Footer;