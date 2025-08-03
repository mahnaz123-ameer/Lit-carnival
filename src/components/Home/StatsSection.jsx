import React from 'react';
import { Users, Globe, Star, Trophy } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Creative Participants", icon: <Users className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { number: "15+", label: "Partner Universities", icon: <Globe className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    { number: "5", label: "Competition Segments", icon: <Star className="w-6 h-6" />, color: "from-purple-500 to-violet-500" },
    { number: "50+", label: "Prestigious Awards", icon: <Trophy className="w-6 h-6" />, color: "from-amber-500 to-orange-500" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-purple-900/10 to-amber-900/10"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-110 transition-all duration-500">
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:shadow-xl group-hover:rotate-6 transition-all duration-500`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;