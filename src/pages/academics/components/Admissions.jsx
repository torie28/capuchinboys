import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Admissions = () => {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect - Full Viewport Height */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/images/buildings/Outside-3.webp)',
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
        
        {/* Content - Centered Vertically and Horizontally */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center py-32">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Admissions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Begin your journey to excellence at Capuchin Boys Secondary School
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <div className="w-24 h-1 bg-[#B4975A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Application',
                description: 'Submit the online application form along with required documents.'
              },
              {
                step: '02',
                title: 'Entrance Exam',
                description: 'Sit for our entrance examination to assess academic readiness.'
              },
              {
                step: '03',
                title: 'Interview',
                description: 'Attend an interview with our academic team.'
              },
              {
                step: '04',
                title: 'Acceptance',
                description: 'Receive admission decision and complete enrollment.'
              },
              {
                step: '05',
                title: 'Orientation',
                description: 'Attend new student orientation program.'
              },
              {
                step: '06',
                title: 'Begin Classes',
                description: 'Start your academic journey with us.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#B4975A] mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
            <div className="w-24 h-1 bg-[#B4975A] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We seek students who demonstrate academic potential, good character, and a commitment to learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Forms & Documents</h3>
              <ul className="space-y-4">
                {[
                  'Completed application form',
                  'Birth certificate (copy)',
                  'Recent passport photos (2)',
                  'Latest school report card',
                  'Transfer certificate (if applicable)',
                  'Medical report'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-[#B4975A] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Important Dates</h3>
              <div className="space-y-6">
                {[
                  { month: 'Jan', title: 'Applications Open', date: 'January 10' },
                  { month: 'Mar', title: 'Entrance Exams', date: 'March 15' },
                  { month: 'Apr', title: 'Interviews', date: 'April 1-15' },
                  { month: 'May', title: 'Acceptance Letters', date: 'May 1' },
                  { month: 'Jun', title: 'Enrollment Deadline', date: 'June 30' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#B4975A] text-white text-sm font-medium px-3 py-1 rounded mr-4">
                      {item.month}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
