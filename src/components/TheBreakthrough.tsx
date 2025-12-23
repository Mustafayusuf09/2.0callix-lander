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

                    {/* Left Content - 3D Visual "Organized Flow" effect */}
                    <div className="flex-1 order-2 lg:order-1 w-full relative h-[600px] flex items-center justify-center perspective-[2000px]">
                        <div className="absolute -inset-4 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none opacity-50" />

                        {/* Connection Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ transform: 'translateZ(-50px)' }}>
                            <defs>
                                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3f3f46" stopOpacity="0.2" />
                                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {/* Line from Card 1 to Card 2 */}
                            <path d="M 180 400 C 220 350, 250 300, 320 280" stroke="url(#flowGradient)" strokeWidth="2" fill="none" className="drop-shadow-[0_0_5px_rgba(249,115,22,0.5)] animate-pulse" />
                            {/* Line from Card 2 to Card 3 */}
                            <path d="M 450 280 C 500 280, 520 250, 550 200" stroke="url(#flowGradient)" strokeWidth="2" fill="none" className="drop-shadow-[0_0_5px_rgba(249,115,22,0.5)] animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </svg>

                        {/* 1. Bottom Left - Raw Data Node */}
                        <div className="absolute top-[60%] left-[5%] w-[280px] h-[180px] bg-zinc-900/80 backdrop-blur-md rounded-[20px] border border-white/10 shadow-lg flex flex-col justify-between p-5 transform rotate-y-6 rotate-z-[-2] translate-z-0 hover:translate-y-[-5px] transition-all duration-500 group z-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[20px]" />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Input Stream</span>
                                <div className="p-1 rounded bg-zinc-800 border border-zinc-700">
                                    <Users size={12} className="text-zinc-400" />
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)] animate-pulse" />
                                    <h3 className="text-white font-serif-elegant text-[18px]">Call Data</h3>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[60%] bg-zinc-600" />
                                    </div>
                                    <div className="h-1 w-[80%] bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[40%] bg-zinc-600" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Center - Intelligence Engine */}
                        <div className="absolute top-[35%] left-[30%] w-[320px] h-[200px] bg-zinc-800/90 backdrop-blur-xl rounded-[24px] border border-orange-500/20 shadow-xl flex flex-col justify-between p-6 transform rotate-y-0 rotate-z-0 translate-z-20 z-20 hover:scale-105 transition-all duration-500 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-[24px]" />
                            <div className="absolute -right-2 top-1/2 w-4 h-4 bg-orange-500 rounded-full blur-[10px]" />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-mono text-[9px] text-orange-200/60 uppercase tracking-widest">Analysis</span>
                                <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-400/20">
                                    <Sparkles size={14} className="text-orange-400" />
                                </div>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white font-serif-elegant text-[22px] mb-3">Pattern Match</h3>
                                <div className="flex gap-2">
                                    <div className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-[10px] text-orange-300">
                                        Objection Handling
                                    </div>
                                    <div className="px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-[10px] text-orange-300">
                                        Pricing
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Top Right - Revenue Result (Main Card) */}
                        <div className="absolute top-[10%] right-[0%] lg:right-[-5%] w-[360px] h-[240px] bg-black rounded-[28px] border border-orange-500/30 shadow-[0_0_50px_rgba(249,115,22,0.2)] flex flex-col justify-between p-8 transform rotate-y-[-6] rotate-z-[2] translate-z-40 z-30 hover:translate-y-[-5px] transition-all duration-500 group overflow-hidden">
                            {/* Polish */}
                            <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-orange-100/10 to-transparent rotate-45 group-hover:translate-x-[50%] transition-transform duration-1000" />
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-orange-500/10 blur-[60px] rounded-full" />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">Outcome</span>
                                <div className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-[10px] font-bold tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                    MATCH FOUND
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-white font-serif-elegant text-[28px] mb-1 drop-shadow-lg">High-LTV Profiles</h3>
                                <p className="text-zinc-500 text-[11px] font-mono mb-4">Confidence Score: 98.4%</p>

                                {/* Upward Graph */}
                                <div className="h-16 w-full relative">
                                    <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                                        <defs>
                                            <linearGradient id="successGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M0 25 C 20 25, 40 20, 60 10 S 80 5, 100 2"
                                            fill="none"
                                            stroke="#f97316"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            className="drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                                        />
                                        <path
                                            d="M0 25 C 20 25, 40 20, 60 10 S 80 5, 100 2 V 30 H 0 Z"
                                            fill="url(#successGradient)"
                                            className="opacity-20"
                                        />

                                        <circle cx="60" cy="10" r="3" fill="#f97316" />
                                        <circle cx="100" cy="2" r="3" fill="#f97316" />
                                    </svg>
                                </div>
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
                            <span className="italic bg-gradient-to-r from-[#FF6B2C] via-[#ff8f6b] to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,107,44,0.3)]">Actionable Revenue Intelligence?</span>
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
