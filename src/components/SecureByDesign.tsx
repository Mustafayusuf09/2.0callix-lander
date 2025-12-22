'use client';


import React, { useState } from 'react';
import { ShimmerButton } from './ShimmerButton';
import { Mic, Users, Sparkles, TrendingUp, Search, BarChart3, Check } from 'lucide-react';

type ProductFeature = 'conversation' | 'customer' | 'creative' | 'sales' | 'search' | 'attribution';

interface FeatureData {
  id: ProductFeature;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bullets: string[];
}

const features: FeatureData[] = [
  {
    id: 'conversation',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="1" y="8" width="2" height="8" rx="1" />
        <rect x="5" y="5" width="2" height="14" rx="1" />
        <rect x="9" y="3" width="2" height="18" rx="1" />
        <rect x="13" y="6" width="2" height="12" rx="1" />
        <rect x="17" y="4" width="2" height="16" rx="1" />
        <rect x="21" y="7" width="2" height="10" rx="1" />
      </svg>
    ),
    title: 'Conversation Intelligence',
    subtitle: 'Understand every sales interaction',
    bullets: [
      'Automatic transcription with 99.2% accuracy',
      'Speaker identification and talk-time analysis',
      'Key topic extraction and question pattern tracking',
      'Engagement scoring and conversation flow mapping'
    ]
  },
  {
    id: 'customer',
    icon: null,
    title: 'Customer Profile Intelligence',
    subtitle: 'Know exactly who your best customers are',
    bullets: [
      'Automatic categorization of prospect types',
      'Conversion rate, AOV, and LTV by customer profile',
      'Detailed psychographic and behavioral insights'
    ]
  },
  {
    id: 'creative',
    icon: null,
    title: 'Ad Creative Generation',
    subtitle: 'Turn sales insights into marketing campaigns',
    bullets: [
      'AI-generated ad copy using actual buyer language',
      'Video ad scripts tailored to your best customer profiles',
      'Campaign messaging recommendations with supporting data'
    ]
  },
  {
    id: 'sales',
    icon: null,
    title: 'Sales Performance Tools',
    subtitle: 'Help your team close more deals',
    bullets: [
      'Rep performance benchmarking and coaching insights',
      'Common objection insights and forecasting',
      'Win/loss pattern analysis'
    ]
  },
  {
    id: 'search',
    icon: null,
    title: 'AI Search',
    subtitle: 'Get instant answers from your call library',
    bullets: [
      'Conversational AI that searches across all your sales calls',
      'Real-time trend identification across conversations',
      'Export findings directly into marketing briefs'
    ]
  },
  {
    id: 'attribution',
    icon: null,
    title: 'Attribution & Analytics',
    subtitle: 'Connect marketing spend to revenue',
    bullets: [
      'Full UTM tracking from ad click to closed deal',
      'Customer acquisition cost by profile and channel',
      'ROI dashboards that show what\'s actually working'
    ]
  }
];

const SecureByDesign: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProductFeature>('conversation');

  const activeFeature = features.find(f => f.id === activeTab);

  return (
    <section className="w-full px-8 lg:px-16 py-20 z-10 bg-black relative">
      {/* Section-specific gradient - right-side accent for asymmetric interest */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_90%_40%,_rgba(255,107,44,0.08),_transparent_60%)] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-6">
            Everything you need to <span className="italic">scale</span>
          </h2>
          <p className="text-[16px] text-zinc-400 max-w-[520px] mx-auto leading-relaxed font-light">
            A complete platform for turning sales conversations into revenue-generating insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Accordion */}
          <div className="lg:col-span-5 space-y-1">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`group cursor-pointer rounded-xl transition-all duration-300 ${activeTab === feature.id
                  ? 'bg-zinc-900/60 p-4 border border-white/10 shadow-2xl'
                  : 'p-3 hover:bg-zinc-900/30 border border-transparent'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border shrink-0 backdrop-blur-xl ${activeTab === feature.id
                    ? 'bg-gradient-to-br from-white/10 via-brand-blue/20 to-brand-blue/40 border-white/20 text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_8px_20px_rgba(255,107,44,0.3)] scale-110'
                    : 'bg-gradient-to-br from-white/5 to-transparent border-white/5 text-zinc-500 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/10 group-hover:shadow-lg'
                    }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-[16px] font-medium transition-colors ${activeTab === feature.id ? 'text-white' : 'text-zinc-300 group-hover:text-zinc-200'
                      }`}>
                      {feature.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${activeTab === feature.id ? 'rotate-180 text-white' : 'text-zinc-500'
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === feature.id ? 'max-h-[300px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}>
                  <p className="text-zinc-400 text-[14px] leading-relaxed font-light mb-3">
                    {feature.subtitle}
                  </p>
                  <div className="space-y-1.5">
                    {feature.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check size={12} className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] mt-0.5 shrink-0" />
                        <span className="text-zinc-300 text-[13px] leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 flex items-start justify-center pt-8 lg:pt-0">
            <div className="w-full max-w-[500px] aspect-square rounded-[32px] bg-[#0c0c0c] border border-white/5 overflow-hidden shadow-2xl relative group">
              {/* Global Background Noise & Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#1a1a1a_0%,_#050505_100%)]" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

              {/* Content Container - Full Bleed */}
              <div className="relative h-full w-full">

                {/* 1. CONVERSATION INTELLIGENCE */}
                {activeTab === 'conversation' && (
                  <div className="w-full h-full flex flex-col relative animate-in fade-in zoom-in duration-500">
                    {/* Live Header */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center justify-between px-6 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-pulse" />
                        <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">Live Analysis</span>
                      </div>
                    </div>

                    {/* Chat Interface */}
                    <div className="flex-1 p-6 pt-20 space-y-4 overflow-hidden relative">
                      {/* Message 1 */}
                      <div className="flex flex-col items-start gap-2 max-w-[85%] animate-in slide-in-from-left-4 duration-500 fill-mode-forwards">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[8px] text-zinc-400">J</div>
                          <span className="text-[10px] text-zinc-400">John</span>
                        </div>
                        <div className="p-3 rounded-2xl rounded-tl-sm bg-zinc-900 border border-white/5 text-[12px] text-zinc-300 leading-relaxed shadow-lg">
                          "We've been struggling to scale our ads. The ROAS just drops every time we increase spend."
                        </div>
                      </div>

                      {/* Insight Badge */}
                      <div className="flex justify-center my-2 animate-in fade-in delay-300 duration-500">
                        <div className="px-3 py-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]/10 border border-white/50/30 text-black text-[9px] font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                          <Sparkles size={10} />
                          PAIN POINT DETECTED: SCALING
                        </div>
                      </div>

                      {/* Message 2 */}
                      <div className="flex flex-col items-end gap-2 max-w-[85%] self-end animate-in slide-in-from-right-4 delay-500 duration-500 fill-mode-forwards">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-zinc-400">Emma</span>
                          <div className="w-5 h-5 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[8px] text-zinc-400">E</div>
                        </div>
                        <div className="p-3 rounded-2xl rounded-tr-sm bg-white/5 border border-white/10 text-[12px] text-white leading-relaxed text-right relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shine_2s_infinite]" />
                          "That's exactly what Callix solves. We automate the creative refresh so you never hit that fatigue wall."
                        </div>
                      </div>
                    </div>

                    {/* Bottom Waveform */}
                    <div className="h-24 w-full bg-black/50 backdrop-blur-md border-t border-white/5 flex items-center justify-center gap-1 px-4 relative overflow-hidden">
                      {[35, 45, 55, 40, 70, 50, 65, 30, 75, 55, 40, 60, 50, 45, 35, 65, 75, 55, 45, 60, 50, 55, 65, 45, 70, 40, 50, 35, 55, 60].map((height, i) => (
                        <div
                          key={i}
                          className="w-1 bg-brand-blue rounded-full animate-[music_1s_ease-in-out_infinite]"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 0.05}s`,
                            opacity: 0.5 + (i % 5) * 0.1
                          }}
                        />
                      ))}
                      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>
                  </div>
                )}

                {/* 2. CUSTOMER INTELLIGENCE */}
                {activeTab === 'customer' && (
                  <div className="w-full h-full flex flex-col p-6 animate-in fade-in zoom-in duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Customer Segments</div>
                        <div className="text-[20px] font-bold text-white">Who's Converting?</div>
                      </div>
                      <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono">
                        LIVE
                      </div>
                    </div>

                    {/* Segment Cards */}
                    <div className="flex-1 space-y-3">
                      {/* Top Segment - Highlighted */}
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-white/10 via-[#FF6B2C]/10 to-[#FF6B2C]/20 backdrop-blur-xl border border-white/10 relative overflow-hidden group shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_8px_20px_rgba(255,107,44,0.15)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent" />
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#FF6B2C]/20 border border-[#FF6B2C]/30 flex items-center justify-center shadow-inner">
                              <span className="text-[#FF6B2C] font-bold text-[16px]">1</span>
                            </div>
                            <div>
                              <div className="text-[15px] font-bold text-white mb-0.5">SaaS Founders</div>
                              <div className="text-[11px] text-zinc-300">Series A-B • $1-5M ARR</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[20px] font-bold text-[#FF6B2C] drop-shadow-sm">42%</div>
                            <div className="text-[10px] text-zinc-400 uppercase tracking-wide">Conv. Rate</div>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <span className="px-2.5 py-1 bg-black/40 border border-white/5 rounded-lg text-[10px] text-zinc-300 font-medium">Avg. Deal: $38k</span>
                          <span className="px-2.5 py-1 bg-black/40 border border-white/5 rounded-lg text-[10px] text-zinc-300 font-medium">LTV: $180k</span>
                        </div>
                      </div>

                      {/* Second Segment */}
                      <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center justify-between opacity-70">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                            <span className="text-zinc-300 font-bold text-[12px]">2</span>
                          </div>
                          <div>
                            <div className="text-[12px] font-medium text-zinc-300">Agency Owners</div>
                            <div className="text-[9px] text-zinc-400">$500k-2M Rev</div>
                          </div>
                        </div>
                        <div className="text-[14px] font-bold text-zinc-300">28%</div>
                      </div>

                      {/* Third Segment */}
                      <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center justify-between opacity-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                            <span className="text-zinc-400 font-bold text-[12px]">3</span>
                          </div>
                          <div>
                            <div className="text-[12px] font-medium text-zinc-300">Marketing Directors</div>
                            <div className="text-[9px] text-zinc-500">Enterprise</div>
                          </div>
                        </div>
                        <div className="text-[14px] font-bold text-zinc-400">18%</div>
                      </div>
                    </div>

                    {/* Bottom Insight */}
                    <div className="mt-4 p-3 rounded-lg bg-zinc-900 border border-white/5 flex items-center gap-3">
                      <TrendingUp size={14} className="text-green-500" />
                      <span className="text-[11px] text-zinc-300">
                        <span className="text-white font-medium">SaaS Founders</span> convert 2.3x better than average
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. CREATIVE GENERATION */}
                {activeTab === 'creative' && (
                  <div className="w-full h-full flex flex-col p-6 animate-in fade-in zoom-in duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Generated Ad Preview</div>
                        <div className="text-[18px] font-bold text-white">Ready to Deploy</div>
                      </div>
                      <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        LIVE PREVIEW
                      </div>
                    </div>

                    {/* Ad Preview Card - Looks like actual social ad */}
                    <div className="flex-1 bg-black rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
                      {/* Ad Header */}
                      <div className="flex items-center gap-3 p-3 border-b border-white/5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-deep flex items-center justify-center shadow-[0_0_15px_rgba(255,107,44,0.4)]">
                          <span className="text-white text-[14px] font-bold">C</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-[13px] text-white font-semibold">Callix</div>
                          <div className="text-[10px] text-zinc-400">Sponsored</div>
                        </div>
                        <div className="text-zinc-500">•••</div>
                      </div>

                      {/* Ad Content */}
                      <div className="p-4 space-y-3">
                        <p className="text-[14px] text-white leading-relaxed">
                          Stop losing leads to <span className="text-brand-blue font-semibold">creative fatigue</span>. 🎯
                        </p>
                        <p className="text-[12px] text-zinc-300 leading-relaxed">
                          Your ads stop working because buyers get bored. We automatically generate fresh hooks from your sales calls—so your ROAS stays high.
                        </p>
                      </div>

                      {/* Ad Image Area */}
                      <div className="mx-4 h-28 rounded-xl bg-gradient-to-br from-brand-blue/20 via-black to-brand-blue-deep/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,107,44,0.3),_transparent_50%)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-[24px] font-bold text-white drop-shadow-lg">40% Lower CPA</div>
                            <div className="text-[11px] text-white/60 uppercase tracking-widest">Proven Results</div>
                          </div>
                        </div>
                        {/* Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-[shimmer_2s_infinite]" />
                      </div>

                      {/* CTA Button */}
                      <div className="p-4">
                        <div className="w-full py-3 bg-gradient-to-r from-brand-blue to-brand-blue-deep rounded-lg text-center text-white text-[13px] font-bold shadow-[0_4px_15px_rgba(255,107,44,0.4)] cursor-pointer hover:shadow-[0_4px_25px_rgba(255,107,44,0.6)] transition-shadow">
                          Get Your Free Demo →
                        </div>
                      </div>

                      {/* Ad Footer - Engagement */}
                      <div className="px-4 pb-3 flex items-center justify-between text-zinc-500 text-[11px]">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">❤️ 2.4K</span>
                          <span className="flex items-center gap-1">💬 186</span>
                          <span className="flex items-center gap-1">↗️ 892</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Insight */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                        <Sparkles size={12} className="text-brand-blue" />
                        Generated from 42 winning calls
                      </div>
                      <ShimmerButton
                        className="shadow-lg"
                        background="black"
                        shimmerColor="#FFFFFF"
                        shimmerSize="0.1em"
                        borderRadius="8px"
                        style={{ padding: '8px 16px' }}
                      >
                        <span className="text-white text-[11px] font-bold relative z-10">Export to Ads</span>
                      </ShimmerButton>
                    </div>
                  </div>
                )}

                {/* 4. SALES PERFORMANCE */}
                {activeTab === 'sales' && (
                  <div className="w-full h-full p-8 flex flex-col justify-end animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
                    {/* Background Grid */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-0 pointer-events-none opacity-10">
                      {[...Array(24)].map((_, i) => <div key={i} className="border-[0.5px] border-white/20" />)}
                    </div>

                    <div className="relative z-10 mb-auto">
                      <h3 className="text-[14px] text-zinc-300 font-mono mb-1">TEAM PERFORMANCE</h3>
                      <div className="text-[32px] font-bold text-white flex items-end gap-2">
                        +124%
                        <span className="text-[12px] text-green-400 font-medium mb-2 bg-green-400/10 px-1.5 py-0.5 rounded">YoY GROWTH</span>
                      </div>
                    </div>

                    {/* The Chart */}
                    <div className="flex items-end justify-between gap-4 h-[200px] w-full relative">
                      {/* Trend Line (SVG) */}
                      <svg className="absolute inset-0 w-full h-full overflow-visible z-20 pointer-events-none">
                        <path
                          d="M0,200 C50,180 100,190 150,120 C200,50 250,80 300,40 C350,10 400,30 440,0"
                          fill="none"
                          stroke="#FF6B2C"
                          strokeWidth="3"
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_10px_rgba(255,107,44,0.5)]"
                        />
                        {/* Area under curve */}
                        <path
                          d="M0,200 C50,180 100,190 150,120 C200,50 250,80 300,40 C350,10 400,30 440,0 L440,200 L0,200"
                          fill="url(#gradientSales)"
                          opacity="0.3"
                        />
                        <defs>
                          <linearGradient id="gradientSales" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Bars behind */}
                      {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                        <div key={i} className="w-full bg-zinc-800/50 rounded-t-sm relative group overflow-hidden" style={{ height: `${h}%` }}>
                          <div className="absolute bottom-0 w-full h-0 group-hover:h-full bg-white/5 transition-all duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. SEARCH INTELLIGENCE */}
                {activeTab === 'search' && (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 animate-in fade-in duration-500 relative">
                    {/* Search Bar Center */}
                    <div className="w-full relative z-20 group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-transparent to-brand-blue-deep rounded-xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-500" />
                      <div className="relative w-full bg-surface border border-steel/50 rounded-xl px-4 py-4 flex items-center gap-3 shadow-2xl">
                        <Search className="text-tertiary" size={18} />
                        {/* Typing text effect */}
                        <div className="flex-1 font-mono text-[14px] text-primary">
                          "show calls with pricing objections"
                          <span className="inline-block w-2 h-4 bg-brand-blue ml-1 animate-pulse align-middle" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Results */}
                    <div className="w-full mt-8 space-y-3 relative z-10">
                      {[
                        { names: 'John & Emma', time: '14:02' },
                        { names: 'Sarah & Michael', time: '08:34' },
                        { names: 'Alex & Rachel', time: '22:18' }
                      ].map((meeting, i) => (
                        <div
                          key={i}
                          className="w-full bg-zinc-900/50 border border-white/5 p-3 rounded-lg flex items-center justify-between animate-in slide-in-from-bottom-2 duration-500 fill-mode-forwards hover:bg-zinc-800/50 transition-colors cursor-pointer"
                          style={{ animationDelay: `${i * 150}ms` }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">
                              MP4
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[12px] text-zinc-200 font-medium">{meeting.names} Meeting</span>
                              <span className="text-[10px] text-zinc-400">Matched at {meeting.time} • <span className="text-brand-blue">Objection</span></span>
                            </div>
                          </div>
                          <div className="text-[10px] text-zinc-500 font-mono">{99 - i}% MATCH</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. ATTRIBUTION ANALYTICS */}
                {activeTab === 'attribution' && (
                  <div className="w-full h-full flex flex-col p-6 animate-in fade-in zoom-in duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1">Multi-Touch Attribution</div>
                        <div className="text-[18px] font-bold text-white">Revenue by Source</div>
                      </div>
                      <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono">
                        SYNCED
                      </div>
                    </div>

                    {/* Main Visual - Radial Chart Style */}
                    <div className="flex-1 flex items-center justify-center relative">
                      {/* Center Circle */}
                      <div className="relative w-40 h-40">
                        {/* Outer ring segments */}
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          {/* Google segment - largest */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#FF6B2C" strokeWidth="12" strokeDasharray="100 151" className="opacity-90" />
                          {/* Meta segment */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="60 191" strokeDashoffset="-100" className="opacity-70" />
                          {/* LinkedIn segment */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#0ea5e9" strokeWidth="12" strokeDasharray="40 211" strokeDashoffset="-160" className="opacity-50" />
                          {/* Other segment */}
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#71717a" strokeWidth="12" strokeDasharray="51 200" strokeDashoffset="-200" className="opacity-30" />
                        </svg>

                        {/* Center content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-[28px] font-bold text-white">$1.2M</div>
                          <div className="text-[9px] text-zinc-400 uppercase tracking-wider">Attributed</div>
                        </div>
                      </div>

                      {/* Legend - floating around the chart */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                          <span className="text-[11px] text-zinc-300">Meta <span className="text-zinc-400">40%</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          <span className="text-[11px] text-zinc-300">Google <span className="text-zinc-400">24%</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                          <span className="text-[11px] text-zinc-300">LinkedIn <span className="text-zinc-400">16%</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
                          <span className="text-[11px] text-zinc-300">Other <span className="text-zinc-400">20%</span></span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/30">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[9px] text-zinc-400 uppercase mb-1">Top Performer</div>
                            <div className="text-[14px] font-bold text-white">Meta Ads</div>
                          </div>
                          <div className="text-[16px] font-bold text-brand-blue">4.8x</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-zinc-900 border border-white/5">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[9px] text-zinc-400 uppercase mb-1">Blended CAC</div>
                            <div className="text-[14px] font-bold text-white">$142</div>
                          </div>
                          <div className="text-[12px] font-medium text-green-400">↓ 31%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureByDesign;
