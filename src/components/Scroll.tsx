import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scroll.css'; // Create this CSS file for custom styling

const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calculateScrollPercentage = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    return Math.min(100, Math.max(0, scrollPercentage));
  };

  const handleScroll = () => {
    const newScrollPercentage = calculateScrollPercentage();
    setScrollPercentage(newScrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <ProgressBar now={scrollPercentage} className="scroll-progress-bar" />
    </div>
  );
};

export default ScrollProgress;
