'use client';

import React from 'react';
import { ShimmerButton } from './ShimmerButton';

const TheDisconnect: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 4);
        }, 4000);
        return () => clearInterval(interval);
    }, []);



    const positions = [
        // Front (1st)
        "top-[10%] left-0 w-[380px] h-[250px] z-40 opacity-100 scale-100 translate-x-0 translate-y-0",
        // Second (2nd) - Slightly offset & behind
        "top-[15%] left-[8%] w-[380px] h-[250px] z-30 opacity-80 scale-95 translate-x-[20px] translate-y-[10px]",
        // Third (3rd) - More offset & behind
        "top-[20%] left-[16%] w-[380px] h-[250px] z-20 opacity-60 scale-90 translate-x-[40px] translate-y-[20px]",
        // Fourth (4th) - Most offset & behind (faded)
        "top-[25%] left-[24%] w-[380px] h-[250px] z-10 opacity-0 scale-85 translate-x-[60px] translate-y-[30px]"
    ];

    const cardContents = [
        // Card 1: Meta vs Sales Calls
        (
            <>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[24px]" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between px-2">
                        {/* Meta Side */}
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex flex-col items-center justify-center border border-blue-500/20 shadow-[0_0_20px_-10px_rgba(59,130,246,0.3)]">
                            <div className="text-[9px] text-blue-400 font-bold mb-1 tracking-wider">CLICKS</div>
                            <div className="text-xl font-bold text-white font-mono">842</div>
                        </div>

                        {/* Disconnect X */}
                        <div className="text-red-500/80 text-3xl font-light scale-150">×</div>

                        {/* Sales Call Side */}
                        <div className="w-16 h-16 bg-[#FF6B2C]/10 rounded-2xl flex items-center justify-center border border-[#FF6B2C]/20 shadow-[0_0_20px_-10px_rgba(255,107,44,0.3)]">
                            <div className="flex items-center gap-0.5 h-4 justify-center">
                                {[12, 8, 14, 10, 16].map((height, i) => (
                                    <div key={i} className="w-1 bg-[#FF6B2C] rounded-full animate-pulse" style={{ height: `${height}px`, animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-serif-elegant text-[22px] mb-2 leading-tight">Blind Optimization</h3>
                        <p className="text-zinc-400 text-[13px] font-mono leading-relaxed">
                            Meta optimizes for clicks. It can’t see your sales calls.
                        </p>
                    </div>
                </div>
            </>
        ),
        // Card 2: CPL vs Qualified
        (
            <>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-[24px]" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between px-2">
                        {/* CPL Side */}
                        <div className="w-16 h-16 bg-zinc-800/50 rounded-2xl flex flex-col items-center justify-center border border-white/10">
                            <div className="text-[9px] text-zinc-400 font-bold mb-1 tracking-wider">CPL</div>
                            <div className="text-xl font-bold text-white font-mono">$7</div>
                        </div>

                        {/* Disconnect X */}
                        <div className="text-red-500/80 text-3xl font-light scale-150">×</div>

                        {/* Closing Rate Side */}
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex flex-col items-center justify-center border border-green-500/20 shadow-[0_0_20px_-10px_rgba(34,197,94,0.3)]">
                            <div className="text-[9px] text-green-400 font-bold mb-1 tracking-wider">CLOSE</div>
                            <div className="text-xl font-bold text-white font-mono">5%</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-serif-elegant text-[22px] mb-2 leading-tight">Misaligned Metrics</h3>
                        <p className="text-zinc-400 text-[13px] font-mono leading-relaxed">
                            Your Marketing Team makes ads based on cost-per-lead, instead of what makes a qualified lead.
                        </p>
                    </div>
                </div>
            </>
        ),
        // Card 3: Transcription vs Who's Buying
        (
            <>
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 to-transparent rounded-[24px]" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between px-2">
                        {/* Transcription Side */}
                        <div className="w-16 h-16 bg-zinc-800/50 rounded-2xl flex flex-col justify-center gap-1.5 px-3 border border-white/10">
                            <div className="w-full h-1 bg-zinc-600 rounded-full" />
                            <div className="w-3/4 h-1 bg-zinc-600 rounded-full" />
                            <div className="w-full h-1 bg-zinc-600 rounded-full" />
                        </div>

                        {/* Equal Sign */}
                        <div className="text-zinc-500 text-3xl font-light scale-150">=</div>

                        {/* Question Mark Side */}
                        <div className="w-16 h-16 bg-zinc-800/50 rounded-2xl flex items-center justify-center border border-white/10">
                            <span className="text-2xl font-serif italic text-zinc-400">?</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-serif-elegant text-[22px] mb-2 leading-tight">Empty Transcripts</h3>
                        <p className="text-zinc-400 text-[13px] font-mono leading-relaxed">
                            Call recorders transcribe calls. They don't tell you who’s buying your product.
                        </p>
                    </div>
                </div>
            </>
        ),
        // Card 4: Attribution vs Why
        (
            <>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-[24px]" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between px-2">
                        {/* Data Side */}
                        <div className="w-16 h-16 bg-zinc-800/50 rounded-2xl flex items-end justify-center gap-1 pb-3 px-3 border border-white/10">
                            <div className="w-2 h-4 bg-zinc-600 rounded-t-sm" />
                            <div className="w-2 h-8 bg-zinc-500 rounded-t-sm" />
                            <div className="w-2 h-6 bg-zinc-600 rounded-t-sm" />
                        </div>

                        {/* Equal Sign */}
                        <div className="text-zinc-500 text-3xl font-light scale-150">=</div>

                        {/* Question Mark Side */}
                        <div className="w-16 h-16 bg-zinc-800/50 rounded-2xl flex items-center justify-center border border-white/10">
                            <span className="text-2xl font-serif italic text-zinc-400">?</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-serif-elegant text-[22px] mb-2 leading-tight">Surface Attribution</h3>
                        <p className="text-zinc-400 text-[13px] font-mono leading-relaxed">
                            Attribution tools tracks what happened, but it can’t tell you why.
                        </p>
                    </div>
                </div>
            </>
        )
    ];

    const cardStyles = [
        "bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(255,255,255,0.1)]", // Front style - Liquid Glass
        "bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.05)]", // Middle style
        "bg-white/5 backdrop-blur-md border border-white/5 shadow-2xl", // Back style
        "bg-white/5 backdrop-blur-sm border border-white/5 shadow-xl opacity-0" // 4th style (faded out)
    ];

    return (
        <section className="w-full px-8 lg:px-16 py-32 z-10 bg-transparent relative overflow-hidden text-left">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_60%_60%_at_0%_50%,_rgba(255,107,44,0.1),_transparent_70%)] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <div>
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

                    {/* Right Content - 3D Visual "Chaos" effect */}
                    <div className="flex flex-col w-full relative z-10">
                        <div className="relative h-[600px] w-full flex items-center justify-center perspective-[2000px]">



                            {/* Cards Carousel */}
                            {cardContents.map((content, i) => {
                                // Calculate position index using modulo arithmetic that handles negative numbers correctly
                                // We want (i - activeIndex) to determine the shift
                                // If index is 0 and activeIndex is 0 -> pos 0 (Front)
                                // If index is 1 and activeIndex is 0 -> pos 1 (Middle)

                                // If activeIndex increases to 1:
                                // Card 0 -> (0 - 1 + 4) % 4 = 3 (Deep Back)
                                // Card 1 -> (1 - 1 + 4) % 4 = 0 (Front) -> CORRECT

                                const positionIndex = (i - activeIndex + 4) % 4;

                                return (
                                    <div
                                        key={i}
                                        className={`absolute rounded-[28px] flex flex-col justify-between p-6 transition-all duration-700 ease-in-out group ${positions[positionIndex]} ${cardStyles[positionIndex]}`}
                                    >
                                        {content}
                                    </div>
                                )
                            })}

                        </div>

                        {/* Text below cards */}
                        <div className="mt-[-60px] px-4 md:px-0 relative z-20 pointer-events-none">
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
