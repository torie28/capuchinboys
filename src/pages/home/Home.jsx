import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import AcademicPrograms from './components/AcademicPrograms';
import Gallery from './components/Gallery';

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Capuchin Boys Secondary</title>
        <meta
          name="description"
          content=""
        />
      </Helmet>
      
      <HeroSection />
      <IntroductionSection />
      <AcademicPrograms />
      <Gallery />
    </>
  );
};

export default Home;