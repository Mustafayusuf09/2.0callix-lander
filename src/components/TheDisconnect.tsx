'use client';

import React from 'react';
import { ShimmerButton } from './ShimmerButton';

const TheDisconnect: React.FC = () => {
    return (
        <section className="w-full px-8 lg:px-16 py-32 z-10 bg-black relative overflow-hidden text-left">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_60%_60%_at_0%_50%,_rgba(255,107,44,0.1),_transparent_70%)] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <div>
                        <div className="mb-8">
                            <span className="text-[11px] font-mono font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] uppercase tracking-[0.2em]">The Disconnect</span>
                        </div>

                        <h2 className="text-[40px] lg:text-[64px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-8 text-white">
                            Your Sales Team Is Sitting On A <br />
                            <span className="text-brand-blue italic">Revenue Gold Mine</span>
                        </h2>

                        <p className="text-[18px] text-zinc-400 leading-relaxed font-light mb-12 max-w-[500px]">
                            Every <span className="text-white font-medium">sales call</span> contains valuable insights: which customers actually buy, what makes them decide, and the exact language that converts them.
                        </p>

                        <div className="inline-flex items-center bg-gradient-to-r from-white/10 to-transparent border border-white/10 rounded-full p-1.5 pr-6 gap-4 backdrop-blur-xl shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]">
                            <div className="px-5 py-2.5 bg-[#FF6B2C] rounded-full text-[12px] font-bold text-white uppercase tracking-wider shadow-[0_4px_12px_rgba(255,107,44,0.4)]">
                                Callix Fixes That
                            </div>
                            <span className="text-[14px] text-zinc-300 font-medium tracking-tight">There is a better way.</span>
                        </div>
                    </div>

                    {/* Right Content - 3D Visual "Slash Slate" effect */}
                    <div className="relative h-[600px] w-full flex items-center justify-center perspective-[2000px]">

                        {/* 1. Back/Bottom Card - Alignment Hell */}
                        <div className="absolute top-[20%] right-[10%] w-[340px] h-[220px] bg-zinc-900 rounded-[24px] border border-white/10 shadow-2xl flex flex-col justify-between p-6 transform -rotate-y-12 rotate-z-6 translate-z-0 hover:translate-y-[-10px] transition-transform duration-500 hover:rotate-z-3 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[24px]" />
                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Problem #03</span>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                </div>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white font-serif-elegant text-[24px] mb-2 text-zinc-400 group-hover:text-white transition-colors">Alignment Hell</h3>
                                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[20%] bg-red-500/50" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Middle Card - Testing Fatigue */}
                        <div className="absolute top-[35%] left-[20%] w-[360px] h-[230px] bg-zinc-800 rounded-[24px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between p-6 transform rotate-y-6 -rotate-z-3 translate-z-10 z-10 hover:translate-y-[-15px] transition-transform duration-500 hover:rotate-z-0 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[24px]" />
                            {/* Noise Texture */}
                            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Problem #02</span>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                                </div>
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white font-serif-elegant text-[26px] mb-2 text-zinc-300 group-hover:text-white transition-colors">Testing Fatigue</h3>
                                <div className="flex gap-1">
                                    <div className="h-8 w-2 bg-zinc-700/50 rounded-sm" />
                                    <div className="h-8 w-2 bg-zinc-700/50 rounded-sm" />
                                    <div className="h-8 w-2 bg-orange-500/50 rounded-sm shadow-[0_0_10px_rgba(249,115,22,0.3)] animate-pulse" />
                                    <div className="h-8 w-2 bg-zinc-700/50 rounded-sm" />
                                    <div className="h-8 w-2 bg-zinc-700/50 rounded-sm" />
                                </div>
                            </div>
                        </div>

                        {/* 3. Front/Top Card - Blind Campaigns (Hero "WOW" Card) */}
                        <div className="absolute top-[15%] left-[10%] w-[380px] h-[240px] bg-black rounded-[28px] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(255,255,255,0.05)] flex flex-col justify-between p-8 transform rotate-y-12 rotate-z-6 translate-z-20 z-20 hover:scale-105 transition-transform duration-500 group overflow-hidden">
                            {/* Glossy Sheen */}
                            <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:translate-x-[50%] transition-transform duration-1000" />
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-blue/20 blur-[80px] rounded-full" />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">Problem #01</span>
                                <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold tracking-wider">
                                    CRITICAL
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-white font-serif-elegant text-[32px] mb-2 drop-shadow-lg">Blind Campaigns</h3>
                                <p className="text-zinc-500 text-[12px] font-mono leading-tight mb-4">
                                    REVENUE_LOSS_DETECTED<br />
                                    Attribution: UNKNOWN
                                </p>
                                {/* Downward Graph */}
                                <svg viewBox="0 0 100 20" className="w-full h-10 stroke-red-500 stroke-2 fill-none drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                                    <path d="M0 5 Q 20 5 40 15 T 100 18" />
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default TheDisconnect;
