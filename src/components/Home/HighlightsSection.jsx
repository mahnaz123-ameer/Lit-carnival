import React from 'react';
import { BookOpen, Zap, Palette, Heart } from 'lucide-react';

const HighlightsSection = () => {
  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Literary Innovation",
      description: "Reimagine timeless classics with contemporary perspectives",
      color: "from-amber-500 to-orange-500",
      bgAccent: "bg-amber-50"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Creative Fusion",
      description: "Blend traditional literature with cutting-edge artistic expression",
      color: "from-red-500 to-rose-500",
      bgAccent: "bg-red-50"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Storytelling",
      description: "Transform words into captivating visual narratives",
      color: "from-purple-500 to-indigo-500",
      bgAccent: "bg-purple-50"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Emotional Impact",
      description: "Connect hearts through powerful literary performances",
      color: "from-pink-500 to-red-500",
      bgAccent: "bg-pink-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-100 via-red-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">
            Event <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-2xl text-gray-600">What makes our carnival extraordinary</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className={`group ${highlight.bgAccent} p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 hover:border-gray-200`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">{highlight.title}</h3>
              <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;