// src/components/common/Preloader.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete, isInitialLoad = true }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // For initial load, show loader for 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete?.();
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete, isInitialLoad]);

  // Animation variants for the loader overlay
  const overlayVariants = {
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hidden: { 
      opacity: 0,
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Animation variants for the dots
  const dotVariants = {
    initial: { y: '0%' },
    animate: (i) => ({
      y: ['0%', '-100%', '0%'],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        delay: i * 0.1,
        ease: 'easeInOut'
      }
    })
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50"
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