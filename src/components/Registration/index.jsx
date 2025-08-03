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

  const handleRegistrationClick = () => {
    if (selectedSegments.length === 0) {
      alert('Please select at least one segment before proceeding to registration.');
      return;
    }
    
    window.open('https://forms.gle/R3XYTma4TvBQ6XaX7', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Trophy className="w-8 h-8 text-yellow-300" />
              <div>
                <h1 className="text-4xl font-bold">Registration</h1>
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
            Join the whirlwind of words, rhymes, and costumes! Register now to secure your spot in Bangladesh's most exciting inter-university literary competition.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 bg-opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 bg-opacity-10 rounded-full -ml-24 -mb-24"></div>
      </div>

      <div className="container mx-auto px-6 py-8">
        
        {/* Important Dates */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white rounded-2xl p-8 mb-8 shadow-xl border-2 border-red-800">
          <div className="flex items-center justify-center mb-6">
            <AlertCircle className="w-6 h-6 mr-2" />
            <h2 className="text-3xl font-bold">Important Dates</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm border border-amber-200">
              <Calendar className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <div className="font-bold text-lg mb-1">Registration Deadline</div>
              <div className="text-2xl font-bold text-yellow-200">August 20, 2025</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm border border-amber-200">
              <Clock className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <div className="font-bold text-lg mb-1">Event Date</div>
              <div className="text-2xl font-bold text-yellow-200">October 16, 2025</div>
            </div>
          </div>
        </div>

        {/* Competition Segments */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-amber-300">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 mx-auto text-red-700 mb-4" />
            <h3 className="text-4xl font-bold text-amber-900 mb-3">Competition Segments</h3>
            <p className="text-lg text-amber-700">Select the segments you want to participate in</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {segments.map((segment) => (
              <div 
                key={segment.id} 
                className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedSegments.includes(segment.id) 
                    ? 'border-red-600 bg-gradient-to-br from-red-50 to-amber-50 shadow-lg' 
                    : 'border-amber-300 bg-white hover:border-red-400 hover:shadow-md'
                }`}
                onClick={() => handleSegmentChange(segment.id)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{segment.icon}</div>
                  <h4 className="font-bold text-lg text-amber-900 mb-2">{segment.name}</h4>
                  <p className="text-sm text-amber-700 mb-4">{segment.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-red-700">
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
                      <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">PAIRS OK</span>
                    )}
                    {segment.id === 'masquerade' && (
                      <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">SPECIAL</span>
                    )}
                  </div>
                </div>
                
                {selectedSegments.includes(segment.id) && (
                  <div className="absolute top-3 right-3">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total Cost */}
          {selectedSegments.length > 0 && (
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-400 rounded-xl p-6 mb-8 shadow-lg">
              <h4 className="text-2xl font-bold text-amber-900 mb-4 flex items-center">
                <DollarSign className="w-7 h-7 mr-2" />
                Total Registration Cost
              </h4>
              <div className="space-y-3">
                {selectedSegments.map(segmentId => {
                  const segment = segments.find(s => s.id === segmentId);
                  return (
                    <div key={segmentId} className="flex justify-between items-center bg-white bg-opacity-60 p-3 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-2xl mr-3">{segment.icon}</span>
                        <span className="font-medium text-amber-900">{segment.name}</span>
                      </span>
                      <span className="font-bold text-red-700 text-lg">
                        ৳{segment.fee}
                      </span>
                    </div>
                  );
                })}
                <div className="border-t-2 border-amber-400 pt-4 mt-4">
                  <div className="flex justify-between items-center text-2xl font-bold text-red-700 bg-white bg-opacity-80 p-4 rounded-lg">
                    <span>TOTAL:</span>
                    <span>৳{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Register Button */}
          <div className="text-center">
            <button
              onClick={handleRegistrationClick}
              disabled={selectedSegments.length === 0}
              className="bg-gradient-to-r from-red-700 to-amber-600 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto hover:scale-105"
            >
              Register Now
              <ExternalLink className="w-6 h-6 ml-2" />
            </button>
            {selectedSegments.length === 0 && (
              <p className="text-amber-600 mt-3 font-medium">Please select at least one segment</p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Registration Rules */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border-2 border-amber-300">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Registration Rules</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-900">Fees:</strong>
                <div className="text-amber-800">Drama: ৳1,020 | Others: ৳205 each</div>
              </div>
              <div className="bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-900">Payment:</strong>
                <div className="text-amber-800">Separate payment required for each segment</div>
              </div>
              <div className="bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-900">Processing:</strong>
                <div className="text-amber-800">All fees include bKash transaction charges</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border-2 border-amber-300">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <Mail className="w-6 h-6 mr-3 text-red-700" />
                <div>
                  <div className="font-semibold text-amber-900">Email</div>
                  <div className="text-sm text-amber-700">lit-carnival@ewubd.edu</div>
                </div>
              </div>
              <div className="flex items-center bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <Phone className="w-6 h-6 mr-3 text-red-700" />
                <div>
                  <div className="font-semibold text-amber-900">Support</div>
                  <div className="text-sm text-amber-700">Available during office hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border-2 border-amber-300">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Event Details</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-900">Venue:</strong>
                <div className="text-amber-800">East West University Campus</div>
              </div>
              <div className="bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-900">Duration:</strong>
                <div className="text-amber-800">Full Day Event</div>
              </div>
              <div className="bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-900">Audience:</strong>
                <div className="text-amber-800">University Students Nationwide</div>
              </div>
            </div>
          </div>

          {/* Prizes */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border-2 border-amber-300">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Prizes & Recognition</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-900">Winners:</strong>
                <div className="text-amber-800">Cash prizes & certificates</div>
              </div>
              <div className="bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-900">Recognition:</strong>
                <div className="text-amber-800">University-wide acclaim</div>
              </div>
              <div className="bg-white bg-opacity-80 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-900">Networking:</strong>
                <div className="text-amber-800">Connect with literary enthusiasts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;