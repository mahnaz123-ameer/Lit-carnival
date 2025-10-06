import React from 'react';
import { BookOpen, Sparkles, Star, Heart, Zap } from 'lucide-react';
import Foodi from "../../assets/Foodi-logo-transparent.png";
import mtb from "../../assets/mtb.png";

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Foodi',
      category: 'Food Partner',
      description: '🍔 Fueling literary minds with delicious treats! Because every great story deserves a great meal. 📚✨',
      tagline: 'A concern of US Bangla Group'
    },
    {
      name: 'MTB',
      category: 'Banking Partner',
      description: '💫 Banking on creativity and innovation! Empowering dreams, one story at a time. 🌟',
      tagline: 'Mutual Trust Bank PLC - Bank of the Year 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-[20%] w-3 h-3 bg-red-400 rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-32 left-[25%] w-2 h-2 bg-yellow-400 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-20 right-[30%] w-3 h-3 bg-orange-500 rounded-full animate-float delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-14 -mt-12">
            {/* Modern Icon Badge */}
            <div className="mb-6 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            {/* Main Heading with modern gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 bg-clip-text text-transparent">
                Our Sponsors
              </span>
            </h1>

            {/* Subtitle */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg mb-4">
              <Zap className="w-4 h-4 text-orange-500" fill="currentColor" />
              <h2 className="text-lg md:text-xl text-gray-800 font-bold">
              Foodi Presents <br></br>  EWU Lit-Carnival 2025
              </h2>
              <Zap className="w-4 h-4 text-orange-500" fill="currentColor" />
            </div>

            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Celebrating our incredible partners who bring this literary experience to life
            </p>
          </div>

          {/* Sponsors Grid - Modern Cards */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {sponsors.map((sponsor, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-10 md:p-12 border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                    
                    {/* Category Badge - Modern pill design at top */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-50"></div>
                        <span className="relative inline-block bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                          {sponsor.category}
                        </span>
                      </div>
                    </div>

                    {/* Sponsor Logo */}
                    <div className="mb-6 flex justify-center items-center h-40">
                      {sponsor.name === 'Foodi' ? (
                        <img 
                          src={Foodi} 
                          alt="Foodi Logo" 
                          className="w-64 h-40 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-xl"
                        />
                      ) : sponsor.name === 'MTB' ? (
                        <img 
                          src={mtb} 
                          alt="MTB Logo" 
                          className="w-64 h-40 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-xl"
                        />
                      ) : null}
                    </div>

                    {/* Sponsor Name */}
                    <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
                      {sponsor.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center text-base mb-4 leading-relaxed">
                      {sponsor.description}
                    </p>

                    {/* Tagline with accent line */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                      <p className="text-gray-500 text-center text-sm font-medium">
                        {sponsor.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thank You Section - Modern design */}
          <div className="mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-14 mx-auto max-w-4xl border border-gray-100">
                <div className="text-center">
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-400 rounded-full blur-lg opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center shadow-xl">
                        <Heart className="w-8 h-8 text-white animate-pulse" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Thank You to Our Sponsors!
                  </h3>
                  
                  <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Your support helps us create an unforgettable literary experience for students and literature enthusiasts
                  </p>

                  <div className="flex justify-center items-center gap-3">
                    {[0, 1, 2].map((i) => (
                      <Star 
                        key={i}
                        className="w-7 h-7 text-yellow-400 animate-pulse" 
                        fill="currentColor"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Become a Sponsor CTA - Modern gradient card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-rose-600 text-white p-8 md:p-12 rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Interested in Sponsoring?
                </h3>
                <p className="text-base md:text-lg mb-2 text-white/90">
                  Join us in celebrating literature and creativity!
                </p>
                <p className="text-sm md:text-base text-white/80">
                  Contact us for sponsorship opportunities and partnership details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default Sponsors;