import React from 'react'
import HeroSection from '../component/HeroSection'
import OurService from '../component/OurService'
import AboutUsComponent from '../component/AboutUsComponent'
import TechnologyComponent from '../component/TechnologyComponent'
import ContactComponent from '../component/ContactComponent'
import { useEffect } from 'react'
import OurCollectionComponent from '../component/OurCollectionComponent'
function Home() {
    // Always scroll to top when this component is rendered
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div>
      <HeroSection />
      <OurService />
      <OurCollectionComponent />
      <AboutUsComponent />
      <TechnologyComponent />
      <ContactComponent />
    </div>
  );
}

export default Home