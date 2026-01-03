import { useState, useCallback } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ParticleIntro } from '@/components/ParticleIntro';
import { Hero } from '@/components/sections/Hero';
import { WhyEngleo } from '@/components/sections/WhyEngleo';
import { CoursesPreview } from '@/components/sections/CoursesPreview';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <ParticleIntro onComplete={handleIntroComplete} />}
      
      <Layout>
        <Hero />
        <WhyEngleo />
        <CoursesPreview />
        <Testimonials />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
