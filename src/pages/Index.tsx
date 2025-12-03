import { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import IntroSequence from '@/components/IntroSequence';
import HeroSection from '@/components/HeroSection';
import TerminalSection from '@/components/TerminalSection';
import FindingsSection from '@/components/FindingsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-background crt">
      <CustomCursor />
      
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
      
      {showContent && (
        <main className="animate-[fade-in_0.5s_ease-out]">
          <HeroSection />
          <TerminalSection />
          <FindingsSection />
          <ContactSection />
          <Footer />
        </main>
      )}

      <div className="noise" />
    </div>
  );
};

export default Index;
