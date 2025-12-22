'use client';


import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="w-full px-8 lg:px-16 pb-24 z-20 bg-black">
      <div className="max-w-[1280px] mx-auto border-t border-white/5 pt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Side: Large Numeric Stat */}
        <div className="flex flex-col gap-1.5 min-w-[300px]">
          <span className="text-[36px] lg:text-[42px] font-semibold tracking-tighter text-white tabular-nums leading-none">
            $5,342,999,918
          </span>
          <p className="text-zinc-400 text-[14px] leading-relaxed font-light">
            revenue patterns analyzed by <span className="text-zinc-300">Callix</span> <br />
            for 3,000+ innovative business leaders
          </p>
        </div>

        {/* Right Side: Horizontal Logo Row */}
        <div className="flex flex-wrap items-center justify-end flex-1 gap-10 lg:gap-14 opacity-30 grayscale contrast-125 hover:opacity-100 transition-opacity duration-700">
           <span className="text-[18px] font-bold tracking-widest text-white uppercase italic">triumph</span>
           <span className="text-[16px] font-medium tracking-tight text-white flex items-center gap-1.5">
             <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
               <div className="w-2 h-2 border-[1.5px] border-black" />
             </div>
             TrackDrive
           </span>
           <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full border-[1.5px] border-white flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
              <span className="text-[13px] font-bold text-white uppercase tracking-tighter">blink digital</span>
           </div>
           <span className="text-[22px] font-serif-elegant italic text-white">doola</span>
           <span className="text-[18px] font-bold text-white tracking-tight uppercase">Nyte</span>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
