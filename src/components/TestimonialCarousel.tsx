'use client';

import React, { useState, useEffect } from 'react';

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Before Callix, we had no idea which ads were actually producing qualified buyers. Now we see exactly which creatives drive revenue — not just clicks.",
      author: "James Carter",
      role: "Founder, ScaleWave",
      image: "/john.jpg" // Reusing John's image as placeholder
    },
    {
      quote: "We scaled ad spend by 40% without lead quality dropping. That's never happened before.",
      author: "Sophia Liu",
      role: "Head of Growth, AdVantage",
      image: "/emma.jpg" // Reusing Emma's image as placeholder
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="w-full px-8 lg:px-16 py-32 z-10 bg-black relative">
      {/* Top Connecting Gradient (Flow from Stats) */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#FF6B2C]/15 to-transparent pointer-events-none mix-blend-screen" />

      {/* Strong Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,_rgba(255,107,44,0.15),_transparent_70%)] blur-[100px] rounded-full pointer-events-none" />

      {/* Bottom Connecting Gradient (Flow to next) */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[#FF6B2C]/10 to-transparent pointer-events-none mix-blend-screen" />

      <div className="max-w-[1280px] mx-auto text-center mb-16 relative z-10">
        <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] text-white">
          Trusted by <span className="italic text-zinc-400">Growth Leaders</span>
        </h2>
      </div>

      <div className="max-w-[1000px] mx-auto relative h-[400px] lg:h-[350px]">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;

          let positionClass = 'opacity-0 scale-90 pointer-events-none translate-x-[100px]';
          if (isActive) positionClass = 'opacity-100 scale-100 z-20 translate-x-0';
          else if (isPrev) positionClass = 'opacity-0 scale-90 -translate-x-[100px] z-10';

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center ${positionClass}`}
            >
              <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 p-12 rounded-[40px] shadow-2xl max-w-2xl text-center relative overflow-hidden group">
                {/* Decorative Quote Icon behind */}
                <div className="absolute top-6 left-8 text-white/5 text-[120px] font-serif leading-none select-none pointer-events-none">“</div>

                <div className="relative z-10">
                  <p className="text-[20px] lg:text-[24px] text-zinc-200 leading-relaxed font-light mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-blue/50 p-0.5">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover rounded-full bg-zinc-800" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold text-[16px]">{testimonial.author}</div>
                      <div className="text-zinc-500 text-[13px] uppercase tracking-wider font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Subtle brand glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-3 mt-8 relative z-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-brand-blue w-8' : 'bg-zinc-700 hover:bg-zinc-500'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
