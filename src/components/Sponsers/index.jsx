import React from 'react';
import { BookOpen, Clock, Star, Sparkles } from 'lucide-react';

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-pink-200 rounded-full opacity-25 animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-red-100 to-orange-100 rounded-full opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 animate-fadeIn">
            Sponsors
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold mb-8">
            EWU Lit-Carnival 2025
          </h2>

          {/* Under Development Card */}
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mx-auto max-w-2xl border border-white border-opacity-50">
            
            {/* Construction Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center animate-spin" style={{animationDuration: '3s'}}>
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Main Message */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🚧 Under Development 🚧
            </h3>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              This page is under development. We're working hard to bring you information about our amazing sponsors who make the 
              <span className="font-semibold text-red-600"> EWU Lit-Carnival</span> possible!
            </p>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-xl font-semibold text-gray-800 flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2 animate-pulse" />
                Please Come Back Soon!
                <Star className="w-5 h-5 text-yellow-500 ml-2 animate-pulse" />
              </p>
              
              <p className="text-gray-600">
                Check back in a few days to see our incredible sponsors and partners.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-12">
            <p className="text-gray-500 text-sm md:text-base">
              Thank you for your patience as we prepare something amazing! 💫
            </p>
          </div>
        </div>
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute top-1/4 left-8 text-6xl opacity-10 animate-pulse delay-1000">📚</div>
      <div className="absolute top-3/4 right-8 text-5xl opacity-10 animate-pulse delay-1500">✨</div>
      <div className="absolute bottom-1/4 left-1/3 text-4xl opacity-10 animate-bounce delay-2000">🎭</div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Sponsors;