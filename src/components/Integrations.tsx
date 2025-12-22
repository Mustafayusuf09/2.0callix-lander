'use client';

import React, { forwardRef, useRef } from 'react';
import { AnimatedBeam } from './magicui/animated-beam';
import { cn } from "@/lib/utils";

const integrations = [
    { name: 'Zoom', logo: '/logos/zoom.png', category: 'comm', scale: 1.2 },
    { name: 'Google Meet', logo: 'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png', category: 'comm' },
    { name: 'Microsoft Teams', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg', category: 'comm' },
    { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', category: 'crm' },
    { name: 'HubSpot', logo: '/logos/hubspot.png', category: 'crm' },
    { name: 'GoHighLevel', logo: '/logos/gohighlevel.png', category: 'crm' },
    { name: 'Pipedrive', logo: '/logos/pipedrive.png', category: 'crm', scale: 0.75 },
    { name: 'Meta Ads', logo: '/logos/meta.png', category: 'ads' },
    { name: 'Google Ads', logo: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg', category: 'ads', scale: 0.75 },
    { name: 'LinkedIn Ads', logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg', category: 'ads', scale: 0.75 },
    { name: 'Google Calendar', logo: '/logos/google-calendar.png', category: 'sched', scale: 1.2 },
    { name: 'Outlook', logo: '/logos/outlook.png', category: 'sched', scale: 1.2 },
    { name: 'Calendly', logo: '/logos/calendly.png', category: 'sched' },
    { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', category: 'auto' },
];

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 lg:size-16 items-center justify-center rounded-full border-2 border-white/10 bg-zinc-900 p-1.5 shadow-[0_0_20px_-12px_rgba(255,107,44,0.3)] transition-all duration-300 hover:border-brand-blue/50 hover:scale-110",
                className
            )}
        >
            {children}
        </div>
    )
})
Circle.displayName = "Circle"

const Integrations: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);

    // Create refs for each integration
    const integrationRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Grouping for layout - include all 14 integrations
    const leftIntegrations = integrations.slice(0, 7);
    const rightIntegrations = integrations.slice(7, 14);

    return (
        <section className="w-full px-8 lg:px-16 py-32 z-10 bg-black relative overflow-hidden">
            {/* Section-specific gradient - stronger */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_30%,_rgba(255,107,44,0.15),_transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_70%,_rgba(255,107,44,0.18),_transparent_60%)] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] mb-6">
                        Connects to your <span className="italic">entire</span> stack
                    </h2>
                    <p className="text-[16px] text-zinc-400 max-w-[560px] mx-auto leading-relaxed font-light">
                        One-click integrations with the tools you already use. No code required.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative flex h-[550px] w-full items-center justify-center overflow-hidden"
                >
                    <div className="flex size-full max-w-2xl flex-row items-stretch justify-between gap-10">
                        {/* Left Column */}
                        <div className="flex flex-col justify-center gap-4">
                            {leftIntegrations.map((item, idx) => (
                                <Circle
                                    key={item.name}
                                    ref={(el) => {
                                        if (el) integrationRefs.current[idx] = el;
                                    }}
                                >
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="w-full h-full object-contain"
                                        style={item.scale ? { transform: `scale(${item.scale})` } : undefined}
                                    />
                                </Circle>
                            ))}
                        </div>

                        {/* Center Column */}
                        <div className="flex flex-col justify-center">
                            <Circle ref={centerRef} className="size-20 lg:size-28 border-brand-blue/30 bg-black">
                                <span className="text-[20px] lg:text-[28px] font-bold tracking-tighter text-white lowercase">
                                    callix<span className="text-brand-blue">.</span>
                                </span>
                            </Circle>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col justify-center gap-4">
                            {rightIntegrations.map((item, idx) => (
                                <Circle
                                    key={item.name}
                                    ref={(el) => {
                                        if (el) integrationRefs.current[idx + 7] = el;
                                    }}
                                >
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="w-full h-full object-contain"
                                        style={item.scale ? { transform: `scale(${item.scale})` } : undefined}
                                    />
                                </Circle>
                            ))}
                        </div>
                    </div>

                    {/* Beams - straight lines from each logo to center */}
                    {leftIntegrations.map((_, idx) => (
                        <AnimatedBeam
                            key={`left-${idx}`}
                            containerRef={containerRef}
                            fromRef={{ current: integrationRefs.current[idx] }}
                            toRef={centerRef}
                            curvature={0}
                            duration={3 + idx * 0.3}
                            gradientStartColor="#ff6b2c"
                            gradientStopColor="#8b5cf6"
                        />
                    ))}
                    {rightIntegrations.map((_, idx) => (
                        <AnimatedBeam
                            key={`right-${idx}`}
                            containerRef={containerRef}
                            fromRef={centerRef}
                            toRef={{ current: integrationRefs.current[idx + 7] }}
                            curvature={0}
                            duration={3 + idx * 0.3}
                            gradientStartColor="#8b5cf6"
                            gradientStopColor="#ff6b2c"
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-zinc-500 text-[14px] font-light">
                        Don't see your tool? <a href="#" className="text-white hover:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] transition-colors border-b border-white/20">Request an integration</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
