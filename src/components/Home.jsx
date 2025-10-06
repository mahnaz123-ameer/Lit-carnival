import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 p-8 relative overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute top-10 left-20 text-yellow-400 text-2xl animate-pulse">✦</div>
      <div className="absolute top-32 right-32 text-yellow-500 text-xl animate-pulse delay-1000">✧</div>
      <div className="absolute bottom-40 left-10 text-amber-400 text-3xl animate-pulse delay-2000">★</div>
      <div className="absolute top-60 right-20 text-yellow-400 text-lg animate-pulse delay-500">✦</div>
      <div className="absolute bottom-20 right-40 text-amber-500 text-2xl animate-pulse delay-1500">✧</div>

      {/* University Logo */}
      <div className="absolute top-8 right-8 bg-navy-900 text-white p-4 rounded-lg shadow-lg">
        <div className="text-sm font-bold text-center">
          <div className="text-blue-600 font-black text-lg">EAST</div>
          <div className="text-blue-600 font-black text-lg">WEST</div>
          <div className="text-xs text-gray-600 mt-1">UNIVERSITY</div>
        </div>
      </div>

      {/* Decorative Books */}
      <div className="absolute top-20 left-10 transform -rotate-12">
        <div className="w-16 h-20 bg-amber-200 border-2 border-amber-400 rounded-sm shadow-md"></div>
      </div>
      <div className="absolute top-16 left-16 transform rotate-6">
        <div className="w-14 h-18 bg-orange-200 border-2 border-orange-400 rounded-sm shadow-md"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Banner */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-center py-8 px-12 rounded-lg shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <h1 className="text-5xl md:text-6xl font-bold text-yellow-100 tracking-wider">
             Foodi Presents <br></br> EWU LIT-CARNIVAL 2025
            </h1>
          </div>
          {/* Banner ribbons */}
          <div className="absolute -top-2 -left-4 w-8 h-24 bg-gradient-to-b from-yellow-400 to-orange-500 transform skew-y-12 shadow-lg"></div>
          <div className="absolute -top-2 -right-4 w-8 h-24 bg-gradient-to-b from-yellow-400 to-orange-500 transform -skew-y-12 shadow-lg"></div>
        </div>

        {/* Date and Call for Participants */}
        <div className="text-center mb-12">
          <div className="text-2xl font-bold text-blue-800 mb-4">SEPTEMBER 05, 2025</div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">CALL FOR PARTICIPANTS</h2>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-5xl mx-auto">
            <p className="text-gray-800 text-lg leading-relaxed">
              The Department of English, East West University, invites you to the EWU Lit-Carnival 2025; an inter-university 
              literary competition rolling into our campus in a whirlwind of words, rhymes, and costumes. The Carnival aims to 
              bring literature to life and make us imagine the classics anew. University students from various disciplines 
              across Bangladesh are encouraged to participate or attend; whether they are dreamers, performers, readers, 
              artists, or poets, this is an opportunity for them to create, compose, and captivate. The university premises will 
              come alive with the festive spirit of the carnival, featuring themed stalls, visual installations, and interactive 
              spaces that invite visitors to engage with arts and culture in myriad ways. Inspired by Mikhail Bakhtin's idea of 
              the carnivalesque—a joyful, rule-breaking space, where hierarchies dissolve and creativity reigns—the carnival 
              aims to celebrate literature in joyous ways and make participants reimagine the classics while spotlighting the 
              creativity of our young ones. It will feature various exciting inter-university events in which you can compete to 
              showcase your skills in the creative arts.
            </p>
          </div>
        </div>

        {/* Segments Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Students can participate in the following segments:</h3>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                    <th className="px-6 py-4 text-left font-bold text-lg">Segment</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Details</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Themes</th>
                  </tr>
                </thead>
                <tbody className="bg-gradient-to-b from-orange-50 to-yellow-50">
                  <tr className="border-b border-orange-200">
                    <td className="px-6 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="text-4xl">🎭</div>
                        <div className="font-semibold text-gray-800">Drama</div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-gray-700">
                      Time limit: 15 minutes<br/>
                      Max 10 members/team
                    </td>
                    <td className="px-6 py-6 text-gray-700">
                      • Tagore and Nazrul: Reimagined<br/>
                      • Renaissance Reimagined in the 21st Century<br/>
                      • Farce and the Burlesque
                    </td>
                  </tr>
                  
                  <tr className="border-b border-orange-200">
                    <td className="px-6 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="text-4xl">🎨</div>
                        <div className="font-semibold text-gray-800">Poster Presentation</div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-gray-700">
                      Participants will bring their posters and display them at EWU
                    </td>
                    <td className="px-6 py-6 text-gray-700">
                      • Role of K-Pop in Shaping Hybrid Cultures among Gen Z<br/>
                      • Meme Literature: From Shakespeare to Shrek<br/>
                      • Graphic Novels and Illustrated Storytelling: The Visual in Literature
                    </td>
                  </tr>
                  
                  <tr className="border-b border-orange-200">
                    <td className="px-6 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="text-4xl">📝</div>
                        <div className="font-semibold text-gray-800">Spot Poetry & Recitation</div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-gray-700">
                      Theme and guidelines will be announced at the start of the competition.
                    </td>
                    <td className="px-6 py-6 text-gray-700">
                      <em>To be announced</em>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-orange-200">
                    <td className="px-6 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="text-4xl">🦸</div>
                        <div className="font-semibold text-gray-800">Comic-Con X Cosplay</div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-gray-700">
                      <strong>Comic-Con:</strong> Characters portrayed from popular culture (comics, anime, movies, video games, and TV shows)<br/><br/>
                      <strong>Literary Cosplay:</strong> Characters portrayed from works of literature such as novels, plays, films, and graphic novels
                    </td>
                    <td className="px-6 py-6 text-gray-700">
                      • Superheroes and Supervillains<br/>
                      • The Sci-Fi Worlds<br/>
                      • Apocalypse and Dystopias<br/>
                      • Fan-Favorite Romances<br/>
                      • Time Travelers from Pop Culture<br/>
                      • Witches, Wizards & Warlocks<br/>
                      • Pantheon Clash: Gods from Different Mythologies<br/>
                      • The Victorian Gothic<br/>
                      • Period Pieces from Historical Fiction<br/>
                      • Fairy Tales and Folklore
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="px-6 py-6">
                      <div className="flex items-center space-x-3">
                        <div className="text-4xl">🎭</div>
                        <div className="font-semibold text-gray-800">Masquerade</div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-gray-700" colSpan="2">
                      Don a mask and dance the evening away in your finest gown and suit!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Registration Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Register at:</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {/* QR Code Placeholder */}
              <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <div className="text-sm font-bold text-blue-800">Scan QR Code</div>
                </div>
              </div>
              
              <div className="space-y-3 text-gray-700">
                <div><strong>Venue:</strong> East West University</div>
                <div><strong>Registration Deadline:</strong> September 05, 2025</div>
                <div><strong>Email:</strong> lit-carnival@ewubd.edu</div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-gray-700">
                  Spots are limited, so register early to secure yours.<br/>
                  Stay tuned for more information on the segments, schedules, and updates.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-xl">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Registration Fees:</h4>
              <div className="space-y-2 text-gray-700">
                <div>Tk. 1000 for each Drama team</div>
                <div>Tk. 200 for entry in each segment</div>
              </div>
              
              <button className="mt-6 w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Mask */}
        <div className="absolute bottom-10 right-10 opacity-20">
          <div className="text-8xl transform rotate-12">🎭</div>
        </div>
      </div>
    </div>
  );
}

export default Home;