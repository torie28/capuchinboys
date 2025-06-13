import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import Activities from './components/Activities';
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
      <Activities />
      <Gallery />
    </>
  );
};

export default Home;