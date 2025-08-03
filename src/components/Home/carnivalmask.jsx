import React from 'react';
import mask from '../../assets/mask3.png';

const CarnivalMask = ({ className = "", size = "w-8 h-8", animated = false }) => (
  <img 
    src={mask}
    alt="Carnival Mask" 
    className={`${size} ${className} ${animated ? 'animate-pulse' : ''} object-contain filter drop-shadow-lg`}
  />
);

export default CarnivalMask;