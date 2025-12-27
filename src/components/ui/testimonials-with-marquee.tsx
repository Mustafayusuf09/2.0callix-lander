import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
    title: React.ReactNode
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    return (
        <section className={cn(
            "bg-transparent text-white",
            "py-12 sm:py-24 md:py-32 px-0",
            className
        )}>
            <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[1000px] text-[48px] lg:text-[72px] font-serif-elegant font-normal tracking-tight leading-[1.05] text-white">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-[18px] max-w-[600px] text-zinc-400 leading-relaxed font-light">
                            {description}
                        </p>
                    )}
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:80s]">
                        {[0, 1].map((_, index) => (
                            <div key={index} className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                                {[...Array(2)].map((_, setIndex) => (
                                    testimonials.map((testimonial, i) => (
                                        <TestimonialCard
                                            key={`${setIndex}-${i}`}
                                            {...testimonial}
                                        />
                                    ))
                                ))}
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    )
}
