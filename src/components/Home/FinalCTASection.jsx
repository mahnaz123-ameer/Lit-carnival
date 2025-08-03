import React from 'react';
import { Sparkles } from 'lucide-react';
import CarnivalMask from './carnivalmask';

const FinalCTASection = ({ setCurrentPage }) => {
  return (
    <section className="py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 opacity-20 animate-float">
          <CarnivalMask size="w-24 h-20" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-15 animate-float" style={{animationDelay: '2s'}}>
          <CarnivalMask size="w-20 h-16" className="rotate-45" />
        </div>
        <Sparkles className="absolute top-20 right-1/4 w-10 h-10 text-orange-500 opacity-30 animate-ping" />
        <Sparkles className="absolute bottom-20 left-1/4 w-8 h-8 text-red-500 opacity-25 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-red-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-10">
            Ready to <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">Showcase Your Brilliance?</span>
          </h2>
          <p className="text-2xl text-gray-700 mb-16 leading-relaxed">
            Join hundreds of visionary minds in celebrating literature through groundbreaking performance, art, and imagination. 
            This is your moment to <span className="font-bold text-orange-600">shine on the literary stage</span>!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button 
              onClick={() => setCurrentPage('registration')}
              className="group relative px-20 py-6 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white font-black text-2xl rounded-3xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-5">
                <CarnivalMask size="w-10 h-8" />
                <span>Join the Revolution!</span>
                <Sparkles className="w-8 h-8 group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;