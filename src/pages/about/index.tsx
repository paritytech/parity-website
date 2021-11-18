import React from 'react';
import Layout from '../../components/layouts/Layout';
import SEO from '../../components/layouts/SEO';
import HeroAbout from '../../components/sections/AboutPage/HeroAbout';
import AboutIntro from '../../components/sections/AboutPage/AboutIntro';
// import JuttaQuote from '../../components/sections/AboutPage/JuttaQuote';
import BlockchainEngineers from '../../components/sections/AboutPage/BlockchainEngineers';
import FeaturedVideos from '../../components/sections/AboutPage/FeaturedVideos';
import Social from '../../components/Social';

export default function AboutPage() {
  return (
    <Layout theme="light">
      <SEO title="About the Company" />
      <HeroAbout />
      <AboutIntro />
      {/* <JuttaQuote /> */}
      <BlockchainEngineers />
      <FeaturedVideos />
      <Social />
    </Layout>
  );
}
