'use client';


import React from 'react';
import { ShimmerButton } from './ShimmerButton';

const FinalCTA: React.FC = () => {
  return (
    <section className="w-full px-8 lg:px-16 py-40 relative overflow-hidden">
      {/* Gradient background like slash.com */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/[0.08] via-brand-blue/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-blue/[0.06] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-12">
          Unlock the <span className="italic">Psychology</span> <br />
          Behind Your Best Buyers
        </h2>

        <p className="text-[16px] text-zinc-400 max-w-[640px] mx-auto leading-relaxed font-light mb-16">
          Get a personalized breakdown of your highest-value buyer segments and the motivations that trigger conversion.
        </p>



        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ShimmerButton
            className="shadow-2xl font-bold text-[18px]"
            background="black"
            shimmerColor="#FFFFFF"
            shimmerSize="0.1em"
          >
            <span className="relative z-10 text-white">Book Your Demo →</span>
          </ShimmerButton>
        </div>

        <p className="mt-12 text-zinc-400 text-[14px] font-light tracking-wide">
          See hidden creative angles inside your call data today.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
