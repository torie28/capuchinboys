import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll to show/hide header and update tab colors
  useEffect(() => {
    let ticking = false;
    
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Always show header when scrolling to top
          if (currentScrollY < 10) {
            setIsVisible(true);
            setIsScrolled(false);
          } 
          // Hide header when scrolling down, show when scrolling up
          else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
          }
          
          // Update scroll state for tab colors
          setIsScrolled(currentScrollY > 10);
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, location]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          lastScrollY > 10 ? 'bg-transparent/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-3'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and School Name */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-800 text-white p-2 rounded-full shadow-md">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Capuchin Boys</h1>
              <p className="text-xs text-primary -mt-0.5">Secondary School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`px-6 py-3 text-base font-medium transition-all duration-300 rounded-md ${
                      location.pathname === item.path
                        ? isScrolled 
                          ? 'text-primary' 
                          : 'text-white'
                        : isScrolled
                          ? 'text-gray-700 hover:text-primary'
                          : 'text-white/90 hover:text-white '
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center group focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className={`relative w-6 h-5 transform transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {/* Top line */}
                <span 
                  className={`absolute left-0 w-full h-0.5 bg-primary transform transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1.5'}`}
                ></span>
                {/* Middle line */}
                <span 
                  className={`absolute left-0 w-full h-0.5 bg-primary transform transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                {/* Bottom line */}
                <span 
                  className={`absolute left-0 w-full h-0.5 bg-primary transform transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1.5'}`}
                ></span>
              </div>
              {/* Pulsing circle effect */}
              <span className={`absolute inset-0 rounded-full bg-primary/10 scale-0 group-active:scale-100 transition-transform duration-300 ${isMenuOpen ? 'scale-100' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      </header>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/20 backdrop-blur-xl shadow-2xl z-50 transform transition-all duration-300 ease-in-out md:hidden border-l border-white/10 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/10 transition-colors duration-200 focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="h-full flex flex-col pt-20 px-4">
          <nav className="flex-1 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-lg font-medium  transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-white/20 text-white font-semibold backdrop-blur-md'
                    : 'text-white/90 hover:bg-white/20 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="py-6 border-t border-gray-100 mt-auto">
            <p className="text-center text-sm text-primary">
              © {new Date().getFullYear()} Capuchin Boys
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;