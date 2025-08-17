import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Star, Trophy, Clock, BookOpen, Feather, Palette, Theater, Sparkles, ArrowRight, Play } from 'lucide-react';
import mask from '../../assets/mask.png';
import lit from '../../assets/lit.jpg';

const Home = ({ setCurrentPage }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carnival Mask Component
  const CarnivalMask = ({ className = "", size = "w-8 h-8", animated = false }) => (
    <img 
      src={mask} 
      alt="Carnival Mask" 
      className={`${size} ${className} ${animated ? 'animate-pulse' : ''} object-contain`}
    />
  );

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inter-University Competition",
      description: "Compete with talented students from universities across Bangladesh in a celebration of literary excellence.",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Multiple Creative Segments",
      description: "Choose from Drama, Poetry, Cosplay, Poster Presentation, and Masquerade to showcase your unique talents.",
      gradient: "from-pink-600 to-red-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Recognition & Awards",
      description: "Win recognition for your creativity and take home prestigious awards for outstanding performances.",
      gradient: "from-amber-600 to-orange-600"
    }
  ];

  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Literary Excellence",
      description: "Reimagine classics and bring literature to life",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Feather className="w-6 h-6" />,
      title: "Creative Expression",
      description: "Express yourself through various artistic mediums",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Arts",
      description: "Combine literature with stunning visual presentations",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <Theater className="w-6 h-6" />,
      title: "Performance Arts",
      description: "Bring characters and stories to life on stage",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Expected Participants", icon: <Users className="w-6 h-6" /> },
    { number: "10+", label: "Universities", icon: <BookOpen className="w-6 h-6" /> },
    { number: "5", label: "Competition Segments", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Awards", icon: <Trophy className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Masks */}
          <div className="absolute top-20 left-10 opacity-20 animate-float" style={{animationDelay: '0s'}}>
            <CarnivalMask size="w-16 h-12" animated={true} />
          </div>
          <div className="absolute top-32 right-20 opacity-15 animate-float" style={{animationDelay: '2s'}}>
            <CarnivalMask size="w-20 h-15" className="rotate-12" />
          </div>
          <div className="absolute bottom-32 left-32 opacity-25 animate-float" style={{animationDelay: '4s'}}>
            <CarnivalMask size="w-12 h-9" className="-rotate-12" animated={true} />
          </div>
          <div className="absolute top-1/2 right-10 opacity-10 animate-float" style={{animationDelay: '3s'}}>
            <CarnivalMask size="w-24 h-18" className="rotate-45" />
          </div>
          
          {/* Sparkles */}
          <div className="absolute top-1/4 left-1/4 text-amber-400 opacity-30">
            <Sparkles className="w-8 h-8 animate-ping" style={{animationDelay: '1s'}} />
          </div>
          <div className="absolute bottom-1/4 right-1/3 text-red-400 opacity-25">
            <Sparkles className="w-6 h-6 animate-pulse" style={{animationDelay: '3s'}} />
          </div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-16 right-1/4 w-32 h-32 bg-gradient-to-br from-red-400 to-amber-400 rounded-full opacity-10 animate-pulse blur-sm"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-15 animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Title with 3D Effect */}
            <div className="mb-8 transform hover:scale-105 transition-all duration-500">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-red-600 via-amber-500 to-red-700 bg-clip-text text-transparent mb-4 tracking-tight leading-none drop-shadow-2xl">
                  LIT-CARNIVAL
                </h1>
                <div className="text-2xl md:text-4xl font-bold text-red-800 opacity-80 tracking-widest">
                  2025
                </div>
              </div>
            </div>
            
            {/* Floating Date Badge */}
            <div className="inline-flex items-center space-x-4 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl mb-8 hover:shadow-3xl transition-all duration-300 border border-red-100">
              <Calendar className="w-8 h-8 text-red-600" />
              <span className="text-xl md:text-2xl font-bold text-red-800">
                OCTOBER 16, 2025
              </span>
              <CarnivalMask size="w-8 h-6" />
            </div>
            
            {/* Subtitle with Animation */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CALL FOR PARTICIPANTS
              </span>
            </h2>
            
            {/* Enhanced Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
              The Department of English, <span className="font-semibold text-red-700">East West University</span>, invites you to an inter-university literary competition 
              rolling into our campus in a <span className="font-semibold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">whirlwind of words, rhymes, and costumes</span>. 
              Join us in celebrating literature through creativity, imagination, and artistic expression.
            </p>
            
            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setCurrentPage('registration')}
                className="group relative px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <CarnivalMask size="w-6 h-5" />
                  <span>Register Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => setCurrentPage('segments')}
                className="group px-12 py-4 bg-white/90 backdrop-blur-md text-red-700 border-2 border-red-600 font-bold text-lg rounded-2xl shadow-xl hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5" />
                  <span>View Segments</span>
                  <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-amber-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-amber-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Glass Morphism */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Why Join <span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">Our Carnival?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience literature like never before in this extraordinary celebration</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur"></div>
                <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/50">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Floating mask decoration */}
                  <div className="absolute -top-2 -right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <CarnivalMask size="w-8 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights with Bento Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Event <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600">What makes our carnival extraordinary</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200">
                <div className={`w-14 h-14 bg-gradient-to-br ${highlight.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Quick Info Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-amber-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <CarnivalMask size="w-32 h-24" className="rotate-12" />
          </div>
          <div className="absolute bottom-20 right-20">
            <CarnivalMask size="w-40 h-30" className="-rotate-12" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-amber-300 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Venue</h3>
              <p className="text-red-100 text-lg leading-relaxed">East West University<br />Dhaka, Bangladesh</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Clock className="w-16 h-16 mx-auto mb-6 text-amber-300 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Registration Deadline</h3>
              <p className="text-red-100 text-lg leading-relaxed">September 05, 2025<br />Don't miss out!</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Trophy className="w-16 h-16 mx-auto mb-6 text-amber-300 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Prizes & Recognition</h3>
              <p className="text-red-100 text-lg leading-relaxed">Certificates & Awards<br />for all participants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Carnival Theme */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-red-50 to-orange-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 opacity-20 animate-float">
            <CarnivalMask size="w-20 h-15" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-15 animate-float" style={{animationDelay: '2s'}}>
            <CarnivalMask size="w-16 h-12" className="rotate-45" />
          </div>
          <Sparkles className="absolute top-20 right-1/4 w-8 h-8 text-amber-400 opacity-30 animate-ping" />
          <Sparkles className="absolute bottom-20 left-1/4 w-6 h-6 text-red-400 opacity-25 animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Ready to <span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">Showcase Your Talent?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join hundreds of creative minds in celebrating literature through performance, art, and imagination. 
              This is your moment to shine on the literary stage!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setCurrentPage('registration')}
                className="group relative px-16 py-5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-4">
                  <CarnivalMask size="w-8 h-6" />
                  <span>Join the Carnival Now!</span>
                  <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;