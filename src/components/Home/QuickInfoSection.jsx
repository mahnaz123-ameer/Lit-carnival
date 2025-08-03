import React from 'react';
import { MapPin, Clock, Trophy } from 'lucide-react';
import CarnivalMask from './carnivalmask';

const QuickInfoSection = () => {
  return (
    <section className="py-9 bg-gradient-to-br from-amber-600 via-red-700 to-orange-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-float">
          <CarnivalMask size="w-40 h-32" className="rotate-12" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{animationDelay: '2s'}}>
          <CarnivalMask size="w-48 h-36" className="-rotate-12" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{animationDelay: '4s'}}>
          <CarnivalMask size="w-32 h-24" className="rotate-45 opacity-50" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="group bg-black/20 backdrop-blur-2xl p-12 rounded-3xl border border-white/20 hover:bg-black/30 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4">
            <MapPin className="w-10 h-10 mx-auto mb-8 text-yellow-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-3xl font-bold mb-6">Venue</h3>
            <p className="text-yellow-100 text-xl leading-relaxed">East West University<br />Dhaka, Bangladesh</p>
          </div>
          
          <div className="group bg-black/20 backdrop-blur-2xl p-12 rounded-3xl border border-white/20 hover:bg-black/30 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4">
            <Clock className="w-10 h-10 mx-auto mb-8 text-yellow-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-3xl font-bold mb-6">Registration Deadline</h3>
            <p className="text-yellow-100 text-xl leading-relaxed">August 20, 2025<br />Don't miss out!</p>
          </div>
          
          <div className="group bg-black/20 backdrop-blur-2xl p-12 rounded-3xl border border-white/20 hover:bg-black/30 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-4">
            <Trophy className="w-10 h-10 mx-auto mb-8 text-yellow-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-3xl font-bold mb-6">Prizes & Recognition</h3>
            <p className="text-yellow-100 text-xl leading-relaxed">Certificates & Awards<br />for all participants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfoSection;