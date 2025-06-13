import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation, useInView } from 'framer-motion';

const AcademicLevel = ({ level, description, subjects, requirements }) => (
  <div className="bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{level} Level</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    
    <div className="mb-8">
      <h4 className="font-medium text-gray-800 mb-3 text-lg">Core Subjects</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {subjects.core.map((subject, i) => (
          <div key={i} className="flex items-center py-1.5 px-3 bg-gray-50">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
            <span className="text-gray-700">{subject}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="mb-8">
      <h4 className="font-medium text-gray-800 mb-3 text-lg">Elective Subjects <span className="text-sm font-normal text-gray-500">(Choose 3-4)</span></h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {subjects.electives.map((subject, i) => (
          <div key={i} className="flex items-center py-1.5 px-3 bg-gray-50">
            <span className="w-1.5 h-1.5 bg-primary/70 rounded-full mr-2 flex-shrink-0"></span>
            <span className="text-gray-700 text-sm">{subject}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="pt-4 border-t border-gray-100">
      <h4 className="font-medium text-gray-800 mb-3 text-lg">Admission Requirements</h4>
      <ul className="space-y-2">
        {requirements.map((req, i) => (
          <li key={i} className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span className="text-gray-600">{req}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const CapuchinSchoolPage = () => {
  const [activeLevel, setActiveLevel] = useState('ordinary');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const handleLevelChange = (level) => {
    if (level === activeLevel) return;
    setIsTransitioning(true);
    // Wait for fade out
    setTimeout(() => {
      setActiveLevel(level);
      // Wait for state update and fade in
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
     


      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/assets/images/buildings/Secondary pic.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0  bg-opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25px_25px,rgba(139,134,123,0.1)_2%,transparent_0%),radial-gradient(circle_at_75px_75px,rgba(160,151,136,0.08)_2%,transparent_0%)] bg-[length:100px_100px] pointer-events-none"/>
        </div>
        {/* Removed floating elements */}

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div 
            className="transform transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            {/* Main Heading */}
            <h1 className="font-playfair font-light mb-8 text-[clamp(3rem,8vw,7rem)] leading-[1.1] tracking-[0.02em] text-[#ffffff]">
            CAPUCHIN BOYS
              <br />
              <span className="font-normal bg-gradient-135 from-[#fdfdfd] via-[#fdfdfd] to-[#fdfdfd] bg-clip-text text-transparent">
                
              </span>
            </h1>

            {/* Script Subtitle */}
            <div className="font-dancing text-4xl md:text-5xl mb-12 font-normal tracking-[0.05em] text-[#B4975A]">
              Excellence in Education
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg md:text-xl leading-relaxed text-[#fcf9f9] font-light tracking-[0.01em]">
                "Excellence" barely begins to describe Capuchin Boys Secondary School's 
                commitment to academic achievement that stretches beyond expectations. 
                Our institution, rooted in Capuchin tradition, cultivates young minds where knowledge flourishes. 
                The name represents "the place where education runs forever," and it's easy to see 
                why: these halls of learning never run out of inspiration.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Academic Overview Section */}
      <motion.section 
        id="academics" 
        className="py-24 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-dancing text-3xl mb-4 text-[#B4975A]">Academic Excellence</div>
            <h2 className="font-playfair text-5xl font-light mb-4 text-[#8B8677]">
              Our Academic
              <span className="bg-gradient-to-r from-[#B4975A] to-[#8B8677] bg-clip-text text-transparent"> Program</span>
            </h2>
            <div className="w-24 h-px mx-auto my-6 bg-gradient-to-r from-transparent via-[#B4975A] to-transparent"></div>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 font-light leading-relaxed">
              At Capuchin Boys Secondary School, we offer a comprehensive academic program that combines the national 
              curriculum with our unique Capuchin values. Our educational approach emphasizes academic excellence, 
              character development, and spiritual growth.
            </p>
          </div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              },
              hidden: { opacity: 0 }
            }}>
            <div className="p-8 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-playfair font-light mb-4 text-primary">Academic Excellence</h3>
              <p className="text-gray-600">Consistently achieving outstanding results with a 98% university placement rate.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-playfair font-light mb-4 text-primary">Holistic Development</h3>
              <p className="text-gray-600">Balancing academics with sports, arts, and community service.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-playfair font-light mb-4 text-primary">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art laboratories, library, and technology-integrated classrooms.</p>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-playfair font-light mb-8 text-center text-gray-800">Our Academic Approach</h3>
            <ul className="space-y-6 text-lg">
              <li className="flex items-start">
                <span className="text-primary text-2xl mr-4">•</span>
                <div>
                  <h4 className="font-medium text-gray-800">Personalized Attention</h4>
                  <p className="text-gray-600">Small class sizes ensure each student receives individual attention and support.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-2xl mr-4">•</span>
                <div>
                  <h4 className="font-medium text-gray-800">Expert Faculty</h4>
                  <p className="text-gray-600">Our experienced and dedicated teachers are committed to student success.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-2xl mr-4">•</span>
                <div>
                  <h4 className="font-medium text-gray-800">Comprehensive Support</h4>
                  <p className="text-gray-600">From career guidance to university placement, we support every step of your journey.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Academic Programs Section */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="font-dancing text-3xl mb-4 text-[#B4975A]">
              Academic Programs
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-light mb-8 text-[#8B8677]">
              Excellence in
              <span className="bg-gradient-to-r from-[#B4975A] to-[#8B8677] bg-clip-text text-transparent"> Education</span>
            </h2>
            <div className="w-24 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-[#B4975A] to-transparent"></div>
            <motion.div 
              key={1}
              className="relative bg-gradient-to-br from-white/90  p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl group overflow-hidden before:absolute before:inset-0 before:border before:border-white/20 before:rounded-3xl before:bg-gradient-to-br before:from-white/80 before:to-[#f8f6f0]/40 before:pointer-events-none"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 }
              }}
              whileHover={{ y: -10 }}
            >
              <p className="text-xl max-w-3xl mx-auto text-[#030303] font-light leading-relaxed">
                Capuchin Boys Secondary School offers comprehensive academic programs designed to nurture intellectual curiosity, 
                moral character, and leadership excellence in every student.
              </p>
            </motion.div>
          </div>

          {/* Sharp Level Selector with Transition */}
          <div className="flex justify-center mb-12 space-x-0 border-b border-gray-200">
            <button
              onClick={() => handleLevelChange('ordinary')}
              className={`relative px-10 py-4 font-medium transition-all duration-300 transform border-b-2 ${
                activeLevel === 'ordinary'
                  ? 'text-primary border-primary font-semibold'
                  : 'text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <span className="relative z-10">ORDINARY LEVEL</span>
              <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button
              onClick={() => handleLevelChange('advanced')}
              className={`relative px-10 py-4 font-medium transition-all duration-300 transform border-b-2 ${
                activeLevel === 'advanced'
                  ? 'text-primary border-primary font-semibold'
                  : 'text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <span className="relative z-10">ADVANCED LEVEL</span>
              <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Level Content with Transition */}
          <div className={`mb-20 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className={`transition-transform duration-300 ${isTransitioning ? 'translate-y-4' : 'translate-y-0'}`}>
            {activeLevel === 'ordinary' ? (
              <AcademicLevel
                level="Ordinary"
                description="Our four-year O-Level program provides a strong foundation in core subjects while allowing students to explore various academic disciplines. The program prepares students for both higher education and professional development."
                subjects={{
                  core: [
                    'English Language',
                    'Mathematics',
                    'Kiswahili',
                    'Biology',
                    'Chemistry',
                    'Physics'
                  ],
                  electives: [
                    'Geography',
                    'History',
                    'Commerce',
                    'Computer Studies',
                    'French',
                    'Religious Education',
                    'Agriculture',
                    'Business Studies',
                    'Art & Design',
                    'Music',
                    'Physical Education'
                  ]
                }}
                requirements={[
                  'Successful completion of primary education (KCPE)',
                  'Minimum entry requirements as per Ministry of Education guidelines',
                  'Passing the school\'s entrance examination and interview'
                ]}
              />
            ) : (
              <AcademicLevel
                level="Advanced"
                description="Our two-year A-Level program offers specialized study in chosen subject combinations, preparing students for university education and professional careers. Students select three or four principal subjects that align with their career aspirations."
                subjects={{
                  core: [
                    'General Studies',
                    'Entrepreneurship',
                    'Information and Communication Technology (ICT)'
                  ],
                  electives: [
                    'Mathematics',
                    'Physics',
                    'Chemistry',
                    'Biology',
                    'Geography',
                    'History',
                    'Economics',
                    'Commerce',
                    'Entrepreneurship',
                    'Computer Science',
                    'Literature in English',
                    'French',
                    'Kiswahili',
                    'Religious Education',
                    'Art & Design'
                  ]
                }}
                requirements={[
                  'Minimum of C+ in KCSE or equivalent',
                  'Minimum grade requirements in specific subjects for chosen combination',
                  'Successful completion of the school\'s A-Level admission process',
                  'Recommendation from previous school',
                  'Personal statement outlining academic goals'
                ]}
              />
            )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-24 relative before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_25px_25px,rgba(139,134,123,0.1)_2%,transparent_0%),radial-gradient(circle_at_75px_75px,rgba(160,151,136,0.08)_2%,transparent_0%)] before:bg-[length:100px_100px] before:pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-dancing text-3xl mb-4 text-[#B4975A]">
                Our Heritage
              </div>
              <h2 className="font-playfair text-5xl font-light mb-8 text-[#8B8677]">
                Capuchin
                <span className="bg-gradient-to-r from-[#B4975A] to-[#8B8677] bg-clip-text text-transparent"> Tradition</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-[#080808] font-light">
                <p>
                  Founded on the sacred principles of Capuchin Franciscan spirituality, our institution has been 
                  a beacon of educational excellence for over three decades. We cultivate young minds through 
                  the perfect harmony of rigorous academics and moral formation.
                </p>
                <p>
                  Our mission transcends traditional education—we shape leaders who embody integrity, 
                  compassion, and intellectual curiosity. Every graduate carries forward the torch of 
                  Capuchin values into the world.
                </p>
              </div>
            </div>

            <div className="relative my-20">
              <div className="relative p-10 bg-white border-l-4 border-[#B4975A] shadow-lg">
                <h3 className="font-sans text-3xl font-medium mb-10 text-left text-primary uppercase tracking-wider">
                  Our Core Values
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: "🎓", title: "Academic Excellence", desc: "Pursuit of knowledge and intellectual growth" },
                    { icon: "🤝", title: "Moral Integrity", desc: "Character formation rooted in Capuchin values" },
                    { icon: "🌟", title: "Leadership", desc: "Developing future leaders and change makers" },
                    { icon: "🙏", title: "Service", desc: "Commitment to serving others and community" },
                    { icon: "💫", title: "Spiritual Growth", desc: "Nurturing the soul alongside the mind" }
                  ].map((value, index) => (
                    <div key={index} className="p-5 border border-gray-200 hover:border-[#B4975A] transition-colors duration-200">
                      <div className="text-3xl mb-3">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900 text-lg">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CapuchinSchoolPage;