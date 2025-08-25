import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, ArrowRight, Play, Clock } from 'lucide-react';
import CarnivalMask from './carnivalmask';
import litImage from '../../assets/hero1.png';
import litImage2 from '../../assets/hero2.png';
import litImage3 from '../../assets/hero3.png';

const HeroSection = ({ setCurrentPage, mousePosition, navigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const images = [litImage, litImage2, litImage3];
  
  // Countdown Timer Logic
  useEffect(() => {
    const eventDate = new Date('2025-10-16T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Image Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle registration navigation
  const handleRegistrationClick = () => {
    // Option 1: If using React Router
    if (navigate) {
      navigate('/registration');
    }
    // Option 2: If using window.location
    else if (typeof window !== 'undefined') {
      window.location.href = '/registration';
    }
    // Option 3: Fallback to setCurrentPage if provided
    else if (setCurrentPage) {
      setCurrentPage('registration');
    }
  };

  // Handle segments navigation
  const handleSegmentsClick = () => {
    // Option 1: If using React Router
    if (navigate) {
      navigate('/segments');
    }
    // Option 2: If using window.location
    else if (typeof window !== 'undefined') {
      window.location.href = '/segments';
    }
    // Option 3: Fallback to setCurrentPage if provided
    else if (setCurrentPage) {
      setCurrentPage('segments');
    }
  };

  const CountdownCard = ({ value, label }) => (
    <div className="bg-amber-50/95 backdrop-blur-xl px-0.5 py-1 sm:px-3 sm:py-3 md:px-2 md:py-2 lg:px-3 lg:py-2 rounded sm:rounded-lg border border-red-900/60 sm:border-2 shadow-lg transform hover:scale-105 transition-all duration-300 flex-1 min-w-0 hover:bg-amber-100/95">
      <div className="text-xs sm:text-xl md:text-base lg:text-lg xl:text-xl font-black text-red-900 mb-0 sm:mb-1 leading-tight text-center" style={{fontFamily: 'serif'}}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-[6px] sm:text-[9px] md:text-[7px] lg:text-[8px] xl:text-[9px] font-bold text-red-700 uppercase tracking-tight leading-none text-center" style={{fontFamily: 'serif'}}>
        {label}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen lg:h-[1300px] flex flex-col overflow-hidden" style={{backgroundColor: '#F5E6D3'}}>
      {/* Background with Image Carousel - Reduced Overlay for Better Visibility */}
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
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Lighter vintage paper-like overlay - More transparent to show images */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, 
            rgba(245, 230, 211, 0.75) 0%,
            rgba(240, 220, 200, 0.65) 25%,
            rgba(235, 210, 185, 0.60) 50%,
            rgba(230, 200, 170, 0.70) 75%,
            rgba(245, 230, 211, 0.80) 100%)`
        }}></div>
        {/* Reduced warm vintage tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-red-100/15"></div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all duration-300 border-2 ${
              index === currentImageIndex 
                ? 'bg-red-900 border-red-900 scale-125 shadow-lg' 
                : 'bg-amber-100/70 border-red-900/40 hover:bg-amber-200/80 hover:border-red-900/60'
            }`}
          />
        ))}
      </div>

      {/* Dynamic Mouse-Following Elements - Vintage themed */}
      {mousePosition && (
        <div 
          className="hidden xl:block absolute w-96 h-96 bg-gradient-to-r from-amber-200/15 to-red-200/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 text-center relative z-10 py-8 sm:py-12 md:py-16 lg:py-16 xl:py-20 flex-1 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          {/* Vintage Carnival Title */}
          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-16 transform hover:scale-105 transition-all duration-700">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-2 sm:mb-4 lg:mb-6 tracking-tight leading-none">
                <span className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow-2xl" style={{fontFamily: 'serif'}}>
                  EWU LIT-CARNIVAL
                </span>
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-widest bg-gradient-to-r from-red-900 via-red-800 to-red-900 bg-clip-text text-transparent drop-shadow-2xl" style={{fontFamily: 'serif'}}>
                2025
              </div>
            </div>
          </div>
          
          {/* Vintage Date Badge */}
          <div className="inline-flex items-center space-x-3 sm:space-x-4 lg:space-x-4 bg-red-900/90 backdrop-blur-xl px-6 py-4 sm:px-8 sm:py-5 md:px-8 md:py-4 lg:px-10 lg:py-6 xl:px-12 xl:py-8 rounded-xl shadow-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-16 border-2 border-amber-200/60 hover:bg-red-800/90 transition-all duration-500 group">
            <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-amber-100 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="text-lg sm:text-xl md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-amber-100" style={{fontFamily: 'serif'}}>
              16 OCTOBER 2025
            </span>
          </div>

          {/* Countdown Timer - Better Mobile Spacing */}
          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-16 w-full">
            <div className="flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 text-red-900 mr-3 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl md:text-lg lg:text-2xl xl:text-3xl font-bold text-red-900" style={{fontFamily: 'serif'}}>
                Event Countdown
              </h3>
            </div>
            
            <div className="w-full px-1 sm:px-6 md:px-6 lg:px-8">
              <div className="max-w-[280px] sm:max-w-lg md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto">
                <div className="grid grid-cols-7 gap-0.5 sm:gap-2 md:gap-2 lg:gap-4 items-center">
                  <CountdownCard value={timeLeft.days} label="DAYS" />
                  <div className="text-center text-xs sm:text-xl md:text-base lg:text-xl xl:text-2xl font-black text-red-900 px-0.5">:</div>
                  <CountdownCard value={timeLeft.hours} label="HOURS" />
                  <div className="text-center text-xs sm:text-xl md:text-base lg:text-xl xl:text-2xl font-black text-red-900 px-0.5">:</div>
                  <CountdownCard value={timeLeft.minutes} label="MIN" />
                  <div className="text-center text-xs sm:text-xl md:text-base lg:text-xl xl:text-2xl font-black text-red-900 px-0.5">:</div>
                  <CountdownCard value={timeLeft.seconds} label="SEC" />
                </div>
              </div>
            </div>
          </div>
        
          {/* Enhanced Description with Better Mobile Layout */}
          <div className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-12 xl:mb-16 px-2">
            <div className="bg-amber-50/95 backdrop-blur-xl rounded-lg sm:rounded-xl shadow-2xl border-2 border-red-900/40 relative overflow-hidden">
              {/* Scrollable Content */}
              <div className="max-h-32 sm:max-h-48 md:max-h-48 lg:max-h-64 xl:max-h-80 2xl:max-h-96 overflow-y-auto p-4 sm:p-6 md:p-5 lg:p-8 xl:p-10 2xl:p-12 relative z-10 scrollbar-thin scrollbar-thumb-red-900/30 scrollbar-track-amber-100/50">
                <p className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-red-900 leading-relaxed" style={{fontFamily: 'serif'}}>
                  The Department of English, East West University, invites you to the EWU Lit-Carnival 2025: an inter-university literary competition rolling into our campus in a whirlwind of words, rhymes, and costumes. The Carnival aims to bring literature to life and make us imagine the classics anew.
                  University students from various disciplines across Bangladesh are encouraged to participate or attend; whether they are dreamers, performers, readers, artists, or poets, this is an opportunity for them to create, compose, and captivate.
                  The university premises will come alive with the festive spirit of the carnival, featuring themed stalls, visual installations, and interactive spaces that invite visitors to engage with arts and culture in myriad ways. Inspired by Mikhail Bakhtin's idea of the carnivalesque—a joyful, rule-breaking space, where hierarchies dissolve and creativity reigns—the carnival aims to celebrate literature in joyous ways and make participants reimagine the classics while spotlighting the creativity of our young ones.
                  It will feature various exciting inter-university events in which you can compete to showcase your skills in the creative arts. Join us for this magnificent celebration of literature, creativity, and academic excellence.
                </p>
              </div>
              
              {/* Scroll Indicator */}
              <div className="absolute bottom-2 sm:bottom-3 sm:right-3 right-2 text-red-900/40 text-sm sm:text-base lg:text-base animate-bounce z-20">
                ↓
              </div>
            </div>
          </div>
          
          {/* Better Mobile CTA Buttons */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-4 lg:gap-6 md:flex-row justify-center items-center px-4 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
            <button 
              onClick={handleRegistrationClick}
              className="group relative w-full md:w-auto md:flex-1 px-6 py-4 sm:px-7 sm:py-5 md:px-6 md:py-3 lg:px-10 lg:py-6 xl:px-12 xl:py-8 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-amber-100 font-bold text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl rounded-lg sm:rounded-xl shadow-2xl hover:shadow-red-900/50 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 overflow-hidden border-2 border-amber-200/60"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-3" style={{fontFamily: 'serif'}}>
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button 
              onClick={handleSegmentsClick}
              className="group w-full md:w-auto md:flex-1 px-6 py-4 sm:px-7 sm:py-5 md:px-6 md:py-3 lg:px-10 lg:py-6 xl:px-12 xl:py-8 bg-amber-50/95 backdrop-blur-xl text-red-900 border-2 border-red-900/60 font-bold text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl rounded-lg sm:rounded-xl shadow-xl hover:bg-amber-100/95 hover:border-red-900/80 transition-all duration-500 transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-3" style={{fontFamily: 'serif'}}>
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 flex-shrink-0" />
                <span>Explore Segments</span>
                <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;