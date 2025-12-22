'use client';

import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import { ShimmerButton } from './ShimmerButton';

const TheBreakthrough: React.FC = () => {
    return (
        <section className="w-full px-8 lg:px-16 py-32 z-10 bg-black relative overflow-hidden text-left">
            {/* Background Ambience */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_60%_60%_at_100%_50%,_rgba(255,107,44,0.1),_transparent_70%)] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left Content - 3D Visual "Slash Slate" effect (Solution/Premium) */}
                    <div className="flex-1 order-2 lg:order-1 w-full relative h-[600px] flex items-center justify-center perspective-[2000px]">
                        <div className="absolute -inset-4 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none opacity-50" />

                        {/* 1. Back/Bottom Card - Campaign Intel (Silver) */}
                        <div className="absolute top-[35%] left-[5%] w-[340px] h-[220px] bg-zinc-800 rounded-[24px] border border-white/20 shadow-2xl flex flex-col justify-between p-6 transform rotate-y-12 -rotate-z-6 translate-z-0 hover:translate-y-[-10px] transition-transform duration-500 overflow-hidden group">
                            {/* Silver Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-400/10 via-zinc-600/10 to-transparent" />
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Intel Layer</span>
                                <div className="p-1.5 rounded-lg bg-zinc-700/50 border border-white/10">
                                    <TrendingUp size={14} className="text-zinc-300" />
                                </div>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white font-serif-elegant text-[22px] mb-2">Campaign Intel</h3>
                                <div className="space-y-2">
                                    <div className="h-1.5 w-full bg-zinc-700/50 rounded-full overflow-hidden">
                                        <div className="h-full w-[70%] bg-zinc-400 shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                                    </div>
                                    <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                                        <span>ROI: 4.2x</span>
                                        <span className="text-green-400">+12%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Middle Card - Creative Gen (Gold/Brass) */}
                        <div className="absolute top-[15%] right-[10%] w-[360px] h-[230px] bg-zinc-900 rounded-[24px] border border-orange-200/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between p-6 transform -rotate-y-6 rotate-z-3 translate-z-10 z-10 hover:translate-y-[-15px] transition-transform duration-500 hover:rotate-z-0 overflow-hidden group">
                            {/* Gold Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-yellow-500/5 to-transparent" />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-mono text-[10px] text-orange-200/60 uppercase tracking-widest">Creative Engine</span>
                                <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-400/20">
                                    <Sparkles size={14} className="text-orange-300" />
                                </div>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white font-serif-elegant text-[24px] mb-2">Creative Gen</h3>
                                <div className="p-3 rounded-xl bg-orange-950/30 border border-orange-500/10 backdrop-blur-sm">
                                    <div className="h-1.5 w-[80%] bg-orange-400/20 rounded-full mb-2" />
                                    <div className="h-1.5 w-[60%] bg-orange-400/20 rounded-full" />
                                </div>
                                <div className="mt-2 text-[10px] text-orange-300 font-mono tracking-tight">
                                    Generated from 42 winning calls
                                </div>
                            </div>
                        </div>

                        {/* 3. Front/Top Card - High-LTV Profiles (Platinum/Iridescent) */}
                        <div className="absolute top-[25%] left-[15%] w-[380px] h-[240px] bg-black rounded-[28px] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(255,255,255,0.05)] flex flex-col justify-between p-8 transform rotate-y-12 rotate-z-6 translate-z-20 z-20 hover:scale-105 transition-transform duration-500 group overflow-hidden">
                            {/* Iridescent Sheen */}
                            <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent rotate-45 group-hover:translate-x-[50%] transition-transform duration-1000" />
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/10 blur-[80px] rounded-full" />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">Revenue Core</span>
                                <div className="px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue text-[10px] font-bold tracking-wider shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                                    MATCH FOUND
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-white font-serif-elegant text-[32px] mb-2 drop-shadow-lg">High-LTV Profiles</h3>

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border border-black bg-zinc-800 flex items-center justify-center text-[10px] text-white font-bold shadow-lg">
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-[12px] text-zinc-400 font-light">
                                        <b className="text-white">142</b> qualified buyers
                                    </div>
                                </div>

                                {/* Upward Graph */}
                                <svg viewBox="0 0 100 20" className="w-full h-10 stroke-brand-blue stroke-2 fill-none drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                                    <path d="M0 18 Q 20 18 40 8 T 100 2" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Headline & CTA */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="mb-8">
                            <span className="text-[11px] font-mono font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] uppercase tracking-[0.2em]">The Breakthrough</span>
                        </div>

                        <h2 className="text-[40px] lg:text-[60px] font-serif-elegant font-normal tracking-tight leading-[1.1] mb-8">
                            What If Every Sales Call Automatically Became <br />
                            <span className="text-brand-blue drop-shadow-[0_0_15px_rgba(255,107,44,0.3)]">Actionable Revenue Intelligence?</span>
                        </h2>

                        <p className="text-[18px] text-zinc-300 leading-relaxed font-light mb-12 max-w-[600px]">
                            Callix AI analyzes your sales conversations to surface the patterns that drive revenue. Think of it as your <span className="text-white font-medium">revenue intelligence layer</span>—connecting what happens in sales calls to what you do in marketing.
                        </p>


                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <ShimmerButton
                                className="shadow-2xl font-bold uppercase tracking-widest text-[13px]"
                                background="black"
                                shimmerColor="#FFFFFF"
                                shimmerSize="0.1em"
                                borderRadius="100px"
                            >
                                <span className="text-white flex items-center gap-3 relative z-10 px-4">
                                    Book A Free "Prove It" Demo
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </ShimmerButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheBreakthrough;
