import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaCar, FaWalking, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaExternalLinkAlt } from 'react-icons/fa';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const center = {
  lat: -5.3172361777254515, // Replace with actual school coordinates 
  lng: 38.9160211214481  // Replace with actual school coordinates
};

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  // Function to calculate distance between two points in kilometers
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos((lat1 * Math.PI / 180)) * Math.cos((lat2 * Math.PI / 180)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
  };

  // Function to get user's current location and calculate distance to school
  // const getDistance = () => {
  //   const resultDiv = document.getElementById('distance-result');
  //   resultDiv.textContent = 'Getting your location...';

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const userLat = position.coords.latitude;
  //         const userLng = position.coords.longitude;
  //         const schoolLat = -5.317787456489596;
  //         const schoolLng = 38.91617479918297;
          
  //         const distance = calculateDistance(userLat, userLng, schoolLat, schoolLng);
  //         resultDiv.innerHTML = `
  //           <div class="bg-blue-50 p-4 rounded-lg">
  //             <p>You are approximately <strong>${distance.toFixed(1)} km</strong> from Capuchin Boys Secondary School.</p>
  //             <p class="text-sm mt-2">Your location: ${userLat.toFixed(6)}, ${userLng.toFixed(6)}</p>
  //             <p class="text-sm">School location: ${schoolLat.toFixed(6)}, ${schoolLng.toFixed(6)}</p>
  //           </div>
  //         `;
          
  //         // Update the map to show both locations
  //         const mapUrl = `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3976.0000000000005!2d38.91617479918297!3d-5.317787456489596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x0%3A0x0!2zNcKwMTknMDQuMCJTIDM4wrA1NCc1OC4yIkU!3m2!1d-5.3177875!2d38.9161748!4m4!3e2!4m4!1s${userLat}%2C${userLng}!3e2!5m2!1sen!2sus!6i14!3m6!1sen!2sus!5e0!3m2!1sen!2sus!4v${Math.floor(Date.now()/1000)}`;
  //         document.querySelector('.map-container iframe').src = mapUrl;
  //       },
  //       (error) => {
  //         let errorMessage = 'Error getting your location: ';
  //         switch(error.code) {
  //           case error.PERMISSION_DENIED:
  //             errorMessage += 'Please allow location access to see the distance.';
  //             break;
  //           case error.POSITION_UNAVAILABLE:
  //             errorMessage += 'Location information is unavailable.';
  //             break;
  //           case error.TIMEOUT:
  //             errorMessage += 'The request to get your location timed out.';
  //             break;
  //           default:
  //             errorMessage += 'An unknown error occurred.';
  //         }
  //         resultDiv.textContent = errorMessage;
  //       },
  //       {
  //         enableHighAccuracy: true,
  //         timeout: 5000,
  //         maximumAge: 0
  //       }
  //     );
  //   } else {
  //     resultDiv.textContent = 'Geolocation is not supported by your browser.';
  //   }
  // };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Hero Section with Motion and Parallax */}
      <motion.section  
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background with Parallax Effect */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/assets/images/environments/environment_section.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            scale: scale,
            transition: 'transform 1s ease-out',
            willChange: 'transform'
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/90"></div>
        </motion.div>

        {/* Content with subtle parallax */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{ y }}
        >
          <div className="transform transition-all duration-1000">
            {/* Main Heading */}
            <h1 className="font-playfair font-light mb-8 text-[clamp(3rem,8vw,7rem)] leading-[1.1] tracking-[0.02em] text-white">
              CONTACT US
              <br />
              <span className="font-normal bg-gradient-135 from-white via-white to-white bg-clip-text text-transparent">
                CAPUCHIN BOYS
              </span>
            </h1>

            {/* Subtitle */}
            <div className="text-2xl md:text-3xl mb-12 font-light tracking-wider text-gray-200">
              Get in touch with Capuchin Boys Secondary School
            </div>
          </div>
        </motion.div>
      </motion.section>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 lg:mt-20 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Contact Info */}
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-100">Our Information</h2>
            <p className="text-gray-600 mb-8">Feel free to reach out to us for any inquiries or visit our school during working hours.</p>
            
            <div className="flex items-start mb-6">
              <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 mr-4 flex-shrink-0">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Location</h4>
                <p className="text-gray-600">P.O. Box 154, Pangani, Tanga</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 mr-4 flex-shrink-0">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg mb-1">Phone</h4>
                <p className="text-gray-600">+255 752 978 895</p>
                <p className="text-gray-600">+255 687 901 972</p>
                <p className="text-gray-600">+255 678 864 722</p>
                <p className="text-gray-600">+255 657 454 241</p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 mr-4 flex-shrink-0">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Email</h4>
                <p className="text-gray-600">capuchinboysss2015@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start mb-8">
              <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center text-gray-700 mr-4 flex-shrink-0">
                <FaClock className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Working Hours</h4>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <Link 
                to="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-primary transition-colors duration-200"
                aria-label="Visit our Facebook page (opens in a new tab)"
              >
                <FaFacebook className="text-xl" aria-hidden="true" />
              </Link>
              <Link 
                to="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-primary transition-colors duration-200"
                aria-label="Visit our Twitter profile (opens in a new tab)"
              >
                <FaTwitter className="text-xl" aria-hidden="true" />
              </Link>
              <Link 
                to="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-700  hover:text-primary transition-colors duration-200"
                aria-label="Visit our Instagram profile (opens in a new tab)"
              >
                <FaInstagram className="text-xl" aria-hidden="true" />
              </Link>
            </div>
          </div>


          {/* Contact Form */}
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-gray-100">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                />
              </div>
              <div className="space-y-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                />
              </div>
              <div className="space-y-1">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                />
              </div>
              <div className="space-y-1">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary text-primary font-medium hover:bg-blue-50 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Capuchin Boys Secondary School</h2>
              <div className="w-24 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-[#B4975A] to-transparent"></div>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Capuchin Boys Secondary School is a premier educational institution committed to academic excellence,
                character development, and holistic growth of our students. Our dedicated faculty and staff work
                tirelessly to provide a nurturing environment that fosters learning, creativity, and personal development.
              </p>
              <p>
                We believe in shaping well-rounded individuals who are not only academically proficient but also
                disciplined, and morally upright individuals who will make positive contributions to society.
              </p>
              <p>
                With state-of-the-art facilities, experienced faculty, and a supportive learning environment,
                we provide quality education that prepares our students for future challenges and opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Location</h2>
            <div className="w-24 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-[#B4975A] to-transparent"></div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 w-full relative">
                <iframe
               title="Craftsman Safaris Location"
               src="https://maps.google.com/maps?saddr=-5.1833,38.7833&daddr=-5.317787,38.916175&output=embed"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full object-cover"
              />
              </div>
              <div className="p-6 bg-gray-50 flex flex-wrap justify-center gap-4">
                <Link 
                  to="https://www.google.com/maps/dir//-5.317787,38.916175/@-5.317787,38.916175,17z?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary text-primary font-medium hover:bg-blue-50 transition-colors"
                  aria-label="Get driving directions to our location (opens in a new tab)"
                >
                  <FaCar className="mr-2" aria-hidden="true" /> 
                  Get Directions
                  <FaExternalLinkAlt className="ml-2 text-xs opacity-70" aria-hidden="true" />
                </Link>
                <Link 
                  to="https://www.google.com/maps/dir//-5.317787,38.916175/@-5.317787,38.916175,17z/data=!4m2!4m1!3e2?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary text-primary font-medium hover:bg-blue-50 transition-colors"
                  aria-label="Get walking directions to our location (opens in a new tab)"
                >
                  <FaWalking className="mr-2" aria-hidden="true" /> 
                  Walking Directions
                  <FaExternalLinkAlt className="ml-2 text-xs opacity-70" aria-hidden="true" />
                </Link>
                {/* <button 
                 onClick={getDistance}
                 className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary text-primary font-medium hover:bg-blue-50 transition-colors"
               >
                 <FaLocationArrow className="mr-2" /> Check Distance
               </button> */}
              </div>
              {/* <div 
               id="distance-result" 
               className="p-4 text-center text-gray-700 bg-white border-t border-gray-200"
             ></div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;