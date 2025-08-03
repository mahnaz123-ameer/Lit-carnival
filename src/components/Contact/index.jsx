import React, { useState, useRef } from 'react';
import { Mail, MapPin, Calendar, Clock, Users, Star, Sparkles, Send } from 'lucide-react';

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    university: '',
    segment: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errorDetails, setErrorDetails] = useState('');

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_qyjyvkr';
  const EMAILJS_TEMPLATE_ID = 'template_y7nvkgc';
  const EMAILJS_PUBLIC_KEY = 'p6FmUn8H_9XJfHR4f';

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setErrorDetails('');

    // Basic validation
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setSubmitStatus('error');
      setErrorDetails('Name, email, and message are required fields.');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setSubmitStatus('error');
      setErrorDetails('Please enter a valid email address.');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
      return;
    }

    try {
      // Load EmailJS script dynamically
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
          window.emailjs.init(EMAILJS_PUBLIC_KEY);
          sendEmail();
        };
        script.onerror = () => {
          setSubmitStatus('error');
          setErrorDetails('Failed to load EmailJS library.');
          setIsSubmitting(false);
        };
        document.head.appendChild(script);
      } else {
        sendEmail();
      }

      function sendEmail() {
        // Prepare template parameters - make sure these match your EmailJS template variables
        const templateParams = {
          from_name: formData.from_name,
          from_email: formData.from_email,
          to_email: 'voltixtechsolutions@gmail.com', // Your email
          university: formData.university || 'Not specified',
          segment: formData.segment || 'Not specified', 
          message: formData.message,
          reply_to: formData.from_email
        };

        console.log('Sending with params:', templateParams);
        console.log('Service ID:', EMAILJS_SERVICE_ID);
        console.log('Template ID:', EMAILJS_TEMPLATE_ID);

        window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSubmitStatus('success');
            setFormData({
              from_name: '',
              from_email: '',
              university: '',
              segment: '',
              message: ''
            });
          })
          .catch((error) => {
            console.error('FAILED...', error);
            setSubmitStatus('error');
            setErrorDetails(`Failed to send email: ${error.text || error.message || 'Unknown error'}`);
          })
          .finally(() => {
            setIsSubmitting(false);
            setTimeout(() => {
              setSubmitStatus('');
              setErrorDetails('');
            }, 8000);
          });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setErrorDetails(`Unexpected error: ${error.message}`);
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('');
        setErrorDetails('');
      }, 8000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <div>
                <h1 className="text-4xl font-bold">Contact Us</h1>
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
            Have questions about the inter-university literary competition? We're here to help you join this whirlwind of words, rhymes, and costumes!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 bg-opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 bg-opacity-10 rounded-full -ml-24 -mb-24"></div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                Event Details
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Event Date</h3>
                    <p className="text-gray-600">October 16, 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Venue</h3>
                    <p className="text-gray-600">East West University<br />Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Registration Deadline</h3>
                    <p className="text-gray-600">August 20, 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">lit-carnival@ewubd.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Fees */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 text-amber-600 mr-2" />
                Registration Fees
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Drama Team</span>
                  <span className="font-semibold text-amber-700">Tk. 1000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Individual Segments</span>
                  <span className="font-semibold text-amber-700">Tk. 200</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-6 border border-red-200">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Quick Reminder</h3>
              <p className="text-gray-700 text-sm">
                Spots are limited! Register early to secure your participation in this celebration of literature and creativity.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="font-semibold">❌ Failed to send message</div>
                  {errorDetails && <div className="mt-2 text-sm">{errorDetails}</div>}
                  <div className="mt-2 text-sm">Please try again or contact us directly at voltixtechsolutions@gmail.com</div>
                </div>
              )}
              
              <div ref={form} onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        University
                      </label>
                      <input
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:opacity-50"
                        placeholder="Your university name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interested Segment
                      </label>
                      <select
                        name="segment"
                        value={formData.segment}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:opacity-50"
                      >
                        <option value="">Select a segment</option>
                        <option value="drama">Drama</option>
                        <option value="poster">Poster Presentation</option>
                        <option value="poetry">Spot Poetry & Recitation</option>
                        <option value="cosplay">Comic-Con X Cosplay</option>
                        <option value="masquerade">Masquerade</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="Tell us about your questions, ideas, or how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-6 rounded-lg font-medium hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

           

           

            {/* Additional Info */}
            <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border border-amber-200">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Need More Information?</h3>
              <p className="text-gray-700 mb-4">
                Stay tuned for more information on segments, schedules, and updates. Follow our official channels for the latest announcements about this exciting literary celebration!
              </p>
              <p className="text-sm text-gray-600">
                <strong>Organized by:</strong> Department of English, East West University
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;