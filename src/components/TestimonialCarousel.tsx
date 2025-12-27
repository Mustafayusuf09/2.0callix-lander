'use client';

import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "James Carter",
      handle: "Founder, ScaleWave",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face"
    },
    text: "Before Callix, we had no idea which ads were actually producing qualified buyers. Now we see exactly which creatives drive revenue — not just clicks."
  },
  {
    author: {
      name: "Sophia Liu",
      handle: "Head of Growth, AdVantage",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    text: "We scaled ad spend by 40% without lead quality dropping. That's never happened before. It's like having a superpower for our marketing team."
  },
  {
    author: {
      name: "Michael Chen",
      handle: "VP of Marketing, TechFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Attribution used to be a guessing game. Callix connected the dots between our ad creatives and closed deals. We finally know what works."
  },
  {
    author: {
      name: "Sarah Jenkins",
      handle: "CMO, GrowthEngine",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Our sales team used to complain about lead quality constantly. With Callix, we successfully automated the feedback loop between sales and marketing."
  }
]

export default function TestimonialCarousel() {
  return (
    <TestimonialsSection
      title={<>Trusted by <span className="italic text-zinc-400">Growth Leaders</span></>}
      description="Join teams who stopped guessing and started scaling ads with sales calls"
      testimonials={testimonials}
    />
  )
}
