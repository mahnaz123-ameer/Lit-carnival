import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, ArrowRight, Play, Sparkles } from 'lucide-react';
import CarnivalMask from './carnivalmask';
import litImage from '../../assets/hero1.png';
import litImage2 from '../../assets/hero2.png';
import litImage3 from '../../assets/hero3.png';

const HeroSection = ({ setCurrentPage, mousePosition }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [litImage, litImage2, litImage3];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image}
              alt={`East West University ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/95 via-orange-50/90 to-red-100/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-800/20 via-transparent to-amber-600/10"></div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-amber-400 scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Dynamic Mouse-Following Elements */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-amber-400/15 to-red-400/15 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Floating Animated Elements - Vintage Books and Literary Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 opacity-30 animate-float" style={{animationDelay: '2s'}}>
          <CarnivalMask size="w-24 h-20" className="rotate-12" />
        </div>
        <div className="absolute top-32 left-20 opacity-30 animate-float" style={{animationDelay: '2s'}}>
          <CarnivalMask size="w-24 h-20" className="rotate-12" />
        </div>
        
        {/* Vintage Stars */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 text-amber-600 opacity-40 animate-ping" style={{animationDelay: '1s'}}>✦</div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 text-red-600 opacity-30 animate-pulse" style={{animationDelay: '3s'}}>✧</div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 text-amber-700 opacity-25 animate-bounce" style={{animationDelay: '2s'}}>★</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Ultra-Modern Title */}
          <div className="mb-12 transform hover:scale-105 transition-all duration-700">
            <div className="relative">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none">
                <span className="bg-gradient-to-r from-amber-400 via-amber-600 to-red-600 bg-clip-text text-transparent drop-shadow-2xl">
                  EWU LIT-CARNIVAL
                </span>
              </h1>
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent tracking-[0.3em]">
                2025
              </div>
            </div>
          </div>
          
          {/* Vintage Date Badge */}
          <div className="inline-flex items-center space-x-6 bg-red-800/90 backdrop-blur-xl px-10 py-6 rounded-lg shadow-2xl mb-12 border-2 border-amber-600 hover:bg-red-700/90 transition-all duration-500 group">
            <Calendar className="w-10 h-10 text-amber-300 group-hover:scale-110 transition-transform" />
            <span className="text-2xl md:text-3xl font-bold text-amber-100" style={{fontFamily: 'serif'}}>
              OCTOBER 16, 2025
            </span>
          </div>
          
          {/* Literary Subtitle */}
          <h2 className="text-3xl md:text-5xl font-bold mb-10 animate-fade-in-up" style={{fontFamily: 'serif'}}>
            <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 bg-clip-text text-transparent">
              CALL FOR PARTICIPANTS
            </span>
          </h2>
          
          {/* Enhanced Description with Vintage Theme */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-amber-50/95 backdrop-blur-xl p-10 rounded-xl shadow-2xl border-2 border-red-800/30">
              <p className="text-xl md:text-2xl text-red-900 leading-relaxed" style={{fontFamily: 'serif'}}>
                The Department of English, <span className="font-bold text-red-800">East West University</span>, invites you to an extraordinary inter-university literary competition. 
                Join us in a <span className="font-bold bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">whirlwind of creativity, imagination, and artistic brilliance</span>—where literature comes alive through innovation.
              </p>
            </div>
          </div>
          
          {/* Vintage Literary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button 
              onClick={() => setCurrentPage('registration')}
              className="group relative px-16 py-6 bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-amber-100 font-bold text-xl rounded-lg shadow-2xl hover:shadow-red-800/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden border-2 border-amber-600"
            >
              <span className="relative z-10 flex items-center space-x-4" style={{fontFamily: 'serif'}}>
                <span>Register Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button 
              onClick={() => setCurrentPage('segments')}
              className="group px-16 py-6 bg-amber-100/90 backdrop-blur-xl text-red-800 border-2 border-red-800 font-bold text-xl rounded-lg shadow-xl hover:bg-amber-50 hover:border-red-700 transition-all duration-500 transform hover:-translate-y-2"
            >
              <span className="flex items-center space-x-4" style={{fontFamily: 'serif'}}>
                <BookOpen className="w-6 h-6" />
                <span>Explore Segments</span>
                <Play className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;