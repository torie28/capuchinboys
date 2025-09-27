// src/components/common/Preloader.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete, isInitialLoad = true }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // For initial load, show loader for 1.2 seconds on mobile, 1.5s on desktop
    const isMobile = window.innerWidth <= 768;
    const duration = isMobile ? 1200 : 1500;
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete, isInitialLoad]);

  // Animation variants for the loader overlay
  const overlayVariants = {
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hidden: { 
      opacity: 0,
      transition: { 
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Animation variants for the dots - optimized for mobile
  const dotVariants = {
    initial: { y: '0%' },
    animate: (i) => {
      const isMobile = window.innerWidth <= 768;
      return {
        y: ['0%', isMobile ? '-50%' : '-100%', '0%'],
        transition: {
          duration: isMobile ? 0.6 : 0.8,
          repeat: Infinity,
          delay: i * (isMobile ? 0.15 : 0.1),
          ease: 'easeInOut'
        }
      };
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50 touch-none"
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
          initial="visible"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
        >
          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-primary"
                variants={dotVariants}
                initial="initial"
                animate="animate"
                custom={i}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;