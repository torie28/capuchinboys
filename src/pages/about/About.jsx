import React, { useState, useEffect } from 'react';

// Constants
const HERO_IMAGES = [
  '/assets/images/buildings/Secondary pic.jpg',
  '/assets/images/buildings/Outside-3.webp',
  '/assets/images/buildings/12_Sacajawea-Cafeteria__FocusFillWzI1NjAsMTQ0MCwieSIsMTMzXQ.webp',
  '/assets/images/buildings/Outside-1.webp'
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

const HERO_CONTENT = {
  title: "Shaping Future Leaders",
  subtitle: "Since 1993",
  description: "Excellence in education, grounded in values, preparing young men for a changing world.",
  buttons: [
    { text: "Discover Our Story", className: "bg-amber-700 hover:bg-amber-800 text-white" },
    { text: "Take a Virtual Tour", className: "border-2 border-white text-white hover:bg-white hover:text-amber-900" }
  ]
};

const ABOUT_CONTENT = {
  story: {
    title: "Our Distinguished Story",
    content: [
      "Founded in 1993, Capuchin Boys Secondary School emerged from a vision to provide exceptional education grounded in moral values. Our journey began with a handful of dedicated educators and has grown into one of Tanzania's most respected educational institutions.",
      "Named after the Capuchin friars known for their commitment to education and community service, our school embodies these principles in every aspect of student life. We believe in nurturing not just academic brilliance, but also character, leadership, and social responsibility."
    ]
  },
  mission: {
    title: "Our Noble Mission",
    content: "To provide comprehensive, values-based education that empowers young men to become leaders, innovators, and responsible citizens who contribute positively to society.",
  },
  vision: {
    title: "Our Visionary Outlook",
    content: "To be the leading secondary school in East Africa, recognized for academic excellence, moral integrity, and the development of well-rounded global citizens who uphold the highest standards of character and achievement."
  },
  community: {
    title: "Our Community Offerings",
    subtitle: "Enriching Lives Beyond Our Walls",
    description: "At Capuchin Boys, we extend our mission of service beyond the classroom, offering comprehensive programs that benefit both our students and the wider community. Our commitment to social responsibility reflects the Franciscan tradition of caring for others.",
    offerings: [
      {
        title: "Educational Scholarships",
        description: "Merit-based and need-based scholarship programs ensuring quality education remains accessible to deserving students regardless of economic background."
      },
      {
        title: "Community Education Programs",
        description: "Adult literacy initiatives and vocational training workshops that empower community members with essential skills and knowledge."
      },
      {
        title: "Sports & Recreation Facilities",
        description: "State-of-the-art sporting facilities open to the local community, promoting health, wellness, and youth development through athletics."
      },
      {
        title: "Healthcare Initiatives",
        description: "Regular medical camps and health awareness programs providing essential healthcare services to underserved community members."
      },
      {
        title: "Environmental Conservation",
        description: "Tree planting initiatives, environmental education programs, and sustainability projects that protect and preserve our natural heritage."
      },
      {
        title: "Cultural Exchange Programs",
        description: "Inter-school collaborations and community cultural events that celebrate diversity and promote understanding between different communities."
      }
    ]
  },
  franciscan: {
    title: "The Franciscan Heritage",
    subtitle: "A Legacy of Faith, Service, and Learning",
    content: [
      "The Capuchin Franciscan friars represent a distinguished Roman Catholic religious order founded in the 16th century as a reform movement within the Franciscan tradition. Known for their austere lifestyle, profound devotion to prayer, and unwavering commitment to serving the poor and marginalized, the Franciscans have been pioneers in education and community service for over five centuries.",
      "At Capuchin Boys Secondary School, we proudly continue this venerable tradition. The Franciscan values of peace, justice, and stewardship of creation are intricately woven into every aspect of our educational philosophy and daily school life. Our students receive not only rigorous academic instruction but also formation in the virtues of compassion, humility, and selfless service to others.",
      "Our connection to the global Franciscan network ensures that our students become part of an international community dedicated to positive social transformation, following the inspiring example of St. Francis of Assisi—the patron saint of ecology and founder of the Franciscan movement. This rich spiritual heritage provides our students with a moral compass that guides them toward lives of meaning, purpose, and service."
    ]
  }
};

const AboutSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  // Handle scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scrolling animation for hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {HERO_IMAGES.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: `scale(${1 + (scrollPosition * 0.0003)})`,
                transition: 'transform 1.5s ease-out, opacity 2s ease-in-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-stone-900/85"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-cinzel font-bold text-white mb-8 leading-tight">
                {HERO_CONTENT.title}
                <span className="block text-amber-300 text-5xl md:text-6xl mt-4 font-light italic">
                  {HERO_CONTENT.subtitle}
                </span>
              </h1>
              <p className="text-2xl text-amber-100 mb-12 max-w-3xl leading-relaxed font-nunito font-light">
                {HERO_CONTENT.description}
              </p>
              <div className="flex flex-wrap gap-6">
                {HERO_CONTENT.buttons.map((button, idx) => (
                  <button 
                    key={idx}
                    className={`px-12 py-5 rounded-none text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${button.className}`}
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
      <section className="relative bg-gradient-to-b from-stone-50 to-amber-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 left-32 w-96 h-96 bg-amber-800 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-stone-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-32">
          
          {/* Story & Mission Section */}
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
            {/* Left Side - Content */}
            <div className="space-y-12">
              <div className="bg-white/95 backdrop-blur-sm p-12 shadow-2xl border border-amber-200/50">
                <div className="mb-8">
                  <div className="w-16 h-1 bg-amber-600 mb-6"></div>
                  <h3 className="text-4xl font-cinzel font-bold text-stone-800 mb-2">
                    {ABOUT_CONTENT.story.title}
                  </h3>
                  <div className="w-24 h-px bg-stone-300"></div>
                </div>
                {ABOUT_CONTENT.story.content.map((paragraph, idx) => (
                  <p key={idx} className="text-stone-600 leading-relaxed text-lg mb-8 last:mb-0 font-nunito font-light">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bg-gradient-to-br from-amber-900 to-stone-900 text-white p-12 shadow-2xl">
                <div className="mb-8">
                  <div className="w-16 h-1 bg-amber-300 mb-6"></div>
                  <h3 className="text-4xl font-cinzel font-bold mb-2">
                    {ABOUT_CONTENT.mission.title}
                  </h3>
                  <div className="w-24 h-px bg-amber-300/50"></div>
                </div>
                <p className="text-amber-100 leading-relaxed text-lg mb-10 font-nunito font-light">
                  {ABOUT_CONTENT.mission.content}
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-12 shadow-2xl border border-stone-200/50">
                <div className="mb-8">
                  <div className="w-16 h-1 bg-stone-600 mb-6"></div>
                  <h3 className="text-4xl font-cinzel font-bold text-stone-800 mb-2">
                    {ABOUT_CONTENT.vision.title}
                  </h3>
                  <div className="w-24 h-px bg-stone-300"></div>
                </div>
                <p className="text-stone-600 leading-relaxed text-lg font-nunito font-light">
                  {ABOUT_CONTENT.vision.content}
                </p>
              </div>
            </div>

            {/* Right Side - Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-6 h-fit">
                {SCHOOL_IMAGES.map((img, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden shadow-xl ${
                      index === 1 || index === 5 ? 'row-span-2' : 
                      index === 3 || index === 7 ? 'col-span-2' : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={`School life ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-8 -left-8 bg-amber-700 text-white rounded-lg p-8 shadow-2xl border-4 border-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">Excellence</div>
                  <div className="text-amber-200 text-sm font-medium">In Every Endeavor</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
              <h3 className="text-5xl font-cinzel font-bold text-stone-800 mb-6">Our Core Values</h3>
              <div className="w-24 h-px bg-stone-300 mx-auto mb-8"></div>
              <p className="text-xl text-stone-600 max-w-4xl mx-auto font-nunito font-light leading-relaxed">
                The fundamental principles that guide our educational philosophy and shape the character of every student who walks through our halls
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-lg p-10 shadow-xl border border-amber-200/50 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h4 className="text-xl font-cinzel font-bold text-stone-800 mb-6">{value.title}</h4>
                  <p className="text-stone-600 leading-relaxed text-lg font-nunito font-light">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Offerings Section */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <div className="w-16 h-1 bg-amber-600 mx-auto mb-8"></div>
              <h3 className="text-5xl font-cinzel font-bold text-stone-800 mb-4">
                {ABOUT_CONTENT.community.title}
              </h3>
              <p className="text-2xl text-amber-700 font-nunito font-light italic mb-8">
                {ABOUT_CONTENT.community.subtitle}
              </p>
              <div className="w-24 h-px bg-stone-300 mx-auto mb-8"></div>
              <p className="text-xl text-stone-600 max-w-4xl mx-auto font-nunito font-light leading-relaxed">
                {ABOUT_CONTENT.community.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {ABOUT_CONTENT.community.offerings.map((offering, index) => (
                <div 
                  key={index}
                  className="bg-white/95 backdrop-blur-sm p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <div className="w-12 h-1 bg-amber-600 mb-4"></div>
                    <h4 className="text-xl font-cinzel font-bold text-stone-800 mb-2">
                      {offering.title}
                    </h4>
                    <div className="w-16 h-px bg-stone-300"></div>
                  </div>
                  <p className="text-stone-600 leading-relaxed text-lg font-nunito font-light">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Franciscan Heritage Section */}
          <div className="bg-gradient-to-br from-stone-800 to-amber-900 text-white p-16 shadow-2xl">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-16 h-1 bg-amber-300 mx-auto mb-8"></div>
                <h3 className="text-5xl font-cinzel font-bold mb-4">
                  {ABOUT_CONTENT.franciscan.title}
                </h3>
                <p className="text-2xl text-amber-200 font-nunito font-light italic mb-8">
                  {ABOUT_CONTENT.franciscan.subtitle}
                </p>
                <div className="w-24 h-px bg-amber-300/50 mx-auto"></div>
              </div>

              <div className="space-y-10">
                {ABOUT_CONTENT.franciscan.content.map((paragraph, idx) => (
                  <p key={idx} className="text-amber-100 leading-relaxed text-lg font-nunito font-light text-center max-w-5xl mx-auto">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="text-center mt-16">
                <div className="inline-block bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <p className="text-2xl font-cinzel italic text-amber-200">
                    "Lord, make me an instrument of your peace."
                  </p>
                  <p className="text-amber-300 mt-4 font-medium">
                    — St. Francis of Assisi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;