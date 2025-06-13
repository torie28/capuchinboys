import React from 'react';

const Activities = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">School Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Activity cards will go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Sports</h3>
            <p className="text-gray-600">Participate in various sports activities and competitions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Clubs</h3>
            <p className="text-gray-600">Join different clubs based on your interests and talents.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Events</h3>
            <p className="text-gray-600">Participate in annual events and cultural activities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;