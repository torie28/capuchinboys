import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

// Custom hook for mobile detection
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};

// Helper function to handle email click with device detection
const handleEmailClick = (e) => {
  e.preventDefault();
  const email = 'capuchinboys@gmail.com';
  const subject = 'Inquiry';
  const body = 'Hello Capuchin Boys Choir,';
  
  // Check if mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // For mobile devices, use mailto: which will open the default mail app
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    // For desktop, open Gmail compose in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  }
};

const Admissions = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState('ordinary'); // 'ordinary' or 'advanced'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [openSections, setOpenSections] = useState({
    requirements: true,
    forms: true,
    dates: true
  });
  const isMobile = useMobile();
  
  const handleLevelChange = (level) => {
    if (level === selectedLevel || isTransitioning) return;
    
    setIsTransitioning(true);
    // Wait for fade out
    setTimeout(() => {
      setSelectedLevel(level);
      // Wait for state update and fade in
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const toggleSection = (section) => {
    if (!isMobile) return;
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Level-specific data
  const levelData = {
    ordinary: {
      requirements: [
        'Completed primary education with excellent grades',
        'Minimum grade of C in Mathematics, English, and Science',
        'Pass the school\'s entrance examination',
        'Successful interview with the admissions panel'
      ],
      formsAndDocs: [
        'Application Form',
        'Birth Certificate',
        'KCPE Results Slip',
        'Primary School Leaving Certificate',
        'Medical Report',
        'Passport-Sized Photos',
        'Parent/Guardian ID'
      ],
      importantDates: [
        { month: 'Jan', title: 'Applications Open', date: 'January 10', description: 'Applications for O-Level admissions open' },
        { month: 'Feb', title: 'Entrance Exams', date: 'February 15', description: 'Entrance exams for O-Level admissions' },
        { month: 'Mar', title: 'Interviews', date: 'March 1-15', description: 'Interviews for O-Level admissions' },
        { month: 'Apr', title: 'Acceptance Letters', date: 'April 1', description: 'Acceptance letters for O-Level admissions' },
        { month: 'May', title: 'Enrollment Deadline', date: 'May 15', description: 'Enrollment deadline for O-Level admissions' }
      ]
    },
    advanced: {
      requirements: [
        'Completed O-Level education with at least 6 credits',
        'Pass the school\'s advanced placement test',
        'Interview with the academic department head',
        'Letter of recommendation from previous school',
        'About minimum grade C to relevant combinations choosen.',
      ],
      formsAndDocs: [
        'A-Level Application Form',
        'KCSE Results Slip/Certificate',
        'O-Level School Leaving Certificate',
        'Birth Certificate',
        'Medical Report',
        'Passport-Sized Photos',
        'Parent/Guardian ID',
        'Recommendation Letter'
      ],
      importantDates: [
        { month: 'Sep', title: 'Applications Open', date: 'September 1', description: 'Applications for A-Level admissions open' },
        { month: 'Oct', title: 'Entrance Exams', date: 'October 15', description: 'Entrance exams for A-Level admissions' },
        { month: 'Nov', title: 'Interviews', date: 'November 1-15', description: 'Interviews for A-Level admissions' },
        { month: 'Dec', title: 'Acceptance Letters', date: 'December 1', description: 'Acceptance letters for A-Level admissions' },
        { month: 'Jan', title: 'Enrollment Deadline', date: 'January 15', description: 'Enrollment deadline for A-Level admissions' }
      ]
    }
  };

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

      {/* Level Selection and Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Information</h2>
            <div className="w-24 h-1 bg-[#B4975A] mx-auto mb-8"></div>
            
            {/* Level Selection Buttons */}
            <div className="flex justify-center mb-12 space-x-0 border-b border-gray-200">
              <button
                type="button"
                onClick={() => handleLevelChange('ordinary')}
                className={`relative px-10 py-4 font-medium transition-all duration-300 transform border-b-2 ${
                  selectedLevel === 'ordinary'
                    ? 'text-[#B4975A] border-[#B4975A] font-semibold'
                    : 'text-gray-600 border-transparent hover:text-gray-800'
                }`}
                disabled={isTransitioning}
              >
                <span className="relative z-10">ORDINARY LEVEL</span>
                <span className="absolute inset-0 bg-[#B4975A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button
                type="button"
                onClick={() => handleLevelChange('advanced')}
                className={`relative px-10 py-4 font-medium transition-all duration-300 transform border-b-2 ${
                  selectedLevel === 'advanced'
                    ? 'text-[#B4975A] border-[#B4975A] font-semibold'
                    : 'text-gray-600 border-transparent hover:text-gray-800'
                }`}
                disabled={isTransitioning}
              >
                <span className="relative z-10">ADVANCED LEVEL</span>
                <span className="absolute inset-0 bg-[#B4975A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>

            {/* Requirements Section */}
            <div className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="max-w-4xl mx-auto mb-8 md:mb-16">
                <motion.div 
                  className={`bg-white rounded-lg shadow-md overflow-hidden ${isMobile ? 'cursor-pointer' : ''}`}
                  onClick={() => toggleSection('requirements')}
                >
                  <div className="flex justify-between items-center p-6">
                    <h3 className="text-2xl  text-gray-900 whitespace-nowrap">
                      {selectedLevel === 'ordinary' ? 'Ordinary Level' : 'Advanced Level'} Requirements
                    </h3>
                    {isMobile && (
                      <motion.span
                        animate={{ rotate: openSections.requirements ? 0 : 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    )}
                  </div>
                  <AnimatePresence>
                    {(!isMobile || openSections.requirements) && (
                      <motion.div
                        initial={isMobile ? { height: 0, opacity: 0 } : false}
                        animate={isMobile ? { height: 'auto', opacity: 1 } : false}
                        exit={isMobile ? { height: 0, opacity: 0 } : false}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-4 sm:px-6 pb-6 pt-0">
                          <ul className="space-y-3 sm:space-y-4">
                            {levelData[selectedLevel].requirements.map((requirement, index) => (
                              <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 mt-0.5">
                                  <svg 
                                    className="h-5 w-5 sm:h-6 sm:w-6 text-[#B4975A] mr-3 flex-none" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path 
                                      strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={2} 
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                                    />
                                  </svg>
                                </span>
                                <span className="text-sm sm:text-base text-gray-700 -mt-0.5">
                                  {requirement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Forms & Documents and Important Dates */}
            <div className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Forms & Documents */}
                <motion.div 
                  className={`bg-white rounded-lg shadow-md overflow-hidden ${isMobile ? 'cursor-pointer' : ''}`}
                  onClick={() => toggleSection('forms')}
                >
                  <div className="flex justify-between items-center p-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Forms & Documents</h3>
                    {isMobile && (
                      <motion.span
                        animate={{ rotate: openSections.forms ? 0 : 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    )}
                  </div>
                  <AnimatePresence>
                    {(!isMobile || openSections.forms) && (
                      <motion.div
                        initial={isMobile ? { height: 0, opacity: 0 } : false}
                        animate={isMobile ? { height: 'auto', opacity: 1 } : false}
                        exit={isMobile ? { height: 0, opacity: 0 } : false}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <ul className="space-y-3">
                            {levelData[selectedLevel].formsAndDocs.map((doc, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="h-6 w-6 text-[#B4975A] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Important Dates */}
                <motion.div 
                  className={`bg-white rounded-lg shadow-md overflow-hidden ${isMobile ? 'cursor-pointer' : ''} md:mt-0`}
                  onClick={() => toggleSection('dates')}
                >
                  <div className="flex justify-between items-center p-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Important Dates</h3>
                    {isMobile && (
                      <motion.span
                        animate={{ rotate: openSections.dates ? 0 : 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    )}
                  </div>
                  <AnimatePresence>
                    {(!isMobile || openSections.dates) && (
                      <motion.div
                        initial={isMobile ? { height: 0, opacity: 0 } : false}
                        animate={isMobile ? { height: 'auto', opacity: 1 } : false}
                        exit={isMobile ? { height: 0, opacity: 0 } : false}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="space-y-6">
                            {levelData[selectedLevel].importantDates.map((date, index) => (
                              <div key={index} className="border-l-2 border-[#B4975A] pl-4 py-1">
                                <h4 className="font-medium text-gray-900">{date.title}</h4>
                                <p className="text-gray-600 text-sm">{date.date}</p>
                                <p className="text-gray-500 text-sm mt-1">{date.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="max-w-4xl mx-auto bg-gray-50 px-8 py-8 rounded-lg border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedLevel === 'ordinary' ? 'O-Level' : 'A-Level'} Admissions
            </h3>
            <p className="text-gray-600 mb-6">
              For more details about our admission process and requirements, please don't hesitate to contact our admissions office.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-[#B4975A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="#" 
                  onClick={(e) => handleEmailClick(e, 'capuchinboysss2015@gmail.com')}
                  className="text-[#B4975A] hover:underline group inline-flex items-center"
                  aria-label="Send email to capuchinboysss2015@gmail.com"
                >
                  <span className="group-hover:underline">capuchinboysss2015@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-[#B4975A] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+255752978895" className="text-[#B4975A] hover:underline">
                  +255 752 978 895
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
