import React from 'react';
import { MapPin, Clock, Trophy } from 'lucide-react';
import CarnivalMask from './carnivalmask';



const QuickInfoSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 relative overflow-hidden">
      {/* Add floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      
      <div className="absolute inset-0 opacity-10">
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
          <div className="group bg-white/80 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-blue-200/50 hover:bg-white/90 hover:border-blue-300/70 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 shadow-lg hover:shadow-xl">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-4 sm:mb-6 text-red-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-blue-800">Venue</h3>
            <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              East West University<br />
              <span className="text-black ">Dhaka, Bangladesh</span>
            </p>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-blue-200/50 hover:bg-white/90 hover:border-blue-300/70 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 shadow-lg hover:shadow-xl">
            <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-4 sm:mb-6 text-red-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-blue-800">Registration Deadline</h3>
            <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              August 20, 2025<br />
              <span className="text-red-500 font-semibold">Don't miss out!</span>
            </p>
          </div>
          
          <div className="group bg-white/80 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-blue-200/50 hover:bg-white/90 hover:border-blue-300/70 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 shadow-lg hover:shadow-xl">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-4 sm:mb-6 text-red-700 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-blue-800">Recognition</h3>
            <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              Certificates<br />
              <span className="text-black ">for all participants</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfoSection;