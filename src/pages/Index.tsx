import { useState } from 'react';
import IntroSequence from '@/components/IntroSequence';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TerminalSection from '@/components/TerminalSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-transparent relative">
      <MatrixBackground />

      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}

      {showContent && (
        <>
          <Navigation />
          <main className="animate-[fade-in_0.5s_ease-out]">
            <section id="hero">
              <HeroSection />
            </section>
            <section id="terminal">
              <TerminalSection />
            </section>
            <section id="contact">
              <ContactSection />
            </section>
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
