'use client';

import React, { useState } from 'react';
import {
    AudioWaveform,
    Wand2,
    ScanFace,
    Gauge,
    ScanSearch,
    Route,
    Mic,
    Target,
    BrainCircuit,
    Zap,
    Clapperboard,
    TrendingUp,
    Component,
    BadgeDollarSign,
    TextSearch,
    Crosshair,
    Film,
    MessagesSquare,
    Radar,
    FileCheck,
    MousePointer2,
    PieChart,
    Sparkles,
    Search,
    ArrowRight,
    Video
} from 'lucide-react';

type ProductFeature = 'conversation' | 'customer' | 'creative' | 'sales' | 'search' | 'attribution';

interface SubFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface FeatureData {
    id: ProductFeature;
    icon: React.ReactNode;
    sidebarLabel: string;
    title: string;
    description: string;
    subFeatures: SubFeature[];
}

const features: FeatureData[] = [
    {
        id: 'conversation',
        icon: <AudioWaveform size={20} />,
        sidebarLabel: 'Conversation Intelligence',
        title: 'Understand every interaction',
        description: 'Callix records, transcribes, and analyzes every call to uncover what top performers do differently and why deals are won or lost.',
        subFeatures: [
            {
                icon: <Mic size={18} />,
                title: '99% Accuracy',
                description: 'Automatic transcription with speaker separation.'
            },
            {
                icon: <Target size={18} />,
                title: 'Topic Extraction',
                description: 'Track competitor mentions and objections automatically.'
            },
            {
                icon: <BrainCircuit size={18} />,
                title: 'Sentiment Analysis',
                description: 'Measure customer engagement and buying intent.'
            }
        ]
    },
    {
        id: 'creative',
        icon: <Wand2 size={20} />,
        sidebarLabel: 'Ad Creative Generation',
        title: 'Turn insights into high-performing ads',
        description: 'Stop guessing what messaging works. Callix generates ad copy and video scripts using the exact language your best customers use.',
        subFeatures: [
            {
                icon: <Zap size={18} />,
                title: 'Instant Ad Copy',
                description: 'Generate high-converting headlines in seconds.'
            },
            {
                icon: <Clapperboard size={18} />,
                title: 'Video Scripts',
                description: 'Scripts tailored to your best customer profiles.'
            },
            {
                icon: <TrendingUp size={18} />,
                title: 'Psychographic Hooks',
                description: 'Messaging that targets specific pain points.'
            }
        ]
    },
    {
        id: 'customer',
        icon: <ScanFace size={20} />,
        sidebarLabel: 'Customer Profiles',
        title: 'Know your best customers',
        description: 'Callix builds dynamic customer profiles based on conversion data, helping you focus spend on the segments that actually generate revenue.',
        subFeatures: [
            {
                icon: <Component size={18} />,
                title: 'Auto-Segmentation',
                description: 'Group customers by industry, size, and intent.'
            },
            {
                icon: <BadgeDollarSign size={18} />,
                title: 'LTV Analysis',
                description: 'See which profiles have the highest lifetime value.'
            },
            {
                icon: <TextSearch size={18} />,
                title: 'Behavioral Insights',
                description: 'Understand the "why" behind every purchase.'
            }
        ]
    },
    {
        id: 'sales',
        icon: <Gauge size={20} />,
        sidebarLabel: 'Sales Performance',
        title: 'Scale your best reps',
        description: 'Identify the behaviors that close deals and replicate them across your entire team with automated coaching insights.',
        subFeatures: [
            {
                icon: <TrendingUp size={18} />,
                title: 'Win Rate Analysis',
                description: 'Understand why some reps win 2x more deals.'
            },
            {
                icon: <Crosshair size={18} />,
                title: 'Objection Handling',
                description: 'Real-time battlecards for handling tough questions.'
            },
            {
                icon: <Film size={18} />,
                title: 'Game Tape',
                description: 'Library of best-in-class calls for onboarding.'
            }
        ]
    },
    {
        id: 'search',
        icon: <ScanSearch size={20} />,
        sidebarLabel: 'AI Search',
        title: 'Instant answers from your library',
        description: 'Make your call data queryable. Ask questions like "What are the top pricing objections?" and get answers backed by real audio clips.',
        subFeatures: [
            {
                icon: <MessagesSquare size={18} />,
                title: 'Conversational',
                description: 'Ask in plain English, get answers instantly.'
            },
            {
                icon: <Radar size={18} />,
                title: 'Trend Spotting',
                description: 'Identify emerging market trends before competitors.'
            },
            {
                icon: <FileCheck size={18} />,
                title: 'One-Click Export',
                description: 'Turn findings into marketing briefs.'
            }
        ]
    },
    {
        id: 'attribution',
        icon: <Route size={20} />,
        sidebarLabel: 'Attribution',
        title: 'Connect marketing spend to revenue',
        description: 'Close the loop between ad clicks and closed deals. See exactly which campaigns, channels, and creatives are driving revenue.',
        subFeatures: [
            {
                icon: <MousePointer2 size={18} />,
                title: 'Multi-Touch',
                description: 'Full path tracking from click to closed-won.'
            },
            {
                icon: <PieChart size={18} />,
                title: 'True ROAS',
                description: 'Measure ROI based on actual revenue, not just leads.'
            },
            {
                icon: <BadgeDollarSign size={18} />,
                title: 'Channel ROI',
                description: 'Optimize spend across Meta, Google, and LinkedIn.'
            }
        ]
    }
];

