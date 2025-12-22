'use client';

import React, { useRef } from 'react';
import { ShimmerButton } from './ShimmerButton';
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, Users, Target, Zap, BarChart3, ShoppingCart, Rocket, Phone, Calendar, Package, CreditCard, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import Image from 'next/image';

// Marketing Departments Card Overlay
const MarketingOverlay = () => (
  <div className="absolute bottom-6 left-4 right-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
          <BarChart3 size={16} className="text-brand-blue" />
        </div>
        <span className="text-[11px] font-semibold text-white uppercase tracking-wider">Campaign Performance</span>
      </div>
      <span className="text-[10px] text-zinc-400">Live</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-3">
      <div className="bg-zinc-900/80 rounded-lg p-2">
        <div className="text-[9px] text-zinc-400 mb-0.5">Impressions</div>
        <div className="text-[14px] font-bold text-white">2.4M</div>
        <div className="text-[9px] text-brand-blue flex items-center gap-0.5">
          <TrendingUp size={8} /> +23%
        </div>
      </div>
      <div className="bg-zinc-900/80 rounded-lg p-2">
        <div className="text-[9px] text-zinc-400 mb-0.5">CTR</div>
        <div className="text-[14px] font-bold text-white">4.8%</div>
        <div className="text-[9px] text-brand-blue flex items-center gap-0.5">
          <TrendingUp size={8} /> +0.5%
        </div>
      </div>
      <div className="bg-zinc-900/80 rounded-lg p-2">
        <div className="text-[9px] text-zinc-400 mb-0.5">Conv. Rate</div>
        <div className="text-[14px] font-bold text-white">12.3%</div>
        <div className="text-[9px] text-brand-blue flex items-center gap-0.5">
          <TrendingUp size={8} /> +3.1%
        </div>
      </div>
    </div>
    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
      <div className="h-full w-[78%] bg-gradient-to-r from-brand-blue to-brand-blue/60 rounded-full" />
    </div>
    <div className="text-[9px] text-zinc-400 mt-1.5">Campaign goal: 78% complete</div>
  </div>
);

// Media Buyers Card Overlay
const MediaBuyersOverlay = () => (
  <div className="absolute bottom-6 left-4 right-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
          <Target size={16} className="text-brand-blue" />
        </div>
        <span className="text-[11px] font-semibold text-white uppercase tracking-wider">Ad Spend Optimizer</span>
      </div>
    </div>
    <div className="space-y-2 mb-3">
      <div className="flex items-center justify-between bg-zinc-900/80 rounded-lg p-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
            <span className="text-[8px] font-bold text-blue-400">FB</span>
          </div>
          <span className="text-[11px] text-white">Meta Ads</span>
        </div>
        <div className="text-right">
          <div className="text-[11px] font-bold text-white">$24,500</div>
          <div className="text-[9px] text-brand-blue">4.2x ROAS</div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-zinc-900/80 rounded-lg p-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-red-500/20 flex items-center justify-center">
            <span className="text-[8px] font-bold text-red-400">G</span>
          </div>
          <span className="text-[11px] text-white">Google Ads</span>
        </div>
        <div className="text-right">
          <div className="text-[11px] font-bold text-white">$18,200</div>
          <div className="text-[9px] text-brand-blue">3.8x ROAS</div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between text-[10px]">
      <span className="text-zinc-400">Total Budget</span>
      <span className="text-white font-semibold">$42,700 / $50,000</span>
    </div>
  </div>
);

