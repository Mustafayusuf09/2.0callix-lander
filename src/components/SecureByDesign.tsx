'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    AudioWaveform,
    Wand2,
    ScanFace,
    Gauge,
    ScanSearch,
    Waypoints,
    Zap,
    Mic,
    Target,
    Workflow,
    TrendingUp,
    Users,
    Brain,
    Layers,
    BarChart3,
    Sparkles,
    ArrowRight,
    Lock,
    Shield,
    Server,
    Search,
    Database,
    Fingerprint,
    FileCheck,
    Eye,
    Network,
    CheckCircle2,
    Video,
    FileText,
    MessageSquare,
    PieChart,
    Lightbulb,
    Facebook,
    Linkedin,
    Globe,
    Image,
    MonitorPlay,
    Check,
    Loader2,
    MousePointer2,
    Twitter
} from 'lucide-react';
import { ShimmerButton } from './ShimmerButton';

// --- SUB-COMPONENTS FOR VISUALS ---

const ConversationVisual: React.FC = () => {
    const [step, setStep] = useState(0); // 0: Call, 1: Transition/Analysis

    useEffect(() => {
        // Variable duration loop
        let timer: NodeJS.Timeout;
        if (step === 0) {
            // Active call state - shorter duration
            timer = setTimeout(() => setStep(1), 4000);
        } else {
            // Analysis state - longer duration for reading
            timer = setTimeout(() => setStep(0), 10000);
        }
        return () => clearTimeout(timer);
    }, [step]);

    return (
        <div className="w-full h-full p-4 sm:p-8 flex flex-col justify-center relative">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[400px] mx-auto aspect-video sm:aspect-[4/3]">
                <AnimatePresence mode="wait">
                    {step === 0 ? (
                        <motion.div
                            key="call"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                        >
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] mb-4">
                                <div className="w-full h-full rounded-full bg-zinc-950 overflow-hidden relative">
                                    <div className="w-full h-full bg-[url('/emma.jpg')] bg-cover bg-center" />
                                </div>
                            </div>
                            <h3 className="text-white text-xl font-medium mb-1.5">Sarah Miller</h3>
                            <div className="text-zinc-500 text-sm mb-8 font-mono">04:12 • Connected</div>

                            <div className="flex gap-1 items-end h-12">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1.5 bg-indigo-500 rounded-full"
                                        animate={{ height: [12, 32, 12] }}
                                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="analysis"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-2 sm:inset-4 bg-[#0C0C0E]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02] shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 p-[1px] ring-1 ring-indigo-500/30 overflow-hidden">
                                        <img src="/emma.jpg" alt="Sarah Miller" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <div className="text-zinc-100 text-sm font-medium leading-none mb-1">Sarah Miller</div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Analysis Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content - 3 Stacked Cards */}
                            <div className="p-2 flex flex-col gap-2 h-full overflow-hidden min-h-0">
                                {/* Summary Block */}
                                <div className="flex-1 min-h-0 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-1">
                                        <span>Call Summary</span>
                                    </div>
                                    <div className="text-[11px] text-zinc-300 leading-snug line-clamp-2">
                                        Budget allocation confirmed for Q3 rollout. Stakeholders aligned on timeline.
                                    </div>
                                </div>

                                {/* Buyer Intent */}
                                <div className="flex-1 min-h-0 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3 relative flex flex-col justify-center group overflow-hidden">
                                    <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex items-center justify-between relative z-10 mb-1">
                                        <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">Buyer Intent</div>
                                        <TrendingUp size={14} className="text-emerald-400 opacity-80" />
                                    </div>
                                    <div className="text-lg font-medium text-emerald-400 relative z-10">96%</div>
                                </div>

                                {/* Objection */}
                                <div className="flex-1 min-h-0 bg-red-500/5 border border-red-500/10 rounded-xl p-3 relative flex flex-col justify-center group overflow-hidden">
                                    <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex items-center justify-between relative z-10 mb-1">
                                        <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">Major Objection</div>
                                        <Shield size={14} className="text-red-400 opacity-80" />
                                    </div>
                                    <div className="text-sm font-medium text-red-400 relative z-10">Competitor Lock-in</div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const AdCreativeVisual: React.FC = () => {
    const [step, setStep] = useState(0); // 0: Platform, 1: Type, 2: Format, 3: Generating, 4: Result
    const [showHighlight, setShowHighlight] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 5);
        }, 3000); // 3s per step
        return () => clearInterval(timer);
    }, []);

    // Sync highlight with cursor click
    useEffect(() => {
        setShowHighlight(false);
        const timer = setTimeout(() => {
            setShowHighlight(true);
        }, 900); // Highlight after cursor "clicks" (approx 0.4 * 2s animation)
        return () => clearTimeout(timer);
    }, [step]);

    // Custom Icon Components for Brands
    const MetaIcon = ({ className, size }: { className?: string, size?: number }) => (
        <img
            src="/logos/meta.png"
            alt="Meta"
            style={{ width: size || 24, height: size || 24 }}
            className={`object-contain ${className}`}
        />
    );

    const GoogleAdsIcon = ({ className, size }: { className?: string, size?: number }) => (
        <img
            src="/logos/google_ads.png"
            alt="Google Ads"
            style={{ width: size || 24, height: size || 24 }}
            className={`object-contain ${className}`}
        />
    );

    const XIcon = ({ className, size }: { className?: string, size?: number }) => (
        <svg viewBox="0 0 24 24" fill="currentColor" width={size || 24} height={size || 24} className={className}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );

    const LadyIcon = ({ className, size }: { className?: string, size?: number }) => (
        <img
            src="/emma.jpg"
            alt="Lady"
            style={{ width: size || 24, height: size || 24 }}
            className={`object-cover rounded-full ${className}`}
        />
    );

    const steps = [
        { label: "Platform", items: [{ icon: MetaIcon, label: "Meta", active: true }, { icon: GoogleAdsIcon, label: "Google Ads" }, { icon: XIcon, label: "X Ads" }] },
        { label: "Choose Avatar", items: [{ icon: Users, label: "Founder Avatar" }, { icon: LadyIcon, label: "Sales Rep Avatar", active: true }, { icon: Users, label: "Marketing Director Avatar" }] },
        { label: "Format", items: [{ icon: MonitorPlay, label: "Video", active: true }, { icon: Image, label: "Static" }] },
        { label: "Generating", items: [] },
        { label: "Complete", items: [] }
    ];

    return (
        <div className="w-full h-full p-4 sm:p-8 flex flex-col justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[500px] mx-auto aspect-video sm:aspect-[16/10] flex flex-col">
                {/* Progress Bar */}
                <div className="flex gap-2 mb-8">
                    {[0, 1, 2, 3, 4].map(i => (
                        <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? "bg-gradient-to-r from-orange-500 to-purple-600" : "bg-zinc-800"}`} />
                    ))}
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center">
                    <AnimatePresence mode="wait">
                        {step < 3 ? (
                            <motion.div
                                key={`step-${step}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <h4 className="text-zinc-500 text-sm uppercase tracking-widest font-medium mb-8">{steps[step].label}</h4>
                                <div className="flex justify-center gap-6">
                                    {steps[step].items.map((item, idx) => {
                                        const isActive = item.active && showHighlight;
                                        return (
                                            <div
                                                key={idx}
                                                className={`relative flex flex-col items-center gap-5 p-8 rounded-2xl border transition-all duration-500 min-w-[140px] ${isActive
                                                    ? "bg-gradient-to-br from-orange-500/10 to-purple-600/10 border-orange-500/50 text-white shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] scale-110 z-10"
                                                    : "bg-white/5 border-white/5 text-zinc-600 grayscale opacity-40 scale-95"}`}
                                            >
                                                <item.icon size={32} className={isActive ? "text-orange-400" : ""} />
                                                <span className="text-sm font-medium tracking-wide">{item.label}</span>

                                                {/* Cursor Animation - Rendered based on static 'active' to show the action */}
                                                {item.active && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 40, y: 40 }}
                                                        animate={{
                                                            opacity: [0, 1, 1, 0],
                                                            x: [40, 0, 0, 0],
                                                            y: [40, 0, 0, 0],
                                                            scale: [1, 1, 0.8, 1]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            times: [0, 0.3, 0.4, 1],
                                                            ease: "easeInOut"
                                                        }}
                                                        className="absolute -bottom-6 -right-6 z-50 pointer-events-none drop-shadow-xl"
                                                    >
                                                        <MousePointer2 size={32} className="fill-white text-black" />
                                                    </motion.div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ) : step === 3 ? (
                            <motion.div
                                key="generating"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center justify-center gap-6"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 blur-2xl rounded-full opacity-50 animate-pulse" />
                                    <Loader2 size={56} className="text-white animate-spin relative z-10" />
                                </div>
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 text-sm font-medium animate-pulse tracking-wide">
                                    Generating your asset...
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="w-full relative px-2"
                            >
                                <div className="absolute inset-x-2 inset-y-0 bg-gradient-to-t from-black/90 to-transparent z-10 rounded-xl pointer-events-none" />
                                <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden relative border border-white/10 group shadow-2xl">
                                    {/* Mock Video UI */}
                                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative">
                                        {/* Abstract content preview */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50" />
                                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
                                            <MonitorPlay size={28} className="text-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-orange-500 to-purple-600"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2, ease: "linear" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-2 z-30">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-white/20"
                                    >
                                        <Check size={12} strokeWidth={3} /> READY
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};


// --- MAIN COMPONENT ---


const SalesPerformanceVisual: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden group flex items-center bg-transparent">
            {/* Dashboard Mockup Container - Positioned to the right of the popup */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-12 bottom-6 right-6 left-[280px] sm:left-[340px] bg-[#0C0C0E]/80 border-t border-l border-white/10 rounded-2xl overflow-hidden z-0"
            >
                {/* The Mockup Image */}
                <div className="relative w-full h-full">
                    <img
                        src="/dashboard-mockup.png"
                        alt="Dashboard"
                        className="w-full h-full object-cover object-left-top select-none grayscale-[0.2]"
                    />

                    {/* Fade Out Edges */}
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0B] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
                </div>
            </motion.div>

            {/* Popup Card - Pushed to Left & Overlapping */}
            <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
                className="relative z-20 w-fit max-w-[320px] ml-4 sm:ml-10"
            >
                <div className="relative">
                    {/* Card Glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 blur-[60px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />

                    <div className="p-6 flex flex-col items-center text-center relative z-10">


                        <div className="w-24 h-24 flex items-center justify-center relative mb-4">
                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 96 96">
                                <circle cx="48" cy="48" r="42" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                                <motion.circle
                                    cx="48" cy="48" r="42"
                                    stroke="url(#deal-probability-gradient)"
                                    strokeWidth="6"
                                    fill="transparent"
                                    strokeDasharray={263.89}
                                    strokeDashoffset={263.89}
                                    animate={{ strokeDashoffset: 47.5 }} // ~82% of 263.89 (approx 216.39 visible) -> offset ~47.5
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="deal-probability-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#f97316" />
                                        <stop offset="100%" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="flex flex-col items-center z-10">
                                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400">82%</span>
                            </div>
                        </div>

                        <h3 className="text-zinc-100 font-medium text-lg mb-1">Nexus Enterprise</h3>
                        <p className="text-xs text-zinc-400 mb-6">Probability to Close</p>

                        <div className="w-full space-y-2">
                            <div className="flex items-center gap-2 text-xs text-zinc-300 bg-white/5 p-2 rounded-lg border border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Budget Approved
                            </div>
                            <div className="flex items-center gap-2 text-xs text-zinc-300 bg-white/5 p-2 rounded-lg border border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Decision Maker Involved
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


const AiSearchVisual: React.FC = () => {
    const [displayText, setDisplayText] = useState("");
    const [showResults, setShowResults] = useState(false);
    const fullText = '"Show me calls where prospects mentioned competitors"';

    useEffect(() => {
        let isMounted = true;
        const runSequence = async () => {
            while (isMounted) {
                setDisplayText("");
                setShowResults(false);
                await new Promise(r => setTimeout(r, 1000));
                if (!isMounted) break;

                for (let i = 1; i <= fullText.length; i++) {
                    if (!isMounted) break;
                    setDisplayText(fullText.slice(0, i));
                    await new Promise(r => setTimeout(r, 30));
                }

                if (!isMounted) break;
                await new Promise(r => setTimeout(r, 400));
                if (!isMounted) break;
                setShowResults(true);
                await new Promise(r => setTimeout(r, 5000));
            }
        };
        runSequence();
        return () => { isMounted = false; };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        },
        exit: { opacity: 0 }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full h-full p-8 flex flex-col justify-center relative">
            <div className="absolute top-[20%] left-[30%] w-48 h-48 bg-pink-500/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[24px] p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col w-full">
                <div className="mb-6 shrink-0 relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Search size={14} className="text-pink-400" />
                    </div>
                    <div className="w-full bg-zinc-900/80 border border-white/10 rounded-xl py-3 pl-9 pr-4 text-xs text-zinc-300 h-10 flex items-center shadow-inner">
                        {displayText}<span className="animate-pulse ml-0.5 text-pink-400">|</span>
                    </div>
                </div>

                <div className="min-h-[160px]">
                    <AnimatePresence mode="wait">
                        {showResults && (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-2"
                            >
                                <motion.div variants={itemVariants} className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider pl-1 mb-2">
                                    Results Found (12)
                                </motion.div>
                                <motion.div variants={itemVariants} className="bg-white/5 p-3 rounded-xl border border-white/5 hover:border-pink-500/30 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-white text-sm font-medium">Demo call w/ Tech Corp</span>
                                        <span className="text-[10px] text-zinc-500">2h ago</span>
                                    </div>
                                    <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">"...we're mostly looking at <span className="text-pink-400 bg-pink-500/10 px-1 rounded">Salesforce</span> right now..."</p>
                                </motion.div>
                                <motion.div variants={itemVariants} className="bg-white/5 p-3 rounded-xl border border-white/5 hover:border-pink-500/30 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-white text-sm font-medium">Sales Call w/ Acme Inc</span>
                                        <span className="text-[10px] text-zinc-500">Yesterday</span>
                                    </div>
                                    <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">"...how do you compare to <span className="text-pink-400 bg-pink-500/10 px-1 rounded">HubSpot</span> feature-wise..."</p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};


const AttributionAnalyticsVisual: React.FC = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const duration = 2500;
        const start = 0;
        const end = 128.5;
        const startTime = performance.now();
        let animationFrameId: number;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out expo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setValue(start + (end - start) * ease);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="w-full h-full relative overflow-hidden group flex items-center justify-end bg-transparent">
            {/* Dashboard Mockup - Positioned Left */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-12 bottom-6 left-6 right-[280px] sm:right-[340px] bg-[#0C0C0E]/80 border-t border-r border-white/10 rounded-tr-2xl overflow-hidden z-0"
            >
                <div className="relative w-full h-full">
                    <img
                        src="/dashboard-mockup.png"
                        alt="Dashboard"
                        className="w-full h-full object-cover object-top select-none grayscale-[0.2]"
                    />
                    {/* Fade Out Edges - Left & Bottom */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0B] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
                </div>
            </motion.div>

            {/* Revenue Card - Positioned Right */}
            <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
                className="relative z-20 w-fit max-w-[320px] mr-4 sm:mr-10"
            >
                <div className="relative">
                    {/* Glows */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />

                    <div className="p-6 flex flex-col relative z-10 w-[240px]">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-6">
                            <Waypoints size={12} className="text-cyan-400" />
                            Revenue Impact
                        </div>

                        <div className="mb-6">
                            <div className="text-zinc-400 text-xs mb-1">Total Attributed</div>
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400">
                                ${value.toFixed(1)}k
                            </div>
                        </div>

                        <div className="space-y-4 w-full">
                            <div>
                                <div className="flex justify-between text-[11px] mb-1">
                                    <span className="text-zinc-300">Paid Social</span>
                                    <span className="text-zinc-500">$84k</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "65%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-cyan-500 rounded-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[11px] mb-1">
                                    <span className="text-zinc-300">Search</span>
                                    <span className="text-zinc-500">$32k</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "25%" }}
                                        transition={{ duration: 1, delay: 0.7 }}
                                        className="h-full bg-blue-500 rounded-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[11px] mb-1">
                                    <span className="text-zinc-300">Organic</span>
                                    <span className="text-zinc-500">$12k</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "10%" }}
                                        transition={{ duration: 1, delay: 0.9 }}
                                        className="h-full bg-indigo-500 rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


const PixelOptimizationVisual: React.FC = () => {
    return (
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#050505]">
            {/* Sophisticated Background Grid */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
                }}
            />
            {/* Ambient Nebula Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex items-center gap-6 sm:gap-10 relative z-10 px-4">

                {/* 1. Signals Source (Left Node) */}
                <div className="relative group">
                    {/* Active Halo */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="w-24 h-24 rounded-full bg-[#0A0A0B] border border-white/10 flex items-center justify-center shadow-2xl relative z-10 overflow-hidden ring-1 ring-white/5 group-hover:ring-white/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

                        {/* Data Visualization Bars */}
                        <div className="flex items-end justify-center gap-2 h-10">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 bg-[#FF6B2C] rounded-[2px] shadow-[0_0_10px_rgba(255,107,44,0.4)]"
                                    animate={{
                                        height: i === 1 ? [24, 40, 24] : [16, 32, 16],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{
                                        duration: 1.5 + i * 0.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.2
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-medium whitespace-nowrap opacity-60">
                        Live Signals
                    </div>
                </div>

                {/* 2. Optimization Flow (Connector) */}
                <div className="flex items-center gap-0 relative">
                    {/* Left Line */}
                    <div className="w-8 sm:w-12 h-[1px] bg-zinc-800 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-full opacity-50"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    {/* Central Processing Node */}
                    <div className="w-10 h-10 rounded-full bg-[#0F0F11] border border-white/10 flex items-center justify-center z-20 shadow-[0_0_20px_-5px_rgba(0,0,0,0.8)] relative">
                        <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse" />
                        <img src="/callix-chevron-new.png" alt="Callix AI" className="w-5 h-5 object-contain opacity-90" />
                    </div>

                    {/* Right Line */}
                    <div className="w-8 sm:w-12 h-[1px] bg-zinc-800 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-full opacity-50"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: 0.1 }}
                        />
                    </div>
                </div>

                {/* 3. Ad Platforms (Right Grid) */}
                <div className="relative">
                    <div className="grid grid-cols-2 gap-2.5 p-3 rounded-[20px] bg-[#0A0A0B] border border-white/10 shadow-2xl relative z-10 ring-1 ring-white/5">
                        {/* Google */}
                        {/* Meta */}
                        <div className="w-10 h-10 rounded-full bg-zinc-900/50 flex items-center justify-center border border-white/5 transition-all">
                            <img src="/logos/meta.png" alt="Meta" className="w-5 h-5 object-contain opacity-100" />
                        </div>

                        {/* LinkedIn */}
                        <div className="w-10 h-10 rounded-full bg-zinc-900/50 flex items-center justify-center border border-white/5 transition-all">
                            <img src="/logos/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain opacity-100" />
                        </div>

                        {/* Google Ads */}
                        <div className="w-10 h-10 rounded-full bg-zinc-900/50 flex items-center justify-center border border-white/5 transition-all">
                            <img src="/logos/google_ads_new.png" alt="Google Ads" className="w-5 h-5 object-contain opacity-100" />
                        </div>

                        {/* X (Twitter) */}
                        <div className="w-10 h-10 rounded-full bg-zinc-900/50 flex items-center justify-center border border-white/5 transition-all">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-medium whitespace-nowrap opacity-60">
                        Targeting
                    </div>
                </div>
            </div>
        </div>
    );
};

const SecureByDesign: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const features = [
        {
            title: "Conversation Intelligence",
            icon: <AudioWaveform size={20} />,
            color: "from-purple-500 to-indigo-500",
            visual: <ConversationVisual />,
            headline: "Conversation Intelligence",
            description: "Extract buyer signals, objections, and intent from every call.",
            subFeatures: [
                { icon: <Mic size={18} className="text-brand-blue" />, title: "99.2% Accuracy", text: "Precision transcription." },
                { icon: <Target size={18} className="text-brand-blue" />, title: "Topic Maps", text: "Track key topics & patterns." },
                { icon: <Brain size={18} className="text-brand-blue" />, title: "Engagement", text: "Score conversation quality." }
            ]
        },
        {
            title: "Ad Creative Generation",
            icon: <Wand2 size={20} />,
            color: "from-blue-500 to-cyan-500",
            visual: <AdCreativeVisual />,
            headline: "Ad Creative Generation",
            description: "Turn call insights into ad creatives automatically.",
            subFeatures: [
                { icon: <FileText size={18} className="text-brand-blue" />, title: "Buyer Language", text: "Prompts from real calls." },
                { icon: <Video size={18} className="text-brand-blue" />, title: "Video Scripts", text: "Tailored to profiles." },
                { icon: <MessageSquare size={18} className="text-brand-blue" />, title: "Messaging", text: "Data-backed angles." }
            ]
        },
        {
            title: "Sales Performance Tools",
            icon: <Gauge size={20} />,
            color: "from-orange-500 to-red-500",
            visual: <SalesPerformanceVisual />,
            headline: "Sales Performance Tools",
            description: "Score reps, coach on patterns, predict close probability.",
            subFeatures: [
                { icon: <BarChart3 size={18} className="text-brand-blue" />, title: "Benchmarking", text: "Compare rep performance." },
                { icon: <Target size={18} className="text-brand-blue" />, title: "Objections", text: "Identify common blockers." },
                { icon: <TrendingUp size={18} className="text-brand-blue" />, title: "Forecasting", text: "Predict future revenue." }
            ]
        },
        {
            title: "Ai Search",
            icon: <ScanSearch size={20} />,
            color: "from-pink-500 to-rose-500",
            visual: <AiSearchVisual />,
            headline: "Ai Search",
            description: "Ask anything about your pipeline — get instant answers.",
            subFeatures: [
                { icon: <Search size={18} className="text-brand-blue" />, title: "Instant Search", text: "Query your entire library." },
                { icon: <Sparkles size={18} className="text-brand-blue" />, title: "Trend Spotting", text: "Identify patterns early." },
                { icon: <FileText size={18} className="text-brand-blue" />, title: "Export", text: "Create playbooks instantly." }
            ]
        },
        {
            title: "Attribution & Analytics",
            icon: <Waypoints size={20} />,
            color: "from-cyan-500 to-blue-500",
            visual: <AttributionAnalyticsVisual />,
            headline: "Attribution & Analytics",
            description: "Track the full journey from ad click to closed deal.",
            subFeatures: [
                { icon: <CheckCircle2 size={18} className="text-brand-blue" />, title: "Full UTM Tracking", text: "Click to close visibility." },
                { icon: <TrendingUp size={18} className="text-brand-blue" />, title: "CAC by Profile", text: "Cost per acquisition details." },
                { icon: <Sparkles size={18} className="text-brand-blue" />, title: "Lead Scoring", text: "Quality based on source." }
            ]
        },
        {
            title: "Pixel Optimization",
            icon: <ScanFace size={20} />, // Re-using ScanFace as a placeholder for pixel/targeting
            color: "from-emerald-500 to-green-500",
            visual: <PixelOptimizationVisual />,
            headline: "Pixel Optimization",
            description: "Send call outcomes and lead quality signals back to ad platforms for smarter targeting.",
            subFeatures: [
                { icon: <Target size={18} className="text-brand-blue" />, title: "Signal Loops", text: "Feed offline data back." },
                { icon: <TrendingUp size={18} className="text-brand-blue" />, title: "Better Targeting", text: "Train ads on revenue." },
                { icon: <CheckCircle2 size={18} className="text-brand-blue" />, title: "Match Rates", text: "High fidelity matching." }
            ]
        }
    ];

    return (
        <section className="w-full px-4 lg:px-8 pt-16 pb-24 lg:pt-20 lg:pb-40 z-10 bg-transparent relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">YOUR AGENTIC CMO</span>
                    </div>

                    <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[0.95] mb-4 text-white">
                        Everything you need to{' '}
                        <span className="italic bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent">
                            scale.
                        </span>
                    </h2>
                    <p className="text-[18px] text-zinc-400 max-w-[640px] mx-auto leading-relaxed font-light tracking-wide">
                        The only platform that aligns marketing and sales around actual revenue signals.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch h-[700px] lg:h-[600px]">
                    {/* Tab Sidebar */}
                    <div className="lg:col-span-3 flex flex-col gap-3 h-full">
                        <div className="flex flex-col gap-0.5 p-1.5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm h-full overflow-y-auto custom-scrollbar">
                            {features.map((feature, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 text-left relative overflow-hidden ${activeTab === index
                                        ? 'bg-[#1C1C1F] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] border border-white/10'
                                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent'
                                        }`}
                                >
                                    {activeTab === index && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none" />
                                    )}
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10 ${activeTab === index
                                        ? 'bg-gradient-to-br from-orange-400 to-indigo-600 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_16px_rgba(79,70,229,0.4)] border border-white/20'
                                        : 'bg-zinc-900/50 text-zinc-500 group-hover:text-zinc-300 border border-white/5 group-hover:border-white/10 group-hover:bg-zinc-800'
                                        }`}>
                                        {feature.icon}
                                    </div>
                                    <span className="text-[15px] font-medium tracking-wide relative z-10">
                                        {feature.title}
                                    </span>
                                </button>
                            ))}

                            <div className="mt-auto p-4 m-1.5 rounded-xl bg-gradient-to-b from-zinc-900/50 to-black/50 border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-[40px] pointer-events-none" />
                                <h4 className="text-sm font-medium text-white mb-1 relative z-10">Ready to scale?</h4>
                                <p className="text-[11px] text-zinc-400 mb-3 leading-relaxed relative z-10 max-w-[90%]">
                                    Join high-growth revenue teams using Callix.
                                </p>
                                <ShimmerButton
                                    className="w-full h-9 text-xs font-medium shadow-lg"
                                    background="#0A0A0B"
                                    shimmerColor="#FFFFFF"
                                    shimmerSize="0.05em"
                                    borderRadius="100px" // Full pill shape as requested
                                >
                                    <span className="relative z-10 text-white group-hover:text-white/90 transition-colors">Book a Demo</span>
                                </ShimmerButton>
                            </div>
                        </div>
                    </div>

                    {/* Main Visual Area */}
                    <div className="lg:col-span-9 h-full">
                        <div className="h-full bg-[#0A0A0B] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col group">
                            {/* Top: Visualization Area */}
                            <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        {features[activeTab].visual}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Bottom: Text Content */}
                            <div className="bg-[#121214] p-5 lg:p-6 pb-16 lg:pb-20 border-t border-white/5 relative z-20">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-[22px] font-display font-medium text-white">
                                            {features[activeTab].headline}
                                        </h3>
                                        <p className="text-[14px] text-zinc-400 leading-relaxed mb-5 max-w-2xl font-light">
                                            {features[activeTab].description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {features[activeTab].subFeatures.map((sub, i) => (
                                                <div key={i} className="bg-zinc-900/50 border border-white/5 p-3 rounded-xl hover:border-white/10 transition-colors group/card">
                                                    <div className="mb-2 p-1.5 bg-zinc-800/50 rounded-lg w-fit border border-white/5 group-hover/card:scale-105 transition-transform">
                                                        {sub.icon}
                                                    </div>
                                                    <div className="text-white font-semibold text-[13px] mb-0.5">{sub.title}</div>
                                                    <div className="text-zinc-500 text-[11px] leading-relaxed">{sub.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecureByDesign;
