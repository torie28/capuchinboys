import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const SchoolIntroduction = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="absolute -left-15 top-1/3 -translate-y-1/2 w-16 h-64 opacity-100">
              <svg viewBox="0 0 40 80" className="w-full h-full text-primary fill-current">
                <path d="M10 10 Q20 0 30 10 Q20 20 10 30 Q20 40 30 50 Q20 60 10 70" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M10 20 Q20 10 30 20 Q20 30 10 40 Q20 50 30 60 Q20 70 10 80" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            
            <div className="relative bg-gray-100  overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Students studying together" 
                className="w-full h-[40rem] object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
                ABOUT OUR SCHOOL
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Capuchin boys Secondary 
                <span className="text-primary block">
                  School
                  <div className="w-20 h-1 bg-primary mt-2"></div>
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="border-l-4 border-red-500 pl-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Fosters a unique environment where students can grow in their faith 
                and academics. Daily classes, prayers, religious instruction, and 
                opportunities for service to others are integral parts of the school 
                experience.
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
                    Consistent history of outstanding performance in national 
                    examinations. Year after year, our students achieve 
                    impressive results, consistently placing among the top 
                    schools in Tanzania.
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