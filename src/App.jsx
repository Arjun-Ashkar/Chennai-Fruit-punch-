import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import QuickHighlights from './components/QuickHighlights/QuickHighlights';
import About from './components/About/About';
import WhyPeopleLoveIt from './components/WhyPeopleLoveIt/WhyPeopleLoveIt';
import FruitFacts from './components/FruitFacts/FruitFacts';
import MenuSection from './components/Menu/MenuSection';
import SurpriseMe from './components/SurpriseMe/SurpriseMe';
import Experience from './components/Experience/Experience';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import MobileCTA from './components/MobileCTA/MobileCTA';
import { useScrollSpy } from './hooks/useScrollSpy';

const trackedSectionIds = [
  'hero',
  'about',
  'fruit-facts',
  'menu',
  'location',
  'contact',
];

export default function App() {
  const activeSection = useScrollSpy(trackedSectionIds, 160);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleHighlightSelect = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };

  return (
    <div className="app-container">
      {/* 1. Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Quick Highlights Cards */}
        <QuickHighlights onSelectCategory={handleHighlightSelect} />

        {/* 4. About Chennai Fruit Punch */}
        <About />

        {/* 5. Why People Love It */}
        <WhyPeopleLoveIt />

        {/* 6. Fruit Facts Carousel */}
        <FruitFacts />

        {/* 7. Explore Our Menu (with Combos & Filterable Menu Grid) */}
        <MenuSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 8. Can't Decide? Surprise Me Randomizer */}
        <SurpriseMe />

        {/* 9. Experience / Why Chennai Fruit Punch */}
        <Experience />

        {/* 10. Visit Us / Location with Map & Hours */}
        <Location />

        {/* 11. Contact CTA */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Utilities */}
      <BackToTop />
      <MobileCTA />
    </div>
  );
}
