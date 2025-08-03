import React from 'react';
import { MapPin, Clock, Trophy } from 'lucide-react';
import CarnivalMask from './carnivalmask';

const QuickInfoSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-600 via-red-700 to-orange-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        {/* Carnival masks - responsive positioning and sizing */}
        <div className="absolute top-8 sm:top-20 left-4 sm:left-20 animate-float">
          <CarnivalMask size="w-20 h-16 sm:w-32 sm:h-24 lg:w-40 lg:h-32" className="rotate-12" />
        </div>
        <div className="absolute bottom-8 sm:bottom-20 right-4 sm:right-20 animate-float" style={{animationDelay: '2s'}}>
          <CarnivalMask size="w-24 h-18 sm:w-36 sm:h-27 lg:w-48 lg:h-36" className="-rotate-12" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float hidden sm:block" style={{animationDelay: '4s'}}>
          <CarnivalMask size="w-20 h-15 sm:w-24 sm:h-18 lg:w-32 lg:h-24" className="rotate-45 opacity-50" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div className="group bg-black/20 backdrop-blur-2xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-black/30 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4">
            <MapPin className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mx-auto mb-6 sm:mb-8 text-yellow-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Venue</h3>
            <p className="text-yellow-100 text-base sm:text-lg lg:text-xl leading-relaxed">East West University<br />Dhaka, Bangladesh</p>
          </div>
          
          <div className="group bg-black/20 backdrop-blur-2xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-black/30 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4">
            <Clock className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mx-auto mb-6 sm:mb-8 text-yellow-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Registration Deadline</h3>
            <p className="text-yellow-100 text-base sm:text-lg lg:text-xl leading-relaxed">August 20, 2025<br />Don't miss out!</p>
          </div>
          
          <div className="group bg-black/20 backdrop-blur-2xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-black/30 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4">
            <Trophy className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 mx-auto mb-6 sm:mb-8 text-yellow-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Prizes & Recognition</h3>
            <p className="text-yellow-100 text-base sm:text-lg lg:text-xl leading-relaxed">Certificates & Awards<br />for all participants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfoSection;