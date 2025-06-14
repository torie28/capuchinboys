import React from 'react';
import { motion } from 'framer-motion';

const Admissions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image and Overlay - Full Viewport Height */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/images/buildings/Secondary pic.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        </div>
        
        {/* Content - Centered Vertically and Horizontally */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center py-32">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Admissions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Begin your journey to excellence at Capuchin Boys Secondary School
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <div className="w-24 h-1 bg-[#B4975A] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Application',
                description: 'Submit the online application form along with required documents.'
              },
              {
                step: '02',
                title: 'Entrance Exam',
                description: 'Sit for our entrance examination to assess academic readiness.'
              },
              {
                step: '03',
                title: 'Interview',
                description: 'Attend an interview with our academic team.'
              },
              {
                step: '04',
                title: 'Acceptance',
                description: 'Receive admission decision and complete enrollment.'
              },
              {
                step: '05',
                title: 'Orientation',
                description: 'Attend new student orientation program.'
              },
              {
                step: '06',
                title: 'Begin Classes',
                description: 'Start your academic journey with us.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#B4975A] mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
            <div className="w-24 h-1 bg-[#B4975A] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We seek students who demonstrate academic potential, good character, and a commitment to learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Forms & Documents</h3>
              <ul className="space-y-4">
                {[
                  'Completed application form',
                  'Birth certificate (copy)',
                  'Recent passport photos (2)',
                  'Latest school report card',
                  'Transfer certificate (if applicable)',
                  'Medical report'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-[#B4975A] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Important Dates</h3>
              <div className="space-y-6">
                {[
                  { month: 'Jan', title: 'Applications Open', date: 'January 10' },
                  { month: 'Mar', title: 'Entrance Exams', date: 'March 15' },
                  { month: 'Apr', title: 'Interviews', date: 'April 1-15' },
                  { month: 'May', title: 'Acceptance Letters', date: 'May 1' },
                  { month: 'Jun', title: 'Enrollment Deadline', date: 'June 30' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#B4975A] text-white text-sm font-medium px-3 py-1 rounded mr-4">
                      {item.month}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tuition & Financial Aid</h2>
            <div className="w-24 h-1 bg-[#B4975A] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We believe in making quality education accessible. Explore our tuition structure and financial aid options.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Tuition Fees',
                price: 'Ksh 45,000',
                period: 'per term',
                features: [
                  'Full academic program',
                  'Library access',
                  'Basic medical care',
                  'Sports facilities',
                  'Guidance counseling'
                ]
              },
              {
                title: 'Boarding',
                price: 'Ksh 30,000',
                period: 'per term',
                features: [
                  'Accommodation',
                  'Three meals daily',
                  'Evening prep',
                  'Laundry service',
                  '24/7 supervision'
                ]
              },
              {
                title: 'Financial Aid',
                price: 'Available',
                period: 'needs-based',
                features: [
                  'Scholarships',
                  'Bursaries',
                  'Payment plans',
                  'Sibling discounts',
                  'Special circumstances'
                ]
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg border ${index === 1 ? 'transform scale-105 z-10 border-[#B4975A]' : 'border-gray-200'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`p-6 ${index === 1 ? 'bg-[#1a365d] text-white' : 'bg-white'}`}>
                  <h3 className={`text-2xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${index === 1 ? 'text-[#B4975A]' : 'text-[#B4975A]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <button 
                    className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                      index === 1 
                        ? 'bg-[#B4975A] text-white hover:bg-[#9c7f47]' 
                        : 'bg-white border-2 border-[#B4975A] text-[#B4975A] hover:bg-gray-50'
                    }`}
                  >
                    {index === 2 ? 'Apply for Aid' : 'Learn More'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Questions?</h2>
                <p className="text-gray-600 mb-8">
                  Our admissions team is here to help. Contact us for more information about the application process, 
                  requirements, or to schedule a school tour.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#B4975A] rounded-full p-2">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                      <p className="text-gray-600">admissions@capuchinboys.sc.ke</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#B4975A] rounded-full p-2">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                      <p className="text-gray-600">+254 712 345 678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#B4975A] rounded-full p-2">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">P.O. Box 12345-00100<br />Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Schedule a Visit</h2>
                <p className="mb-8">
                  The best way to experience our school is to see it for yourself. Schedule a tour today and discover 
                  what makes Capuchin Boys Secondary School special.
                </p>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:ring-2 focus:ring-[#B4975A] focus:border-transparent text-white placeholder-white/60"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:ring-2 focus:ring-[#B4975A] focus:border-transparent text-white placeholder-white/60"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:ring-2 focus:ring-[#B4975A] focus:border-transparent text-white placeholder-white/60"
                      placeholder="+254 700 000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="visitDate"
                      autoComplete="off"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:ring-2 focus:ring-[#B4975A] focus:border-transparent text-white placeholder-white/60"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="3"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:ring-2 focus:ring-[#B4975A] focus:border-transparent text-white placeholder-white/60"
                      placeholder="Any specific areas you'd like to focus on during the tour?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#B4975A] text-white font-medium py-3 px-6 rounded-md hover:bg-[#9c7f47] transition-colors duration-200"
                  >
                    Schedule Tour
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
