'use client';

import React, { useRef } from 'react';
import { ShimmerButton } from './ShimmerButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CardData {
  title: string;
  imageUrl: string;
}

const cards: CardData[] = [
  {
    title: "Marketing\nDepartments",
    imageUrl: "/industry-cards/marketing.png",
  },
  {
    title: "Media\nBuyers",
    imageUrl: "/industry-cards/media.png",
  },
  {
    title: "Revenue\nTeams",
    imageUrl: "/industry-cards/revenue.png",
  },
  {
    title: "Founders",
    imageUrl: "/industry-cards/founders.png",
  },
  {
    title: "Product\nTeams",
    imageUrl: "/industry-cards/product.png",
  },
  {
    title: "Sales\nTeams",
    imageUrl: "/industry-cards/sales.png",
  },
  {
    title: "E-commerce",
    imageUrl: "/industry-cards/ecommerce.png",
  },
  {
    title: "Startups",
    imageUrl: "/industry-cards/marketing.png",
  }
];

const IndustryCard: React.FC<CardData> = ({ title, imageUrl }) => (
  <div className="min-w-[280px] lg:min-w-[320px] h-[380px] lg:h-[420px] rounded-[28px] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] border border-white/[0.1] relative overflow-hidden group shrink-0 shadow-[0_25px_70px_rgba(0,0,0,0.6)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-3">
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
    <section className="w-full py-32 bg-transparent overflow-hidden border-t border-white/5 relative">
      {/* Section-specific gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,_rgba(255,107,44,0.15),_transparent_70%)] pointer-events-none" />
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
        className="flex w-full gap-6 overflow-x-auto no-scrollbar pb-10 scroll-smooth"
        style={{
          scrollSnapType: 'x mandatory',
          marginLeft: '18vw',
          paddingRight: '3rem'
        }}
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
