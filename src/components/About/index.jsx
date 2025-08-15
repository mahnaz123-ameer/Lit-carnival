import React from 'react';
import { Sparkles, Calendar, Users, Award, BookOpen, Palette, Theater, Mic } from 'lucide-react';
import israt from "../../assets/israt.png";
import shahnaz from "../../assets/shahnaz.png";
import chair from "../../assets/chair.png";

const AboutUs = () => {
  const conveners = [
    {
      name: "Israt Jahan",
      designation: "Assistant Professor",
      department: "Department of English, East West University", 
      expertise: ["Film Studies", "Postcolonial Literature", "Critical Theory", "Latin American Literature"],
      image: israt
    },
    {
      name: "Shahnaz Ameer",
      designation: "Senior Lecturer",
      department: "Department of English, East West University",
      expertise: ["Women & Gender Studies", "Psychoanalytic Criticism", "Cultural Studies", "Creative Writing"],
      image: shahnaz
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
             <p className="text-2xl sm:text-lg text-amber-800 leading-relaxed mb-2 sm:mb-6 text-left">
             <strong> Overview</strong>
            </p>
            <p className="text-base sm:text-lg text-amber-800 leading-relaxed mb-4 sm:mb-6 text-left -mt-5">
              The Department of English, East West University, invites you to the EWU Lit-Carnival 2025: an inter-university literary competition rolling into our
               campus in a whirlwind of words, rhymes, and costumes. The Carnival aims to bring literature to life and make us imagine the classics anew.
                University students from various disciplines across Bangladesh are encouraged to participate or attend; whether they are dreamers, performers,
                 readers, artists, or poets, this is an opportunity for them to create, compose, and captivate. The university premises will come alive with the 
                 festive spirit of the carnival, featuring themed stalls, visual installations, and interactive spaces that invite visitors to engage with arts
                  and culture in myriad ways. Inspired by Mikhail Bakhtin's idea of the carnivalesque—a joyful, rule-breaking space, where hierarchies dissolve 
                  and creativity reigns—the carnival aims to celebrate literature in joyous ways and make participants reimagine the classics while spotlighting 
                  the creativity of our young ones. It will feature various exciting inter-university events in which you can compete to showcase your skills in the creative arts.
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
                  <div className="mx-auto mb-4 relative">
                    {convener.image ? (
                      <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto">
                        <img 
                          src={convener.image} 
                          alt={convener.name}
                          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover object-top border-4 border-amber-300 shadow-lg"
                          style={{
                            minWidth: '160px',
                            minHeight: '160px',
                            maxWidth: '192px',
                            maxHeight: '192px'
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-red-200 to-amber-200 rounded-full flex items-center justify-center border-4 border-amber-300 mx-auto">
                        <Users className="w-20 h-20 sm:w-24 sm:h-24 text-amber-700" />
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

        {/* Message from the Chairperson */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-8 sm:mb-10">Message from the Chairperson</h3>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-amber-300">
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto">
                  <img 
                    src={chair} 
                    alt="Akhter Jahan, PhD"
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top border-4 border-amber-300 shadow-lg"
                    style={{
                      minWidth: '128px',
                      minHeight: '128px',
                      maxWidth: '160px',
                      maxHeight: '160px'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-amber-800 leading-relaxed mb-6 text-left">
              It is with great pleasure that I welcome you to the Lit-Carnival 2025. This event offers a unique opportunity for participants and attendees alike to engage deeply with the world of literature and the arts. Your involvement, whether through performance, creation, or attendance, is what makes this celebration meaningful and memorable. I hope you find inspiration and enjoyment throughout the festivities.
            </p>
            
            <div className="text-right">
              <p className="text-base sm:text-lg font-semibold text-amber-900 mb-1">Warm Regards</p>
              <p className="text-lg sm:text-xl font-bold text-red-700 mb-1">Akhter Jahan, PhD</p>
              <p className="text-sm sm:text-base text-amber-700 leading-relaxed">Chairperson and Associate Professor</p>
              <p className="text-sm sm:text-base text-amber-700">Department of English</p>
              <p className="text-sm sm:text-base text-amber-700">East West University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;