import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import LegacySection from '../components/sections/LegacySection';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';
import FloatingIcons from '../components/FloatingIcons';
import ScrollToTop from '../components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 100
    });
  }, []);

  return (
    <div className="home-container">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <LegacySection />
      <WhyChooseSection />
      <GallerySection />
      <ContactSection />
      <FloatingIcons />
      <ScrollToTop />
    </div>
  );
};

export default Home;