import React from 'react';
import { Users, Star, Trophy } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Inter-University Competition",
      description: "Unite with brilliant minds from universities across Bangladesh in an unprecedented celebration of literary excellence and creative expression.",
      gradient: "from-red-700 via-red-600 to-red-500",
      accent: "hover:from-red-600 hover:to-red-400"
    },
    {
      icon: <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Multiple Creative Segments",
      description: "Explore Drama, Poetry, Cosplay, Poster Presentation, and Masquerade—each segment designed to showcase your unique artistic vision.",
      gradient: "from-amber-700 via-amber-600 to-amber-500",
      accent: "hover:from-amber-600 hover:to-amber-400"
    },
    {
      icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Recognition & Awards",
      description: "Earn prestigious recognition for your creativity and take home coveted awards that celebrate outstanding literary performances.",
      gradient: "from-red-800 via-red-700 to-amber-600",
      accent: "hover:from-red-700 hover:to-amber-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-red-900 mb-6 sm:mb-8 px-2" style={{fontFamily: 'serif'}}>
            Why Join <span className="bg-gradient-to-r from-red-800 via-red-700 to-amber-700 bg-clip-text text-transparent">Our Carnival?</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-red-700 max-w-3xl mx-auto leading-relaxed px-4" style={{fontFamily: 'serif'}}>
            Experience literature transformed through cutting-edge creativity and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl sm:rounded-3xl blur-xl`}></div>
              <div className="relative bg-amber-50/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-4 lg:hover:-translate-y-6 border-2 border-red-200 group-hover:border-red-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.gradient} text-white rounded-lg sm:rounded-xl mb-6 sm:mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-amber-300/50`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-red-900 mb-4 sm:mb-6 group-hover:text-red-800 transition-colors" style={{fontFamily: 'serif'}}>
                  {feature.title}
                </h3>
                <p className="text-red-700 leading-relaxed text-base sm:text-lg" style={{fontFamily: 'serif'}}>
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