import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('assets/images/buildings/Secondary pic.jpg')" 
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0  bg-opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          Welcome to Capuchin Boys Secondary
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white text-opacity-90 drop-shadow-md">
          Empowering young minds through quality education and holistic development
        </p>
        <div className="space-x-4">
          <a 
            href="/admissions" 
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-4 rounded-md hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </a>
          <a 
            href="/about" 
            className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;