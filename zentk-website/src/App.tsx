import './index.css';
import { Navbar, useReveal } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { WhyZentkSection } from './sections/WhySection';
import { GlobalSection } from './sections/GlobalSection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { NewsSection } from './sections/NewsSection';
import { CtaBannerSection } from './sections/CtaBannerSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyZentkSection />
        <GlobalSection />
        <CaseStudiesSection />
        <NewsSection />
        <CtaBannerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
