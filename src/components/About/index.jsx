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
      image: israt // Fixed: Remove array brackets
    },
    {
      name: "Shahnaz Ameer",
      designation: "Senior Lecturer",
      department: "Department of English, East West University",
      expertise: ["Women & Gender Studies", "Psychoanalytic Criticism", "Cultural Studies", "Creative Writing"],
      image: shahnaz // Fixed: Remove array brackets
    },
  ];

  const carnivalHighlights = [
    {
      icon: <Theater className="w-8 h-8" />,
      title: "Drama Competition",
      description: "15-minute theatrical performances reimagining classics",
      color: "from-red-600 to-red-700"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Comic-Con & Cosplay",
      description: "Character portrayals from literature and pop culture",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Poetry & Recitation",
      description: "Spontaneous poetry and powerful recitations",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
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
        <div className="relative container mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <div>
                <h1 className="text-4xl font-bold">About the Carnival</h1>
                <p className="text-xl text-orange-100">EWU Lit-Carnival 2025</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-yellow-200">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">October 16, 2025</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-orange-100 max-w-3xl">
            A whirlwind of words, rhymes, and costumes! Join Bangladesh's most exciting inter-university literary competition where creativity meets celebration.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 bg-opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 bg-opacity-10 rounded-full -ml-24 -mb-24"></div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Event Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">The Literary Celebration</h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl border-2 border-amber-300">
            <p className="text-lg text-amber-800 leading-relaxed mb-6">
              The Department of English, East West University, invites you to the EWU Lit-Carnival 2025: an inter-university literary competition rolling into our campus in a whirlwind of words, rhymes, and costumes. The Carnival aims to bring literature to life and make us imagine the classics anew.
            </p>
            <p className="text-lg text-amber-800 leading-relaxed mb-6">
              University students from various disciplines across Bangladesh are encouraged to participate or attend; whether they are dreamers, performers, readers, artists, or poets, this is an opportunity for them to create, compose, and captivate.
            </p>
            <p className="text-lg text-amber-800 leading-relaxed">
              Inspired by Mikhail Bakhtin's idea of the carnivalesque—a joyful, rule-breaking space, where hierarchies dissolve and creativity reigns—the carnival aims to celebrate literature in joyous ways and make participants reimagine the classics while spotlighting the creativity of our young ones.
            </p>
          </div>
        </div>

        {/* Event Conveners */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-10">Event Conveners</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {conveners.map((convener, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl border-2 border-amber-300 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    {convener.image ? (
                      <img 
                        src={convener.image} 
                        alt={convener.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-amber-300 shadow-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 bg-gradient-to-br from-red-200 to-amber-200 rounded-full flex items-center justify-center border-4 border-amber-300">
                        <Users className="w-16 h-16 text-amber-700" />
                      </div>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold text-amber-900 mb-1">{convener.name}</h4>
                  <p className="text-lg font-semibold text-red-700 mb-2">{convener.designation}</p>
                  <p className="text-amber-700">{convener.department}</p>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-amber-900 mb-3">Areas of Expertise:</h5>
                  <div className="flex flex-wrap gap-2">
                    {convener.expertise.map((area, areaIndex) => (
                      <span 
                        key={areaIndex} 
                        className="px-3 py-1 bg-white bg-opacity-80 text-amber-800 text-sm rounded-full border border-amber-300"
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
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-900 text-center mb-10">Carnival Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carnivalHighlights.map((highlight, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 shadow-lg border-2 border-amber-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} text-white rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-bold text-amber-900 text-center mb-3">{highlight.title}</h4>
                <p className="text-amber-700 text-center">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Stats */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white rounded-2xl p-8 shadow-xl border-2 border-red-800 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Event at a Glance</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <Award className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <div className="text-2xl font-bold mb-1">5</div>
              <div className="text-orange-100">Competition Segments</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <Users className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-orange-100">Expected Participants</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <div className="text-2xl font-bold mb-1">All</div>
              <div className="text-orange-100">Universities Welcome</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <div className="text-2xl font-bold mb-1">1</div>
              <div className="text-orange-100">Day Full Event</div>
            </div>
          </div>
        </div>

        {/* Special Masquerade Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-xl border-2 border-purple-300">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-purple-700" />
            <h3 className="text-3xl font-bold text-purple-900 mb-4">Evening Masquerade</h3>
            <p className="text-lg text-purple-800 max-w-2xl mx-auto">
              Cap off the literary celebration with an elegant masquerade ball! Don your finest gown and suit, wear a mysterious mask, and dance the evening away in true carnival spirit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;