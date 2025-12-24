'use client';

import React, { ComponentPropsWithoutRef } from "react";

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
    HTMLButtonElement,
    ShimmerButtonProps
>(
    (
        {
            className,
            children,
            shimmerColor,
            shimmerSize,
            borderRadius,
            shimmerDuration,
            background,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={cn("relative group/btn cursor-pointer", className)}
                {...props}
            >
                {/* Fluid ambient glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/30 via-white/20 to-brand-blue/30 blur-2xl opacity-0 group-hover/btn:opacity-60 transition-opacity duration-700 animate-pulse" />

                <div className="relative rounded-[24px] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/btn:scale-[1.05] active:scale-[0.95]">
                    <div className="relative overflow-hidden rounded-[24px] backdrop-blur-[12px] bg-white/[0.02] shadow-[inset_0_0_20px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.6),0_10px_40px_-10px_rgba(0,0,0,0.3)] ring-1 ring-white/20 group-hover/btn:bg-white/[0.05] transition-all duration-500">
                        {/* Shimmer Slide */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover/btn:animate-[shimmer-slide_1.5s_infinite]" />

                        {/* Top Highlights */}
                        <div className="absolute inset-x-5 top-0 h-[2px] bg-white/80 blur-[1px] rounded-full" />
                        <div className="absolute inset-x-7 top-1 h-[16px] bg-gradient-to-b from-white/60 to-transparent blur-[6px] opacity-80" />

                        <div className="relative px-7 py-3 flex items-center justify-center gap-2">
                            {children}
                        </div>
                    </div>
                </div>
            </button>
        );
    }
);

ShimmerButton.displayName = "ShimmerButton";
