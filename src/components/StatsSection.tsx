'use client';

import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="w-full px-8 lg:px-16 py-32 z-10 bg-black relative border-t border-white/5 mx-auto flex items-center justify-center overflow-hidden">

      {/* Top Connecting Gradient (Flow from previous) */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-[#FF6B2C]/10 to-transparent pointer-events-none mix-blend-screen" />

      {/* Strong Central Orange Ambient Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,_rgba(255,107,44,0.18),_transparent_70%)] pointer-events-none" />

      {/* Bottom Connecting Gradient (Flow to next) */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#FF6B2C]/10 to-transparent pointer-events-none mix-blend-screen" />

      <div className="max-w-[1280px] w-full mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start lg:items-center">

          {/* Left Content */}
          <div className="flex-1 lg:max-w-[500px]">
            <div className="mb-6">
              <span className="text-[11px] font-mono font-bold text-brand-blue uppercase tracking-widest border border-brand-blue/30 px-3 py-1 rounded-full bg-brand-blue/10">The Result</span>
            </div>
            <h2 className="text-[48px] lg:text-[64px] font-serif-elegant font-normal leading-[1.1] mb-8 text-white">
              When you use Callix, you <span className="italic text-brand-blue">close more</span>. Period.
            </h2>
            <p className="text-zinc-400 text-[18px] leading-relaxed font-light">
              Stop guessing. Start optimizing for revenue, not just clicks.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

            {/* Stat 1 */}
            <div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/10 backdrop-blur-sm relative group hover:bg-zinc-900/50 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg className="w-12 h-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-[56px] font-semibold text-white mb-2 tracking-tight">15%</div>
              <p className="text-zinc-400 text-[15px] leading-relaxed">
                Higher ROAS on average using Callix signals vs. platform-only optimization
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/10 backdrop-blur-sm relative group hover:bg-zinc-900/50 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg className="w-12 h-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-[56px] font-semibold text-white mb-2 tracking-tight">45%</div>
              <p className="text-zinc-400 text-[15px] leading-relaxed">
                More accurate deal predictions than general-purpose LLMs
              </p>
            </div>

            {/* Stat 3 (Full Width on md) */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/30 border border-white/10 backdrop-blur-sm relative group hover:bg-zinc-900/50 transition-colors flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="text-[56px] font-semibold text-white mb-2 tracking-tight">$10M+</div>
                <p className="text-zinc-400 text-[15px] leading-relaxed max-w-[300px]">
                  In ad spend managed by teams using Callix
                </p>
              </div>
              <div className="w-full md:w-auto h-[1px] md:h-20 bg-white/10" />
              <div className="flex-1 flex items-center justify-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                {/* Decorative element representing spend being managed */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
