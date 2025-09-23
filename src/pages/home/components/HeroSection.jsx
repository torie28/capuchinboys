import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Hero content with matching images and text
const HERO_CONTENT = [
  {
    image: '/assets/images/buildings/front_building.jpg',
    title: 'Capuchin Boys',
    subtitle: 'Secondary School',
    description: 'Excellence in Education and Character Formation'
  },
  {
    image: '/assets/images/environments/modern_school_environment.jpg',
    title: 'Modern Learning',
    subtitle: 'Environments',
    description: 'State-of-the-art facilities for 21st century education'
  },
  {
    image: '/assets/images/environments/environment_section.jpg',
    title: 'Green Campus',
    subtitle: 'Serene Environment',
    description: 'Learning in harmony with nature'
  },
  {
    image: '/assets/images/academics/student_in_class.jpg',
    title: 'Academic Excellence',
    subtitle: 'Holistic Education',
    description: 'Nurturing minds and shaping futures'
  },
  {
    image: '/assets/images/events/mass_as_our_culture.jpg',
    title: 'Spiritual Growth',
    subtitle: 'Our Culture',
    description: 'Building character through faith and values'
  }
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

  // Auto-scrolling animation for hero content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % HERO_CONTENT.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Images with Carousel */}
      <div className="absolute inset-0">
        {HERO_CONTENT.map((content, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${content.image}')`,
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
      
      <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full relative z-10 py-32">
        <div className="max-w-4xl">
          {HERO_CONTENT.map((content, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <h1 className="text-6xl md:text-8xl font-cinzel font-bold text-white mb-8 leading-tight">
                {content.title}
                <span className="block text-amber-300 text-5xl md:text-6xl mt-4 font-light italic">
                  {content.subtitle}
                </span>
              </h1>
              <p className="text-2xl text-amber-100 mb-12 max-w-3xl leading-relaxed font-nunito font-light">
                {content.description}
              </p>
            </div>
          ))}
          <div className="flex flex-wrap gap-6">
            <Link 
              to="/admissions"
              aria-label="Start your application process"
              className="px-12 py-5 rounded-none text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white text-blue-900"
            >
              Apply Now
            </Link>
            <Link 
              to="/about"
              aria-label="Learn more about our school"
              className="px-12 py-5 rounded-none text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-primary text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;