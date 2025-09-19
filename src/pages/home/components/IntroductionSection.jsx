import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const SchoolIntroduction = () => {
  return (
    <div className="py-12 md:py-16 lg:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left side - Image */}
          <div className="relative w-full max-w-full mx-auto lg:mx-0">
            <div className="relative w-full max-w-full">
              {/* Decorative left accent - Only show on larger screens */}
              <div className="hidden lg:block absolute -left-6 xl:-left-8 top-1/2 -translate-y-1/2 w-10 xl:w-12 h-48 xl:h-56 opacity-100 z-10">
                <svg viewBox="0 0 40 80" className="w-full h-full text-primary fill-current">
                  <path d="M10 10 Q20 0 30 10 Q20 20 10 30 Q20 40 30 50 Q20 60 10 70" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 20 Q20 10 30 20 Q20 30 10 40 Q20 50 30 60 Q20 70 10 80" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              
              {/* Image container */}
              <div className="relative bg-gray-100 overflow-hidden shadow-xl rounded-lg border-4 sm:border-6 md:border-8 border-white transform rotate-1 hover:rotate-0 transition-all duration-500 ease-in-out w-full max-w-full">
                <div className="p-0.5 sm:p-1 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="overflow-hidden rounded-sm">
                    <img 
                      src="/assets/images/environments/environment_section.jpg" 
                      alt="Students studying together" 
                      className="w-full h-auto max-h-[32rem] sm:max-h-[36rem] object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 border-t-2 sm:border-t-3 md:border-t-4 border-r-2 sm:border-r-3 md:border-r-4 border-primary rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 border-b-2 sm:border-b-3 md:border-b-4 border-l-2 sm:border-l-3 md:border-l-4 border-primary rounded-tr-full"></div>
              </div>
              
              {/* Decorative bottom accent */}
              <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 -right-3 sm:-right-4 md:-right-5 w-16 sm:w-20 md:w-24 h-6 sm:h-8 md:h-10 bg-primary/10 transform rotate-6 rounded-full"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-10 px-6 sm:px-8 md:px-12 lg:pl-16">
            {/* Header */}
            <div className="space-y-6">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                ABOUT OUR SCHOOL
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Capuchin Boys 
                <span className="text-primary block">
                  Secondary School
                  <div className="w-24 h-1.5 bg-primary mt-4 rounded-full"></div>
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                creates a special atmosphere where students can develop
                both intellectually and spiritually. Religious instruction,
                daily classes, prayers, and volunteer opportunities are all
                essential components of the educational process.
              </p>
            </div>

            {/* Outstanding Performance Section */}
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-primary p-3 rounded-full">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Outstanding Performance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                   Continuous record of exceptional results in national exams.  Our kids routinely rank among
                   Tanzania's best schools, each year achieving remarkable outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolIntroduction;