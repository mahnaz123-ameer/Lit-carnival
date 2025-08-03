import React from 'react';
import { Users, Globe, Star, Trophy } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { number: "100+", label: "Creative Participants", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-blue-500 to-cyan-500" },
    { number: "15+", label: "Partner Universities", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-green-500 to-emerald-500" },
    { number: "5", label: "Competition Segments", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-purple-500 to-violet-500" },
    { number: "50+", label: "Prestigious Awards", icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />, color: "from-amber-500 to-orange-500" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-purple-900/10 to-amber-900/10"></div>
      
      {/* Vertical lines - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 opacity-30 hidden lg:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </div>
             
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 sm:hover:scale-110 transition-all duration-500">
              <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:shadow-xl group-hover:rotate-3 sm:group-hover:rotate-6 transition-all duration-500`}>
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 font-semibold text-sm sm:text-base lg:text-lg px-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;