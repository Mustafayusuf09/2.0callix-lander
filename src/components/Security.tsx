'use client';


import React, { useState, useEffect } from 'react';
import { Lock, Key, MousePointer2 } from 'lucide-react';
import { ShimmerButton } from './ShimmerButton';
import { motion } from 'framer-motion';

const Security: React.FC = () => {
    const [roleStep, setRoleStep] = useState("hidden");

    useEffect(() => {
        const loop = async () => {
            while (true) {
                setRoleStep("show");

                // Cycle duration: Animation (~2s) + Hold (3s) = 5s
                await new Promise(resolve => setTimeout(resolve, 5000));
                setRoleStep("hidden");
                // Reset duration / Pause between cycles
                await new Promise(resolve => setTimeout(resolve, 2500));
            }
        };
        loop();
    }, []);

    return (
        <section className="w-full px-8 lg:px-16 py-24 z-10 bg-transparent relative">
            {/* Section-specific gradient - corner glows for protective framing */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_0%,_rgba(255,107,44,0.06),_transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,_rgba(255,107,44,0.08),_transparent_50%)] pointer-events-none" />
            <div className="max-w-[1280px] mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-6"
                    >
                        Your data is protected by<br />
                        <span className="italic bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent">enterprise-grade</span> security
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-[16px] text-zinc-400 max-w-[560px] leading-relaxed font-light"
                    >
                        We take security seriously. Your conversations and insights are protected by the same technology trusted by leading tech giants.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* SOC 2 Type II - Large Card */}
                    <div className="lg:col-span-2 bg-zinc-900/40 border border-white/5 rounded-3xl p-6 flex flex-col group hover:border-white/10 transition-colors duration-500">
                        {/* Visual */}
                        <div className="flex-1 flex items-center justify-center py-4">
                            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-white/5 w-full max-w-[280px] relative overflow-hidden">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 via-[#FF6B2C]/20 to-[#FF6B2C]/40 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_8px_20px_rgba(255,107,44,0.2)]">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white drop-shadow-md">
                                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-semibold text-white">SOC 2 Type II</div>
                                        <div className="text-[11px] flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                                            <span className="bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent font-medium">Certified & Audited</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                                        <span className="text-[13px] text-zinc-300">Security Controls</span>
                                        <motion.span
                                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 0, repeatDelay: 1 }}
                                            className="text-[11px] font-bold bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/10"
                                        >
                                            PASS
                                        </motion.span>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <span className="text-[13px] text-zinc-300">Availability</span>
                                        <motion.span
                                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 1.5, repeatDelay: 1 }}
                                            className="text-[11px] font-bold bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/10"
                                        >
                                            PASS
                                        </motion.span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Label */}
                        <div className="mt-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 via-[#FF6B2C]/20 to-[#FF6B2C]/40 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_8px_20px_rgba(255,107,44,0.2)]">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md">
                                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-[16px] font-semibold text-white">SOC 2 Type II</span>
                            </div>
                            <p className="text-[14px] text-zinc-400 font-light">Fully audited and compliant with rigorous security standards.</p>
                        </div>
                    </div>

                    {/* SSO Integration */}
                    <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 flex flex-col group hover:border-white/10 transition-colors duration-500">
                        <div className="flex-1 flex items-center justify-center py-4">

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <ShimmerButton
                                    className="shadow-2xl font-semibold text-[14px]"
                                    background="black"
                                    shimmerColor="#FFFFFF"
                                    shimmerSize="0.1em"
                                    borderRadius="100px"
                                >
                                    <span className="relative z-10 text-white">Sign in with SSO</span>
                                </ShimmerButton>
                            </motion.div>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 via-[#FF6B2C]/20 to-[#FF6B2C]/40 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_8px_20px_rgba(255,107,44,0.2)]">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md">
                                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                    </svg>
                                </div>
                                <span className="text-[16px] font-semibold text-white">SSO Integration</span>
                            </div>
                            <p className="text-[14px] text-zinc-400 font-light">Enterprise single sign-on with Okta, Google, and more.</p>
                        </div>
                    </div>

                    {/* Role-Based Access */}
                    <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 flex flex-col group hover:border-white/10 transition-colors duration-500">
                        <div className="flex-1 flex items-center justify-center py-4">
                            <div className="bg-zinc-800/50 rounded-2xl p-4 border border-white/5 w-full max-w-[220px]">
                                <div className="text-[10px] text-zinc-400 uppercase tracking-wider mb-3">Team Access</div>
                                <motion.div
                                    className="space-y-2"
                                    initial="hidden"
                                    animate={roleStep}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.3,
                                                delayChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {[
                                        { name: 'John D.', role: 'Admin', color: 'bg-brand-blue' },
                                        { name: 'Sarah S.', role: 'Manager', color: 'bg-zinc-600' },
                                        { name: 'Mike K.', role: 'Viewer', color: 'bg-zinc-700' }
                                    ].map((user, i) => (
                                        <motion.div
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, x: -15 },
                                                show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                                            }}
                                            className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-full ${user.color} flex items-center justify-center text-[9px] font-bold text-white`}>
                                                    {user.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <span className="text-[12px] text-zinc-300">{user.name}</span>
                                            </div>
                                            <span className="text-[10px] text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">{user.role}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 via-[#FF6B2C]/20 to-[#FF6B2C]/40 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_8px_20px_rgba(255,107,44,0.2)]">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md">
                                        <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-[16px] font-semibold text-white">Role-Based Access</span>
                            </div>
                            <p className="text-[14px] text-zinc-400 font-light">Granular permissions to control who sees what.</p>
                        </div>
                    </div>

                    {/* Consent Management */}
                    <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 flex flex-col group hover:border-white/10 transition-colors duration-500">
                        <div className="flex-1 flex items-center justify-center py-4">
                            <div className="bg-zinc-800/50 rounded-2xl p-4 border border-white/5 w-full max-w-[220px]">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Compliance</span>
                                    <span className="text-[9px] text-red-400 flex items-center gap-1">
                                        <motion.span
                                            animate={{ opacity: [1, 0.4, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-1.5 h-1.5 rounded-full bg-red-400"
                                        />
                                        REC
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[12px] text-zinc-300">Auto-Consent</span>
                                        <div className="relative">
                                            <motion.div
                                                animate={{ backgroundColor: ["#3f3f46", "#3f3f46", "#FF6B2C", "#FF6B2C", "#3f3f46"] }}
                                                transition={{ duration: 6, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1], repeatDelay: 1 }}
                                                className="w-10 h-5 rounded-full relative"
                                            >
                                                <motion.div
                                                    animate={{ x: [2, 2, 22, 22, 2] }}
                                                    transition={{ duration: 6, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1], ease: "easeInOut", repeatDelay: 1 }}
                                                    className="absolute top-0.5 w-4 h-4 rounded-full bg-white"
                                                />
                                            </motion.div>
                                            {/* Cursor Animation */}
                                            <motion.div
                                                animate={{
                                                    opacity: [0, 1, 1, 0, 0],
                                                    x: [30, 10, 10, 30, 30],
                                                    y: [30, 10, 10, 30, 30],
                                                    scale: [1, 1, 0.8, 1, 1]
                                                }}
                                                transition={{
                                                    duration: 6,
                                                    repeat: Infinity,
                                                    times: [0, 0.2, 0.4, 0.6, 1], // Appear, Click, Retreat
                                                    ease: "easeInOut",
                                                    repeatDelay: 1
                                                }}
                                                className="absolute -bottom-[2px] -right-[2px] z-50 pointer-events-none"
                                            >
                                                <MousePointer2 className="w-4 h-4 fill-white text-white drop-shadow-lg" />
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[12px] text-zinc-300">Encryption</span>
                                        <motion.div
                                            className="w-10 h-5 rounded-full bg-zinc-700 relative"
                                        >
                                            <div className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-zinc-500" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 via-[#FF6B2C]/20 to-[#FF6B2C]/40 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_8px_20px_rgba(255,107,44,0.2)]">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md">
                                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.5 16l-3.5-3.5 1.41-1.41 2.09 2.09 4.09-4.09 1.41 1.41-5.5 5.5z" />
                                    </svg>
                                </div>
                                <span className="text-[16px] font-semibold text-white">Consent Management</span>
                            </div>
                            <p className="text-[14px] text-zinc-400 font-light">Built-in recording consent and compliance controls.</p>
                        </div>
                    </div>

                    {/* GDPR & CCPA */}
                    <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 flex flex-col group hover:border-white/10 transition-colors duration-500">
                        <div className="flex-1 flex items-center justify-center py-4">
                            <div className="flex gap-3">
                                {/* GDPR Badge */}
                                <motion.div
                                    animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                                    className="bg-zinc-800/50 rounded-xl p-3 border border-white/5 w-24 text-center"
                                >
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 border border-brand-blue/20 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-blue">
                                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                        </svg>
                                    </div>
                                    <div className="text-[11px] font-bold text-white mb-1">GDPR</div>
                                    <motion.div
                                        animate={{ opacity: [0, 1, 1, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.8, 1], repeatDelay: 1 }}
                                        className="text-[9px] text-emerald-400 flex items-center justify-center gap-1"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 bg-white" />
                                        Verified
                                    </motion.div>
                                </motion.div>
                                {/* CCPA Badge */}
                                <motion.div
                                    animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5, repeatDelay: 1 }}
                                    className="bg-zinc-800/50 rounded-xl p-3 border border-white/5 w-24 text-center"
                                >
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 border border-brand-blue/20 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-blue">
                                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                                        </svg>
                                    </div>
                                    <div className="text-[11px] font-bold text-white mb-1">CCPA</div>
                                    <motion.div
                                        animate={{ opacity: [0, 1, 1, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, times: [0, 0.2, 0.8, 1], delay: 2.5, repeatDelay: 1 }}
                                        className="text-[9px] text-emerald-400 flex items-center justify-center gap-1"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        Verified
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 via-[#FF6B2C]/20 to-[#FF6B2C]/40 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_8px_20px_rgba(255,107,44,0.2)]">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                                    </svg>
                                </div>
                                <span className="text-[16px] font-semibold text-white">GDPR & CCPA</span>
                            </div>
                            <p className="text-[14px] text-zinc-400 font-light">Complete privacy compliance for global data protection.</p>
                        </div>
                    </div>

                    {/* AES-256 Encryption */}
                    <div className="lg:col-span-2 bg-zinc-900/40 border border-white/5 rounded-3xl p-6 flex flex-col group hover:border-white/10 transition-colors duration-500">
                        <div className="flex-1 flex items-center justify-center py-4">
                            <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-4 w-full max-w-[260px]">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Lock size={16} className="text-brand-blue" />
                                        <div>
                                            <div className="text-[12px] font-semibold text-white">AES-256-GCM</div>
                                            <div className="text-[9px] text-zinc-400">Military-grade encryption</div>
                                        </div>
                                    </div>
                                    <span className="text-[9px] flex items-center gap-1">
                                        <motion.span
                                            animate={{ opacity: [1, 0.4, 1] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="w-1.5 h-1.5 rounded-full bg-brand-blue"
                                        />
                                        <span className="bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent font-medium">Active</span>
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[10px] text-zinc-400">Encryption Strength</span>
                                        <span className="text-[10px] font-semibold bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent">256-bit</span>
                                    </div>
                                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["0%", "100%", "100%", "0%"] }}
                                            transition={{ duration: 6, repeat: Infinity, times: [0, 0.4, 0.8, 1], ease: "easeInOut", repeatDelay: 2 }}
                                            className="h-full w-full bg-brand-blue rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                                    <div className="flex items-center gap-1">
                                        <Key size={12} className="text-zinc-400" />
                                        <span className="text-[10px] text-zinc-400">Key Fingerprint</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-300">0x7f...3a9c</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 via-[#FF6B2C]/20 to-[#FF6B2C]/40 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_8px_20px_rgba(255,107,44,0.2)]">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white drop-shadow-md">
                                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                    </svg>
                                </div>
                                <span className="text-[16px] font-semibold text-white">AES-256 Encryption</span>
                            </div>
                            <p className="text-[14px] text-zinc-400 font-light">Bank-level encryption for all data at rest and in transit.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Security;