// Revenue Teams Card Overlay
const RevenueTeamsOverlay = () => (
  <div className="absolute bottom-6 left-4 right-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
          <DollarSign size={16} className="text-brand-blue" />
        </div>
        <span className="text-[11px] font-semibold text-white uppercase tracking-wider">Revenue Analytics</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mb-3">
      <div className="bg-zinc-900/80 rounded-lg p-2">
        <div className="text-[9px] text-zinc-400 mb-0.5">MRR</div>
        <div className="text-[16px] font-bold text-white">$847K</div>
        <div className="text-[9px] text-brand-blue flex items-center gap-0.5">
          <TrendingUp size={8} /> +12.4%
        </div>
      </div>
      <div className="bg-zinc-900/80 rounded-lg p-2">
        <div className="text-[9px] text-zinc-400 mb-0.5">ARR</div>
        <div className="text-[16px] font-bold text-white">$10.2M</div>
        <div className="text-[9px] text-brand-blue flex items-center gap-0.5">
          <TrendingUp size={8} /> +18.7%
        </div>
      </div>
    </div>
    <div className="bg-zinc-900/80 rounded-lg p-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[9px] text-zinc-400">Pipeline Forecast</span>
        <span className="text-[10px] text-brand-blue font-semibold">$2.4M</span>
      </div>
      <div className="flex gap-0.5">
        {[85, 70, 55, 40, 65, 80, 90].map((h, i) => (
          <div key={i} className="flex-1 bg-zinc-700 rounded-sm overflow-hidden" style={{ height: '24px' }}>
            <div className="w-full bg-brand-blue/60 rounded-sm" style={{ height: `${h}%`, marginTop: `${100 - h}%` }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Founders Card Overlay
const FoundersOverlay = () => (
  <div className="absolute bottom-6 left-4 right-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
          <Rocket size={16} className="text-brand-blue" />
        </div>
        <span className="text-[11px] font-semibold text-white uppercase tracking-wider">Company Metrics</span>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-zinc-400">Runway</span>
        <span className="text-[12px] font-bold text-white">18 months</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-zinc-400">Burn Rate</span>
        <span className="text-[12px] font-bold text-white">$125K/mo</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-zinc-400">Growth Rate</span>
        <span className="text-[12px] font-bold text-brand-blue">+32% MoM</span>
      </div>
      <div className="h-px bg-white/10 my-2" />
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center">
          <div className="text-[14px] font-bold text-white">4.2</div>
          <div className="text-[8px] text-zinc-400">LTV/CAC</div>
        </div>
        <div className="text-center">
          <div className="text-[14px] font-bold text-white">2.1%</div>
          <div className="text-[8px] text-zinc-400">Churn</div>
        </div>
        <div className="text-center">
          <div className="text-[14px] font-bold text-white">92</div>
          <div className="text-[8px] text-zinc-400">NPS</div>
        </div>
      </div>
    </div>
  </div>
);

// Product Teams Card Overlay
const ProductTeamsOverlay = () => (
  <div className="absolute bottom-6 left-4 right-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
          <Zap size={16} className="text-brand-blue" />
        </div>
        <span className="text-[11px] font-semibold text-white uppercase tracking-wider">Product Roadmap</span>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-2 bg-zinc-900/80 rounded-lg p-2">
        <CheckCircle2 size={14} className="text-brand-blue shrink-0" />
        <div className="flex-1">
          <div className="text-[10px] text-white font-medium">AI Call Scoring</div>
          <div className="text-[8px] text-zinc-400">Shipped Q4</div>
        </div>
        <span className="px-1.5 py-0.5 bg-brand-blue/20 text-brand-blue text-[8px] rounded">Done</span>
      </div>
      <div className="flex items-center gap-2 bg-zinc-900/80 rounded-lg p-2">
        <Clock size={14} className="text-amber-400 shrink-0" />
        <div className="flex-1">
          <div className="text-[10px] text-white font-medium">CRM Auto-Sync</div>
          <div className="text-[8px] text-zinc-400">In Progress</div>
        </div>
        <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[8px] rounded">75%</span>
      </div>
      <div className="flex items-center gap-2 bg-zinc-900/80 rounded-lg p-2">
        <div className="w-3.5 h-3.5 rounded-full border border-zinc-600 shrink-0" />
        <div className="flex-1">
          <div className="text-[10px] text-white font-medium">Multi-language</div>
          <div className="text-[8px] text-zinc-400">Planned Q1</div>
        </div>
        <span className="px-1.5 py-0.5 bg-zinc-700 text-zinc-400 text-[8px] rounded">Soon</span>
      </div>
    </div>
  </div>
);

// Sales Teams Card Overlay
const SalesTeamsOverlay = () => (
  <div className="absolute bottom-6 left-4 right-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
          <Phone size={16} className="text-brand-blue" />
        </div>
        <span className="text-[11px] font-semibold text-white uppercase tracking-wider">Deal Pipeline</span>
      </div>
    </div>
    <div className="space-y-2 mb-3">
      <div className="flex items-center justify-between bg-zinc-900/80 rounded-lg p-2">
        <div>
          <div className="text-[10px] text-white font-medium">Acme Corp</div>
          <div className="text-[8px] text-zinc-400">Enterprise • Negotiation</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] font-bold text-white">$85,000</div>
          <div className="text-[8px] text-brand-blue">90% likely</div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-zinc-900/80 rounded-lg p-2">
        <div>
          <div className="text-[10px] text-white font-medium">TechStart Inc</div>
          <div className="text-[8px] text-zinc-400">SMB • Proposal Sent</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] font-bold text-white">$24,000</div>
          <div className="text-[8px] text-amber-400">65% likely</div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between pt-2 border-t border-white/10">
      <span className="text-[9px] text-zinc-400">Quota Attainment</span>
      <span className="text-[11px] font-bold text-brand-blue">127%</span>
    </div>
  </div>
);

// E-commerce Card Overlay
const EcommerceOverlay = () => (
  <div className="absolute bottom-6 left-4 right-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
          <ShoppingCart size={16} className="text-brand-blue" />
        </div>
        <span className="text-[11px] font-semibold text-white uppercase tracking-wider">Order #1293</span>
      </div>
      <span className="px-2 py-0.5 bg-brand-blue/20 text-brand-blue text-[9px] rounded-full">New</span>
    </div>
    <div className="space-y-2 mb-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-zinc-400">Order ID</span>
        <span className="text-[10px] text-white font-mono">#1293</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-zinc-400">Shipping</span>
        <span className="text-[10px] text-white">Standard (3-5 days)</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-zinc-400">Address</span>
        <span className="text-[10px] text-white">Roanoke, Oregon</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-zinc-400">Status</span>
        <span className="text-[10px] text-brand-blue font-medium">Shipped</span>
      </div>
    </div>
    <div className="flex items-center justify-between pt-2 border-t border-white/10">
      <span className="text-[10px] text-zinc-400">Total</span>
      <span className="text-[14px] font-bold text-white">$85.00</span>
    </div>
  </div>
);

// Startups Card Overlay
const StartupsOverlay = () => (
  <div className="absolute bottom-6 left-4 right-4 bg-black/70 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center">
          <ArrowUpRight size={16} className="text-brand-blue" />
        </div>
        <span className="text-[11px] font-semibold text-white uppercase tracking-wider">Growth Dashboard</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mb-3">
      <div className="bg-zinc-900/80 rounded-lg p-2">
        <div className="text-[9px] text-zinc-400 mb-0.5">Users</div>
        <div className="text-[14px] font-bold text-white">12.4K</div>
        <div className="text-[9px] text-brand-blue flex items-center gap-0.5">
          <TrendingUp size={8} /> +847 this week
        </div>
      </div>
      <div className="bg-zinc-900/80 rounded-lg p-2">
        <div className="text-[9px] text-zinc-400 mb-0.5">DAU/MAU</div>
        <div className="text-[14px] font-bold text-white">42%</div>
        <div className="text-[9px] text-brand-blue flex items-center gap-0.5">
          <TrendingUp size={8} /> +5.2%
        </div>
      </div>
    </div>
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[9px]">
        <span className="text-zinc-400">Seed Round</span>
        <span className="text-brand-blue font-medium">$2.5M Raised</span>
      </div>
      <div className="flex items-center gap-1">
        <CheckCircle2 size={10} className="text-brand-blue" />
        <span className="text-[9px] text-zinc-300">Product-Market Fit Achieved</span>
      </div>
    </div>
  </div>
);

interface CardData {
  title: string;
  imageUrl: string;
  overlay: React.ReactNode;
}

const cards: CardData[] = [
  {
    title: "Marketing\nDepartments",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90",
    overlay: <MarketingOverlay />
  },
  {
    title: "Media\nBuyers",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=90",
    overlay: <MediaBuyersOverlay />
  },
  {
    title: "Revenue\nTeams",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=90",
    overlay: <RevenueTeamsOverlay />
  },
  {
    title: "Founders",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=90",
    overlay: <FoundersOverlay />
  },
  {
    title: "Product\nTeams",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=90",
    overlay: <ProductTeamsOverlay />
  },
  {
    title: "Sales\nTeams",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90",
    overlay: <SalesTeamsOverlay />
  },
  {
    title: "E-commerce",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=90",
    overlay: <EcommerceOverlay />
  },
  {
    title: "Startups",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=90",
    overlay: <StartupsOverlay />
  }
];

const IndustryCard: React.FC<CardData> = ({ title, imageUrl, overlay }) => (
  <div className="min-w-[340px] lg:min-w-[360px] h-[460px] lg:h-[480px] rounded-[28px] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] border border-white/[0.08] relative overflow-hidden group shrink-0 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2">
    {/* Noise texture overlay */}
    <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

    {/* Background Image with overlay */}
    <div className="absolute inset-0">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 340px, 360px"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,_rgba(255,107,44,0.08),_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Title */}
    <div className="absolute top-6 left-6 z-10">
      <h3 className="text-[26px] lg:text-[32px] font-sans font-bold text-white tracking-tight leading-[1.1] whitespace-pre-line drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
        {title}
      </h3>
    </div>

    {/* UI Overlay */}
    {overlay}
  </div>
);

const WhoBuiltFor: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 384;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-32 bg-black overflow-hidden border-t border-white/5 relative">
      {/* Section-specific gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_100%,_rgba(255,107,44,0.08),_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 flex items-end justify-between">
        <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] text-white">
          Who we're built for
        </h2>
        <div className="flex gap-4">
          <ShimmerButton
            onClick={() => scroll('left')}
            className="w-12 h-12 flex items-center justify-center shadow-2xl"
            background="black"
            shimmerColor="#FFFFFF"
            shimmerSize="0.1em"
            borderRadius="999px"
            style={{ padding: 0 }}
          >
            <ChevronLeft size={24} className="relative z-10 text-white group-hover:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-colors" />
          </ShimmerButton>
          <ShimmerButton
            onClick={() => scroll('right')}
            className="w-12 h-12 flex items-center justify-center shadow-2xl"
            background="black"
            shimmerColor="#FFFFFF"
            shimmerSize="0.1em"
            borderRadius="999px"
            style={{ padding: 0 }}
          >
            <ChevronRight size={24} className="relative z-10 text-white group-hover:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-colors" />
          </ShimmerButton>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pl-[10%] lg:pl-[20%] pr-6 lg:pr-12 pb-10 scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map((card, index) => (
          <div key={index} style={{ scrollSnapAlign: 'start' }}>
            <IndustryCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoBuiltFor;
