'use client';


import React, { useState, useEffect, useRef, useCallback } from "react";
import { Sparkles } from "lucide-react";

interface CompareSliderProps {
    itemOne: React.ReactNode;
    itemTwo: React.ReactNode;
    aspectRatio?: string;
}

export const CompareSlider: React.FC<CompareSliderProps> = ({
    itemOne,
    itemTwo,
    aspectRatio = "16/9",
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setContainerWidth(entry.contentRect.width);
            }
        });

        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const handleDrag = useCallback(
        (clientX: number) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const position = ((clientX - rect.left) / rect.width) * 100;
                setSliderPosition(Math.min(Math.max(position, 0), 100));
            }
        },
        []
    );

    const onMouseDown = useCallback(() => setIsDragging(true), []);
    const onTouchStart = useCallback(() => setIsDragging(true), []);

    const onMouseUp = useCallback(() => setIsDragging(false), []);
    const onTouchEnd = useCallback(() => setIsDragging(false), []);

    const onMouseMove = useCallback(
        (e: MouseEvent) => {
            if (isDragging) {
                handleDrag(e.clientX);
            }
        },
        [isDragging, handleDrag]
    );

    const onTouchMove = useCallback(
        (e: TouchEvent) => {
            if (isDragging) {
                handleDrag(e.touches[0].clientX);
            }
        },
        [isDragging, handleDrag]
    );

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
            window.addEventListener("touchmove", onTouchMove);
            window.addEventListener("touchend", onTouchEnd);
        } else {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
        }

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
        };
    }, [isDragging, onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

    return (
        <div
            ref={containerRef}
            className="relative w-full rounded-3xl overflow-hidden select-none border border-white/10 shadow-2xl bg-black"
            style={{ aspectRatio }}
        >
            {/* Background Layer (Item Two - Right Side/Great Ad) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* Label for Right Side */}
                <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                    <Sparkles size={14} className="text-brand-blue" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">After Callix</span>
                </div>
                {itemTwo}
            </div>

            {/* Foreground Layer (Item One - Left Side/Bad Ad) - Clipped */}
            <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r border-white/20"
                style={{ width: `${sliderPosition}%` }}
            >
                {/* Label for Left Side */}
                <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Before Callix</span>
                </div>

                {/* Inner Container: Fixed width equal to parent to prevent squishing */}
                {containerWidth > 0 && (
                    <div style={{ width: containerWidth, height: '100%' }}>
                        {itemOne}
                    </div>
                )}
            </div>

            {/* Slider Handle */}
            <div
                className="absolute inset-y-0 z-30 flex items-center justify-center cursor-ew-resize group"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
            >
                {/* Vertical Line - touch target increased */}
                <div className="w-1 h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Handle Button */}
                <div className="absolute w-12 h-12 -ml-0.5 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.4)] transform transition-transform group-hover:scale-110">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                    >
                        <path d="M21 12H3" />
                        <path d="M18 15L21 12L18 9" />
                        <path d="M6 9L3 12L6 15" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
