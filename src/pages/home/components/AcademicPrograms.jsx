import React from 'react';
import { Link } from 'react-router-dom';

const AcademicPrograms = () => {
  const programs = [
    {
      title: "Sciences",
      subjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
      description: "Comprehensive science education with modern laboratory facilities and hands-on experiments.",
      highlights: ["State-of-the-art laboratories", "Qualified science teachers", "Science fair participation"]
    },
    {
      title: "Languages & Literature",
      subjects: ["English", "Kiswahili", "Literature"],
      description: "Developing strong communication skills and cultural understanding through language studies.",
      highlights: ["Bilingual education", "Literary competitions", "Cultural exchange programs"]
    },
    {
      title: "Social Studies",
      subjects: ["History", "Geography", "Civics", "Religious Studies"],
      description: "Understanding society, culture, and global citizenship through comprehensive social education.",
      highlights: ["Historical field trips", "Community service projects", "Model UN participation"]
    },
    {
      title: "Physical Education",
      subjects: ["Sports", "Health Education", "Fitness Training", "Team Sports", "Athletics"],
      description: "Promoting physical fitness, teamwork, and healthy lifestyle habits.",
      highlights: ["Inter-school competitions", "Sports facilities", "Health awareness programs"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#B4975A] to-[#8B8677] bg-clip-text text-transparent mb-6">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive curriculum is designed to provide students with a well-rounded education 
            that prepares them for higher learning and future careers while fostering critical thinking 
            and personal growth.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                {/* Program Title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary  flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {program.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Key Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, subIndex) => (
                      <span 
                        key={subIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Program Highlights
                  </h4>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Ready to explore our academic offerings in detail?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/academics"
              aria-label="View all academic programs"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              View All Academic Programs
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              to="/admissions"
              aria-label="Apply for admission"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              Apply Now
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;