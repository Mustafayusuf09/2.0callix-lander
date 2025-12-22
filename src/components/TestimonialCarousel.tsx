'use client';


import React from 'react';
import { ShimmerButton } from './ShimmerButton';

const TestimonialCarousel: React.FC = () => {
  return (
    <section className="w-full px-8 lg:px-16 py-32 z-10 bg-black relative">
      {/* Section-specific gradient - rich blue from center-bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,_rgba(255,107,44,0.1),_transparent_60%)] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-[64px] bg-gradient-to-br from-zinc-900/50 to-black border border-white/10 p-16 lg:p-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]/10 border border-white/50/20 text-[10px] font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] uppercase tracking-widest mb-12">
              Performance Guarantee
            </div>

            <h2 className="text-[54px] lg:text-[84px] font-serif-elegant tracking-tight mb-12 leading-tight">
              Your Buyer Psychology — <br /><span className="italic">Unlocked</span>, Or You Don’t Pay
            </h2>

            <p className="text-zinc-300 text-[18px] lg:text-[22px] max-w-[640px] mx-auto leading-relaxed font-light mb-16">
              Use Callix for 30 days. If you don’t surface at least one high-converting customer insight, we refund you — fully. No hoops. No friction.
            </p>



            <ShimmerButton
              className="shadow-2xl font-bold text-lg"
              background="black"
              shimmerColor="#FFFFFF"
              shimmerSize="0.1em"
            >
              <span className="relative z-10 text-white">Claim Your Performance Trial</span>
            </ShimmerButton>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-20 mt-32">
          {[
            { label: 'transcription accuracy', value: '99.2%' },
            { label: 'calls analyzed monthly', value: '1.2m+' },
            { label: 'creative hours saved', value: '45k+' },
            { label: 'avg revenue lift', value: '31%+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-[40px] lg:text-[56px] font-semibold tracking-tighter tabular-nums leading-none">{stat.value}</span>
              <span className="text-zinc-400 text-[14px] lg:text-[15px]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
