import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [animate3D, setAnimate3D] = useState(false);

  // Sample gallery data with categories
  const galleryData = [
    {
      id: 1,
      src: "/assets/images/environments/modern_school_environment.jpg",
      alt: "Modern School Building",
      category: "environments",
      title: "Modern Architecture"
    },
    {
      id: 2,
      src: "/assets/images/academics/student_focusing.jpg",
      alt: "Classroom Learning",
      category: "classroom",
      title: "Interactive Learning"
    },
    {
      id: 3,
      src: "/assets/images/sports/basketball_ground.jpg",
      alt: "Sports Activities",
      category: "sports",
      title: "Athletic Excellence"
    },
    {
      id: 4,
      src: "/assets/images/events/memories_that_can't_be_forgotten.jpg",
      alt: "School Events",
      category: "events",
      title: "Community Celebrations"
    },
    {
      id: 5,
      src: "/assets/images/buildings/front_area_compound.jpg",
      alt: "Science Laboratory",
      category: "buildings",
      title: "Learning Resources"
    },
    
    {
      id: 6,
      src: "/assets/images/sports/football_unfogetable_moments.jpg",
      alt: "Performing magic dance",
      category: "sports",
      title: "Unforgettable Football Moments"
    },
    {
      id: 7,
      src: "/assets/images/academics/student_in_class.jpg",
      alt: "Student in classroom",
      category: "classroom",
      title: "Learning in Action"
    },
    {
      id: 8,
      src: "/assets/images/environments/environment_section.jpg",
      alt: "Campus Grounds",
      category: "buildings",
      title: "Beautiful Campus"
    },
    
    {
      id: 9,
      src: "/assets/images/buildings/acomodative_compound.jpg",
      alt: "School compound and facilities",
      category: "environments",
      title: "Conducive Learning Environment"
      
    },
    {
      id: 10,
      src: "/assets/images/events/mass_as_our_culture.jpg",
      alt: "Cultural Mass Gathering",
      category: "events",
      title: "Cultural Unity"
    },
    
    {
      id: 11,
      src: "/assets/images/environments/good_environment.jpg",
      alt: "Conducive school environment",
      category: "environments",
      title: "Good Learning Environment"
      
    },
    {
      id: 12,
      src: "/assets/images/buildings/dinning_hall.jpg",
      alt: "School dining hall",
      category: "buildings",
      title: "Dining Hall"
      
    },
    
    {
      id: 13,
      src: "/assets/images/environments/smart_area.jpg",
      alt: "Smart school environment",
      category: "environments",
      title: "Smart Learning Environment"
    },
    {
      id: 14,
      src: "/assets/images/sports/having_good_time_in_basketball.jpg",
      alt: "Athletic Competition",
      category: "sports",
      title: "Competitive Sports"
    },
    
    {
      id: 15,
      src: "/assets/images/buildings/shool_compound.jpg",
      alt: "School compound view",
      category: "buildings",
      title: "School Environment"
    },
    {
      id: 16,
      src: "/assets/images/events/making_school_memories.jpg",
      alt: "Making school memories",
      category: "events",
      title: "Memorable School Moments"
    },
    {
      id: 17,
      src: "/assets/images/sports/vollyball_ground.jpg",
      alt: "Volleyball match in action",
      category: "sports",
      title: "Volleyball Competition"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'buildings', name: 'Buildings' },
    { id: 'environments', name: 'Environments' },
    { id: 'classroom', name: 'Classroom' },
    { id: 'sports', name: 'Sports' },
    { id: 'events', name: 'Events' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  const displayedImages = filteredImages.slice(0, visibleImages);

  const handleViewMore = () => {
    setIsLoading(true);
    setAnimate3D(true);
    
    // First animate existing cards with 3D flip
    setTimeout(() => {
      const cards = document.querySelectorAll('.gallery-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.transform = 'perspective(1000px) rotateY(180deg) rotateX(15deg)';
          card.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }, index * 50);
      });
    }, 100);

    // Reset cards and show new ones
    setTimeout(() => {
      const cards = document.querySelectorAll('.gallery-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        }, index * 30);
      });
      
      setVisibleImages(prev => prev + 6);
      setIsLoading(false);
      setAnimate3D(false);
    }, 1200);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleImages(6);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#B4975A] to-[#8B8677] bg-clip-text text-transparent mb-4">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Explore our vibrant campus life through these captivating moments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#B4975A] to-[#8B8677] text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200'
              }`}
              style={{
                animationName: 'fadeInUp',
                animationDuration: '0.6s',
                animationTimingFunction: 'ease-out',
                animationFillMode: 'forwards',
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer"
              style={{
                animationName: 'fadeInScale',
                animationDuration: '0.8s',
                animationTimingFunction: 'ease-out',
                animationFillMode: 'forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.alt}</p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-colors duration-500"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Loading Animation with 3D Effect */}
        {isLoading && (
          <div className="flex flex-col justify-center items-center py-12">
            <div className="relative mb-6">
              <div 
                className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"
                style={{
                  transform: 'perspective(100px) rotateX(45deg)',
                  animationName: 'spin',
                  animationDuration: '1.5s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              ></div>
              <div 
                className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full"
                style={{
                  transform: 'perspective(100px) rotateX(-45deg)',
                  animationName: 'spin',
                  animationDuration: '1.5s',
                  animationDelay: '0.5s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              ></div>
              <div 
                className="absolute top-2 left-2 w-12 h-12 border-2 border-transparent border-t-pink-500 rounded-full"
                style={{
                  transform: 'perspective(100px) rotateY(45deg)',
                  animationName: 'spin',
                  animationDuration: '1.5s',
                  animationDelay: '1s',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              ></div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold bg-gradient-to-r from-[#B4975A] to-[#8B8677] bg-clip-text text-transparent animate-pulse">
                Loading Amazing Photos...
              </div>
              <div className="mt-2 flex justify-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full" style={{
                  animationName: 'bounce',
                  animationDuration: '1s',
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite'
                }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full" style={{
                  animationName: 'bounce',
                  animationDuration: '1s',
                  animationDelay: '0.2s',
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite'
                }}></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full" style={{
                  animationName: 'bounce',
                  animationDuration: '1s',
                  animationDelay: '0.4s',
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite'
                }}></div>
              </div>
            </div>
          </div>
        )}

        {/* View More Button */}
        {visibleImages < filteredImages.length && !isLoading && (
          <div className="text-center">
            <button
              onClick={handleViewMore}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#B4975A] to-[#8B8677] text-white font-bold  shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View More Photos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B8677] to-[#B4975A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        )}

        {/* Modal */}
        {showModal && selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="relative w-full h-full max-h-[90vh] overflow-auto transform animate-modal-appear">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[90vh] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">{selectedImage.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-200">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          </div> 
        )}
      </div>
    </section>
  );
};

export default Gallery;