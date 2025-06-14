import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './header/Header';
import Footer from './footer/Footer';
import Preloader from '../components/common/Preloader';

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setIsAdminRoute(location.pathname.startsWith('/admin'));
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    setIsAdminRoute(location.pathname.startsWith('/admin'));
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
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
          
          {/* Main content area with preloader */}
          {isLoading ? (
            <Preloader onLoadingComplete={handleLoadingComplete} />
          ) : (
            <main className="flex-grow">
              <Outlet />
            </main>
          )}
          
          <Footer />
        </>
      ) : (
        <div className="flex-grow bg-gray-100">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MainLayout;