import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import FeaturesSection from './FeaturesSection';
import HighlightsSection from './HighlightsSection';
import QuickInfoSection from './QuickInfoSection';
import FinalCTASection from './FinalCTASection';
import HomeStyles from './HomeStyles';

const Home = ({ setCurrentPage }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      <HeroSection setCurrentPage={setCurrentPage} mousePosition={mousePosition} />
      <StatsSection />
      <FeaturesSection />
      {/* <HighlightsSection /> */}
      <QuickInfoSection />
      <FinalCTASection setCurrentPage={setCurrentPage} />
      <HomeStyles />
    </div>
  );
};

export default Home;