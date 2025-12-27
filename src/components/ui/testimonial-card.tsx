import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    const Card = href ? 'a' : 'div'

    return (
        <Card
            {...(href ? { href } : {})}
            className={cn(
                "flex flex-col rounded-[24px] border border-white/10",
                "bg-zinc-900/40 backdrop-blur-md",
                "p-6 text-start sm:p-8",
                "hover:border-white/20 hover:bg-zinc-900/60 transition-all duration-500",
                "max-w-[320px] sm:max-w-[340px]",
                className
            )}
        >
            <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-white/10">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-md font-semibold leading-none text-white">
                        {author.name}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">
                        {author.handle}
                    </p>
                </div>
            </div>
            <p className="sm:text-md mt-4 text-sm text-zinc-300 leading-relaxed font-light">
                {text}
            </p>
        </Card>
    )
}
