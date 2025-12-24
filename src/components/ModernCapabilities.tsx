'use client';

import React from 'react';
import { ShimmerButton } from './ShimmerButton';

const GeneratedAdVisual = () => {
  const [step, setStep] = React.useState(0);
  const [text1Part1, setText1Part1] = React.useState("");
  const [text1Part2, setText1Part2] = React.useState("");
  const [text2, setText2] = React.useState("");

  React.useEffect(() => {
    let active = true;

    const runSequence = async () => {
      while (active) {
        // Reset
        setStep(0);
        setText1Part1("");
        setText1Part2("");
        setText2("");
        await new Promise(r => setTimeout(r, 100));

        // Start
        if (!active) break;
        setStep(1); // Container visible
        await new Promise(r => setTimeout(r, 500));

        if (!active) break;
        setStep(2); // Header visible
        await new Promise(r => setTimeout(r, 400));

        // Type Text 1 Part 1
        if (!active) break;
        setStep(3);
        const t1p1 = "Stop losing leads to ";
        for (let i = 0; i <= t1p1.length; i++) {
          if (!active) break;
          setText1Part1(t1p1.slice(0, i));
          await new Promise(r => setTimeout(r, 30));
        }

        // Type Text 1 Part 2 (Highlighted)
        const t1p2 = "creative fatigue";
        for (let i = 0; i <= t1p2.length; i++) {
          if (!active) break;
          setText1Part2(t1p2.slice(0, i));
          await new Promise(r => setTimeout(r, 30));
        }

        await new Promise(r => setTimeout(r, 200));

        // Type Text 2
        if (!active) break;
        setStep(4);
        const t2 = "Our new automated hooks lower CPA by 40% instantly. Scale without burnout.";
        for (let i = 0; i <= t2.length; i++) {
          if (!active) break;
          setText2(t2.slice(0, i));
          await new Promise(r => setTimeout(r, 10));
        }

        await new Promise(r => setTimeout(r, 300));

        if (!active) break;
        setStep(5); // Image
        await new Promise(r => setTimeout(r, 500));

        if (!active) break;
        setStep(6); // Footer
        await new Promise(r => setTimeout(r, 4000));
      }
    };

    runSequence();
    return () => { active = false; };
  }, []);

  return (
    <div className={`w-full max-w-[300px] bg-surface/90 rounded-xl border border-steel/50 p-5 shadow-2xl backdrop-blur-sm relative overflow-hidden animate-[float_5s_ease-in-out_infinite_delay-700ms] transition-all duration-700 ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

      {/* Header */}
      <div className={`flex items-center justify-between mb-3 transition-opacity duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-blue to-brand-blue-deep shadow-[0_0_10px_rgba(255,107,44,0.4)] backdrop-blur-md border border-white/20" />
          <div className="h-2 w-16 bg-surface-hover rounded-full" />
        </div>
        <div className="text-[9px] text-tertiary font-mono">Emma's ad account</div>
      </div>

      {/* Text Content */}
      <div className="space-y-2 mb-3 h-[72px]">
        <div className="text-[11px] text-secondary leading-relaxed font-medium">
          {text1Part1}
          <span className="bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,107,44,0.5)]">{text1Part2}</span>
          {(step === 3) && <span className="inline-block w-1.5 h-3 bg-brand-blue ml-0.5 animate-pulse" />}
        </div>
        <div className="text-[10px] text-tertiary leading-relaxed">
          {text2}
          {(step === 4) && <span className="inline-block w-1.5 h-3 bg-tertiary ml-0.5 animate-pulse" />}
        </div>
      </div>

      {/* Image Block - Premium Generated Ad Visual */}
      <div className={`w-full h-36 rounded-xl bg-black relative overflow-hidden mb-3 transition-all duration-700 ${step >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {step >= 5 && (
          <>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 via-black to-brand-blue-deep/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,107,44,0.2),_transparent_50%)]" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />

            {/* Ad Preview Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              {/* Top - Brand Badge */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-blue to-brand-blue-deep shadow-[0_2px_8px_rgba(255,107,44,0.4)] flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">C</span>
                </div>
                <span className="text-[9px] text-white/60 font-medium uppercase tracking-wider">Sponsored</span>
              </div>

              {/* Middle - Hook Text */}
              <div className="text-center px-2">
                <p className="text-white text-[13px] font-bold leading-snug drop-shadow-lg">
                  "Stop losing leads to{' '}
                  <span className="bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,107,44,0.5)]">creative fatigue</span>"
                </p>
              </div>

              {/* Bottom - CTA */}
              <div className="flex justify-center">
                <div className="px-4 py-1.5 bg-gradient-to-r from-brand-blue to-brand-blue-deep rounded-full text-[9px] text-white font-bold shadow-[0_4px_15px_rgba(255,107,44,0.4)] hover:shadow-[0_4px_20px_rgba(255,107,44,0.6)] transition-shadow flex items-center gap-1.5">
                  Learn More
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-[shimmer_2s_infinite]" />

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-blue/20 to-transparent" />
          </>
        )}
      </div>

      {/* Footer */}
      <div className={`flex justify-between items-center pt-2 border-t border-white/5 transition-opacity duration-500 ${step >= 6 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex gap-1 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-[9px] text-tertiary">Ready to launch</span>
        </div>

        <ShimmerButton
          className="shadow-lg"
          background="#FF6B2C"
          shimmerColor="#FFFFFF"
          shimmerSize="0.1em"
          borderRadius="999px"
          style={{ padding: '4px 12px' }}
        >
          <span className="text-white text-[9px] font-bold tracking-wider relative z-10">DEPLOY</span>
        </ShimmerButton>
      </div>
    </div>
  );
};

const ModernCapabilities: React.FC = () => {
  return (
    <section className="w-full px-8 lg:px-16 py-32 z-10 bg-transparent relative">
      {/* Section-specific gradient - centered subtle pulse - Intensified */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_30%,_rgba(255,107,44,0.2),_transparent_70%)] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto text-center mb-24">
        <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-8 text-primary">
          How <span className="italic">Callix</span> Works
        </h2>
        <p className="text-[16px] text-secondary max-w-[640px] mx-auto leading-relaxed font-light">
          From raw conversation to ready-to-deploy creative in minutes.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-steel/50 rounded-3xl p-5 flex flex-col h-full min-h-[360px] relative overflow-hidden group">
          {/* Zoom Call Visual - Dark Theme Fading into Card */}
          <div className="flex-1 flex items-center justify-center relative z-10 py-2">
            <div className="w-full max-w-[300px] relative">

              {/* Top Header - Discovery Call */}
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold text-[11px]">Discovery Call</span>
                  <span className="text-zinc-500 text-[11px]">|</span>
                  <span className="text-zinc-500 text-[11px]">12:34</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-red-400 text-[9px] font-semibold">REC</span>
                </div>
              </div>

              {/* Callix Analyzing Banner */}
              <div className="mx-4 px-3 py-2 bg-brand-blue/10 rounded-xl flex items-center justify-center gap-2 border border-brand-blue/20 mb-2">
                <span className="text-[11px] font-semibold bg-gradient-to-r from-brand-blue via-brand-blue-light to-white bg-clip-text text-transparent transform">Callix is analyzing this call</span>
                <div className="flex items-center gap-0.5">
                  <div className="w-1 h-1 rounded-full bg-brand-blue animate-pulse" />
                  <div className="w-1 h-1 rounded-full bg-brand-blue animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-1 rounded-full bg-brand-blue animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>

              {/* Video Grid - 2 people side by side */}
              <div className="px-4 pb-2">
                <div className="grid grid-cols-2 gap-2">
                  {/* Participant 1 - Emma */}
                  <div className="relative aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden">
                    <img
                      src="/emma.jpg"
                      alt="Emma"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-1.5 left-2">
                      <span className="text-[9px] text-white font-medium bg-black/50 px-2 py-0.5 rounded-md">Emma</span>
                    </div>
                  </div>

                  {/* Participant 2 - John (with orange border) */}
                  <div className="relative aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden ring-1 ring-brand-blue">
                    <img
                      src="/john.jpg"
                      alt="John"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-1.5 left-2">
                      <span className="text-[9px] text-white font-medium bg-black/50 px-2 py-0.5 rounded-md">John</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="flex items-center justify-center gap-2 px-4 py-2">
                <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] flex items-center justify-center hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all cursor-pointer">
                  <svg className="w-3 h-3 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] flex items-center justify-center hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all cursor-pointer">
                  <svg className="w-3 h-3 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] flex items-center justify-center hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all cursor-pointer">
                  <svg className="w-3 h-3 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <button className="px-4 py-2 rounded-full bg-red-500 text-white font-semibold text-[11px] flex items-center gap-1.5 shadow-lg hover:bg-red-600 transition-colors">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.73-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                  </svg>
                  Leave
                </button>
              </div>

              {/* Fade edges to blend with card */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-surface to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-surface to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-surface to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-l from-surface to-transparent" />
              </div>
            </div>
          </div>

          <div className="mt-4 relative z-10">
            <h3 className="text-[16px] font-semibold mb-2 text-primary">Capture Every Call</h3>
            <p className="text-secondary text-[13px] leading-relaxed">Connect in one click. Every call is recorded, transcribed, and analyzed instantly with perfect accuracy.</p>
          </div>
        </div>

        <div className="bg-surface border border-steel/50 rounded-3xl p-5 flex flex-col h-full min-h-[360px] relative overflow-hidden group">
          {/* Electrical circuit SVG effect behind X - Silver & Orange */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Blue electrical gradient */}
              <linearGradient id="electricBlue" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0" />
                <stop offset="30%" stopColor="#FF6B2C" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#C2410C" stopOpacity="1" />
                <stop offset="70%" stopColor="#FF6B2C" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0" />
              </linearGradient>
              {/* Silver/Chrome metallic gradient */}
              <linearGradient id="electricSilver" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
                <stop offset="20%" stopColor="#f1f5f9" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="80%" stopColor="#f1f5f9" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
              </linearGradient>
              {/* Vertical blue */}
              <linearGradient id="electricBlueV" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0" />
                <stop offset="50%" stopColor="#C2410C" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0" />
              </linearGradient>
              {/* Vertical silver */}
              <linearGradient id="electricSilverV" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0" />
              </linearGradient>
              {/* X Metallic Gradient */}
              <linearGradient id="xMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="25%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="75%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              {/* Glow filters */}
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

            {/* Main electrical paths - Blue */}
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
          </svg>

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
          <div className="mt-8 relative z-10">
            <h3 className="text-[16px] font-semibold mb-2 text-primary">AI Extracts Psychology</h3>
            <p className="text-secondary text-[13px] leading-relaxed">Our engine identifies who converts, why they act, and what triggers kill intent before you lose a lead.</p>
          </div>
        </div>

        <div className="bg-surface border border-steel/50 rounded-3xl p-5 flex flex-col h-full min-h-[360px] relative overflow-hidden group">
          {/* Background Upload Effect */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="deployGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF6B2C" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Rising Data Lines */}
            <g opacity="0.4">
              <path d="M100,450 L100,-50" stroke="url(#deployGradient)" strokeWidth="1" strokeDasharray="4 8">
                <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite" />
              </path>
              <path d="M200,450 L200,-50" stroke="url(#deployGradient)" strokeWidth="1" strokeDasharray="4 8">
                <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.5s" repeatCount="indefinite" />
              </path>
              <path d="M300,450 L300,-50" stroke="url(#deployGradient)" strokeWidth="1" strokeDasharray="4 8">
                <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.2s" repeatCount="indefinite" />
              </path>
            </g>
          </svg>

          {/* Generated Ad Visual */}
          <div className="flex-1 flex items-center justify-center relative z-10 py-6">
            <div className="scale-90 origin-center">
              <GeneratedAdVisual />
            </div>
          </div>

          <div className="mt-4 relative z-10">
            <h3 className="text-[16px] font-semibold mb-2 text-primary">Deploy Insights Into Ads</h3>
            <p className="text-secondary text-[13px] leading-relaxed">Turn signals into ready-to-run ad copy, video scripts, and messaging backed by real conversations.</p>
          </div>
        </div>
      </div >
    </section >
  );
};

export default ModernCapabilities;
