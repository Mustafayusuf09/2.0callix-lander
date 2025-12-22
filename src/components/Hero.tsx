'use client';

import React from 'react';
import { ShimmerButton } from './ShimmerButton';

const LogoSet: React.FC = () => (
  <>
    <span className="text-[22px] font-bold tracking-tight text-tertiary hover:text-primary transition-opacity lowercase">whop.com</span>
    <span className="text-[18px] font-dm-sans italic text-tertiary hover:text-primary uppercase tracking-[0.15em] whitespace-nowrap">COMMISSION CLUB</span>
    <span className="text-[18px] font-mono font-medium text-tertiary hover:text-primary lowercase tracking-tighter">framelabs.so</span>
    <span className="text-[14px] font-bold text-tertiary hover:text-primary uppercase tracking-[0.2em] whitespace-nowrap">THE SOVEREIGN MAN</span>
    <span className="text-[22px] font-bold text-tertiary hover:text-primary tracking-tighter">Momentum.io</span>
  </>
);

const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col justify-center px-8 lg:px-16 pt-44 pb-12 overflow-hidden bg-transparent">

      {/* Enhanced Background Gradient: Full width with organic fade to the left - Revised for new theme */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Main large glow positioned right-center - Pure Blue Mix */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[1200px] h-[1000px] bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 blur-[120px] rounded-full opacity-60 mix-blend-screen" />

        {/* Secondary highlight glow */}
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-brand-blue/5 blur-[100px] rounded-full opacity-40" />

        {/* Linear fade to ensure the left side remains clean graphite */}
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/40 to-transparent" />
      </div>

      <div className="max-w-[1280px] mx-auto w-full z-10">



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">

          {/* Left Side: Modern Typography with DM Sans */}
          <div className="flex flex-col items-start text-left z-10">
            <h1 className="text-[40px] lg:text-[56px] leading-[1.1] font-serif-elegant font-normal tracking-tight mb-10 text-primary">
              Turn Your Sales Calls Into <span className="italic relative">
                Scroll Stopping
                {/* Subtle blue underline for emphasis */}
                <svg className="absolute w-full h-3 bottom-0 left-0 text-brand-purple -z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
              </span> Ads
            </h1>

            <p className="text-[16px] text-secondary mb-10 max-w-[540px] leading-relaxed font-light">
              Callix turns your sales call data into highly targeted ads that deliver high quality leads to your calendar, helping you close more deals, reduce rep churn, and make more profit.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <ShimmerButton
                className="shadow-2xl font-dm-sans"
                background="black"
                shimmerColor="#FFFFFF"
                shimmerSize="0.1em"
                borderRadius="100px"
              >
                <span className="text-white font-bold text-[16px] relative z-10 px-2">Book A Free "Prove It" Demo Today</span>
              </ShimmerButton>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xl shadow-[inset_0_0_10px_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.2)] group-hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-[14px] font-semibold font-dm-sans text-zinc-300 group-hover:text-white transition-colors">Watch product demo</span>
              </div>
            </div>
          </div>

          {/* Right Side: Video Placeholder Visual */}
          <div className="relative hidden lg:block z-10">
            <div className="relative w-full aspect-video rounded-[48px] overflow-hidden border border-brand-blue/20 bg-black shadow-[0_20px_80px_rgba(255,107,44,0.35)] flex items-center justify-center group cursor-pointer">

              {/* Centered Play Button Design */}
              <div className="relative z-20 flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-brand-blue/10 blur-xl animate-pulse" />

                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/10 via-[#FF6B2C]/10 to-[#FF6B2C]/30 backdrop-blur-3xl border border-white/20 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_10px_40px_rgba(255,107,44,0.3)] group-hover:scale-110 transition-transform duration-500 group-hover:border-[#FF6B2C]/40">
                  <svg className="w-8 h-8 text-white ml-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Video UI Elements: Progress Bar */}
              <div className="absolute bottom-10 left-10 right-10 z-20 space-y-3">
                <div className="flex justify-end items-center text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-dm-sans">
                  <span>00:48 / 02:30</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-brand-blue/60 rounded-full" />
                </div>
              </div>

              <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,1)] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Integrated Testimonial Row */}
        <div className="border-t border-white/5 pt-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 relative">
          <div className="flex flex-col relative max-w-[620px] shrink-0">
            <blockquote className="relative z-10">
              <p className="text-[16px] font-sans italic font-light leading-relaxed text-zinc-300 tracking-tight">
                "Callix surfaced the real reasons our best customers buy
                — and turned it into messaging that produced $5M off
                $240k in spend."
              </p>
            </blockquote>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-zinc-900 shrink-0 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
                  alt="Malcolm Bryant"
                  className="w-full h-full object-cover grayscale brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <cite className="not-italic text-[13px] font-bold text-white tracking-tight leading-tight font-dm-sans">
                  Malcolm Bryant
                </cite>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em] mt-1 leading-none font-dm-sans">
                  FOUNDER • FORMER HEAD OF PERFORMANCE @ WHOP.COM
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full overflow-hidden relative group">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-black/40 to-transparent z-10" />

            <div className="animate-marquee flex items-center gap-16 lg:gap-20 grayscale py-4">
              <div className="flex items-center gap-16 lg:gap-20 pr-16 lg:pr-20">
                <LogoSet />
              </div>
              <div className="flex items-center gap-16 lg:gap-20 pr-16 lg:pr-20">
                <LogoSet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;