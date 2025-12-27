'use client';

import React from 'react';

const TheDisconnect: React.FC = () => {
    // Shared styling for the cards
    // Using w-full but capping width to maintain the boxy "card" look requested previously.
    // Using a defined height to ensure uniformity in the grid.
    const commonCardStyle = "bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(255,255,255,0.1)] relative w-full h-[220px] rounded-[32px] overflow-hidden";

    return (
        <section className="w-full px-8 lg:px-16 py-32 z-10 bg-transparent relative overflow-hidden text-left">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_60%_60%_at_0%_50%,_rgba(255,107,44,0.1),_transparent_70%)] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left Content - Sticky */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <div className="mb-8">
                            <span className="text-[11px] font-mono font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] uppercase tracking-[0.2em]">The Disconnect</span>
                        </div>

                        <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-8 text-white">
                            Your Sales Team Is Sitting On A{" "}
                            <span className="italic bg-gradient-to-r from-[#FF6B2C] via-[#ff8f6b] to-white bg-clip-text text-transparent">Revenue Gold Mine</span>
                        </h2>

                        <p className="text-[18px] text-zinc-400 leading-relaxed font-light mb-12 max-w-[500px]">
                            Every sales call contains valuable insights: which customers actually buy, what makes them take action, and the exact language that converts them.
                        </p>
                    </div>

                    {/* Right Content - Static Grid */}
                    <div className="flex flex-col gap-12">
                        {/* 2x2 Grid for Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                            {/* Card 1: Meta vs Sales Calls */}
                            {/* Card 1: Meta vs Sales Calls */}
                            <div className="group relative w-full h-[240px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                                {/* Glow Effect */}
                                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-500" />

                                <div className="relative z-10 flex flex-col h-full justify-between p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="h-14 min-w-[60px] px-3 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500">
                                            <div className="text-[9px] text-blue-400 font-bold mb-0.5 tracking-wider font-mono">CLICKS</div>
                                            <div className="text-xl font-bold text-white font-mono">842</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                            <div className="text-red-500 text-sm font-light">×</div>
                                        </div>
                                        <div className="h-14 min-w-[60px] px-3 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-[#FF6B2C]/10 group-hover:border-[#FF6B2C]/20 transition-all duration-500">
                                            <div className="flex items-center gap-0.5 h-4 justify-center">
                                                {[12, 8, 16, 10, 18].map((height, i) => (
                                                    <div key={i} className="w-0.5 bg-[#FF6B2C] rounded-full animate-pulse" style={{ height: `${height}px`, animationDelay: `${i * 0.1}s` }} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif-elegant text-[22px] mb-2 leading-tight group-hover:text-blue-200 transition-colors">Blind Optimization</h3>
                                        <p className="text-zinc-500 text-xs font-mono leading-relaxed group-hover:text-zinc-400 transition-colors">
                                            Meta optimizes for clicks. It can’t see your sales calls.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: CPL vs Qualified */}
                            <div className="group relative w-full h-[240px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-green-500/30 transition-all duration-500">
                                {/* Glow Effect */}
                                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-green-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/20 transition-all duration-500" />

                                <div className="relative z-10 flex flex-col h-full justify-between p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="h-14 min-w-[60px] px-3 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center border border-white/5 group-hover:bg-zinc-800/80 group-hover:border-white/10 transition-all duration-500">
                                            <div className="text-[9px] text-zinc-500 font-bold mb-0.5 tracking-wider font-mono">CPL</div>
                                            <div className="text-xl font-bold text-white font-mono">$7</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                            <div className="text-red-500 text-sm font-light">×</div>
                                        </div>
                                        <div className="h-14 min-w-[60px] px-3 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center border border-white/5 group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-all duration-500">
                                            <div className="text-[9px] text-green-400 font-bold mb-0.5 tracking-wider font-mono">CLOSE</div>
                                            <div className="text-xl font-bold text-white font-mono">5%</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif-elegant text-[22px] mb-2 leading-tight group-hover:text-green-200 transition-colors">Misaligned Metrics</h3>
                                        <p className="text-zinc-500 text-xs font-mono leading-relaxed group-hover:text-zinc-400 transition-colors">
                                            Your Marketing Team makes ads based on cost-per-lead, instead of qualified leads.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Transcription vs Who's Buying */}
                            <div className="group relative w-full h-[240px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-orange-500/30 transition-all duration-500">
                                {/* Glow Effect */}
                                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-orange-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-all duration-500" />

                                <div className="relative z-10 flex flex-col h-full justify-between p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="h-14 min-w-[60px] px-3 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col justify-center gap-1.5 border border-white/5 group-hover:bg-zinc-800/80 group-hover:border-white/10 transition-all duration-500">
                                            <div className="w-8 h-0.5 bg-zinc-500 rounded-full" />
                                            <div className="w-6 h-0.5 bg-zinc-500 rounded-full" />
                                            <div className="w-8 h-0.5 bg-zinc-500 rounded-full" />
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center border border-white/10">
                                            <div className="text-zinc-500 text-sm font-light">=</div>
                                        </div>
                                        <div className="h-14 min-w-[60px] px-3 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all duration-500">
                                            <span className="text-2xl font-serif italic text-zinc-500 group-hover:text-orange-400 transition-colors">?</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif-elegant text-[22px] mb-2 leading-tight group-hover:text-orange-200 transition-colors">Empty Transcripts</h3>
                                        <p className="text-zinc-500 text-xs font-mono leading-relaxed group-hover:text-zinc-400 transition-colors">
                                            Call recorders transcribe calls. They don't tell you who’s buying your product.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: Attribution vs Why */}
                            <div className="group relative w-full h-[240px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-purple-500/30 transition-all duration-500">
                                {/* Glow Effect */}
                                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-all duration-500" />

                                <div className="relative z-10 flex flex-col h-full justify-between p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="h-14 min-w-[60px] px-3 bg-white/5 backdrop-blur-sm rounded-2xl flex items-end justify-center gap-1 pb-3 border border-white/5 group-hover:bg-zinc-800/80 group-hover:border-white/10 transition-all duration-500">
                                            <div className="w-1.5 h-4 bg-zinc-600 rounded-t-sm" />
                                            <div className="w-1.5 h-6 bg-zinc-400 rounded-t-sm" />
                                            <div className="w-1.5 h-5 bg-zinc-500 rounded-t-sm" />
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center border border-white/10">
                                            <div className="text-zinc-500 text-sm font-light">=</div>
                                        </div>
                                        <div className="h-14 min-w-[60px] px-3 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-500">
                                            <span className="text-2xl font-serif italic text-zinc-500 group-hover:text-purple-400 transition-colors">?</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-serif-elegant text-[22px] mb-2 leading-tight group-hover:text-purple-200 transition-colors">Surface Attribution</h3>
                                        <p className="text-zinc-500 text-xs font-mono leading-relaxed group-hover:text-zinc-400 transition-colors">
                                            Attribution tools track what happened, but they can’t tell you why.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text below cards */}
                        <div className="relative z-20 pointer-events-none text-left">
                            <p className="text-[18px] lg:text-[20px] text-white leading-relaxed font-light mb-1">
                                Your sales team hears exactly why customers buy.
                            </p>
                            <p className="text-[18px] lg:text-[20px] text-zinc-400 mb-8 leading-relaxed font-light">
                                Your ad platform & marketing team just have no idea.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-[#FF6B2C]" />
                                <span className="text-[#FF6B2C] font-mono font-bold tracking-widest text-sm uppercase">
                                    THAT&#39;S THE GAP. CALLIX CLOSES IT.
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TheDisconnect;
