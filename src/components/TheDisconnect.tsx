'use client';

import React from 'react';
import { ShimmerButton } from './ShimmerButton';

const TheDisconnect: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const [particles, setParticles] = React.useState<Array<{ top: string; left: string; delay: string; z: number }>>([]);

    React.useEffect(() => {
        setParticles([...Array(8)].map(() => ({
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            delay: `${Math.random() * 2}s`,
            z: Math.random() * 50
        })));
    }, []);

    const positions = [
        // Front (Blind Campaigns position)
        "top-[10%] left-[5%] w-[380px] h-[250px] z-30 opacity-100 scale-100 rotate-y-12 rotate-z-3 translate-z-30",
        // Middle (Testing Fatigue position)
        "top-[40%] left-[15%] w-[340px] h-[220px] z-20 opacity-80 scale-95 rotate-y-6 -rotate-z-6 translate-z-10",
        // Back (Fragmented Data position) - converted right-[5%] to approx left-[55%] for smooth interaction
        "top-[25%] left-[55%] w-[320px] h-[200px] z-10 opacity-60 scale-90 -rotate-y-12 rotate-z-12 translate-z-[-20px]"
    ];

    const cardContents = [
        // Card 1: Blind Campaigns
        (
            <>

                <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-red-500/10 blur-[80px] rounded-full" />

                <div className="relative z-10 flex justify-between items-start">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Attribution Error</span>
                    <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                        CRITICAL
                    </div>
                </div>

                <div className="relative z-10">
                    <h3 className="text-white font-serif-elegant text-[32px] mb-2 drop-shadow-xl">Blind Campaigns</h3>
                    <p className="text-zinc-500 text-[12px] font-mono leading-tight mb-6">
                        WARNING: Revenue leakage detected.<br />
                        Source: UNIDENTIFIED
                    </p>
                    {/* Downward Graph */}
                    <div className="relative h-12 w-full">
                        <svg viewBox="0 0 100 25" className="w-full h-full overflow-visible">
                            <defs>
                                <linearGradient id="chartGradient1" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0 5 C 20 5, 30 15, 50 18 S 80 12, 100 22"
                                fill="none"
                                stroke="url(#chartGradient1)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]"
                            />
                            <circle cx="0" cy="5" r="2" fill="#ef4444" />
                            <circle cx="50" cy="18" r="2" fill="#f97316" />
                            <circle cx="100" cy="22" r="2" fill="#f97316" />
                        </svg>
                    </div>
                </div>
            </>
        ),
        // Card 2: Testing Fatigue
        (
            <>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-transparent rounded-[24px]" />

                <div className="relative z-10 flex justify-between items-start">
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Inefficiency</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                    </div>
                </div>
                <div className="relative z-10">
                    <h3 className="text-white font-serif-elegant text-[24px] mb-2 text-zinc-300">Testing Fatigue</h3>
                    <div className="flex gap-1 items-end h-12">
                        <div className="w-2 h-8 bg-zinc-700/30 rounded-t-sm" />
                        <div className="w-2 h-6 bg-zinc-700/30 rounded-t-sm" />
                        <div className="w-2 h-10 bg-orange-500/40 rounded-t-sm shadow-[0_0_10px_rgba(249,115,22,0.2)]" />
                        <div className="w-2 h-5 bg-zinc-700/30 rounded-t-sm" />
                        <div className="w-2 h-3 bg-zinc-700/30 rounded-t-sm" />
                        <div className="w-2 h-7 bg-zinc-700/30 rounded-t-sm" />
                        <div className="w-2 h-4 bg-zinc-700/30 rounded-t-sm" />
                    </div>
                </div>
            </>
        ),
        // Card 3: Fragmented Data
        (
            <>
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent rounded-[24px]" />
                <div className="relative z-10 flex justify-between items-start opacity-60">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Fragmented Data</span>
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    </div>
                </div>
                <div className="relative z-10 opacity-70">
                    <h3 className="text-white font-serif-elegant text-[20px] mb-2 text-zinc-400">Siloed Insights</h3>
                    <div className="flex gap-2 flex-wrap">
                        <div className="h-2 w-12 bg-zinc-800 rounded-full" />
                        <div className="h-2 w-8 bg-zinc-800 rounded-full" />
                        <div className="h-2 w-16 bg-red-900/30 rounded-full" />
                        <div className="h-2 w-10 bg-zinc-800 rounded-full" />
                    </div>
                </div>
            </>
        )
    ];

    const cardStyles = [
        "bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(255,255,255,0.05)]", // Front style
        "bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]", // Middle style
        "bg-zinc-900/40 backdrop-blur-md border border-white/5 shadow-2xl" // Back style
    ];

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

                        <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-8 text-white">
                            Your Sales Team Is Sitting On A <br />
                            <span className="italic bg-gradient-to-r from-[#FF6B2C] via-[#ff8f6b] to-white bg-clip-text text-transparent">Revenue Gold Mine</span>
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

                    {/* Right Content - 3D Visual "Chaos" effect */}
                    <div className="relative h-[600px] w-full flex items-center justify-center perspective-[2000px]">

                        {/* Chaos/Floating Data Points */}
                        {particles.map((p, i) => (
                            <div key={i}
                                className="absolute w-2 h-2 rounded-full bg-red-500/40 blur-[1px] animate-pulse"
                                style={{
                                    top: p.top,
                                    left: p.left,
                                    animationDelay: p.delay,
                                    transform: `translateZ(${p.z}px)`
                                }}
                            />
                        ))}

                        {/* Cards Carousel */}
                        {cardContents.map((content, i) => {
                            // Calculate which position slot this card currently occupies
                            const positionIndex = (i + activeIndex) % 3;
                            // We want to apply the STYLE of the slot to the card.
                            // Wait, usually carousel items FIXED content rotate through POSITIONS.
                            // So Card I will be at Position J.

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

                </div>
            </div>
        </section>
    );
};

export default TheDisconnect;
