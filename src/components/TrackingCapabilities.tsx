'use client';

import React, { useState } from 'react';
import { ShimmerButton } from './ShimmerButton';
import { motion } from 'framer-motion';

const features = [
    {
        id: "capture",
        title: "Capture",
        description: "Connect Zoom, Google Meet, or your dialer. Every call captured automatically."
    },
    {
        id: "extract",
        title: "Extract",
        description: "AI identifies buying signals, objection patterns, and the exact language that converts."
    },
    {
        id: "optimize",
        title: "Optimize",
        description: "Feed those signals to Meta, Google, and LinkedIn. Platforms optimize for customers who close — not just click."
    },
    {
        id: "create",
        title: "Create",
        description: "Turn call insights into video & static ad creatives that attract your best buyers."
    }
];

const TrackingCapabilities: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(0); // Default to 'Capture'

    return (
        <section className="w-full px-4 lg:px-8 py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">

            <div className="max-w-[1240px] mx-auto relative z-10">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="px-6 py-2.5 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C] text-[#FF6B2C] text-[14px] font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(255,107,44,0.15)]">
                        How Callix Works
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white max-w-3xl leading-[1.15]">
                        What if your ads could learn from <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blue-light to-white">your best sales calls?</span>
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 rounded-[32px] p-0 backdrop-blur-sm">

                    {/* Left Column: Feature List */}
                    <div className="lg:col-span-5 flex flex-col justify-center pl-4">
                        <div className="space-y-6 relative">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    onClick={() => setActiveFeature(index)}
                                    className="group cursor-pointer flex gap-6 relative"
                                >
                                    {/* Vertical Pill Indicator */}
                                    <div className="relative pt-1.5">
                                        <div className={`w-1.5 rounded-full transition-all duration-300 ease-out ${activeFeature === index
                                            ? 'h-8 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                                            : 'h-6 bg-white/10 group-hover:bg-white/20'
                                            }`} />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className={`text-xl font-medium transition-colors duration-300 ${activeFeature === index ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                                            }`}>
                                            {feature.title}
                                        </h3>

                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFeature === index ? 'max-h-[100px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                                            }`}>
                                            <p className="text-[15px] text-zinc-400 leading-relaxed max-w-[95%]">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Primary CTA */}
                        <div className="mt-12 pl-0">
                            <ShimmerButton
                                className="shadow-2xl"
                                background="#FFFFFF"
                                shimmerColor="#FF6B2C"
                                shimmerSize="0.1em"
                                borderRadius="999px"
                                style={{ padding: '14px 28px' }}
                            >
                                <span className="text-black text-sm font-bold tracking-wide">Learn more</span>
                            </ShimmerButton>
                            <p className="text-[11px] text-zinc-500 mt-4 max-w-xs leading-snug">
                                * On average brands see at least a 15% increase in ad revenue by applying Callix tracking
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Visual Area */}
                    <div className="lg:col-span-7 h-[500px] lg:h-[600px] relative">
                        <div className="w-full h-full rounded-2xl overflow-hidden relative">
                            {/* Abstract/Graph Visual Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/5" />

                            {/* Content Container */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="relative w-full h-full max-h-[450px] bg-zinc-900/50 rounded-xl border border-white/5 backdrop-blur-md overflow-hidden flex flex-col shadow-2xl">
                                    {/* Header of the fake graph card */}
                                    <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                        </div>
                                        <div className="text-[10px] text-zinc-500 font-mono">LIFETIME VALUE ANALYSIS</div>
                                    </div>

                                    {/* Graph Area */}
                                    <div className="flex-1 relative p-6">
                                        {/* Floating Badge */}
                                        <motion.div
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            key={activeFeature}
                                            transition={{ duration: 0.5 }}
                                            className="absolute top-10 left-10 z-20 bg-black border border-white/10 rounded-lg p-3 shadow-xl flex gap-3 items-center pr-6"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeFeature}`} alt="User" />
                                            </div>
                                            <div>
                                                <div className="text-white text-xs font-bold">Source</div>
                                                <div className="text-zinc-500 text-[10px]">Instagram AD A</div>
                                            </div>
                                        </motion.div>

                                        {/* Floating Metric */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            key={`metric-${activeFeature}`}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            className="absolute bottom-20 left-12 z-20 bg-black text-white px-4 py-2 rounded-lg border border-white/10 shadow-2xl"
                                        >
                                            <div className="text-[10px] text-zinc-400 mb-1">Customer LTV</div>
                                            <div className="text-xl font-bold tracking-tight">$4,320</div>
                                        </motion.div>

                                        {/* SVG Graph Line */}
                                        <div className="absolute inset-0 pt-20 px-4">
                                            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                                <path
                                                    d="M0,180 C50,180 50,120 100,120 C150,120 150,140 200,80 C250,20 300,60 350,40 L400,20 L400,200 L0,200 Z"
                                                    fill="url(#graphGradient)"
                                                    className="opacity-20"
                                                />
                                                <path
                                                    d="M0,180 C50,180 50,120 100,120 C150,120 150,140 200,80 C250,20 300,60 350,40 L400,20"
                                                    fill="none"
                                                    stroke="#3b82f6"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>

                                        {/* Background Texture */}
                                        <div className="absolute inset-0 z-0 opacity-30" style={{
                                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }} />
                                    </div>

                                    {/* X-Axis Labels */}
                                    <div className="h-8 flex justify-between px-8 text-[9px] text-zinc-600 font-mono">
                                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
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

export default TrackingCapabilities;
