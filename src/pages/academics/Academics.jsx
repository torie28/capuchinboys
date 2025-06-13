import React, { useState, useEffect } from 'react';

const CapuchinSchoolPage = () => {
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
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
            <h1 className="font-playfair font-light mb-8 text-[clamp(3rem,8vw,7rem)] leading-[1.1] tracking-[0.02em] text-[#8B8677]">
              WELCOME TO THE
              <br />
              <span className="font-normal bg-gradient-135 from-[#B4975A] via-[#8B8677] to-[#A0976A] bg-clip-text text-transparent">
                CAPUCHIN BOYS
              </span>
            </h1>

            {/* Script Subtitle */}
            <div className="font-dancing text-4xl md:text-5xl mb-12 font-normal tracking-[0.05em] text-[#B4975A]">
              Excellence in Education
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg md:text-xl leading-relaxed text-[#6B6B6B] font-light tracking-[0.01em]">
                "Excellence" barely begins to describe Capuchin Boys Secondary School's 
                commitment to academic achievement that stretches beyond expectations. 
                Our institution, rooted in Capuchin tradition, cultivates young minds where knowledge flourishes. 
                The name represents "the place where education runs forever," and it's easy to see 
                why: these halls of learning never run out of inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section id="academics" className="py-24 relative before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_25px_25px,rgba(139,134,123,0.1)_2%,transparent_0%),radial-gradient(circle_at_75px_75px,rgba(160,151,136,0.08)_2%,transparent_0%)] before:bg-[length:100px_100px] before:pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="font-dancing text-3xl mb-4 text-[#B4975A]">
              Academic Programs
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-light mb-8 text-[#8B8677]">
              Excellence in
              <span className="bg-gradient-to-r from-[#B4975A] to-[#8B8677] bg-clip-text text-transparent"> Education</span>
            </h2>
            <div className="w-24 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-[#B4975A] to-transparent"></div>
            <p className="text-xl max-w-3xl mx-auto text-[#6B6B6B] font-light leading-relaxed">
              Capuchin Boys Secondary School offers comprehensive academic programs designed to nurture intellectual curiosity, 
              moral character, and leadership excellence in every student.
            </p>
          </div>

          {/* Academic Streams */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "SCIENCE STREAM",
                subtitle: "Innovation & Discovery",
                icon: "⚗️",
                color: "#2563EB",
                subjects: ["Advanced Physics", "Organic Chemistry", "Molecular Biology", "Pure Mathematics"]
              },
              {
                title: "ARTS STREAM", 
                subtitle: "Culture & Expression",
                icon: "🎭",
                color: "#059669",
                subjects: ["Classical Literature", "World History", "Philosophy", "Fine Arts"]
              },
              {
                title: "COMMERCE STREAM",
                subtitle: "Leadership & Enterprise", 
                icon: "📊",
                color: "#7C3AED",
                subjects: ["Business Strategy", "Economic Theory", "Financial Analysis", "Entrepreneurship"]
              }
            ].map((stream, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-white/90 to-[#46433DFF]/60 rounded-3xl p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl group overflow-hidden before:absolute before:inset-0 before:border before:border-white/20 before:rounded-3xl before:bg-gradient-to-br before:from-white/80 before:to-[#f8f6f0]/40 before:pointer-events-none"
              >
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{stream.icon}</div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2 text-[#8B8677]">
                    {stream.title}
                  </h3>
                  <div className="font-dancing text-xl" style={{ color: stream.color }}>
                    {stream.subtitle}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {stream.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stream.color }}></div>
                      <span className="text-gray-700 font-light">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_25px_25px,rgba(139,134,123,0.1)_2%,transparent_0%),radial-gradient(circle_at_75px_75px,rgba(160,151,136,0.08)_2%,transparent_0%)] before:bg-[length:100px_100px] before:pointer-events-none">
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
              
              <div className="space-y-6 text-lg leading-relaxed text-[#6B6B6B] font-light">
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

            <div className="relative">
              <div className="relative rounded-3xl p-12 bg-gradient-to-br from-[#B4975A]/10 to-[#8B8677]/5 overflow-hidden before:absolute before:inset-0 before:border before:border-white/20 before:rounded-3xl before:bg-gradient-to-br before:from-white/80 before:to-[#f8f6f0]/40 before:pointer-events-none">
                <h3 className="font-playfair text-3xl font-light mb-8 text-center text-[#8B8677]">
                  Core Values
                </h3>
                
                <div className="space-y-6">
                  {[
                    { icon: "🎓", title: "Academic Excellence", desc: "Pursuit of knowledge and intellectual growth" },
                    { icon: "🤝", title: "Moral Integrity", desc: "Character formation rooted in Capuchin values" },
                    { icon: "🌟", title: "Leadership", desc: "Developing future leaders and change makers" },
                    { icon: "🙏", title: "Service", desc: "Commitment to serving others and community" },
                    { icon: "💫", title: "Spiritual Growth", desc: "Nurturing the soul alongside the mind" }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-[#8B8677]">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 font-light text-sm">
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
      </section>
    </div>
  );
};

export default CapuchinSchoolPage;