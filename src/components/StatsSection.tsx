'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- Counter Component ---
const Counter = ({ value, suffix = '', prefix = '', decimals = 0 }: { value: number, suffix?: string, prefix?: string, decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 3 // Slower, more deliberate duration
  });

  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [springValue, decimals, suffix, prefix]);

  return <span ref={ref} className="tabular-nums" />;
};

// --- Stat Card Component ---
const StatCard = ({
  label,
  value,
  suffix,
  prefix,
  decimals,
  description,
  delay,
  isMain = false
}: {
  label: string,
  value: number,
  suffix?: string,
  prefix?: string,
  decimals?: number,
  description: string,
  delay: number,
  isMain?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative group p-6 lg:p-8 rounded-[24px] overflow-hidden border border-white/5 bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors duration-500 flex flex-col justify-between h-full ${isMain ? 'md:col-span-2' : ''}`}
    >
      {/* Hover Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] sm:text-xs font-medium tracking-widest text-[#FF6B2C]/80 uppercase border border-[#FF6B2C]/20 bg-[#FF6B2C]/5 px-2 py-1 rounded">
            {label}
          </span>
          <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#FF6B2C] transition-colors duration-300" />
        </div>

        <div>
          <h3 className="text-[40px] sm:text-[48px] lg:text-[64px] font-serif-elegant font-medium leading-none text-white tracking-tight mb-3">
            <Counter value={value} suffix={suffix} prefix={prefix} decimals={decimals} />
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light max-w-[90%] group-hover:text-zinc-200 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Subtle animated grain/noise overlay could go here if assets allowed, sticking to CSS gradients */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-16 sm:py-24 z-10 bg-black relative border-t border-white/5 mx-auto overflow-hidden">

      {/* Ambient Background Glows */}
      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] bg-[#FF6B2C]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-end justify-between mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#FF6B2C] animate-pulse" />
              <h4 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-zinc-400 uppercase">THE RESULT</h4>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-serif-elegant font-normal leading-[1.05] text-white">
              When you use Callix, you <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                close more. Period.
              </span>
            </h2>
          </motion.div>


        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <StatCard
            label="ROAS Improvement"
            value={15}
            suffix="%"
            decimals={0}
            description="Higher ROAS on average using Callix signals vs. platform-only optimization."
            delay={0.1}
          />

          <StatCard
            label="Prediction Accuracy"
            value={45}
            suffix="%"
            decimals={0}
            description="More accurate deal predictions than general-purpose LLMs."
            delay={0.2}
          />

          {/* Full Width Hero Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 min-h-[300px] rounded-[24px] relative overflow-hidden group border border-white/5 bg-zinc-900/10"
          >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-zinc-900/20 backdrop-blur-md" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10" />

            {/* Abstract Animation Placeholder */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000 mix-blend-screen">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF6B2C]/20 via-transparent to-transparent" />
              {/* Simulated Graph Lines */}
              <svg className="absolute bottom-0 left-0 w-full h-[80%] stroke-[#FF6B2C]/20 fill-none" viewBox="0 0 1200 400" preserveAspectRatio="none">
                <path d="M0,350 C150,350 300,200 450,220 C600,240 750,100 900,120 C1050,140 1200,50 1200,50" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <path d="M0,380 C150,380 300,300 450,310 C600,320 750,250 900,260 C1050,270 1200,200 1200,200" strokeWidth="2" vectorEffect="non-scaling-stroke" className="opacity-50" />
              </svg>
            </div>

            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between h-full p-6 lg:p-10 gap-8 lg:gap-12">
              <div className="flex-1 w-full text-center lg:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] sm:text-xs font-mono tracking-widest mb-4 uppercase">
                  Revenue Impact
                </span>
                <h3 className="text-[56px] lg:text-[80px] font-serif-elegant leading-none text-white tracking-tighter">
                  <Counter value={10} prefix="$" suffix="M+" decimals={0} />
                </h3>
                <p className="mt-3 text-zinc-400 text-base sm:text-lg max-w-sm mx-auto lg:mx-0">
                  In ad spend managed by teams using Callix.
                </p>
              </div>

              <div className="flex-1 w-full max-w-[360px] border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 pl-0 lg:pl-10">
                <div className="space-y-5">
                  <div className="flex items-center justify-between group/line cursor-pointer">
                    <span className="text-zinc-500 font-mono text-xs sm:text-sm group-hover/line:text-white transition-colors">Optimization Rate</span>
                    <span className="text-white text-sm font-medium">Daily</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/10" />
                  <div className="flex items-center justify-between group/line cursor-pointer">
                    <span className="text-zinc-500 font-mono text-xs sm:text-sm group-hover/line:text-white transition-colors">Data Freshness</span>
                    <span className="text-white text-sm font-medium">Real-time</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/10" />
                  <div className="flex items-center justify-between group/line cursor-pointer">
                    <span className="text-zinc-500 font-mono text-xs sm:text-sm group-hover/line:text-white transition-colors">Model Confidence</span>
                    <span className="text-white text-sm font-medium">99.9%</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-[#FF6B2C] hover:text-white transition-colors text-xs sm:text-sm font-mono tracking-wide uppercase group cursor-pointer w-fit mx-auto lg:mx-0">
                    Start Optimizing <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
