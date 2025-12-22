'use client';


import React from 'react';

const LogoSet: React.FC = () => (
  <>
    <span className="text-[32px] font-bold tracking-tighter text-white lowercase">whop<span className="text-brand-blue">.</span>com</span>
    <span className="text-[28px] font-serif-elegant italic text-white uppercase tracking-[0.1em]">Commission Club</span>
    <span className="text-[28px] font-mono font-medium text-white lowercase tracking-tight">framelabs.so</span>
    <span className="text-[20px] font-bold text-white uppercase tracking-[0.2em]">The Sovereign Man</span>
    <span className="text-[32px] font-bold text-white tracking-tighter">Momentum<span className="text-brand-blue">.</span>io</span>
  </>
);

const FoundersTestimonial: React.FC = () => {
  return (
    <section className="relative w-full px-8 lg:px-16 py-12 z-20 bg-black overflow-hidden">
      {/* Strong left-side fade/glow */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto pt-16 pb-24 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative z-10">

        {/* Left Side: Impactful Quote */}
        <div className="flex flex-col relative max-w-[680px] shrink-0">
          <div className="relative">
            <blockquote className="relative z-10">
              <p className="text-[22px] md:text-[26px] lg:text-[28px] font-serif-elegant italic leading-[1.35] text-zinc-100 tracking-tight">
                "Callix surfaced the real reasons our best customers buy
                — and turned it into messaging that produced $5M off
                $240k in spend."
              </p>
            </blockquote>

            <div className="flex items-center gap-4 mt-10">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-zinc-900 shrink-0 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
                  alt="Malcolm Bryant"
                  className="w-full h-full object-cover grayscale brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <cite className="not-italic text-[14px] font-bold text-white tracking-tight leading-tight">
                  Malcolm Bryant
                </cite>
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em] mt-1.5 leading-none">
                  FOUNDER • FORMER HEAD OF PERFORMANCE @ WHOP.COM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Drifting Logo Marquee */}
        <div className="flex-1 w-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

          <div className="animate-marquee flex items-center gap-28 opacity-30 grayscale hover:opacity-100 transition-opacity duration-700 py-6">
            <div className="flex items-center gap-28 pr-28">
              <LogoSet />
            </div>
            <div className="flex items-center gap-28 pr-28">
              <LogoSet />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoundersTestimonial;
