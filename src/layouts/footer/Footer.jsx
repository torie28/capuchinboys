import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Helper function to handle email click with device detection
const handleEmailClick = (e) => {
  e.preventDefault();
  const email = 'capuchinboys@gmail.com';
  const subject = 'Inquiry';
  const body = 'Hello Capuchin Boys Choir,';
  
  // Check if mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // For mobile devices, use mailto: which will open the default mail app
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  } else {
    // For desktop, open Gmail compose in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  }
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show footer after a short delay for animation
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="w-full min-w-full bg-gradient-to-r from-white to-white overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed bottom-0 left-0 right-0 z-0 w-full">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#444_1px,transparent_1px)]"></div>
        
        {/* Gradient accents */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-600/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-600/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-none px-4 mx-0 sm:px-6 lg:px-8 xl:px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`pt-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
              {/* Branding - Full width on mobile, then takes 4 columns */}
              <div className="lg:col-span-4 text-center md:text-left">
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-black text-2xl font-light tracking-tight">Capuchin Boys</h3>
                    <h4 className="text-2xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-black">
                      Secondary School
                    </h4>
                  </div>
                  
                  <p className="text-black/60 text-sm leading-relaxed"> 
                    Our mission is to provide an environment that fosters academic excellence, 
                    character development, and spiritual growth.
                  </p>
                  
                  <div className="flex justify-center md:justify-start space-x-6">
                    <Link 
                      to="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Visit our Facebook page"
                      className="text-black/50 hover:text-black transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faFacebook} className="text-lg" />
                    </Link>
                    <Link 
                      to="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Follow us on Twitter"
                      className="text-black/50 hover:text-black transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faTwitter} className="text-lg" />
                    </Link>
                    <Link 
                      to="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      className="text-black/50 hover:text-black transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                    </Link>
                    <Link 
                      to="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Subscribe to our YouTube channel"
                      className="text-black/50 hover:text-black transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faYoutube} className="text-lg" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick Links - Full width on mobile, then takes 3 columns */}
              <div className="lg:col-span-3 lg:col-start-6 text-center md:text-left">
                <h4 className="text-black text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm block py-1">Home</Link></li>
                  <li><Link to="/academics" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm block py-1">Academics</Link></li>
                  <li><Link to="/about" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm block py-1">About Us</Link></li>
                  <li><Link to="/admissions" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm block py-1">Admissions</Link></li>
                  <li><Link to="/contact" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm block py-1">Contact Us</Link></li>
                </ul>
              </div>

              {/* Contact Info - Full width on mobile, then takes 4 columns */}
              <div className="lg:col-span-4 lg:col-start-9 text-center md:text-left">
                <h4 className="text-black text-lg font-semibold mb-4">Contact Us</h4>
                <address className="not-italic space-y-3">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-start">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black/60 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-black/60 text-sm">P.O. Box 154,<br/>Pangani, Tanga</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:block">
                    <div className="text-black/60 hover:text-black transition-colors duration-300 text-sm flex items-center justify-center md:justify-start py-1">
                      <FontAwesomeIcon icon={faPhoneAlt} className="mr-3" />
                      +255 752 978 895, +255 687 901 972,
                      <br></br>
                      +255 678 864 722, +255 657 454 241
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:block">
                    <a 
                      href="" 
                      onClick={handleEmailClick}
                      className="text-black/60 hover:text-primary transition-colors duration-300 text-sm flex items-center justify-center md:justify-start py-1 group"
                      aria-label="Send email to capuchinboys@gmail.com"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="mr-3 group-hover:scale-110 transition-transform duration-200" />
                      capuchinboys@gmail.com
                    </a>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full max-w-none px-4 mx-0 sm:px-6 lg:px-8 xl:px-4 pt-8 text-center">
          <div className="max-w-7xl mx-auto">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Capuchin Boys Secondary School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;