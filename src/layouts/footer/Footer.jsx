// src/layouts/footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Capuchin Boys Secondary School</h3>
            <p className="mb-4">
              Nurturing future leaders through quality education and holistic development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-300">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-300">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/academics" className="hover:underline">Academics</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                P.O. Box 12345, Nairobi, Kenya
              </p>
              <p className="flex items-center mb-2">
                <i className="fas fa-phone-alt mr-2"></i>
                +254 712 345 678
              </p>
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                info@capuchinboys.ac.ke
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Capuchin Boys Secondary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;