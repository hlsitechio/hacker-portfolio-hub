import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import SkillsSection from '@/components/SkillsSection';
import FindingsSection from '@/components/FindingsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative scanlines">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <SkillsSection />
        <div id="findings">
          <FindingsSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
