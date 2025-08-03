import React from 'react';

const HomeStyles = () => {
  return (
    <style jsx>{`
      @keyframes float {
        0%, 100% { 
          transform: translateY(0px) rotate(0deg) scale(1); 
        }
        25% { 
          transform: translateY(-15px) rotate(3deg) scale(1.05); 
        }
        50% { 
          transform: translateY(-25px) rotate(0deg) scale(1.1); 
        }
        75% { 
          transform: translateY(-10px) rotate(-3deg) scale(1.05); 
        }
      }
      
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      
      @keyframes glow {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
        }
        50% { 
          box-shadow: 0 0 40px rgba(239, 68, 68, 0.6), 0 0 60px rgba(245, 158, 11, 0.4);
        }
      }
      
      .animate-float {
        animation: float 8s ease-in-out infinite;
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 1.2s ease-out;
      }
      
      .animate-glow {
        animation: glow 3s ease-in-out infinite;
      }
      
      .backdrop-blur-2xl {
        backdrop-filter: blur(40px);
      }
    `}</style>
  );
};

export default HomeStyles;