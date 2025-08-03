import React from 'react';
import { BookOpen, Zap, Palette, Heart } from 'lucide-react';

const HighlightsSection = () => {
  const highlights = [
    {
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Literary Innovation",
      description: "Reimagine timeless classics with contemporary perspectives",
      color: "from-amber-500 to-orange-500",
      bgAccent: "bg-amber-50"
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Creative Fusion",
      description: "Blend traditional literature with cutting-edge artistic expression",
      color: "from-red-500 to-rose-500",
      bgAccent: "bg-red-50"
    },
    {
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Visual Storytelling",
      description: "Transform words into captivating visual narratives",
      color: "from-purple-500 to-indigo-500",
      bgAccent: "bg-purple-50"
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Emotional Impact",
      description: "Connect hearts through powerful literary performances",
      color: "from-pink-500 to-red-500",
      bgAccent: "bg-pink-50"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 px-2">
            Event <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 px-4">What makes our carnival extraordinary</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className={`group ${highlight.bgAccent} p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-4 border border-gray-100 hover:border-gray-200`}>
              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${highlight.color} text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 sm:group-hover:rotate-12 transition-all duration-500`}>
                {highlight.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 leading-tight">{highlight.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;