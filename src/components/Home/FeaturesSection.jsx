import React from 'react';
import { Users, Star, Trophy } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inter-University Competition",
      description: "Unite with brilliant minds from universities across Bangladesh in an unprecedented celebration of literary excellence and creative expression.",
      gradient: "from-red-700 via-red-600 to-red-500",
      accent: "hover:from-red-600 hover:to-red-400"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Multiple Creative Segments",
      description: "Explore Drama, Poetry, Cosplay, Poster Presentation, and Masquerade—each segment designed to showcase your unique artistic vision.",
      gradient: "from-amber-700 via-amber-600 to-amber-500",
      accent: "hover:from-amber-600 hover:to-amber-400"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Recognition & Awards",
      description: "Earn prestigious recognition for your creativity and take home coveted awards that celebrate outstanding literary performances.",
      gradient: "from-red-800 via-red-700 to-amber-600",
      accent: "hover:from-red-700 hover:to-amber-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-red-900 mb-8" style={{fontFamily: 'serif'}}>
            Why Join <span className="bg-gradient-to-r from-red-800 via-red-700 to-amber-700 bg-clip-text text-transparent">Our Carnival?</span>
          </h2>
          <p className="text-2xl text-red-700 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'serif'}}>Experience literature transformed through cutting-edge creativity and innovation</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl blur-xl`}></div>
              <div className="relative bg-amber-50/90 backdrop-blur-xl p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 border-2 border-red-200 group-hover:border-red-300">
                <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${feature.gradient} text-white rounded-xl mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-amber-300/50`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-6 group-hover:text-red-800 transition-colors" style={{fontFamily: 'serif'}}>
                  {feature.title}
                </h3>
                <p className="text-red-700 leading-relaxed text-lg" style={{fontFamily: 'serif'}}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;