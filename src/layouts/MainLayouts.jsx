import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './header/Header';
import Footer from './footer/Footer';
import Preloader from '../components/common/Preloader';

const MainLayout = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const location = useLocation();
  const navigation = useNavigation();
  const prevLocationRef = useRef();

  useEffect(() => {
    const isFirstLoad = !prevLocationRef.current;
    prevLocationRef.current = true;
    
    // Handle route changes
    const isNewRoute = prevLocationRef.current !== location.pathname;
    
    if (isNewRoute || isFirstLoad) {
      setIsLoading(true);
      setIsAdminRoute(location.pathname.startsWith('/admin'));
      window.scrollTo(0, 0);
      
      // Set a small timeout to ensure the loading state is properly handled
      // This helps with the initial render and route transitions
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 100);
      
      return () => clearTimeout(timer);
    }
    
    prevLocationRef.current = location.pathname;
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }
  };

  // Animation variants for page transitions
  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 20
    },
    enter: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full max-w-full overflow-hidden">
      <Helmet>
        <title>Capuchin Boys Secondary School - {isAdminRoute ? 'Admin' : 'Excellence in Education'}</title>
        <meta 
          name="description" 
          content={isAdminRoute 
            ? 'Capuchin Boys Secondary School - Admin Dashboard' 
            : 'Capuchin Boys Secondary School - Nurturing future leaders through quality education and holistic development.'} 
        />
      </Helmet>

      {!isAdminRoute ? (
        <>
          <Header />
          
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              {/* Show preloader only during initial load */}
              {isInitialLoad && isLoading ? (
                <Preloader 
                  onLoadingComplete={handleLoadingComplete} 
                  isInitialLoad={true} 
                />
              ) : (
                <motion.div
                  key={location.pathname}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={pageVariants}
                  className="h-full w-full"
                >
                  <Outlet />
                </motion.div>
              )}
            </AnimatePresence>
          </main>
          
          <Footer />
        </>
      ) : (
        <div className="flex-grow bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={pageVariants}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default MainLayout;