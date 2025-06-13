import React, { useState, useEffect } from 'react';

// Constants
const HERO_IMAGES = [
  '/assets/images/buildings/Secondary pic.jpg',
  '/assets/images/buildings/inside the school.jpg',
  '/assets/images/buildings/Secondary pic.jpg',
  '/assets/images/buildings/inside the school.jpg'
];

const SCHOOL_IMAGES = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=600&fit=crop',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=400&fit=crop',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=500&fit=crop'
];

const VALUES = [
  {
    icon: "📚",
    title: "Academic Excellence",
    description: "Committed to providing world-class education that prepares students for university and beyond."
  },
  {
    icon: "⛪",
    title: "Moral Foundation",
    description: "Grounded in Capuchin values, we develop character and spiritual growth alongside academic achievement."
  },
  {
    icon: "🌟",
    title: "Holistic Development", 
    description: "Nurturing the complete student through academics, sports, arts, and community service."
  },
  {
    icon: "🤝",
    title: "Community Spirit",
    description: "Building strong bonds between students, families, and the broader community we serve."
  }
];

const AboutSection = () => {
  // State Management
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imagePosition, setImagePosition] = useState(0);

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scrolling animation for hero images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Constants for UI text
  const HERO_CONTENT = {
    title: "Shaping Future Leaders",
    subtitle: "Since 1993",
    description: "Excellence in education, grounded in values, preparing young men for a changing world.",
    buttons: [
      { text: "Discover Our Story", className: "bg-amber-600 hover:bg-amber-700" },
      { text: "Take a Virtual Tour", className: "bg-white/10 hover:bg-white/20 backdrop-blur-sm" }
    ]
  };

  const ABOUT_CONTENT = {
    story: {
      title: "Our Story",
      content: [
        "Founded in 1993, Capuchin Boys Secondary School emerged from a vision to provide exceptional education grounded in moral values. Our journey began with a handful of dedicated educators and has grown into one of Tanzania's most respected educational institutions.",
        "Named after the Capuchin friars known for their commitment to education and community service, our school embodies these principles in every aspect of student life. We believe in nurturing not just academic brilliance, but also character, leadership, and social responsibility."
      ]
    },
    mission: {
      title: "Our Mission",
      content: "To provide comprehensive, values-based education that empowers young men to become leaders, innovators, and responsible citizens who contribute positively to society.",
      stats: [
        { value: "30+", label: "Years of Excellence" },
        { value: "1200+", label: "Graduates" }
      ]
    },
    vision: {
      title: "Our Vision",
      content: "To be the leading secondary school in East Africa, recognized for academic excellence, moral integrity, and the development of well-rounded global citizens who uphold the highest standards of character and achievement."
    }
  };

  return (
    <div className="relative">
      {/* Hero Section with Single Image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Single Image with Fade Transition */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: `scale(${1 + (scrollPosition * 0.0005)})`,
                transition: 'transform 1s ease-out, opacity 1s ease-in-out',
                willChange: 'transform, opacity'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/90"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {HERO_CONTENT.title}
                <span className="block text-amber-400">{HERO_CONTENT.subtitle}</span>
              </h1>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl">
                {HERO_CONTENT.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {HERO_CONTENT.buttons.map((button, idx) => (
                  <button 
                    key={idx}
                    className={`px-8 py-4 text-white rounded-full transition-colors duration-300 font-medium ${button.className}`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-stone-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-stone-800 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left Side - Story & Mission */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm  p-8 shadow-lg border border-amber-100">
              <h3 className="text-3xl font-bold text-stone-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-amber-600 rounded-full mr-4"></span>
                {ABOUT_CONTENT.story.title}
              </h3>
              {ABOUT_CONTENT.story.content.map((paragraph, idx) => (
                <p key={idx} className="text-stone-600 leading-relaxed text-lg mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-amber-900 text-white  p-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-3 h-3 bg-amber-300 rounded-full mr-4"></span>
                {ABOUT_CONTENT.mission.title}
              </h3>
              <p className="text-amber-100 leading-relaxed text-lg mb-6">
                {ABOUT_CONTENT.mission.content}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {ABOUT_CONTENT.mission.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-amber-300">{stat.value}</div>
                    <div className="text-amber-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 shadow-lg border border-stone-200">
              <h3 className="text-3xl font-bold text-stone-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-stone-600 rounded-full mr-4"></span>
                {ABOUT_CONTENT.vision.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                {ABOUT_CONTENT.vision.content}
              </p>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 h-fit">
              {SCHOOL_IMAGES.map((img, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden  shadow-lg ${
                    index === 1 || index === 5 ? 'row-span-2' : 
                    index === 3 || index === 7 ? 'col-span-2' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`School life ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-amber-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-1">98%</div>
                <div className="text-stone-600 text-sm font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-stone-800 mb-4">Our Core Values</h3>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape who we are as an institution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-amber-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-stone-800 mb-4">{value.title}</h4>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default AboutSection;  
