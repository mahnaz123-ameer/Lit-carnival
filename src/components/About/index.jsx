import React from 'react';
import { Sparkles, Calendar, Users, Award, BookOpen, Palette, Theater, Mic } from 'lucide-react';
import israt from "../../assets/israt.png";
import shahnaz from "../../assets/shahnaz.png";

const AboutUs = () => {
  const conveners = [
    {
      name: "Israt Jahan (Shanti)",
      designation: "Assistant Professor",
      department: "Department of English, East West University", 
      expertise: ["Film Studies", "Postcolonial Literature", "Critical Theory", "Latin American Literature"],
      image: israt // Placeholder for image
    },
    {
      name: "Shahnaz Ameer",
      designation: "Senior Lecturer",
      department: "Department of English, East West University",
      expertise: ["Women & Gender Studies", "Psychoanalytic Criticism", "Cultural Studies", "Creative Writing"],
      image: shahnaz // Placeholder for image
    },
  ];

  const carnivalHighlights = [
    {
      icon: <Theater className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Drama Competition",
      description: "15-minute theatrical performances reimagining classics",
      color: "from-red-600 to-red-700"
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Comic-Con & Cosplay",
      description: "Character portrayals from literature and pop culture",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: <Mic className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Poetry & Recitation",
      description: "Spontaneous poetry and powerful recitations",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Poster Presentations",
      description: "Visual storytelling combining literature with modern themes",
      color: "from-yellow-600 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-0">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 flex-shrink-0" />
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">About the Carnival</h1>
                <p className="text-base sm:text-lg lg:text-xl text-orange-100">EWU Lit-Carnival 2025</p>
              </div>
            </div>
            <div className="self-start sm:self-auto">
              <div className="bg-white bg-opacity-20 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-yellow-200">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">October 16, 2025</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-orange-100 max-w-3xl leading-relaxed">
            A whirlwind of words, rhymes, and costumes! Join Bangladesh's most exciting inter-university literary competition where creativity meets celebration.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-yellow-400 bg-opacity-10 rounded-full -mr-16 sm:-mr-24 lg:-mr-32 -mt-16 sm:-mt-24 lg:-mt-32"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-orange-400 bg-opacity-10 rounded-full -ml-12 sm:-ml-18 lg:-ml-24 -mb-12 sm:-mb-18 lg:-mb-24"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        
        {/* Event Description */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-4 sm:mb-6">The Literary Celebration</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-amber-300">
            <p className="text-base sm:text-lg text-amber-800 leading-relaxed mb-4 sm:mb-6">
              The Department of English, East West University, invites you to the EWU Lit-Carnival 2025: an inter-university literary competition rolling into our campus in a whirlwind of words, rhymes, and costumes. The Carnival aims to bring literature to life and make us imagine the classics anew.
            </p>
            <p className="text-base sm:text-lg text-amber-800 leading-relaxed mb-4 sm:mb-6">
              University students from various disciplines across Bangladesh are encouraged to participate or attend; whether they are dreamers, performers, readers, artists, or poets, this is an opportunity for them to create, compose, and captivate.
            </p>
            <p className="text-base sm:text-lg text-amber-800 leading-relaxed">
              Inspired by Mikhail Bakhtin's idea of the carnivalesque—a joyful, rule-breaking space, where hierarchies dissolve and creativity reigns—the carnival aims to celebrate literature in joyous ways and make participants reimagine the classics while spotlighting the creativity of our young ones.
            </p>
          </div>
        </div>

        {/* Event Conveners */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-8 sm:mb-10">Event Conveners</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {conveners.map((convener, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-amber-300 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 relative">
                    {convener.image ? (
                      <img 
                        src={convener.image} 
                        alt={convener.name}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-amber-300 shadow-lg"
                      />
                    ) : (
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-200 to-amber-200 rounded-full flex items-center justify-center border-4 border-amber-300">
                        <Users className="w-12 h-12 sm:w-16 sm:h-16 text-amber-700" />
                      </div>
                    )}
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-900 mb-1 leading-tight">{convener.name}</h4>
                  <p className="text-base sm:text-lg font-semibold text-red-700 mb-2">{convener.designation}</p>
                  <p className="text-sm sm:text-base text-amber-700 leading-relaxed">{convener.department}</p>
                </div>
                
                <div>
                  <h5 className="text-base sm:text-lg font-semibold text-amber-900 mb-3">Areas of Expertise:</h5>
                  <div className="flex flex-wrap gap-2">
                    {convener.expertise.map((area, areaIndex) => (
                      <span 
                        key={areaIndex} 
                        className="px-2 sm:px-3 py-1 bg-white bg-opacity-80 text-amber-800 text-xs sm:text-sm rounded-full border border-amber-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carnival Highlights */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-8 sm:mb-10">Carnival Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {carnivalHighlights.map((highlight, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border-2 border-amber-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${highlight.color} text-white rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto`}>
                  {highlight.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-amber-900 text-center mb-2 sm:mb-3 leading-tight">{highlight.title}</h4>
                <p className="text-sm sm:text-base text-amber-700 text-center leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Stats */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-red-800 mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Event at a Glance</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 text-yellow-300" />
              <div className="text-xl sm:text-2xl font-bold mb-1">5</div>
              <div className="text-xs sm:text-sm lg:text-base text-orange-100 leading-tight">Competition Segments</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 text-yellow-300" />
              <div className="text-xl sm:text-2xl font-bold mb-1">500+</div>
              <div className="text-xs sm:text-sm lg:text-base text-orange-100 leading-tight">Expected Participants</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 text-yellow-300" />
              <div className="text-xl sm:text-2xl font-bold mb-1">All</div>
              <div className="text-xs sm:text-sm lg:text-base text-orange-100 leading-tight">Universities Welcome</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 text-yellow-300" />
              <div className="text-xl sm:text-2xl font-bold mb-1">1</div>
              <div className="text-xs sm:text-sm lg:text-base text-orange-100 leading-tight">Day Full Event</div>
            </div>
          </div>
        </div>

        {/* Special Masquerade Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-purple-300">
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-purple-700" />
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-3 sm:mb-4">Evening Masquerade</h3>
            <p className="text-base sm:text-lg text-purple-800 max-w-2xl mx-auto leading-relaxed">
              Cap off the literary celebration with an elegant masquerade ball! Don your finest gown and suit, wear a mysterious mask, and dance the evening away in true carnival spirit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;