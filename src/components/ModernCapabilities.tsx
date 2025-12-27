'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ShimmerButton } from './ShimmerButton';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Mic, Video, PhoneOff, Hand, MoreVertical, LayoutGrid, Info, MessageSquare, Users, Smile, ChevronUp, MonitorUp, CheckCircle, AlertCircle, Calendar, Zap, TrendingUp, Youtube } from 'lucide-react';

const features = [
    {
        id: 0,
        step: "Step 1: Capture",
        title: "Capture",
        description: "Connect Zoom, Google Meet, or your dialer. Every call captured automatically.",
    },
    {
        id: 1,
        step: "Step 2: Extract",
        title: "Extract",
        description: "AI identifies buying signals, objection patterns, and the exact language that converts.",
    },
    {
        id: 2,
        step: "Step 3: Optimize",
        title: "Optimize",
        description: "Feed those signals to Meta, Google, and LinkedIn. Platforms optimize for customers who close — not just click.",
    },
    {
        id: 3,
        step: "Step 4: Create",
        title: "Create",
        description: "Turn call insights into video & static ad creatives that attract your best buyers.",
    }
];

const FeatureItem = ({
    feature,
    index,
    activeFeature,
    smoothProgress,
    handleManualClick
}: {
    feature: typeof features[0];
    index: number;
    activeFeature: number;
    smoothProgress: any;
    handleManualClick: (index: number) => void;
}) => {
    const progressHeight = useTransform(
        smoothProgress,
        (val: number) => {
            const stepSize = 1 / features.length;
            const stepStart = index * stepSize;
            const stepEnd = (index + 1) * stepSize;

            if (val >= stepEnd) return "100%";
            if (val < stepStart) return "0%";

            return `${((val - stepStart) / stepSize) * 100}%`;
        }
    );

    return (
        <div
            onClick={() => handleManualClick(index)}
            className="group cursor-pointer flex gap-6 relative"
        >
            <div className="relative pt-1">
                <div className={`relative w-1.5 rounded-full overflow-hidden transition-all duration-300 ease-out ${activeFeature === index ? 'h-12' : 'h-6'
                    }`}>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20" />
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                        style={{ height: progressHeight }}
                    />
                </div>
            </div>

            <div className="flex-1 pb-2">
                <h3 className={`text-xl font-medium transition-colors duration-300 ${activeFeature === index ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}>
                    {feature.title}
                </h3>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFeature === index ? 'max-h-[100px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                    }`}>
                    <p className="text-[15px] text-zinc-400 leading-relaxed max-w-[90%]">
                        {feature.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ModernCapabilities: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress through the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the progress for better animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeFeature, setActiveFeature] = useState(0);

    // Map scroll progress to features
    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (latest) => {
            // Divide scroll into 4 sections
            // We use a slightly adjusted max to ensure we reach the last step comfortably
            const step = Math.min(Math.floor(latest * features.length), features.length - 1);
            setActiveFeature(step);
        });
        return () => unsubscribe();
    }, [smoothProgress]);

    // Manual navigation
    const handleManualClick = (index: number) => {
        if (!containerRef.current) return;
        const sectionHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        // Calculate the target scroll position: start of section + (fraction * index)
        // We subtract a small buffer to ensure we land nicely within the "step"
        const targetScroll = containerRef.current.offsetTop + ((sectionHeight - windowHeight) / features.length) * index + 10;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    return (
        // TALL CONTAINER creates the scroll track (300vh = 3 screens worth of scrolling)
        <section ref={containerRef} className="relative w-full h-[300vh] bg-transparent">

            {/* STICKY CONTAINER pins the content to the screen */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Ambient Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="w-full px-4 lg:px-8 py-24 z-10">
                    <div className="max-w-[1240px] mx-auto">

                        {/* Header Section */}
                        <div className="flex flex-col items-center text-center mb-16">
                            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                                <span className="text-[11px] font-semibold tracking-widest uppercase text-tertiary">How Callix Works</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white max-w-3xl leading-[1.15]">
                                What if your ads could learn from <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blue-light to-white">your best sales calls?</span>
                            </h2>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 rounded-[32px] md:p-0 backdrop-blur-sm">

                            {/* Left Column: Feature List */}
                            <div className="lg:col-span-5 flex flex-col justify-center pl-4 lg:pl-8">
                                <div className="space-y-8 relative">
                                    {features.map((feature, index) => (
                                        <FeatureItem
                                            key={feature.id}
                                            feature={feature}
                                            index={index}
                                            activeFeature={activeFeature}
                                            smoothProgress={smoothProgress}
                                            handleManualClick={handleManualClick}
                                        />
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
                                        style={{ padding: '16px 32px' }}
                                    >
                                        <span className="text-white text-sm font-bold tracking-wide">Learn more</span>
                                    </ShimmerButton>
                                    <p className="text-[11px] text-zinc-500 mt-4 max-w-xs leading-snug">
                                        * On average brands see at least a 15% increase in ad revenue by applying Callix tracking
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Visual Area */}
                            <div className="lg:col-span-7 h-[400px] lg:h-[450px] relative">
                                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                    {/* Abstract Background - Consistent with TrackingCapabilities */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-white/5" />

                                    {/* Visual Content Switcher */}
                                    <AnimatePresence mode="wait">
                                        {activeFeature === 0 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute inset-0 flex items-center justify-center p-8"
                                            >
                                                <div className="relative w-full max-w-2xl aspect-video bg-[#202124] rounded-lg overflow-hidden flex flex-col shadow-2xl border border-[#3C4043]">
                                                    {/* Top Bar */}
                                                    <div className="h-12 flex items-center justify-between px-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-white font-medium text-sm tracking-wide">
                                                                10:45 AM
                                                            </div>
                                                            <div className="text-[#9aa0a6] text-sm">
                                                                |
                                                            </div>
                                                            <div className="text-[#9aa0a6] text-sm font-medium">
                                                                cix-call-mtg
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center gap-2 bg-[#E8F0FE] px-4 py-1.5 rounded-full shadow-sm">
                                                                <div className="w-2 h-2 rounded-full bg-[#FF6B2C]" />
                                                                <span className="text-[13px] font-semibold text-[#FF6B2C] tracking-tight">Callix is taking notes</span>
                                                            </div>
                                                            <div className="w-8 h-8 rounded-full hover:bg-[#3C4043] flex items-center justify-center cursor-pointer transition-colors">
                                                                <LayoutGrid className="w-5 h-5 text-white" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Video Grid */}
                                                    <div className="flex-1 flex px-4 gap-4 min-h-0 pb-2">
                                                        {/* Sales Rep */}
                                                        <div className="flex-1 bg-[#3C4043] rounded-lg relative overflow-hidden group/video">
                                                            <img
                                                                src="/john.jpg"
                                                                alt="Sales Rep"
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover/video:bg-black/20 transition-colors" />
                                                            <div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                                                                John
                                                            </div>
                                                            <div className="absolute top-3 right-3 bg-[#3C4043] p-1.5 rounded-full">
                                                                <div className="w-1.5 h-3 flex items-end gap-0.5">
                                                                    <div className="w-0.5 bg-green-500 h-2 animate-[bounce_1s_infinite]" />
                                                                    <div className="w-0.5 bg-green-500 h-3 animate-[bounce_1.2s_infinite]" />
                                                                    <div className="w-0.5 bg-green-500 h-1.5 animate-[bounce_0.8s_infinite]" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Prospect */}
                                                        <div className="flex-1 bg-[#3C4043] rounded-lg relative overflow-hidden group/video">
                                                            <img
                                                                src="/emma.jpg"
                                                                alt="Prospect"
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover/video:bg-black/20 transition-colors" />
                                                            <div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 px-2 py-1 rounded backdrop-blur-sm">
                                                                Sarah Miller
                                                            </div>
                                                            <div className="absolute top-3 right-3 bg-black/40 p-1.5 rounded-full backdrop-blur-sm">
                                                                <Mic className="w-3 h-3 text-white" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Bottom Controls */}
                                                    <div className="h-16 flex items-center justify-between px-4 pb-2">
                                                        <div className="text-white text-xs font-medium min-w-[100px]">

                                                        </div>

                                                        <div className="flex items-center gap-3">
                                                            {/* Mic */}
                                                            <button className="w-10 h-10 rounded-full bg-[#3C4043] hover:bg-[#474a4d] flex items-center justify-center transition-colors group">
                                                                <Mic className="w-5 h-5 text-white" />
                                                            </button>
                                                            {/* Camera */}
                                                            <button className="w-10 h-10 rounded-full bg-[#3C4043] hover:bg-[#474a4d] flex items-center justify-center transition-colors">
                                                                <Video className="w-5 h-5 text-white" />
                                                            </button>
                                                            {/* Hand */}
                                                            <button className="w-10 h-10 rounded-full bg-[#3C4043] hover:bg-[#474a4d] flex items-center justify-center transition-colors hidden sm:flex">
                                                                <Hand className="w-5 h-5 text-white" />
                                                            </button>
                                                            {/* Present */}
                                                            <button className="w-10 h-10 rounded-full bg-[#3C4043] hover:bg-[#474a4d] flex items-center justify-center transition-colors hidden sm:flex">
                                                                <MonitorUp className="w-5 h-5 text-white" />
                                                            </button>
                                                            {/* More */}
                                                            <button className="w-10 h-10 rounded-full bg-[#3C4043] hover:bg-[#474a4d] flex items-center justify-center transition-colors hidden sm:flex">
                                                                <MoreVertical className="w-5 h-5 text-white" />
                                                            </button>
                                                            {/* End Call */}
                                                            <button className="w-12 h-10 rounded-full bg-[#EA4335] hover:bg-[#D93025] flex items-center justify-center transition-colors px-4">
                                                                <PhoneOff className="w-5 h-5 text-white fill-white" />
                                                            </button>
                                                        </div>

                                                        <div className="flex items-center gap-3 min-w-[100px] justify-end">
                                                            <button className="w-10 h-10 hover:bg-[#3C4043] rounded-full flex items-center justify-center transition-colors">
                                                                <Info className="w-5 h-5 text-white" />
                                                            </button>
                                                            <button className="w-10 h-10 hover:bg-[#3C4043] rounded-full flex items-center justify-center transition-colors hidden sm:flex">
                                                                <Users className="w-5 h-5 text-white" />
                                                            </button>
                                                            <button className="w-10 h-10 hover:bg-[#3C4043] rounded-full flex items-center justify-center transition-colors hidden sm:flex">
                                                                <MessageSquare className="w-5 h-5 text-white" />
                                                            </button>
                                                            <button className="w-10 h-10 hover:bg-[#3C4043] rounded-full flex items-center justify-center transition-colors">
                                                                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-t-[6px] border-t-white border-r-[5px] border-r-transparent ml-0.5 mt-0.5" />
                                                                <div className="w-3 h-3 bg-transparent border-2 border-white rounded-sm -ml-2 -mt-2" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeFeature === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute inset-0 flex items-center justify-center p-8"
                                            >
                                                <div className="w-full h-full relative group flex flex-col items-center justify-center">

                                                    {/* Electrical circuit background */}
                                                    <svg
                                                        className="absolute inset-0 w-full h-full"
                                                        viewBox="0 0 400 400"
                                                        preserveAspectRatio="xMidYMid slice"
                                                    >
                                                        <defs>
                                                            <linearGradient id="electricBlue" x1="0%" y1="50%" x2="100%" y2="50%">
                                                                <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0" />
                                                                <stop offset="30%" stopColor="#FF6B2C" stopOpacity="0.6" />
                                                                <stop offset="50%" stopColor="#C2410C" stopOpacity="1" />
                                                                <stop offset="70%" stopColor="#FF6B2C" stopOpacity="0.6" />
                                                                <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0" />
                                                            </linearGradient>

                                                            <linearGradient id="electricSilver" x1="0%" y1="50%" x2="100%" y2="50%">
                                                                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
                                                                <stop offset="20%" stopColor="#f1f5f9" stopOpacity="0.7" />
                                                                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                                                                <stop offset="80%" stopColor="#f1f5f9" stopOpacity="0.7" />
                                                                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
                                                            </linearGradient>

                                                            <linearGradient id="electricSilverV" x1="50%" y1="0%" x2="50%" y2="100%">
                                                                <stop offset="0%" stopColor="#cbd5e1" />
                                                                <stop offset="25%" stopColor="#f8fafc" />
                                                                <stop offset="50%" stopColor="#94a3b8" />
                                                                <stop offset="75%" stopColor="#e2e8f0" />
                                                                <stop offset="100%" stopColor="#64748b" />
                                                            </linearGradient>

                                                            <filter id="electricGlow" x="-50%" y="-50%" width="200%" height="200%">
                                                                <feGaussianBlur stdDeviation="3" result="blur" />
                                                                <feMerge>
                                                                    <feMergeNode in="blur" />
                                                                    <feMergeNode in="SourceGraphic" />
                                                                </feMerge>
                                                            </filter>

                                                            <filter id="silverGlow" x="-50%" y="-50%" width="200%" height="200%">
                                                                <feGaussianBlur stdDeviation="2" result="blur" />
                                                                <feMerge>
                                                                    <feMergeNode in="blur" />
                                                                    <feMergeNode in="SourceGraphic" />
                                                                </feMerge>
                                                            </filter>
                                                        </defs>

                                                        {/* Background soft glow - Silver */}
                                                        <g filter="url(#silverGlow)">
                                                            <path d="M0,200 L120,200 L140,180 L160,180 L180,200 L200,200" stroke="url(#electricSilver)" strokeWidth="2" fill="none" opacity="0.3" />
                                                            <path d="M400,200 L280,200 L260,220 L240,220 L220,200 L200,200" stroke="url(#electricSilver)" strokeWidth="2" fill="none" opacity="0.3" />
                                                            {/* Diagonal Background Hints */}
                                                            <path d="M100,100 L180,180" stroke="url(#electricSilver)" strokeWidth="2" fill="none" opacity="0.3" />
                                                            <path d="M300,100 L220,180" stroke="url(#electricSilver)" strokeWidth="2" fill="none" opacity="0.3" />

                                                            {/* Bottom Middle Vertical Extension - Metallic */}
                                                            <path d="M200,400 L200,300 L220,280 L220,100" stroke="url(#electricSilverV)" strokeWidth="2" fill="none" opacity="0.6" />
                                                        </g>

                                                        {/* Main electrical paths - Blue (Orange in definition) */}
                                                        <g filter="url(#electricGlow)">
                                                            <path d="M0,200 L100,200 L120,180 L140,180" stroke="url(#electricBlue)" strokeWidth="1.5" fill="none" opacity="0.7">
                                                                <animate attributeName="stroke-dasharray" values="0,200;200,0;0,200" dur="3s" repeatCount="indefinite" />
                                                            </path>
                                                            <path d="M400,200 L300,200 L280,220 L260,220" stroke="url(#electricBlue)" strokeWidth="1.5" fill="none" opacity="0.7">
                                                                <animate attributeName="stroke-dasharray" values="0,200;200,0;0,200" dur="3s" repeatCount="indefinite" />
                                                            </path>

                                                            {/* Diagonal Feeders Connecting to X */}
                                                            <path d="M80,80 L160,160" stroke="url(#electricBlue)" strokeWidth="1.5" fill="none" opacity="0.6">
                                                                <animate attributeName="stroke-dasharray" values="0,150;150,0;0,150" dur="2.5s" repeatCount="indefinite" />
                                                            </path>
                                                            <path d="M320,80 L240,160" stroke="url(#electricBlue)" strokeWidth="1.5" fill="none" opacity="0.6">
                                                                <animate attributeName="stroke-dasharray" values="0,150;150,0;0,150" dur="2.7s" repeatCount="indefinite" />
                                                            </path>
                                                            <path d="M80,320 L160,240" stroke="url(#electricBlue)" strokeWidth="1.5" fill="none" opacity="0.6">
                                                                <animate attributeName="stroke-dasharray" values="0,150;150,0;0,150" dur="2.9s" repeatCount="indefinite" />
                                                            </path>
                                                            <path d="M320,320 L240,240" stroke="url(#electricBlue)" strokeWidth="1.5" fill="none" opacity="0.6">
                                                                <animate attributeName="stroke-dasharray" values="0,150;150,0;0,150" dur="3.1s" repeatCount="indefinite" />
                                                            </path>
                                                        </g>

                                                        {/* Silver metallic paths */}
                                                        <g filter="url(#silverGlow)">
                                                            <path d="M0,170 L80,170 L100,190 L120,190" stroke="url(#electricSilver)" strokeWidth="1" fill="none" opacity="0.6">
                                                                <animate attributeName="stroke-dasharray" values="0,180;180,0;0,180" dur="2.5s" repeatCount="indefinite" />
                                                            </path>
                                                            <path d="M400,170 L320,170 L300,190 L280,190" stroke="url(#electricSilver)" strokeWidth="1" fill="none" opacity="0.6">
                                                                <animate attributeName="stroke-dasharray" values="0,180;180,0;0,180" dur="2.5s" repeatCount="indefinite" />
                                                            </path>
                                                            <path d="M200,0 L200,100 L180,120 L180,140" stroke="url(#electricSilverV)" strokeWidth="1.5" fill="none" opacity="0.5">
                                                                <animate attributeName="stroke-dasharray" values="0,200;200,0;0,200" dur="3.2s" repeatCount="indefinite" />
                                                            </path>
                                                            <path d="M200,400 L200,300 L220,280 L220,260" stroke="url(#electricSilverV)" strokeWidth="1.5" fill="none" opacity="0.5">
                                                                <animate attributeName="stroke-dasharray" values="0,200;200,0;0,200" dur="3.2s" repeatCount="indefinite" />
                                                            </path>
                                                        </g>

                                                        {/* New Connections to Platforms - Blue/Orange */}
                                                        <g filter="url(#electricGlow)">
                                                            {/* Path to Meta (Top Left) */}
                                                            <path d="M140,140 L100,100 L60,100" stroke="url(#electricBlue)" strokeWidth="2" fill="none" opacity="0.8">
                                                                <animate attributeName="stroke-dasharray" values="0,150;150,0;0,150" dur="2s" repeatCount="indefinite" />
                                                            </path>
                                                            {/* Path to Google Ads (Top Right) */}
                                                            <path d="M260,140 L300,100 L340,100" stroke="url(#electricBlue)" strokeWidth="2" fill="none" opacity="0.8">
                                                                <animate attributeName="stroke-dasharray" values="0,150;150,0;0,150" dur="2.2s" repeatCount="indefinite" />
                                                            </path>
                                                            {/* Path to LinkedIn (Bottom Left) */}
                                                            <path d="M140,260 L100,300 L60,300" stroke="url(#electricBlue)" strokeWidth="2" fill="none" opacity="0.8">
                                                                <animate attributeName="stroke-dasharray" values="0,150;150,0;0,150" dur="2.4s" repeatCount="indefinite" />
                                                            </path>
                                                            {/* Path to YouTube (Bottom Right) */}
                                                            <path d="M260,260 L300,300 L340,300" stroke="url(#electricBlue)" strokeWidth="2" fill="none" opacity="0.8">
                                                                <animate attributeName="stroke-dasharray" values="0,150;150,0;0,150" dur="2.6s" repeatCount="indefinite" />
                                                            </path>
                                                        </g>
                                                    </svg>

                                                    {/* Platform Nodes */}
                                                    <div className="absolute inset-0 z-20 pointer-events-none">
                                                        {/* Meta Node (Top Left) */}
                                                        <div className="absolute top-[20%] left-[10%] w-16 h-16 bg-black/80 rounded-xl border border-white/10 flex items-center justify-center p-3 backdrop-blur-md shadow-[0_0_15px_rgba(255,107,44,0.3)]">
                                                            <img src="/logos/meta.png" alt="Meta" className="w-full h-full object-contain" />
                                                        </div>

                                                        {/* Google Ads Node (Top Right) */}
                                                        <div className="absolute top-[20%] right-[10%] w-16 h-16 bg-black/80 rounded-xl border border-white/10 flex items-center justify-center p-3 backdrop-blur-md shadow-[0_0_15px_rgba(255,107,44,0.3)]">
                                                            <img src="/logos/google_ads.png" alt="Google Ads" className="w-full h-full object-contain" />
                                                        </div>

                                                        {/* LinkedIn Node (Bottom Left) */}
                                                        <div className="absolute bottom-[20%] left-[10%] w-16 h-16 bg-black/80 rounded-xl border border-white/10 flex items-center justify-center p-3 backdrop-blur-md shadow-[0_0_15px_rgba(255,107,44,0.3)]">
                                                            <img src="/logos/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
                                                        </div>

                                                        {/* YouTube Node (Bottom Right) */}
                                                        <div className="absolute bottom-[20%] right-[10%] w-16 h-16 bg-black/80 rounded-xl border border-white/10 flex items-center justify-center p-3 backdrop-blur-md shadow-[0_0_15px_rgba(255,107,44,0.3)]">
                                                            <Youtube className="w-6 h-6 text-white text-red-500 fill-current" />
                                                        </div>
                                                    </div>

                                                    <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                                                        <div className="relative group/x">
                                                            <div className="absolute inset-0 bg-brand-blue/20 blur-[60px] rounded-full group-hover/x:bg-brand-blue/30 transition-all duration-500" />
                                                            <div className="relative z-10 flex items-center justify-center">
                                                                {/* Image X Logo */}
                                                                <img
                                                                    src="/silver-x.png"
                                                                    alt="AI Psychology"
                                                                    className="w-[220px] h-[220px] object-contain drop-shadow-2xl relative z-20 mt-20"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </motion.div>
                                        )}

                                        {activeFeature === 1 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute inset-0 flex items-center justify-center p-8"
                                            >
                                                {/* Glowing Card Container */}
                                                <div className="relative w-full max-w-[380px] bg-[#0F0F11] border border-white/10 rounded-3xl p-6 shadow-2xl">
                                                    {/* Ambient Glow */}
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-[50px] rounded-full pointer-events-none" />
                                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF6B2C]/5 blur-[50px] rounded-full pointer-events-none" />

                                                    {/* Header */}
                                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                                        <div className="relative">
                                                            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/10">
                                                                <img src="/emma.jpg" alt="Prospect" className="w-full h-full object-cover" />
                                                            </div>
                                                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#000] rounded-full flex items-center justify-center border border-white/10">
                                                                <Video className="w-3 h-3 text-white" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-white font-semibold text-lg">Sarah Miller</h3>
                                                            <p className="text-zinc-500 text-xs font-medium uppercase tracking-wide">Vice President • 42m Call</p>
                                                        </div>
                                                    </div>

                                                    {/* Extraction List */}
                                                    <div className="space-y-4 relative z-10">
                                                        {/* Item 1 */}
                                                        <div className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                            <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                                                                <CheckCircle className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="text-white text-sm font-medium">Budget Confirmed</div>
                                                                <div className="text-zinc-500 text-xs">$50k - $75k allocated for Q1</div>
                                                            </div>
                                                        </div>

                                                        {/* Item 2 */}
                                                        <div className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                            <div className="mt-1 w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                                                                <AlertCircle className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="text-white text-sm font-medium">Objection Detected</div>
                                                                <div className="text-zinc-500 text-xs">Currently evaluating Gong</div>
                                                            </div>
                                                        </div>

                                                        {/* Item 3 */}
                                                        <div className="group flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                            <div className="mt-1 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                                                <Calendar className="w-4 h-4" />
                                                            </div>
                                                            <div>
                                                                <div className="text-white text-sm font-medium">Next Steps</div>
                                                                <div className="text-zinc-500 text-xs">Technical demo scheduled for Tues</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Floating Score Badge */}
                                                    <motion.div
                                                        initial={{ scale: 0.9, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        transition={{ delay: 0.2 }}
                                                        className="absolute -right-6 top-20 bg-[#000] border border-[#FF6B2C]/50 shadow-[0_0_20px_rgba(255,107,44,0.3)] p-4 rounded-xl flex flex-col items-center gap-1 rotate-3"
                                                    >
                                                        <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Lead Score</div>
                                                        <div className="text-2xl font-bold text-white flex items-center gap-1">
                                                            92
                                                            <span className="text-sm text-zinc-500 font-normal">/100</span>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        )}
                                        {activeFeature === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute inset-0 flex items-center justify-center gap-4 p-4"
                                            >
                                                {/* Video Ad (Left Card) */}
                                                <motion.div
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="relative w-[230px] h-[400px] bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                                                >
                                                    {/* Image Content Container */}
                                                    <div className="relative w-full h-full group cursor-pointer" onClick={(e) => {
                                                        const overlay = e.currentTarget.querySelector('.play-overlay');
                                                        if (overlay) {
                                                            overlay.classList.add('opacity-0', 'pointer-events-none');
                                                        }
                                                    }}>
                                                        {/* Instagram Header Overlay */}
                                                        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black/60 to-transparent z-20 flex items-center px-3 gap-2">
                                                            <div className="w-7 h-7 rounded-full border border-white/20 overflow-hidden">
                                                                <img src="/logos/meta.png" alt="Profile" className="w-full h-full object-cover bg-white" />
                                                            </div>
                                                            <div>
                                                                <div className="text-white text-xs font-semibold flex items-center gap-1 shadow-black drop-shadow-md">
                                                                    marissaren <span className="text-blue-400 text-[10px]">✓</span>
                                                                </div>
                                                                <div className="text-white/80 text-[9px] shadow-black drop-shadow-md">Sponsored • UGC Ad</div>
                                                            </div>
                                                        </div>

                                                        {/* Main Image/Video */}
                                                        <img src="/ad_video_thumb.png" alt="Video Ad" className="w-full h-full object-cover" />

                                                        {/* Play Button Overlay */}
                                                        <div className="play-overlay absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300 z-10">
                                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl group-hover:scale-110 transition-transform">
                                                                <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                {/* Static Ad (Right Card) */}
                                                <motion.div
                                                    initial={{ x: 20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="relative w-[230px] h-[400px] bg-white rounded-xl overflow-hidden shadow-2xl border border-white/10"
                                                >
                                                    {/* Mock Instagram Header */}
                                                    <div className="h-12 flex items-center px-3 gap-2 bg-white/90 border-b border-zinc-100 absolute top-0 left-0 right-0 z-10">
                                                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-500 p-[2px]">
                                                            <div className="w-full h-full rounded-full bg-white p-[2px]">
                                                                <div className="w-full h-full rounded-full bg-zinc-200" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-black text-xs font-semibold flex items-center gap-1">
                                                                tryarmra <span className="text-blue-500 text-[10px]">✓</span>
                                                            </div>
                                                            <div className="text-zinc-500 text-[9px]">Sponsored</div>
                                                        </div>
                                                    </div>
                                                    <img src="/ad_static.png" alt="Static Ad" className="w-full h-full object-cover mt-12" />
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModernCapabilities;
