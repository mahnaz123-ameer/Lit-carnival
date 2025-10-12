import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import FoodiLogo from '../../assets/Foodi-logo-transparent.png';
import middleLogo from '../../assets/logoo.png';
import EwuLogo from '../../assets/logo.png';

const ProgrammeShedule = () => {
  const scheduleData = [
    { time: '08:00 AM - 08:40 AM', event: 'Welcome, Check-ins, and Kit Collection', venue: 'Front Gate, East West University Campus' },
    { time: '08:45 AM - 09:15 AM', event: 'Inauguration', venue: 'Manzur Elahi Auditorium' },
    { time: '09:20 AM - 09:30 AM', event: 'Lit-Carnival Stall Opening Ceremony', venue: 'EWU Courtyard' },
    { time: '09:35 AM - 09:55 AM', event: 'Morning Snacks', venue: 'Canteen' },
    { time: '10:00 AM - 10:30 AM', event: 'Competition 1A: Spot Poetry (Writing)\n*Audience will not be allowed in this session', venue: 'The Writing Centre (Room No. 240)' },
    { time: '10:00 AM - 10:50 AM', event: 'Competition 2: Comic-Con X Cosplay', venue: 'Manzur Elahi Auditorium' },
    { time: '11:00 AM - 12:15 PM', event: 'Competition 1B: Poetry Recitation', venue: 'Manzur Elahi Auditorium' },
    { time: '12:20 PM - 01:00 PM', event: 'Lunch', venue: 'Canteen' },
    { time: '01:05 PM - 04:30 PM', event: 'Competition 3: Drama', venue: 'Manzur Elahi Auditorium' },
    { time: '04:40 PM - 05:10 PM', event: 'Masquerade', venue: 'Manzur Elahi Auditorium' },
    { time: '05:15 PM - 05:40 PM', event: 'Awards, Acknowledgments, Closing Ceremony, and Photo Sessions', venue: 'Manzur Elahi Auditorium' },
    { time: '05:45 PM - 06:00 PM', event: 'Tea Party', venue: 'Canteen' }
  ];

  const conveners = [
    {
      name: 'Israt Jahan',
      title: 'Assistant Professor',
      department: 'Department of English',
      email: 'shantiew@ewubd.edu'
    },
    {
      name: 'Shahnaz Ameer',
      title: 'Senior Lecturer',
      department: 'Department of English',
      email: 'shahnazameer@ewubd.edu'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-4 md:p-8">
      {/* Header with Logos */}
      <div className="max-w-[1500px] mx-auto bg-white rounded-lg g overflow-hidden">
        {/* Logo Banner */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-4 px-6 flex items-center justify-between ">
          <img src={EwuLogo} alt="EWU Logo" className="h-12 md:h-16 object-contain" />
          <img src={middleLogo} alt="Middle Logo" className="h-24 md:h-18 object-contain" />
          <img src={FoodiLogo} alt="Foodi Logo" className="h-28 md:h-20 object-contain" />
        </div>

        {/* Title Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">Foodi presents EWU Lit-Carnival 2025</h1>
          <div className="space-y-2 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span><strong>Event Date:</strong> October 16 (Thursday) 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span><strong>Venue:</strong> East West University, A/2, Jahurul Islam Avenue, Jahurul Islam City, Aftabnagar, Dhaka-1212</span>
            </div>
          </div>
        </div>

        {/* Program Schedule Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-800 text-white py-4 px-6">
          <h2 className="text-xl md:text-2xl font-bold text-center">Program Schedule</h2>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-red-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold border border-red-600">Time</th>
                <th className="py-3 px-4 text-left font-semibold border border-red-600">Event</th>
                <th className="py-3 px-4 text-left font-semibold border border-red-600">Venue</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
                  <td className="py-3 px-4 border border-orange-200 font-medium text-sm md:text-base whitespace-nowrap">
                    {item.time}
                  </td>
                  <td className="py-3 px-4 border border-orange-200 text-sm md:text-base">
                    {item.event.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </td>
                  <td className="py-3 px-4 border border-orange-200 text-sm md:text-base">
                    {item.venue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note Section */}
        <div className="bg-orange-50 p-4 md:p-6 border-t-2 border-orange-200">
          <p className="text-sm md:text-base text-gray-700">
            <strong>Note:</strong> The Poster Presentation segment will not appear in the above schedule because posters 
            will be submitted prior to the event. They will be displayed on the event day in the courtyard. The best 
            entries will be selected during the designated time slot announced separately.
          </p>
        </div>

        {/* Event Conveners Section */}
        <div className="bg-gradient-to-r from-red-700 to-red-800 text-white py-3 px-6 text-center">
          <h3 className="text-lg md:text-xl font-bold">EVENT CONVENERS</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 bg-white">
          {conveners.map((convener, index) => (
            <div key={index} className="space-y-1">
              <h4 className="text-lg md:text-xl font-bold text-gray-800">{convener.name}</h4>
              <p className="text-gray-700">{convener.title}</p>
              <p className="text-gray-600">{convener.department}</p>
              <p className="text-red-700 break-all">{convener.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammeShedule;