import React, { useState } from 'react';
import { Clock, Users, Presentation, Mic, Theater, Palette, Sparkles, Calendar, BookOpen, ClipboardList } from 'lucide-react';
import FoodiLogo from '../../assets/Foodi-logo-transparent.png';
import EwuLogo from '../../assets/logo.png';
const Segments = () => {
  const [activeTab, setActiveTab] = useState({});

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
      maxMembers: 'Individual /Pair',
      maxMembers1: ' 24✕36 inches',
      maxMembers2: 'Vertical (Portrait) Orientation',
       
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
        'Theme will be announced at the start of the competition'
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

  const handleTabChange = (segmentId, tab) => {
    setActiveTab(prev => ({ ...prev, [segmentId]: tab }));
  };

  const getActiveTab = (segmentId) => {
    return activeTab[segmentId] || 'themes';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header Section - Mobile Responsive */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Logo Section */}
        <div className="relative container mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-0">
              <Theater className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Competition Segments</h1>
                <p className="text-lg sm:text-xl text-orange-100"> Foodi Presents EWU Lit-Carnival 2025</p>
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
            <div className="hidden sm:flex items-start justify-between mb-4 sm:mb-6">
            {/* EWU Logo - Top Left */}
            <div className=" p-2 sm:p-3">
              <img 
                src={EwuLogo} 
                alt="EWU Logo" 
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
              />
            </div>
            
            {/* Foodi Logo - Top Right */}
            <div className="  p-2 sm:p-3 ">
              <img 
                src={FoodiLogo} 
                alt="Foodi Logo" 
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
              />
            </div>
         
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-3 sm:mb-4 lg:-mt-24">Event Segments Overview</h2>
          <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto px-4">
            Explore all five exciting segments of our literary carnival and find your perfect stage to shine.
          </p>
        </div>

        {/* Segments Grid - Mobile Responsive */}
        <div className="space-y-8 sm:space-y-12">
          {segments.map((segment, index) => (
            <div key={segment.id} className={`bg-gradient-to-r ${segment.bgColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}>
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
                        {/* Additional details for poster presentation */}
                        {segment.id === 'poster' && segment.maxMembers1 && (
                          <div className="flex items-center space-x-2 bg-amber-100 bg-opacity-80 px-3 py-1 rounded-full border border-amber-200">
                            <Presentation className="w-4 h-4 text-amber-700 flex-shrink-0" />
                            <span className="text-amber-800">{segment.maxMembers1}</span>
                          </div>
                        )}
                        {segment.id === 'poster' && segment.maxMembers2 && (
                          <div className="flex items-center space-x-2 bg-amber-100 bg-opacity-80 px-3 py-1 rounded-full border border-amber-200">
                            <Presentation className="w-4 h-4 text-amber-700 flex-shrink-0" />
                            <span className="text-amber-800">{segment.maxMembers2}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tab Navigation - Only show for segments with guidelines */}
                  {['drama', 'poster', 'poetry', 'cosplay'].includes(segment.id) && (
                    <div className="flex space-x-2 mb-4 border-b-2 border-amber-200">
                      <button
                        onClick={() => handleTabChange(segment.id, 'themes')}
                        className={`flex items-center space-x-2 px-4 py-2 font-semibold text-sm sm:text-base transition-all ${
                          getActiveTab(segment.id) === 'themes'
                            ? 'text-amber-900 border-b-2 border-amber-700 -mb-0.5'
                            : 'text-amber-600 hover:text-amber-800'
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Themes</span>
                      </button>
                      <button
                        onClick={() => handleTabChange(segment.id, 'guidelines')}
                        className={`flex items-center space-x-2 px-4 py-2 font-semibold text-sm sm:text-base transition-all ${
                          getActiveTab(segment.id) === 'guidelines'
                            ? 'text-amber-900 border-b-2 border-amber-700 -mb-0.5'
                            : 'text-amber-600 hover:text-amber-800'
                        }`}
                      >
                        <ClipboardList className="w-4 h-4" />
                        <span>Guidelines</span>
                      </button>
                    </div>
                  )}

                  {/* Themes Tab Content */}
                  {(getActiveTab(segment.id) === 'themes' || segment.id === 'masquerade') && (
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

                      {/* Presentation Format for Poster Presentation */}
                      {segment.id === 'poster' && (
                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Presentation Format:</h4>
                          <p className="text-xs sm:text-sm text-amber-800">
                            Participants will bring their posters and display them at EWU. 
                            Creative visual presentations combining literature with modern themes are encouraged.
                          </p>
                        </div>
                      )}

                      {/* Competition Categories for Cosplay */}
                      {segment.id === 'cosplay' && (
                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Competition Categories:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-amber-800">
                            <div>• Comic-Con: Characters from comics, anime, movies, video games, and TV shows</div>
                            <div>• Literary Cosplay: Characters from novels, plays, films, and graphic novels</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Guidelines Tab Content */}
                  {getActiveTab(segment.id) === 'guidelines' && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-3 sm:mb-4">Competition Guidelines</h3>
                      
                      {/* Drama Guidelines */}
                      {segment.id === 'drama' && (
                        <div className="space-y-3 sm:space-y-4">
                          <div className="p-3 sm:p-4 bg-red-50 bg-opacity-90 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">⚠️ Prohibited Items & Effects</h4>
                            <ul className="space-y-1 text-xs sm:text-sm text-red-800">
                              <li>• No use of fire, flames, or fireworks</li>
                              <li>• Smoke machines or fog machines are not permitted</li>
                              <li>• Avoid using any items that create mess on the stage (e.g., confetti, powder, liquids)</li>
                              <li>• Spray paints, color powders, or similar materials are strictly prohibited</li>
                            </ul>
                          </div>
                          <div className="p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Props & Costumes</h4>
                            <ul className="space-y-1 text-xs sm:text-sm text-amber-800">
                              <li>• Teams must arrange and bring their own props</li>
                              <li>• Costumes should be appropriate and must not be culturally insensitive in any way</li>
                            </ul>
                          </div>
                          <div className="p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Lighting & Technical Support</h4>
                            <ul className="space-y-1 text-xs sm:text-sm text-amber-800">
                              <li>• Standard stage lights will be provided by organizers</li>
                              <li>• Additional spotlights are not allowed</li>
                              <li>• For multimedia support (audio, video, projections), teams must contact organizers in advance</li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Poetry Guidelines */}
                      {segment.id === 'poetry' && (
                        <div className="space-y-3 sm:space-y-4">
                          <div className="p-3 sm:p-4 bg-yellow-50 bg-opacity-90 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Competition Format</h4>
                            <div className="space-y-2 text-xs sm:text-sm text-yellow-800">
                              <div><span className="font-semibold">Time Allocation:</span> Participants will be given a fixed duration to compose an original short poem based on a theme given on the spot.</div>
                              <div><span className="font-semibold">Recitation:</span> After composing the poem, each participant will recite their poem in front of the judges and audience.</div>
                              <div><span className="font-semibold">Language:</span> Poems must be written and recited in English.</div>
                            </div>
                          </div>
                          <div className="p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Requirements & Delivery</h4>
                            <ul className="space-y-1 text-xs sm:text-sm text-amber-800">
                              <li>• Poems must be original, written during the contest</li>
                              <li>• Plagiarism or pre-prepared work will result in disqualification</li>
                              <li>• Mobile phones are not allowed during the competition</li>
                              <li>• Participants are encouraged to use expressive intonation, rhythm, and clarity</li>
                              <li>• Only microphones will be provided; no props, background music, or digital assistance allowed</li>
                            </ul>
                          </div>
                          <div className="p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">General Conduct</h4>
                            <p className="text-xs sm:text-sm text-amber-800">
                              Participants must maintain decorum, respect the given time limits, and ensure their poem does not contain offensive content.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Cosplay Guidelines */}
                      {segment.id === 'cosplay' && (
                        <div className="space-y-3 sm:space-y-4">
                         
                          <div className="p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Performance Format</h4>
                            <ul className="space-y-1 text-xs sm:text-sm text-amber-800">
                              <li>• Format: On-stage cosplay walk</li>
                              <li>• Performances and costumes must align with the official themes of the EWU Lit-Carnival 2025.</li>
                              <li>• Cosplayers will perform on the main stage during the scheduled segment</li>
                            </ul>
                          </div>
                          <div className="p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Costume Requirements</h4>
                            <ul className="space-y-1 text-xs sm:text-sm text-amber-800">
                              <li>• Costumes may include fabric, props, and lightweight accessories</li>
                              <li>• No real weapons or hazardous items allowed</li>
                              <li>• Costumes should not be culturally insensitive</li>
                            </ul>
                          </div>
                          <div className="p-3 sm:p-4 bg-red-50 bg-opacity-90 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">⚠️ Character Description Required</h4>
                            <div className="text-xs sm:text-sm text-red-800 space-y-2">
                              <p>Each cosplay act must register with participant name(s), character name(s), and source (novel, comic, anime, etc.).</p>
                              <p className="font-semibold">A 50-100 words description for each Cosplay/ComiCon character must be emailed to the University Team members by October 6, 2025.</p>
                              <p>Subject line: <span className="font-semibold">Cosplay/ComiCon Character Description</span></p>
                              <div className="mt-2 p-2 bg-amber-50 rounded border border-amber-200">
                                <p className="font-semibold mb-1">Sample Description:</p>
                                <p className="italic">"Now gracing the stage is Ophelia—Shakespeare's delicate flower from Hamlet. Loved deeply, yet torn by duty and despair, she embodies innocence touched by tragedy. Her songs whisper of love, her silence speaks of sorrow, and her presence reminds us of the fragility of the human heart."</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Poster Guidelines */}
                      {segment.id === 'poster' && (
                        <div className="space-y-3 sm:space-y-4">
                          <div className="p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Presentation Requirements</h4>
                            <ul className="space-y-1 text-xs sm:text-sm text-amber-800">
                              <li>• Posters must align with one of the official themes</li>
                              <li>• Size: 24 x 36 inches</li>
                              <li>• Format: Printed, physical posters only (No digital or projected posters)</li>
                              <li>• Display Method: Posters must be mountable on standard display boards (available at venue)</li>
                            </ul>
                          </div>
                          <div className="p-3 sm:p-4 bg-amber-100 bg-opacity-80 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Allowed Materials</h4>
                            <ul className="space-y-1 text-xs sm:text-sm text-amber-800">
                              <li>• Printed paper, photo paper, foam board and/or lightweight decorations are allowed</li>
                              <li>• No 3D models or electronic components are allowed</li>
                              <li>• The poster must include the title, participant name(s), and institution clearly at the bottom</li>
                            </ul>
                          </div>
                          <div className="p-3 sm:p-4 bg-red-50 bg-opacity-90 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">⚠️ Important Submission Details</h4>
                            <div className="text-xs sm:text-sm text-red-800 space-y-2">
                              <p className="font-semibold">Submission Deadline: October 15, 2025 (by 3 PM)</p>
                              <p>Location: Department of English, EWU</p>
                              <p>Contact during submission:</p>
                              <ul className="ml-4 space-y-1">
                                <li>• Mr. Akul Sheikh: 01680156667</li>
                                <li>• Mr. Jasim Uddin: 01921000538</li>
                              </ul>
                              <p className="font-semibold mt-2">Late submissions may not be accepted.</p>
                              <p>Presenters must be present on the day of the competition during their allocated time (mentioned in program schedule).</p>
                            </div>
                          </div>
                        </div>
                      )}
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