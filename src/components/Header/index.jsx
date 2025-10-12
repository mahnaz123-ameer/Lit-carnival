import React, { useState } from 'react';
import { BookOpen, Menu, X, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import mask from '../../assets/mask.png';


// Mask Component using imported image
const CarnivalMask = ({ className = "", size = "w-8 h-8", animated = false }) => (
  <img 
    src={mask} 
    alt="Carnival Mask" 
    className={`${size} ${className} ${animated ? 'animate-pulse' : ''} object-contain`}
  />
);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { id: '/', label: 'Home', path: '/' },
    { id: 'segments', label: 'Segments', path: '/segments' },
    { id: 'programmeshedule', label: 'Programme Schedule', path: '/programmeshedule' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'sponsers', label: 'Sponsors', path: '/sponsers' },
    { id: 'contact', label: 'Contact', path: '/contact' },  
    { id: 'registration', label: 'Registration', path: '/registration' }
    
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Enhanced top accent with carnival colors */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-amber-500 via-red-500 via-amber-400 to-red-600 animate-pulse"></div>
      
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-red-100 relative overflow-hidden">
        {/* Enhanced floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated carnival masks */}
          <div className="absolute top-2 right-16 opacity-40 transform hover:scale-110 transition-all duration-300">
            <CarnivalMask size="w-12 h-10" animated={true} />
          </div>
          <div className="absolute top-4 right-1/4 opacity-30 transform rotate-12">
            <CarnivalMask size="w-8 h-6" className="animate-bounce" />
          </div>
          
          {/* Sparkling elements */}
          <div className="absolute top-3 left-1/3 text-amber-400 opacity-25">
            <Sparkles className="w-4 h-4 animate-ping" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute top-6 right-1/3 text-red-300 opacity-20">
            <Sparkles className="w-3 h-3 animate-pulse" style={{ animationDelay: '2.5s' }} />
          </div>
          
          {/* Book icon */}
          <div className="absolute bottom-1 right-1/4 text-red-300 opacity-25">
            <BookOpen className="w-5 h-5 animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          {/* Floating confetti-like elements */}
          <div className="absolute top-8 left-2/3 w-2 h-2 bg-amber-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-12 right-1/5 w-1.5 h-1.5 bg-red-500 rounded-full opacity-25 animate-ping" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section - Fixed positioning */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-amber-50 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="w-full h-full relative z-10 p-1 flex items-center justify-center bg-white rounded-full border border-red-100">
                  <img 
                    src={logo} 
                    alt="EWU Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="block group cursor-pointer" onClick={() => handleNavClick('/')}>
                  <h1 className="text-lg md:text-lg font-bold bg-gradient-to-r from-red-700 to-red-600 bg-clip-text text-transparent leading-tight group-hover:from-red-600 group-hover:to-red-500 transition-all duration-300">
                     Foodi Presents <br></br>  EWU LIT-CARNIVAL 2025
                  </h1>
                  {/* <div className="flex items-center space-x-2 mt-0.5">
                    <CarnivalMask size="w-5 h-4" className="transform group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm text-red-600 font-medium">
                      2025
                    </p>
                    <div className="w-4 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-full"></div>
                  </div> */}
                </div>
              </div>
            </div>
                     
            {/* Enhanced Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-4 py-2.5 rounded-xl transition-all duration-300 font-medium relative overflow-hidden group ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-200 transform scale-105'
                      : 'text-red-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-200 hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {item.label === 'Home'}
                    <span>{item.label}</span>
                  </span>
                  {!isActive(item.path) && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-red-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 rounded-xl"></div>
                    </>
                  )}
                </button>
              ))}
            </nav>
                     
            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-red-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 rounded-xl transition-all duration-300 border border-red-200 hover:border-red-600 hover:shadow-lg relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-red-500 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                {mobileMenuOpen ? <X className="w-5 h-5 relative z-10" /> : <Menu className="w-5 h-5 relative z-10" />}
              </button>
            </div>
          </div>
                 
          {/* Enhanced Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-3 backdrop-blur-md bg-white/90 rounded-2xl shadow-xl border border-red-100 relative overflow-hidden">
              {/* Decorative elements for mobile menu */}
              <div className="absolute top-2 right-4 opacity-20">
                <CarnivalMask size="w-6 h-5" />
              </div>
              <div className="absolute bottom-2 left-4 opacity-15">
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>
              
              <nav className="flex flex-col space-y-1 relative z-10">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.path)}
                    className={`px-4 py-2.5 text-left rounded-xl transition-all duration-300 font-medium mx-2 flex items-center space-x-3 w-full ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md transform scale-105'
                        : 'text-red-700 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:scale-105'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label === 'Home'}
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
        
        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50"></div>
      </header>
    </>
  );
};

export default Header;