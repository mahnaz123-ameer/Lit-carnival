import React from 'react';
import { Clock, Users, Presentation, Mic, Theater, Palette, Sparkles, Calendar } from 'lucide-react';

const Segments = () => {
  const segments = [
    {
      id: 'drama',
      icon: <Theater className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Drama',
      timeLimit: '15 minutes',
      maxMembers: 'Max 10 members/team',
      color: 'from-red-700 to-red-800',
      bgColor: 'from-red-100 via-amber-50 to-yellow-100',
      themes: [
        'Tagore and Nazrul: Reimagined',
        'Renaissance Reimagined in the 21st Century', 
        'Farce and the Burlesque'
      ]
    },
    {
      id: 'poster',
      icon: <Presentation className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Poster Presentation',
      timeLimit: 'Display format',
      maxMembers: 'Individual or Pair 28✕22 inches',
      color: 'from-amber-600 to-orange-700',
      bgColor: 'from-amber-100 via-orange-50 to-red-100',
      themes: [
        'Role of K-Pop in Shaping Hybrid Cultures among Gen Z',
        'Meme Literature: From Shakespeare to Shrek',
        'Graphic Novels and Illustrated Storytelling: The Visual in Literature'
      ]
    },
    {
      id: 'poetry',
      icon: <Mic className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Spot Poetry & Recitation',
      timeLimit: 'TBA at event',
      maxMembers: 'Individual',
      color: 'from-yellow-600 to-amber-700',
      bgColor: 'from-yellow-100 via-amber-50 to-orange-100',
      themes: [
        'Theme and guidelines will be announced at the start of the competition'
      ]
    },
    {
      id: 'cosplay',
      icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Comic-Con & Cosplay',
      timeLimit: 'Performance based',
      maxMembers: 'Individual',
      color: 'from-orange-600 to-red-700',
      bgColor: 'from-orange-100 via-red-50 to-amber-100',
      themes: [
        'Superheroes and Supervillains',
        'The Sci-Fi Worlds',
        'Apocalypse and Dystopias',
        'Fan-Favorite Romances',
        'Time Travelers from Pop Culture',
        '---divider---',
        'Witches, Wizards & Warlocks',
        'Pantheon Clash: Gods from Different Mythologies',
        'The Victorian Gothic',
        'Period Pieces from Historical Fiction',
        'Fairy Tales and Folklore'
      ]
    },
    {
      id: 'masquerade',
      icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: 'Masquerade',
      timeLimit: 'Evening event',
      maxMembers: 'Registered participants',
      color: 'from-red-600 to-amber-700',
      bgColor: 'from-red-100 via-amber-50 to-yellow-100',
      themes: [
        'Don a mask and dance the evening away in your finest gown and suit!'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header Section - Mobile Responsive */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-0">
              <Theater className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Competition Segments</h1>
                <p className="text-lg sm:text-xl text-orange-100">EWU Lit-Carnival 2025</p>
              </div>
            </div>
            <div className="sm:block">
              <div className="bg-white bg-opacity-20 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-yellow-200">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">October 16, 2025</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-orange-100 max-w-3xl">
            Choose your stage and let your creativity shine! Each segment offers unique opportunities 
            to showcase your literary and artistic talents in this whirlwind of words, rhymes, and costumes.
          </p>
        </div>
        {/* Background decorations - responsive sizing */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-400 bg-opacity-10 rounded-full -mr-16 sm:-mr-32 -mt-16 sm:-mt-32"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-orange-400 bg-opacity-10 rounded-full -ml-12 sm:-ml-24 -mb-12 sm:-mb-24"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header - Mobile Responsive */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-3 sm:mb-4">Event Segments Overview</h2>
          <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto px-4">
            Explore all five exciting segments of our literary carnival and find your perfect stage to shine.
          </p>
        </div>

        {/* Segments Grid - Mobile Responsive */}
        <div className="space-y-8 sm:space-y-12">
          {segments.map((segment, index) => (
            <div key={segment.id} className={`bg-gradient-to-r ${segment.bgColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Icon and Title */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${segment.color} text-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}>
                    {segment.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow w-full">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 sm:mb-6">
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-2">{segment.title}</h2>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm">
                        <div className="flex items-center space-x-2 bg-amber-100 bg-opacity-80 px-3 py-1 rounded-full border border-amber-200">
                          <Clock className="w-4 h-4 text-amber-700 flex-shrink-0" />
                          <span className="text-amber-800">{segment.timeLimit}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-amber-100 bg-opacity-80 px-3 py-1 rounded-full border border-amber-200">
                          <Users className="w-4 h-4 text-amber-700 flex-shrink-0" />
                          <span className="text-amber-800">{segment.maxMembers}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Themes */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-3 sm:mb-4">
                      {segment.id === 'poetry' ? 'Competition Format:' : 
                       segment.id === 'masquerade' ? 'Event Details:' : 'Themes:'}
                    </h3>
                    <div className="grid gap-2 sm:gap-3">
                      {segment.themes.map((theme, themeIndex) => (
                        theme === '---divider---' ? (
                          <div key={themeIndex} className="border-t-2 border-amber-300 my-2 sm:my-3"></div>
                        ) : (
                          <div key={themeIndex} className="bg-amber-50 bg-opacity-90 p-3 sm:p-4 rounded-lg shadow-sm border border-amber-200 hover:shadow-md hover:bg-amber-100 transition-all">
                            <p className="text-amber-900 font-medium text-sm sm:text-base">{theme}</p>
                          </div>
                        )
                      ))}
                    </div>
                  </div>

                  {/* Additional Info for specific segments */}
                  {segment.id === 'cosplay' && (
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Competition Categories:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-amber-800">
                        <div>• Comic-Con: Characters from comics, anime, movies, video games, and TV shows</div>
                        <div>• Literary Cosplay: Characters from novels, plays, films, and graphic novels</div>
                      </div>
                    </div>
                  )}

                  {segment.id === 'poster' && (
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Presentation Format:</h4>
                      <p className="text-xs sm:text-sm text-amber-800">
                        Participants will bring their posters and display them at EWU. 
                        Creative visual presentations combining literature with modern themes are encouraged.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Mobile Responsive */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border-2 border-red-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Participate?</h2>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 px-2">Choose your segment and register now to secure your spot!</p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf4sJdLVQJauODYGswSu4mlMRJ28mmHoVq9pL_38epN_AGwuA/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-100 text-red-800 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-200 transition-colors shadow-lg border-2 border-amber-300 w-full sm:w-auto text-sm sm:text-base text-center"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segments;