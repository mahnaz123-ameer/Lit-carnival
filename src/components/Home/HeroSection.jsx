import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, ArrowRight, Play, Sparkles, Clock } from 'lucide-react';
import CarnivalMask from './carnivalmask';
import litImage from '../../assets/hero1.png';
import litImage2 from '../../assets/hero2.png';
import litImage3 from '../../assets/hero3.png';

const HeroSection = ({ setCurrentPage, mousePosition }) => {
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
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  const CountdownCard = ({ value, label }) => (
    <div className="bg-red-800/90 backdrop-blur-xl px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-6 lg:py-6 rounded-lg border-2 border-amber-600 shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-0 flex-1 max-w-[70px] sm:max-w-none">
      <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-amber-300 mb-1 leading-none" style={{fontFamily: 'serif'}}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-amber-100 uppercase tracking-wider leading-none" style={{fontFamily: 'serif'}}>
        {label}
      </div>
    </div>
  );

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
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/95 via-orange-50/90 to-red-100/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-800/20 via-transparent to-amber-600/10"></div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-amber-400 scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Dynamic Mouse-Following Elements - Hidden on mobile and tablet */}
      <div 
        className="hidden xl:block absolute w-96 h-96 bg-gradient-to-r from-amber-400/15 to-red-400/15 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Floating Animated Elements - Responsive positioning and sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-amber-600 opacity-40 animate-ping" style={{animationDelay: '1s'}}>✦</div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 text-red-600 opacity-30 animate-pulse" style={{animationDelay: '3s'}}>✧</div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-10 lg:h-10 text-amber-700 opacity-25 animate-bounce" style={{animationDelay: '2s'}}>★</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Ultra-Modern Title - Enhanced responsive text sizes */}
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 transform hover:scale-105 transition-all duration-700">
            <div className="relative">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-3 sm:mb-4 md:mb-6 tracking-tighter leading-none">
                <span className="bg-red-700 bg-clip-text text-transparent drop-shadow-2xl">
                  EWU LIT-CARNIVAL
                </span>
              </h1>
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent tracking-widest sm:tracking-[0.2em] md:tracking-[0.3em]">
                2025
              </div>
            </div>
          </div>
          
          {/* Vintage Date Badge - Enhanced mobile responsive */}
          <div className="inline-flex items-center space-x-2 sm:space-x-4 md:space-x-6 bg-red-800/90 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 rounded-lg shadow-2xl mb-6 sm:mb-8 md:mb-10 border-2 border-amber-600 hover:bg-red-700/90 transition-all duration-500 group">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-amber-300 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-amber-100" style={{fontFamily: 'serif'}}>
              OCTOBER 16, 2025
            </span>
          </div>

          {/* Countdown Timer - Enhanced responsive design */}
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-800 mr-2 sm:mr-3 flex-shrink-0" />
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-800" style={{fontFamily: 'serif'}}>
                Event Countdown
              </h3>
            </div>
            
            <div className="flex justify-center items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
              <CountdownCard value={timeLeft.days} label="Days" />
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-red-800 px-1">:</div>
              <CountdownCard value={timeLeft.hours} label="Hours" />
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-red-800 px-1">:</div>
              <CountdownCard value={timeLeft.minutes} label="Minutes" />
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-red-800 px-1">:</div>
              <CountdownCard value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
          
          {/* Literary Subtitle - Enhanced responsive text */}
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-5 sm:mb-6 md:mb-8 lg:mb-10 animate-fade-in-up px-2" style={{fontFamily: 'serif'}}>
            <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 bg-clip-text text-transparent">
              CALL FOR PARTICIPANTS
            </span>
          </h2>
          
          {/* Enhanced Description with Vintage Theme - Better mobile optimization */}
          <div className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
            <div className="bg-amber-50/95 backdrop-blur-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl shadow-2xl border-2 border-red-800/30">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-red-900 leading-relaxed" style={{fontFamily: 'serif'}}>
                The Department of English, <span className="font-bold text-red-800">East West University</span>, invites you to the EWU Lit-Carnival 2025: an inter-university literary competition rolling into our campus in a whirlwind of words, rhymes, and costumes.  
                 University students from various disciplines across Bangladesh are encouraged to participate or attend; whether they are dreamers, performers, readers, artists, or poets, this is an opportunity for them to create, compose, and captivate.
              </p>
            </div>
          </div>
          
          {/* Vintage Literary CTA Buttons - Enhanced responsive design */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 md:flex-row justify-center items-center px-4 max-w-4xl mx-auto">
            <button 
              onClick={() => setCurrentPage('registration')}
              className="group relative w-full md:w-auto md:flex-1 md:max-w-xs lg:max-w-sm px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-5 xl:px-16 xl:py-6 bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-amber-100 font-bold text-base sm:text-lg md:text-xl rounded-lg shadow-2xl hover:shadow-red-800/50 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2 lg:hover:-translate-y-3 hover:scale-105 overflow-hidden border-2 border-amber-600"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4" style={{fontFamily: 'serif'}}>
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button 
              onClick={() => setCurrentPage('segments')}
              className="group w-full md:w-auto md:flex-1 md:max-w-xs lg:max-w-sm px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-5 xl:px-16 xl:py-6 bg-amber-100/90 backdrop-blur-xl text-red-800 border-2 border-red-800 font-bold text-base sm:text-lg md:text-xl rounded-lg shadow-xl hover:bg-amber-50 hover:border-red-700 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <span className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4" style={{fontFamily: 'serif'}}>
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span>Explore Segments</span>
                <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;