import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// 404 Not Found component
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Capuchin Boys</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Capuchin Boys homepage." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-6 max-w-md mx-4 bg-white rounded-lg shadow-md">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#B4975A] hover:bg-[#9a7f4a] text-white font-medium py-2 px-6 rounded-full transition-colors duration-200"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