const SecureByDesign: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ProductFeature>('conversation');
    const activeFeature = features.find(f => f.id === activeTab)!;

    return (
        <section className="w-full px-4 lg:px-8 py-32 z-10 bg-black relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-[48px] lg:text-[80px] font-serif-elegant font-normal tracking-tight leading-[0.95] mb-8 text-white">
                        Everything you need to <span className="italic bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent">scale</span>
                    </h2>
                    <p className="text-[18px] text-zinc-400 max-w-[640px] mx-auto leading-relaxed font-light tracking-wide">
                        Infrastructure that adapts to every stage of your growth.
                        <br className="hidden md:block" /> Built for revenue teams that demand precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch h-[800px] lg:h-[640px]">

                    {/* LEFT SIDEBAR */}
                    <div className="lg:col-span-3 flex flex-col gap-3 h-full">
                        <div className="flex flex-col gap-1 p-2 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm h-full overflow-y-auto custom-scrollbar">
                            {features.map((feature) => (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveTab(feature.id)}
                                    className={`group flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 text-left relative overflow-hidden ${activeTab === feature.id
                                        ? 'bg-[#1C1C1F] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] border border-white/10'
                                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent'
                                        }`}
                                >
                                    {activeTab === feature.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none" />
                                    )}
                                    <div className={`transition-all duration-500 p-2.5 rounded-xl border relative overflow-hidden ${activeTab === feature.id
                                            ? 'bg-gradient-to-br from-brand-blue to-indigo-600 border-white/10 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                                            : 'bg-white/5 border-white/5 text-zinc-500 group-hover:text-zinc-300 group-hover:border-white/10 group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                                        }`}>
                                        {/* Inner gloss effect for active state */}
                                        {activeTab === feature.id && (
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
                                        )}
                                        <div className="relative z-10">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <span className="text-[15px] font-medium tracking-wide">
                                        {feature.sidebarLabel}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT CONTENT AREA */}
                    <div className="lg:col-span-9 h-full">
                        <div className="h-full bg-[#0A0A0B] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col group">
                            {/* Inner Glass border effect */}
                            <div className="absolute inset-0 rounded-[32px] border border-white/5 pointer-events-none z-50"></div>

                            {/* Main Visual Container */}
                            <div className="flex-1 relative overflow-hidden flex items-center justify-center p-8 lg:p-12">
                                {/* Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 transform perspective-500 rotate-x-12"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent"></div>

                                {/* Dynamic Content */}
                                <div className="w-full h-full flex items-center justify-center relative z-10">

                                    {/* CONVERSATION TRANSCRIPT VISUAL */}
                                    {activeTab === 'conversation' && (
                                        <div className="w-full max-w-2xl animate-in fade-in zoom-in-95 duration-500">
                                            <div className="space-y-4">
                                                {/* Agent Bubble */}
                                                <div className="flex gap-4 items-start opacity-50 grayscale">
                                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-500 border border-white/5">Rep</div>
                                                    <div className="bg-zinc-900 rounded-2xl rounded-tl-none px-6 py-4 border border-white/5 max-w-[80%]">
                                                        <div className="h-2 w-48 bg-zinc-800 rounded-full mb-2" />
                                                        <div className="h-2 w-32 bg-zinc-800 rounded-full" />
                                                    </div>
                                                </div>

                                                {/* Active Highlighted Bubble */}
                                                <div className="flex flex-row-reverse gap-4 items-start">
                                                    <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-xs text-white font-bold shadow-[0_0_15px_rgba(255,107,44,0.4)]">JD</div>
                                                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl rounded-tr-none px-6 py-4 border border-brand-blue/30 shadow-[0_0_30px_rgba(255,107,44,0.1)] max-w-[85%] relative overflow-hidden group">
                                                        <div className="absolute inset-0 bg-brand-blue/5 animate-pulse"></div>
                                                        <p className="text-lg text-white font-light leading-relaxed relative z-10">
                                                            "We're looking to <span className="bg-brand-blue/20 bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent px-1 rounded font-medium">scale aggressively</span> in Q3, but our current attribution is a black box."
                                                        </p>

                                                        {/* Floating Analysis Tag */}
                                                        <div className="absolute -bottom-8 right-4 bg-black/80 backdrop-blur border border-brand-blue/30 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-2 shadow-xl animate-in fade-in slide-in-from-bottom-3 duration-700 delay-300 fill-mode-forwards select-none">
                                                            <Sparkles size={10} className="text-brand-blue" />
                                                            <span className="bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent font-bold">High Intent Detected</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Agent Bubble */}
                                                <div className="flex gap-4 items-start opacity-50 grayscale delay-100 duration-500">
                                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-500 border border-white/5">Rep</div>
                                                    <div className="bg-zinc-900 rounded-2xl rounded-tl-none px-6 py-4 border border-white/5 max-w-[80%]">
                                                        <div className="h-2 w-64 bg-zinc-800 rounded-full mb-2" />
                                                        <div className="h-2 w-40 bg-zinc-800 rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* CREATIVE GENERATION VISUAL */}
                                    {activeTab === 'creative' && (
                                        <div className="w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
                                            <div className="relative">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-purple-500 to-brand-blue rounded-2xl opacity-20 blur-xl animate-pulse"></div>
                                                <div className="bg-[#0f0f12] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                                    {/* Header */}
                                                    <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center">
                                                            <Wand2 size={16} className="text-white" />
                                                        </div>
                                                        <div className="text-sm text-zinc-400">Generating Ad Copy...</div>
                                                    </div>

                                                    {/* Generated Content */}
                                                    <div className="space-y-3 font-serif-elegant">
                                                        <div className="h-8 bg-white/5 rounded w-3/4 animate-pulse"></div>
                                                        <div className="space-y-2">
                                                            <div className="h-4 bg-white/5 rounded w-full"></div>
                                                            <div className="h-4 bg-white/5 rounded w-5/6"></div>
                                                            <div className="h-4 bg-white/5 rounded w-full"></div>
                                                        </div>

                                                        <div className="mt-6 flex gap-2">
                                                            <div className="h-8 w-24 bg-brand-blue/20 rounded-md border border-brand-blue/30"></div>
                                                            <div className="h-8 w-24 bg-white/5 rounded-md border border-white/10"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Floating Assets */}
                                                <div className="absolute -right-12 top-20 bg-[#1C1C1F] p-4 rounded-xl border border-white/10 shadow-2xl rotate-6 animate-float">
                                                    <div className="w-12 h-12 bg-zinc-800 rounded-lg mb-2 overflow-hidden">
                                                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                                                    </div>
                                                    <div className="h-2 w-16 bg-zinc-700 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* CUSTOMER PROFILE VISUAL */}
                                    {activeTab === 'customer' && (
                                        <div className="w-full max-w-md relative animate-in zoom-in-95 duration-500">
                                            {/* Glow effect */}
                                            <div className="absolute top-[20%] left-[20%] w-48 h-48 bg-brand-blue/20 blur-[80px] rounded-full"></div>

                                            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[24px] p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
                                                <div className="text-center pb-6 border-b border-white/5">
                                                    <div className="w-24 h-24 mx-auto bg-gradient-to-t from-zinc-800 to-zinc-700 rounded-full p-[2px] mb-4 shadow-xl">
                                                        <div className="w-full h-full rounded-full bg-black relative overflow-hidden">
                                                            <div className="w-full h-full bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Felix')] bg-cover"></div>
                                                        </div>
                                                    </div>
                                                    <h4 className="text-2xl text-white font-display mb-1">Tech Growth Leads</h4>
                                                    <div className="text-brand-blue text-sm font-mono tracking-wider bg-brand-blue/10 px-3 py-1 rounded-full inline-block border border-brand-blue/20">
                                                        ICP SCORE: 98/100
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 mt-6">
                                                    <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-colors">
                                                        <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">LTV</div>
                                                        <div className="text-xl text-white font-medium">$12,400</div>
                                                    </div>
                                                    <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-colors">
                                                        <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">CAC</div>
                                                        <div className="text-xl text-emerald-400 font-medium">$450</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* SALES WIN RATE VISUAL */}
                                    {activeTab === 'sales' && (
                                        <div className="w-full max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                                            <div className="flex items-end justify-between gap-4 h-64 px-8 pb-8 relative">
                                                {/* Grid lines */}
                                                <div className="absolute inset-0 border-b border-white/10"></div>
                                                <div className="absolute inset-x-0 bottom-[33%] border-t border-dashed border-white/5"></div>
                                                <div className="absolute inset-x-0 bottom-[66%] border-t border-dashed border-white/5"></div>

                                                {/* Bars */}
                                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                                                    <div key={day} className="flex flex-col items-center gap-2 group w-full">
                                                        <div className="w-full bg-zinc-800/30 rounded-t-lg relative overflow-hidden transition-all duration-500 hover:bg-zinc-800/50"
                                                            style={{ height: `${[40, 65, 45, 85, 60][i]}%` }}>
                                                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-blue to-transparent h-full opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                                            <div className="absolute top-0 inset-x-0 h-[1px] bg-white/20"></div>
                                                        </div>
                                                        <span className="text-xs text-zinc-500 font-medium">{day}</span>

                                                        {i === 3 && (
                                                            <div className="absolute top-[10%] bg-white/10 backdrop-blur text-white text-xs px-2 py-1 rounded border border-white/20">
                                                                +24% vs Avg
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-between px-8 pt-4">
                                                <div className="text-zinc-400 text-sm">Win Rate by Rep</div>
                                                <div className="flex items-center gap-2 text-brand-blue text-sm font-semibold">
                                                    <TrendingUp size={16} />
                                                    <span>Trending Up</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* AI SEARCH VISUAL */}
                                    {activeTab === 'search' && (
                                        <div className="w-full max-w-xl animate-in fade-in zoom-in-95 duration-500">
                                            <div className="relative">
                                                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue rounded-full opacity-30 blur-sm"></div>
                                                <div className="bg-[#1C1C1F] relative rounded-full flex items-center p-2 pr-2 shadow-2xl">
                                                    <div className="pl-6 text-xl text-zinc-300 font-light flex-1 flex items-center gap-3">
                                                        <ScanSearch size={22} className="text-zinc-500" />
                                                        <span className="animate-pulse">Pricing objections in Q4...</span>
                                                    </div>
                                                    <div className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full cursor-pointer">
                                                        <ArrowRight size={20} className="text-white" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Result Cards appearing */}
                                            <div className="mt-8 grid grid-cols-2 gap-4 perspective-1000">
                                                <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 backdrop-blur-sm transform rotate-x-12 origin-top">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Film size={14} className="text-brand-blue" />
                                                        <span className="text-xs text-zinc-500">04:12 • Demo Call</span>
                                                    </div>
                                                    <div className="text-sm text-zinc-300">"They mentioned the platform fee is a bit high compared to..."</div>
                                                </div>
                                                <div className="bg-zinc-900/80 border border-white/10 rounded-xl p-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 backdrop-blur-sm transform rotate-x-12 origin-top">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Film size={14} className="text-brand-blue" />
                                                        <span className="text-xs text-zinc-500">12:30 • Discovery</span>
                                                    </div>
                                                    <div className="text-sm text-zinc-300">"We need to justify the implementation cost to finance..."</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* ATTRIBUTION VISUAL */}
                                    {activeTab === 'attribution' && (
                                        <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-700">
                                            <div className="grid grid-cols-3 gap-4 mb-4">
                                                <div className="col-span-1 bg-[#1A1A1D] rounded-2xl p-4 border border-white/5 flex flex-col justify-between h-32">
                                                    <div className="text-zinc-500 text-sm">Ad Spend</div>
                                                    <div className="text-2xl text-white font-mono">$142k</div>
                                                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                                        <div className="h-full w-3/4 bg-zinc-500"></div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 bg-gradient-to-br from-brand-blue to-brand-blue-deep rounded-2xl p-6 shadow-2xl shadow-brand-blue/20 flex items-center justify-between relative overflow-hidden group">
                                                    <div className="absolute inset-0 bg-[url('https://grain.com/assets/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                                                    <div className="relative z-10">
                                                        <div className="text-white/80 text-sm font-medium mb-1 uppercase tracking-wide">Attributed Revenue</div>
                                                        <div className="text-5xl text-white font-display font-bold">$1.4M</div>
                                                    </div>
                                                    <div className="relative z-10 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30">
                                                        <TrendingUp size={32} className="text-white" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-[#1A1A1D] rounded-2xl p-5 border border-white/5 flex items-center gap-6">
                                                <div className="flex-1">
                                                    <div className="flex justify-between text-sm mb-2">
                                                        <span className="text-zinc-400">Campaign ROAS</span>
                                                        <span className="text-white font-medium">9.8x</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                                        <div className="h-full bg-gradient-to-r from-brand-blue to-purple-500 w-[85%] relative">
                                                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* BOTTOM DESCRIPTION AREA */}
                            <div className="bg-[#121214] p-8 lg:p-10 border-t border-white/5 relative z-20">
                                <div className="max-w-4xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 bg-gradient-to-br from-brand-blue/20 to-indigo-900/40 rounded-xl text-brand-blue border border-brand-blue/20 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
                                            {activeFeature.icon}
                                        </div>
                                        <h3 className="text-[28px] font-display font-medium text-white">
                                            {activeFeature.title}
                                        </h3>
                                    </div>
                                    <p className="text-[16px] text-zinc-400 leading-relaxed mb-10 max-w-2xl font-light">
                                        {activeFeature.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {activeFeature.subFeatures.map((sub, idx) => (
                                            <div key={idx} className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                                                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-brand-blue group-hover:border-brand-blue/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-500 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                    <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                                                        {sub.icon}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-bold text-white mb-1 group-hover:text-brand-blue transition-colors duration-300">
                                                        {sub.title}
                                                    </h4>
                                                    <p className="text-[13px] text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                                                        {sub.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
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

export default SecureByDesign;
