// src/components/common/Preloader.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Preloader = ({ onLoadingComplete }) => {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    // Show skeleton after initial animation
    const skeletonTimer = setTimeout(() => {
      setShowSkeleton(true);
    }, 1000);
    
    // Complete loading after total duration
    const completeTimer = setTimeout(() => {
      onLoadingComplete?.();
    }, 2500);

    return () => {
      clearTimeout(skeletonTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

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
    <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50 p-6">
      <AnimatePresence mode="wait">
        {!showSkeleton ? (
          <motion.div 
            key="dots"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex space-x-3"
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 rounded-full bg-primary"
                variants={dotVariants}
                initial="initial"
                animate="animate"
                custom={i}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl"
          >
            <SkeletonLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Preloader;