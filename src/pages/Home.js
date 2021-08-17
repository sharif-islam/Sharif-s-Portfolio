import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import Services from '../components/Services';
import TestimonialSection from '../components/TestimonialSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Services />
      <ProjectSection />
      <TestimonialSection />
      <ContactBanner />
    </div>
  );
}
