import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: "url('/assets/images/buildings/front_building.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `scale(${1 + (scrollPosition * 0.0005)})`,
          transition: 'transform 1s ease-out',
          willChange: 'transform'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          Capuchin Boys Secondary School
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white text-opacity-90 font-light italic">
          Education to the brilliant prospect
        </p>
        <div className="space-x-2">
          <Link 
            to="/admissions"
            aria-label="Start your application process"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-4 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </Link>
          <Link 
            to="/about"
            aria-label="Learn more about our school"
            className="inline-block border-2 border-primary text-white font-semibold px-8 py-4 hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;