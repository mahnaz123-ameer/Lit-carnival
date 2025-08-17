import React from 'react';
import { Mic, BookOpen, CalendarDays, Award, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "Creative Showcase",
      description: "Take the stage in drama, unleash stunning posters, create verses and own the mic, and transform into your favourite literary legend.",
      gradient: "from-orange-600 to-orange-500",
      iconBg: "from-orange-600 to-orange-500",
      bgGradient: "from-orange-50/90 to-orange-100/50",
      borderColor: "border-orange-200",
      hoverBorder: "hover:border-orange-400"
    },
    {
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "Meet the Masters",
      description: "Meet celebrated authors, poets and scholars from across the country.",
      gradient: "from-red-600 to-red-500",
      iconBg: "from-red-600 to-red-500",
      bgGradient: "from-red-50/90 to-red-100/50",
      borderColor: "border-red-200",
      hoverBorder: "hover:border-red-400"
    },
    {
      icon: <CalendarDays className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "Cultural Extravaganza",
      description: "Enjoy live performances, exhibitions, interactive installations, and food stalls.",
      gradient: "from-violet-600 to-violet-500",
      iconBg: "from-violet-600 to-violet-500",
      bgGradient: "from-violet-50/90 to-violet-100/50",
      borderColor: "border-violet-200",
      hoverBorder: "hover:border-violet-400"
    },
    {
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "Prestigious Awards",
      description: "Win prestigious prizes for outstanding entries and get certificates for participation.",
      gradient: "from-pink-600 to-pink-500",
      iconBg: "from-pink-600 to-pink-500",
      bgGradient: "from-pink-50/90 to-pink-100/50",
      borderColor: "border-pink-200",
      hoverBorder: "hover:border-pink-400"
    },
    {
      icon: <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "Grand Finale",
      description: "End the day in style at our dazzling masquerade.",
      gradient: "from-emerald-600 to-emerald-500",
      iconBg: "from-emerald-600 to-emerald-500",
      bgGradient: "from-emerald-50/90 to-emerald-100/50",
      borderColor: "border-emerald-200",
      hoverBorder: "hover:border-emerald-400"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-900 mb-6" style={{fontFamily: 'serif'}}>
             Why Attend/Participate in 
             <span className="block mt-2 bg-gradient-to-r from-red-800 via-red-700 to-amber-700 bg-clip-text text-transparent">
               Lit-Carnival?
             </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-600 mx-auto mt-8 rounded-full"></div>
        </div>
        
        {/* Desktop: 3-2 layout, Mobile: single column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="group relative flex">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl blur-xl transform group-hover:scale-105`}></div>
              <div className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${feature.borderColor} ${feature.hoverBorder} group-hover:scale-105 flex flex-col w-full`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.iconBg} rounded-xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-700 transition-colors" style={{fontFamily: 'serif'}}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg flex-1" style={{fontFamily: 'serif'}}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom row with 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-8 lg:mt-10 md:max-w-4xl md:mx-auto">
          {features.slice(3).map((feature, index) => (
            <div key={index + 3} className="group relative flex">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl blur-xl transform group-hover:scale-105`}></div>
              <div className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${feature.borderColor} ${feature.hoverBorder} group-hover:scale-105 flex flex-col w-full`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.iconBg} rounded-xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-700 transition-colors" style={{fontFamily: 'serif'}}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg flex-1" style={{fontFamily: 'serif'}}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;