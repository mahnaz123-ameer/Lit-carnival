import React from 'react';
import { Sparkles } from 'lucide-react';
import CarnivalMask from './carnivalmask';

const FinalCTASection = ({ setCurrentPage }) => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Carnival masks - responsive positioning and sizing */}
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 opacity-15 sm:opacity-20 animate-float">
          <CarnivalMask size="w-16 h-12 sm:w-20 sm:h-16 lg:w-24 lg:h-20" />
        </div>
        <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 opacity-10 sm:opacity-15 animate-float" style={{animationDelay: '2s'}}>
          <CarnivalMask size="w-12 h-10 sm:w-16 sm:h-12 lg:w-20 lg:h-16" className="rotate-45" />
        </div>
        
        {/* Sparkles - responsive positioning and sizing */}
        <Sparkles className="absolute top-12 sm:top-20 right-1/4 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-orange-500 opacity-30 animate-ping" />
        <Sparkles className="absolute bottom-12 sm:bottom-20 left-1/4 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-500 opacity-25 animate-pulse" />
        
        {/* Background gradient - responsive sizing */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-amber-500/5 to-red-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-8 sm:mb-10 px-2 leading-tight">
            Ready to <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">Showcase Your Brilliance?</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-12 sm:mb-16 leading-relaxed px-4">
            Join hundreds of visionary minds in celebrating literature through groundbreaking performance, art, and imagination. 
            This is your moment to <span className="font-bold text-orange-600">shine on the literary stage</span>!
          </p>
          
          <div className="flex justify-center items-center px-4">
            <button 
              onClick={() => setCurrentPage('registration')}
              className="group relative w-full sm:w-auto px-12 sm:px-16 lg:px-20 py-5 sm:py-6 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white font-black text-lg sm:text-xl lg:text-2xl rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105 overflow-hidden max-w-md sm:max-w-none"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3 sm:space-x-4 lg:space-x-5">
                <CarnivalMask size="w-6 h-5 sm:w-8 sm:h-6 lg:w-10 lg:h-8" />
                <span>Join the Revolution!</span>
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;