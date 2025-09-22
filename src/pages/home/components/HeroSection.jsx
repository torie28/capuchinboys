import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Hero Images
const HERO_IMAGES = [
  '/assets/images/environments/modern_school_environment.jpg',
  '/assets/images/environments/environment_section.jpg',
  '/assets/images/academics/student_in_class.jpg',
  '/assets/images/events/mass_as_our_culture.jpg',
  '/assets/images/buildings/front_building.jpg' // Keeping the original image in the rotation
];

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scrolling animation for hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Images with Carousel */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: `scale(${1 + (scrollPosition * 0.0005)})`,
              transition: 'transform 1.5s ease-out, opacity 2s ease-in-out',
              willChange: 'transform, opacity'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/50 to-stone-900/60"></div>
          </div>
        ))}
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