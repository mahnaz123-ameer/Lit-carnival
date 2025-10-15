import React, { useState } from 'react';
import { Calendar, Clock, DollarSign, Mail, Phone, CheckCircle, AlertCircle, ExternalLink, Trophy, Sparkles } from 'lucide-react';

const Registration = () => {
  const [selectedSegments, setSelectedSegments] = useState([]);

  const segments = [
    { 
      id: 'drama', 
      name: 'Drama', 
      fee: 1020, 
      originalFee: 1000,
      isTeam: true, 
      description: 'Group theatrical performance',
      icon: '🎭'
    },
    { 
      id: 'poster', 
      name: 'Poster Presentation', 
      fee: 205, 
      originalFee: 200,
      isTeam: false, 
      description: 'Visual creative presentation',
      icon: '🎨'
    },
    { 
      id: 'poetry', 
      name: 'Spot Poetry & Recitation', 
      fee: 205, 
      originalFee: 200,
      isTeam: false, 
      description: 'Poetry and recitation performance',
      icon: '📝'
    },
    { 
      id: 'cosplay', 
      name: 'Comic-Con & Cosplay', 
      fee: 205, 
      originalFee: 200,
      isTeam: false, 
      description: 'Character costume competition',
      icon: '🦸'
    },
    { 
      id: 'masquerade', 
      name: 'Masquerade', 
      fee: 205, 
      originalFee: 200,
      isTeam: false, 
      description: 'Elegant masquerade ball',
      icon: '🎭'
    }
  ];

  const handleSegmentChange = (segmentId) => {
    setSelectedSegments(prev => 
      prev.includes(segmentId) 
        ? prev.filter(id => id !== segmentId)
        : [...prev, segmentId]
    );
  };

  const calculateTotal = () => {
    return selectedSegments.reduce((total, segmentId) => {
      const segment = segments.find(s => s.id === segmentId);
      return total + (segment ? segment.fee : 0);
    }, 0);
  };

  const handleParticipantRegistration = () => {
    window.open('https://forms.gle/R3XYTma4TvBQ6XaX7', '_blank');
  };

  const handleVisitorRegistration = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfUjPadEd2NMz-6kkgOLvTPRIe-FcVJfuZ4YE01g4fe3sEsHQ/viewform?usp=sharing&ouid=115401286924735990256', '_blank');
  };

  const handleRegistrationClick = () => {
    if (selectedSegments.length === 0) {
      alert('Please select at least one segment before proceeding to registration.');
      return;
    }
    
    window.open('https://forms.gle/R3XYTma4TvBQ6XaX7', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header Section - Mobile Responsive */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-0">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Registration</h1>
                <p className="text-lg sm:text-xl text-orange-100">Foodi Presents EWU Lit-Carnival 2025</p>
              </div>
            </div>
            <div className="sm:block">
              <div className="bg-white bg-opacity-20 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-yellow-200">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">September 05, 2025</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-orange-100 max-w-3xl">
            Join the whirlwind of words, rhymes, and costumes! Register now to secure your spot in Bangladesh's most exciting inter-university literary competition.
          </p>
        </div>
        {/* Background decorations - hidden on small screens */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-yellow-400 bg-opacity-10 rounded-full -mr-16 sm:-mr-32 -mt-16 sm:-mt-32"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-orange-400 bg-opacity-10 rounded-full -ml-12 sm:-ml-24 -mb-12 sm:-mb-24"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Registration Options - Mobile Responsive */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl border-2 border-red-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-center">
            <div 
              className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-amber-200 cursor-pointer hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
              onClick={handleParticipantRegistration}
            >
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-yellow-300" />
              <div className="font-bold text-base sm:text-lg mb-1">Participant Registration</div>
              <p className="text-sm text-orange-100">Register to compete in the events</p>
            </div>
            <div 
              className="bg-white bg-opacity-20 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-amber-200 cursor-pointer hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
              onClick={handleVisitorRegistration}
            >
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-yellow-300" />
              <div className="font-bold text-base sm:text-lg mb-1">Visitor Registration</div>
              <p className="text-sm text-orange-100">Register to attend as spectator</p>
            </div>
          </div>
        </div>

        {/* Competition Segments - Mobile Responsive */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-8 border-2 border-amber-300">
          <div className="text-center mb-6 sm:mb-8">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-red-700 mb-3 sm:mb-4" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-2 sm:mb-3">Competitive Segments</h3>
            <p className="text-base sm:text-lg text-amber-700">Select the segments you want to participate in</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {segments.map((segment) => (
              <div 
                key={segment.id} 
                className={`relative border-2 rounded-lg sm:rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedSegments.includes(segment.id) 
                    ? 'border-red-600 bg-gradient-to-br from-red-50 to-amber-50 shadow-lg' 
                    : 'border-amber-300 bg-white hover:border-red-400 hover:shadow-md'
                }`}
                onClick={() => handleSegmentChange(segment.id)}
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{segment.icon}</div>
                  <h4 className="font-bold text-base sm:text-lg text-amber-900 mb-2">{segment.name}</h4>
                  <p className="text-xs sm:text-sm text-amber-700 mb-3 sm:mb-4 leading-tight">{segment.description}</p>
                  
                  <div className="mb-3 sm:mb-4">
                    <div className="text-xl sm:text-2xl font-bold text-red-700">
                      ৳{segment.fee}
                    </div>
                    <div className="text-xs text-amber-600">
                      (৳{segment.originalFee} + bKash fee)
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-1">
                    {segment.isTeam && (
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">TEAM</span>
                    )}
                    {segment.id === 'poster' && (
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">INDIVIDUAL/PAIR</span>
                    )}
                    {segment.id === 'masquerade' && (
                      <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">SPECIAL</span>
                    )}
                  </div>
                </div>
                
                {selectedSegments.includes(segment.id) && (
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total Cost - Mobile Responsive */}
          {selectedSegments.length > 0 && (
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-400 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg">
              <h4 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3 sm:mb-4 flex items-center">
                <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 mr-2" />
                Total Registration Cost
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {selectedSegments.map(segmentId => {
                  const segment = segments.find(s => s.id === segmentId);
                  return (
                    <div key={segmentId} className="flex justify-between items-center bg-white bg-opacity-60 p-2 sm:p-3 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{segment.icon}</span>
                        <span className="font-medium text-amber-900 text-sm sm:text-base">{segment.name}</span>
                      </span>
                      <span className="font-bold text-red-700 text-base sm:text-lg">
                        ৳{segment.fee}
                      </span>
                    </div>
                  );
                })}
                <div className="border-t-2 border-amber-400 pt-3 sm:pt-4 mt-3 sm:mt-4">
                  <div className="flex justify-between items-center text-xl sm:text-2xl font-bold text-red-700 bg-white bg-opacity-80 p-3 sm:p-4 rounded-lg">
                    <span>TOTAL:</span>
                    <span>৳{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Register Button - Mobile Responsive */}
          <div className="text-center">
            <button
              onClick={handleRegistrationClick}
              disabled={selectedSegments.length === 0}
              className="bg-gradient-to-r from-red-700 to-amber-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto hover:scale-105 w-full sm:w-auto justify-center"
            >
              Register Now
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
            </button>
            {selectedSegments.length === 0 && (
              <p className="text-amber-600 mt-2 sm:mt-3 font-medium text-sm sm:text-base">Please select at least one segment</p>
            )}
          </div>
        </div>

        {/* Important Notes - Mobile Responsive */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-amber-200">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-4 sm:mb-6 text-center">Important Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-900 mb-2 sm:mb-3">General Rules:</h3>
              <ul className="space-y-2 text-amber-800 text-sm sm:text-base">
                <li>• Multiple segment participation is allowed.</li>
                <li>• Participants must make a separate payment for each registration.</li>
                <li>• Posters should be hand-made; however, printed or decorative elements may be added.</li>
                <li>• Cosplay and Comic-Con participants must wear costumes that are appropriate to the event's standards.</li>
                 <li>• The final segment, Masquerade, is not competitive but requires prior registration.</li>
                  <li>• Spot registration will not be available for participants but will be open for visitors only.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-900 mb-2 sm:mb-3">Registration:</h3>
              <ul className="space-y-2 text-amber-800 text-sm sm:text-base">
                <li>• Drama: Tk. 1000 per team</li>
                <li>• Other segments: Tk. 200 per entry</li>
                <li>• Early registration is recommended.</li>
                <li>• Spots are limited for each segment.</li>
                <li>• Registration fees are non-refundable.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;