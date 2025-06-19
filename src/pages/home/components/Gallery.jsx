import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [animate3D, setAnimate3D] = useState(false);

  // Sample gallery data with categories
  const galleryData = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      alt: "Modern University Building",
      category: "buildings",
      title: "Modern Architecture"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      alt: "Classroom Learning",
      category: "classroom",
      title: "Interactive Learning"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      alt: "Sports Activities",
      category: "sports",
      title: "Athletic Excellence"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      alt: "School Events",
      category: "events",
      title: "Community Celebrations"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
      alt: "Library Study",
      category: "facilities",
      title: "Learning Resources"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      alt: "Science Laboratory",
      category: "facilities",
      title: "Research Excellence"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      alt: "Campus Grounds",
      category: "buildings",
      title: "Beautiful Campus"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      alt: "Graduation Ceremony",
      category: "events",
      title: "Achievement Celebration"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      alt: "Team Collaboration",
      category: "classroom",
      title: "Collaborative Learning"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      alt: "Athletic Competition",
      category: "sports",
      title: "Competitive Sports"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      alt: "Art Studio",
      category: "facilities",
      title: "Creative Expression"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      alt: "Student Performance",
      category: "events",
      title: "Cultural Events"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'buildings', name: 'Buildings' },
    { id: 'classroom', name: 'Classroom' },
    { id: 'sports', name: 'Sports' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' }
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
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer"
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
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-200 to-gray-300">
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
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-colors duration-500"></div>
              
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform animate-modal-appear">
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes spin {
          0% { transform: perspective(100px) rotateX(45deg) rotate(0deg); }
          100% { transform: perspective(100px) rotateX(45deg) rotate(360deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fadeIn3D {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-90deg) rotateX(30deg) translateZ(-100px);
          }
          50% {
            opacity: 0.5;
            transform: perspective(1000px) rotateY(-45deg) rotateX(15deg) translateZ(-50px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px);
          }
        }

        @keyframes modal-appear {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes animate-3d-wave {
          0% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px);
          }
          25% {
            transform: perspective(1000px) rotateX(15deg) rotateY(5deg) translateZ(20px);
          }
          50% {
            transform: perspective(1000px) rotateX(-10deg) rotateY(-5deg) translateZ(10px);
          }
          75% {
            transform: perspective(1000px) rotateX(5deg) rotateY(3deg) translateZ(15px);
          }
          100% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px);
          }
        }

        .animate-modal-appear {
          animation: modal-appear 0.3s ease-out;
        }

        /* Animation delays removed - using inline styles instead */

        .animate-3d-wave {
          animation: animate-3d-wave 2s ease-in-out infinite;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .transform-gpu {
          transform: translateZ(0);
        }

        .hover\\:rotateY-12:hover {
          transform: perspective(1000px) rotateY(12deg);
        }

        .hover\\:rotateX-6:hover {
          transform: perspective(1000px) rotateX(6deg);
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        /* 3D Perspective Container */
        .gallery-card {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .gallery-card:hover {
          transform: perspective(1000px) rotateY(8deg) rotateX(4deg) translateZ(20px);
        }

        /* Custom 3D transforms */
        .translate-z-5 {
          transform: translateZ(5px);
        }

        .translate-z-10 {
          transform: translateZ(10px);
        }

        .translate-z-minus-5 {
          transform: translateZ(-5px);
        }
      `}</style>
    </section>
  );
};

export default Gallery;