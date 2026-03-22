'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div 
        className="scroll-progress-fill" 
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}
