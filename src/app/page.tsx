'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoBuiltFor from '@/components/WhoBuiltFor';
import TheDisconnect from '@/components/TheDisconnect'; // Revenue Gold Mine

import ModernCapabilities from '@/components/ModernCapabilities'; // How Callix Works
import SecureByDesign from '@/components/SecureByDesign'; // Everything you need to scale
import IntelligentTools from '@/components/IntelligentTools'; // US VS. THEM
import StatsSection from '@/components/StatsSection'; // THE RESULT
import TestimonialCarousel from '@/components/TestimonialCarousel'; // TESTIMONIALS
import Integrations from '@/components/Integrations';
import Security from '@/components/Security'; // COMPLIANCE
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-graphite text-primary flex flex-col items-center relative selection:bg-brand-blue/30 selection:text-white">
      {/* Subtle gradient background across the whole page */}
      <div className="fixed inset-0 bg-subtle-mix opacity-70 pointer-events-none z-0" />

      {/* Additional ambient gradients for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(255,107,44,0.3),_transparent_50%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_40%_at_-10%_60%,_rgba(255,107,44,0.2),_transparent_50%)] pointer-events-none z-0" />

      <div className="w-full flex flex-col relative z-10">
        <Navbar />

        <main>
          <Hero />
          <WhoBuiltFor />
          <TheDisconnect />
          <ModernCapabilities />
          <SecureByDesign />
          <IntelligentTools />
          <StatsSection />
          <TestimonialCarousel />
          <Integrations />
          <Security />
          <FAQ />
          <FinalCTA />
        </main>

        <Footer />

        {/* Sections explicitly requested to be below footer */}

      </div>

      {/* Subtle global ambient glow - Orange Themed */}
      <div className="fixed top-20 right-0 w-[800px] h-[600px] bg-[#FF6B2C]/[0.15] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[800px] h-[600px] bg-[#FF6B2C]/[0.12] blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Subtle vignette from edges */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)] pointer-events-none z-0" />
    </div>
  );
}
