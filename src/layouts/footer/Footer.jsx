import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show footer after a short delay for animation
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-stone-800 to-amber-900">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#444_1px,transparent_1px)]"></div>
        
        {/* Gradient accents */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-600/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-600/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Footer top section - Moved down */}
        <div className={`pt-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Branding */}
            <div className="lg:col-span-4">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3>
                    <span className="block text-white text-2xl font-light tracking-tight">Capuchin Boys</span>
                    <span className="block text-2xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-200">
                      Secondary School
                    </span>
                  </h3>
                </div>
                
                <p className="text-white/60 text-sm leading-relaxed">
                  Nurturing future leaders through quality education and holistic development. 
                  Our mission is to provide an environment that fosters academic excellence, 
                  character development, and spiritual growth.
                </p>
                
                {/* Social links */}
                <div className="flex space-x-6">
                  <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faFacebook} className="text-lg" />
                  </a>
                  <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faTwitter} className="text-lg" />
                  </a>
                  <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                  </a>
                  <a href="#" className="text-white/50 hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Home</Link></li>
                <li><Link to="/academics" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Academics</Link></li>
                <li><Link to="/about" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">About Us</Link></li>
                <li><Link to="/admissions" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Admissions</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4 lg:col-start-10">
              <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
              <address className="not-italic space-y-4">
                <p className="flex items-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white/60 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/60 text-sm">P.O. Box 12345,<br/>Nairobi, Kenya</span>
                </p>
                <p className="flex items-center">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-white/60 mr-3" />
                  <a href="tel:+254712345678" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">+254 712 345 678</a>
                </p>
                <p className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white/60 mr-3" />
                  <a href="mailto:info@capuchinboys.ac.ke" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">info@capuchinboys.ac.ke</a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Capuchin Boys Secondary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;