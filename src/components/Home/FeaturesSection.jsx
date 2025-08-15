import React from 'react';
import { Mic, BookOpen, CalendarDays, Award, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Creative Showcase",
      description: "Take the stage in drama, unleash stunning posters, create verses and own the mic, and transform into your favourite literary legend.",
      gradient: "from-red-700 via-red-600 to-red-500",
      bgGradient: "from-amber-50/90 to-red-50/90",
      borderColor: "border-red-200",
      hoverBorder: "hover:border-red-400"
    },
    {
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Meet the Masters",
      description: "Meet celebrated authors, poets and scholars from across the country.",
      gradient: "from-amber-700 via-amber-600 to-amber-500",
      bgGradient: "from-amber-50/90 to-orange-50/90",
      borderColor: "border-amber-200",
      hoverBorder: "hover:border-amber-400"
    },
    {
      icon: <CalendarDays className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Cultural Extravaganza",
      description: "Enjoy live performances, exhibitions, interactive installations, and food stalls.",
      gradient: "from-red-800 via-red-700 to-amber-600",
      bgGradient: "from-red-50/90 to-amber-50/90",
      borderColor: "border-red-200",
      hoverBorder: "hover:border-red-400"
    },
    {
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Prestigious Awards",
      description: "Win prestigious prizes for outstanding entries and get certificates for participation.",
      gradient: "from-amber-800 via-amber-700 to-red-600",
      bgGradient: "from-amber-50/90 to-red-50/90",
      borderColor: "border-amber-200",
      hoverBorder: "hover:border-amber-400"
    },
    {
      icon: <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Grand Finale",
      description: "End the day in style at our dazzling masquerade.",
      gradient: "from-red-700 via-amber-600 to-amber-500",
      bgGradient: "from-red-50/90 to-amber-50/90",
      borderColor: "border-red-200",
      hoverBorder: "hover:border-red-400"
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
                <div className={`inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.gradient} text-white rounded-xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-red-900 mb-4 group-hover:text-red-800 transition-colors" style={{fontFamily: 'serif'}}>
                  {feature.title}
                </h3>
                <p className="text-red-700 leading-relaxed text-base lg:text-lg flex-1" style={{fontFamily: 'serif'}}>
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
                <div className={`inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.gradient} text-white rounded-xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-red-900 mb-4 group-hover:text-red-800 transition-colors" style={{fontFamily: 'serif'}}>
                  {feature.title}
                </h3>
                <p className="text-red-700 leading-relaxed text-base lg:text-lg flex-1" style={{fontFamily: 'serif'}}>
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