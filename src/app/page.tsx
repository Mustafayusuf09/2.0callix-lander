'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoBuiltFor from '@/components/WhoBuiltFor';
import TheDisconnect from '@/components/TheDisconnect';
import TheBreakthrough from '@/components/TheBreakthrough';
import ModernCapabilities from '@/components/ModernCapabilities';
import SecureByDesign from '@/components/SecureByDesign';
import IntelligentTools from '@/components/IntelligentTools';
import Integrations from '@/components/Integrations';
import Security from '@/components/Security';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-graphite text-primary flex flex-col items-center relative selection:bg-brand-blue/30 selection:text-white">
      {/* Subtle gradient background across the whole page */}
      <div className="fixed inset-0 bg-subtle-mix opacity-50 pointer-events-none z-0" />

      {/* Additional ambient gradients for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_-20%,_rgba(255,107,44,0.08),_transparent_50%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_40%_at_-10%_60%,_rgba(255,255,255,0.02),_transparent_50%)] pointer-events-none z-0" />

      <div className="w-full flex flex-col relative z-10">
        <Navbar />

        <main>
          <Hero />
          <TheDisconnect />
          <TheBreakthrough />
          <ModernCapabilities />
          <SecureByDesign />
          <WhoBuiltFor />
          <IntelligentTools />
          <Integrations />
          <Security />
          <FAQ />
          <FinalCTA />
        </main>

        <Footer />
      </div>

      {/* Subtle global ambient glow */}
      <div className="fixed top-0 right-0 w-[800px] h-[600px] bg-brand-blue/[0.04] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[800px] h-[600px] bg-brand-blue/[0.03] blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Subtle vignette from edges */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)] pointer-events-none z-0" />
    </div>
  );
}
