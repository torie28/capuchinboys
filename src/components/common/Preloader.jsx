// src/components/common/Preloader.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  useEffect(() => {
    // Complete loading after animation duration
    const completeTimer = setTimeout(() => {
      onLoadingComplete?.();
    }, 2000);

    return () => {
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
    </div>
  );
};

export default Preloader;