'use client';


import React from 'react';

const CardVisual: React.FC<{ color: string; title: string; className?: string }> = ({ color, title, className }) => (
  <div className={`absolute w-[440px] h-[280px] rounded-[24px] border border-white/20 shadow-2xl flex flex-col p-8 justify-between backdrop-blur-sm transition-transform duration-700 ${className}`} style={{ background: color }}>
    <div className="flex items-center">
      <span className="text-2xl font-bold tracking-tighter text-white lowercase">callix<span className="text-brand-blue">.</span></span>
    </div>
    <div className="flex justify-between items-end">
      <div className="w-12 h-9 bg-white/10 rounded-md border border-white/10" />
      <div className="flex flex-col items-end">
        <span className="text-[10px] text-white/40 font-bold tracking-widest uppercase mb-1">{title}</span>
        <span className="text-2xl font-serif-elegant italic text-white/60">VISA</span>
      </div>
    </div>
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[24px] pointer-events-none" />
  </div>
);

const CorporateCards: React.FC = () => {
  return (
    <section className="w-full px-8 lg:px-16 py-24 z-10 bg-black overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative rounded-[48px] bg-[#080808] border border-white/5 p-16 lg:p-24 overflow-hidden min-h-[520px] flex flex-col justify-end">

        {/* Card Stack / Fan */}
        <div className="absolute top-1/2 -right-20 lg:right-20 -translate-y-1/2 w-full lg:w-[600px] h-[400px] pointer-events-none perspective-[1000px]">
          {/* Black Card */}
          <CardVisual
            title="Business"
            color="linear-gradient(145deg, #111 0%, #000 100%)"
            className="rotate-[-18deg] translate-y-[-40px] translate-x-[-120px] z-10"
          />
          {/* Gold Card */}
          <CardVisual
            title="Business"
            color="linear-gradient(145deg, #b8860b 0%, #8b6508 100%)"
            className="rotate-[-6deg] translate-y-[-20px] translate-x-[-20px] z-20"
          />
          {/* Silver Card */}
          <CardVisual
            title="Business"
            color="linear-gradient(145deg, #e5e5e5 0%, #a3a3a3 100%)"
            className="rotate-[8deg] translate-y-[40px] translate-x-[80px] z-30"
          />
        </div>

        {/* Content */}
        <div className="relative z-40 max-w-[480px]">
          <div className="flex flex-wrap gap-2 mb-8">
            {['Silver — $1M+', 'Gold — $10M+', 'Black — $100M+'].map((tier, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-zinc-300 uppercase tracking-[0.12em] whitespace-nowrap">
                {tier}
              </span>
            ))}
          </div>
          <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-6 text-white">
            Corporate cards with <br />world-class rewards
          </h2>
          <p className="text-[16px] text-zinc-400 leading-relaxed font-light max-w-[400px]">
            Unlimited cashback, unlimited virtual and physical cards, and unparalleled spend controls built for scale.
          </p>
        </div>

        {/* Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </div>
    </section>
  );
};

export default CorporateCards;
