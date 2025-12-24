'use client';


import React from 'react';

const IntelligentTools: React.FC = () => {
  const comparison = [
    { feature: "Summarizes Calls", callix: true, chatgpt: true, fireflies: true, gong: true, hyros: false, chorus: true, arcads: false },
    { feature: "Identifies Buyer Signals", callix: true, chatgpt: true, fireflies: false, gong: true, hyros: true, chorus: false, arcads: false },
    { feature: "Generate Ads Automatically", callix: true, chatgpt: false, fireflies: false, gong: false, hyros: false, chorus: false, arcads: true },
    { feature: "Forecasts Lead Quality", callix: true, chatgpt: false, fireflies: false, gong: true, hyros: true, chorus: false, arcads: false },
    { feature: "For High Ticket GTM Teams", callix: true, chatgpt: false, fireflies: false, gong: true, hyros: false, chorus: false, arcads: false },
    { feature: "Pixel Optimization", callix: true, chatgpt: false, fireflies: false, gong: false, hyros: true, chorus: false, arcads: false },
    { feature: "Live Budget Allocation", callix: true, chatgpt: false, fireflies: false, gong: false, hyros: false, chorus: false, arcads: false },
    { feature: "Sales Team Performance Coaching", callix: true, chatgpt: false, fireflies: false, gong: true, hyros: false, chorus: true, arcads: false },
    { feature: "Aligns Sales & Marketing Teams", callix: true, chatgpt: false, fireflies: false, gong: false, hyros: false, chorus: false, arcads: false },
  ];

  const competitors = ['chatgpt', 'fireflies', 'gong', 'hyros', 'chorus', 'arcads'] as const;
  const competitorNames: Record<string, string> = {
    chatgpt: 'ChatGPT',
    fireflies: 'Fireflies',
    gong: 'Gong',
    hyros: 'Hyros',
    chorus: 'Chorus',
    arcads: 'Arcads'
  };

  return (
    <section className="w-full px-4 lg:px-16 py-32 z-10 bg-transparent relative">
      {/* Section-specific gradient - diagonal from top-right, deeper blue */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,_rgba(255,107,44,0.07),_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,_rgba(255,107,44,0.04),_transparent_50%)] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-8">
          One Platform, <span className="italic">Every Insight</span>
        </h2>
      </div>

      <div className="max-w-[1280px] mx-auto bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden shadow-2xl overflow-x-auto">
        <table className="w-full text-left min-w-[1000px]">
          <thead>
            <tr className="bg-zinc-900/50">
              <th className="px-6 py-5 text-[12px] font-bold uppercase tracking-widest text-zinc-400">Feature</th>
              <th className="px-5 py-5 text-[13px] font-bold uppercase tracking-widest text-white text-center bg-brand-blue/50 border-x-2 border-t-2 border-white shadow-[inset_0_0_15px_rgba(255,255,255,0.1),0_0_10px_rgba(255,255,255,0.3)]">Callix</th>
              {competitors.map(comp => (
                <th key={comp} className="px-5 py-5 text-[12px] font-bold uppercase tracking-widest text-zinc-400 text-center">
                  {competitorNames[comp]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {comparison.map((row, i) => (
              <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-5 text-[16px] text-zinc-300 font-normal">{row.feature}</td>
                <td className={`px-5 py-5 text-center bg-brand-blue/30 border-x-2 border-white/80 shadow-[0_0_8px_rgba(255,255,255,0.2)] ${i === comparison.length - 1 ? 'border-b-2 border-white' : ''}`}>
                  <span className="text-[18px] text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] font-bold">✓</span>
                </td>
                {competitors.map(comp => (
                  <td key={comp} className="px-5 py-5 text-center">
                    {row[comp] ? (
                      <span className="text-[18px] text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">✓</span>
                    ) : (
                      <span className="text-[18px] text-zinc-800">✗</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IntelligentTools;

