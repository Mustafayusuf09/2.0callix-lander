'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    AudioWaveform,
    Wand2,
    ScanFace,
    Gauge,
    ScanSearch,
    Waypoints,
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
    Lightbulb
} from 'lucide-react';
import { ShimmerButton } from './ShimmerButton';

const SecureByDesign: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const features = [
        {
            title: "Conversation Intelligence",
            icon: <AudioWaveform size={20} />,
            color: "from-purple-500 to-indigo-500",
            visual: (
                <div className="w-full h-full p-8 flex flex-col justify-center relative animate-in zoom-in-95 duration-500">
                    <div className="absolute top-[20%] left-[20%] w-48 h-48 bg-purple-500/20 blur-[80px] rounded-full" />
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[24px] p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        <div className="flex gap-4 items-start mb-6">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                <Users size={18} className="text-indigo-400" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <div className="h-2 w-24 bg-zinc-800 rounded-full" />
                                <div className="h-2 w-full bg-zinc-800/50 rounded-full" />
                                <div className="h-2 w-2/3 bg-zinc-800/50 rounded-full" />
                            </div>
                        </div>
                        <div className="flex gap-4 items-start justify-end">
                            <div className="flex-1 space-y-2 text-right">
                                <div className="h-2 w-24 bg-zinc-800 rounded-full ml-auto" />
                                <div className="h-16 w-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl rounded-tr-none border border-indigo-500/20 p-3 flex items-center justify-center relative group">
                                    <p className="text-sm text-indigo-200 font-medium">"I really love how the analytics scale with us..."</p>
                                    <div className="absolute -top-3 -right-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
                                        SENTIMENT: POSITIVE
                                    </div>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                                <span className="text-xs text-purple-400 font-bold">JD</span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <div className="bg-zinc-900/50 border border-white/5 px-3 py-1.5 rounded-lg flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">99.2% Accuracy</span>
                            </div>
                            <div className="bg-zinc-900/50 border border-white/5 px-3 py-1.5 rounded-lg flex items-center gap-2">
                                <Brain size={10} className="text-pink-400" />
                                <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">Emotion Detected</span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            headline: "Understand every sales interaction",
            description: "Automatic transcription with 99.2% accuracy, speaker identification, and deep conversation flow mapping to capture every nuance.",
            subFeatures: [
                { icon: <Mic size={18} className="text-brand-blue" />, title: "99.2% Accuracy", text: "Precision transcription." },
                { icon: <Target size={18} className="text-brand-blue" />, title: "Topic Maps", text: "Track key topics & patterns." },
                { icon: <Brain size={18} className="text-brand-blue" />, title: "Engagement", text: "Score conversation quality." }
            ]
        },
        {
            title: "Customer Profile Intelligence",
            icon: <ScanFace size={20} />,
            color: "from-emerald-500 to-green-500",
            visual: (
                <div className="w-full h-full p-8 flex flex-col justify-center relative animate-in zoom-in-95 duration-500">
                    <div className="absolute bottom-[20%] right-[20%] w-48 h-48 bg-emerald-500/20 blur-[80px] rounded-full" />
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[24px] p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-br from-emerald-400 to-green-600 mb-4 shadow-xl shadow-emerald-900/20">
                            <div className="w-full h-full rounded-full bg-zinc-900 overflow-hidden relative">
                                <div className="w-full h-full bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Jude')] bg-cover" />
                            </div>
                        </div>
                        <h4 className="text-xl text-white font-display">Tech Growth Director</h4>
                        <div className="flex gap-2 justify-center mt-2 mb-4">
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">High Value</span>
                            <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full">Short Sales Cycle</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 w-full">
                            <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                                <div className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold mb-1">Lifetime Value</div>
                                <div className="text-lg text-white font-bold">$42,500</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                                <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold mb-1">Conv. Rate</div>
                                <div className="text-lg text-white font-bold">18.4%</div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            headline: "Know exactly who your best customers are",
            description: "Automatically categorize prospect types and reveal conversion rates, AOV, and LTV by customer profile.",
            subFeatures: [
                { icon: <Users size={18} className="text-brand-blue" />, title: "Auto-Categorization", text: "Segment by behavior." },
                { icon: <TrendingUp size={18} className="text-brand-blue" />, title: "LTV & AOV", text: "Revenue metrics by profile." },
                { icon: <Brain size={18} className="text-brand-blue" />, title: "Psychographics", text: "Behavioral insights." }
            ]
        },
        {
            title: "Ad Creative Generation",
            icon: <Wand2 size={20} />,
            color: "from-blue-500 to-cyan-500",
            visual: (
                <div className="w-full h-full p-8 flex flex-col justify-center relative animate-in zoom-in-95 duration-500">
                    <div className="absolute top-[30%] left-[30%] w-56 h-56 bg-blue-500/20 blur-[90px] rounded-full" />
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[24px] p-6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Wand2 size={12} />
                                </div>
                                <span className="text-xs font-medium text-blue-200">Creative Generator</span>
                            </div>
                            <div className="flex gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500/30" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            {/* Ad Copy Card */}
                            <div className="p-3 bg-zinc-900/50 rounded-xl border border-white/5 group hover:border-blue-500/30 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <FileText size={10} className="text-blue-400" />
                                    <span className="text-[10px] text-zinc-500 font-mono uppercase">Generated Ad Copy</span>
                                </div>
                                <div className="text-sm text-zinc-200 leading-snug">"Stop losing deals to <span className="text-blue-400 bg-blue-500/10 px-1 rounded">bad attribution</span>. See exactly what converts."</div>
                            </div>
                            {/* Video Script Card */}
                            <div className="p-3 bg-zinc-900/50 rounded-xl border border-white/5 group hover:border-pink-500/30 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <Video size={10} className="text-pink-400" />
                                    <span className="text-[10px] text-zinc-500 font-mono uppercase">Video Script • Hook</span>
                                </div>
                                <div className="text-xs text-zinc-400 font-mono p-2 bg-black/40 rounded border border-white/5">
                                    0:00 [Face Camera] "I tried 5 tools..."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            headline: "Turn sales insights into campaigns",
            description: "Generate ad copy and video scripts using actual buyer language and proven messaging backed by millions in sales data.",
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
            visual: (
                <div className="w-full h-full p-8 flex flex-col justify-center relative animate-in zoom-in-95 duration-500">
                    <div className="absolute top-[20%] right-[20%] w-48 h-48 bg-orange-500/20 blur-[80px] rounded-full" />
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[24px] p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                <Gauge size={18} className="text-orange-400" />
                            </div>
                            <div>
                                <div className="text-white font-semibold text-sm">Team Velocity</div>
                                <div className="text-xs text-zinc-500">Live Performance</div>
                            </div>
                        </div>
                        {/* Performance Bars */}
                        <div className="space-y-4">
                            <div className="group">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-zinc-400 group-hover:text-white transition-colors">Win Rate</span>
                                    <span className="text-orange-400">32%</span>
                                </div>
                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="w-[32%] h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-zinc-400 group-hover:text-white transition-colors">Quota Attainment</span>
                                    <span className="text-emerald-400">104%</span>
                                </div>
                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="w-[85%] h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 flex gap-3">
                                <div className="flex-1 bg-white/5 p-3 rounded-lg border border-white/5">
                                    <span className="text-[10px] text-zinc-500 uppercase block mb-1">Objection</span>
                                    <span className="text-xs text-white">"Pricing" spike in Q3</span>
                                </div>
                                <div className="flex-1 bg-white/5 p-3 rounded-lg border border-white/5">
                                    <span className="text-[10px] text-zinc-500 uppercase block mb-1">Forecast</span>
                                    <span className="text-xs text-white">On Track (+5%)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            headline: "Help your team close more deals",
            description: "Empower reps with performance benchmarking, common objection insights, and win/loss pattern analysis.",
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
            visual: (
                <div className="w-full h-full p-8 flex flex-col justify-center relative animate-in zoom-in-95 duration-500">
                    <div className="absolute top-[20%] left-[30%] w-48 h-48 bg-pink-500/20 blur-[80px] rounded-full" />
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[24px] p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <Sparkles size={14} className="text-pink-400" />
                                </div>
                                <div className="w-full bg-zinc-900/80 border border-white/10 rounded-xl py-3 pl-9 pr-4 text-xs text-zinc-300">
                                    "Show me calls where prospects mentioned competitors"
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider pl-1">Results Found (12)</div>
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5 hover:border-pink-500/30 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-white text-sm font-medium">Demo #402 - Tech Corp</span>
                                        <span className="text-[10px] text-zinc-500">2h ago</span>
                                    </div>
                                    <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">"...we're mostly looking at <span className="text-pink-400 bg-pink-500/10 px-1 rounded">Salesforce</span> right now..."</p>
                                </div>
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5 hover:border-pink-500/30 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-white text-sm font-medium">Discovery - Acme Inc</span>
                                        <span className="text-[10px] text-zinc-500">Yesterday</span>
                                    </div>
                                    <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">"...how do you compare to <span className="text-pink-400 bg-pink-500/10 px-1 rounded">HubSpot</span> feature-wise..."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            headline: "Ask questions, get instant answers",
            description: "Conversational AI that searches across your entire call library. Find trends, competitors, and objections instantly.",
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
            visual: (
                <div className="w-full h-full p-8 flex flex-col justify-center relative animate-in zoom-in-95 duration-500">
                    <div className="absolute top-[20%] right-[20%] w-48 h-48 bg-cyan-500/20 blur-[80px] rounded-full" />
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[24px] p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                <Waypoints size={18} className="text-cyan-400" />
                            </div>
                            <div>
                                <div className="text-white font-semibold text-sm">Revenue Mapping</div>
                                <div className="text-xs text-cyan-400">Marketing to Closed-Won</div>
                            </div>
                        </div>
                        {/* Journey Steps */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 opacity-60">
                                <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-500 text-[10px]">1</div>
                                <div className="flex-1 bg-black/20 p-2 rounded-lg border border-white/5">
                                    <span className="text-zinc-500 text-xs">LinkedIn Ad (UTM: campaign_a)</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-[10px]">2</div>
                                <div className="flex-1 bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20 shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] flex justify-between items-center">
                                    <span className="text-cyan-100 text-xs font-medium">Quality Score: 92</span>
                                    <span className="text-[10px] text-cyan-400">High Intent</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 opacity-80">
                                <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-[10px]">3</div>
                                <div className="flex-1 bg-black/20 p-2 rounded-lg border border-white/5 flex justify-between items-center">
                                    <span className="text-zinc-300 text-xs">Closed Won</span>
                                    <span className="text-emerald-400 text-xs font-bold">$12k ARR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            headline: "Connect marketing spend to revenue",
            description: "Full UTM tracking from ad click to closed deal, showing you CAC by profile, lead quality scores, and true ROI.",
            subFeatures: [
                { icon: <CheckCircle2 size={18} className="text-brand-blue" />, title: "Full UTM Tracking", text: "Click to close visibility." },
                { icon: <TrendingUp size={18} className="text-brand-blue" />, title: "CAC by Profile", text: "Cost per acquisition details." },
                { icon: <Sparkles size={18} className="text-brand-blue" />, title: "Lead Scoring", text: "Quality based on source." }
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
                    <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[0.95] mb-4 text-white">
                        Everything you need to{' '}
                        <span className="italic bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent">
                            scale
                        </span>
                    </h2>
                    <p className="text-[18px] text-zinc-400 max-w-[640px] mx-auto leading-relaxed font-light tracking-wide">
                        Infrastructure that adapts to every stage of your growth.<br className="hidden md:block" />
                        Built for revenue teams that demand precision.
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
