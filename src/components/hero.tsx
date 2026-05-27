import { cn } from "@/lib/utils";
import { BookOpenIcon, ArrowRightIcon } from "lucide-react";
import type { ReactNode } from "react";

interface HeroSectionProps {
	totalNotes: number;
	totalTopics: number;
	children?: ReactNode;
}

export function HeroSection({ totalNotes, totalTopics, children }: HeroSectionProps) {
	return (
		<section className="relative mx-auto w-full max-w-5xl">
			{/* Top Radial Shade */}
			<div
				aria-hidden="true"
				className="absolute inset-0 isolate overflow-hidden contain-strict"
			>
				<div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,rgba(255,255,255,0.08),transparent)] contain-strict" />
			</div>

			{/* Outer Bold Faded Borders */}
			<div
				aria-hidden="true"
				className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
			>
				<div className="absolute inset-y-0 left-0 z-10 h-full w-px" style={{
					background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent)"
				}} />
				<div className="absolute inset-y-0 right-0 z-10 h-full w-px" style={{
					background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent)"
				}} />
			</div>

			{/* Main Content */}
			<div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-28">
				{/* Inner Content Faded Borders */}
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-[1] size-full overflow-hidden"
				>
					<div className="absolute inset-y-0 left-4 w-px md:left-8" style={{
						background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1))"
					}} />
					<div className="absolute inset-y-0 right-4 w-px md:right-8" style={{
						background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1))"
					}} />
					<div className="absolute inset-y-0 left-8 w-px md:left-12" style={{
						background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05))"
					}} />
					<div className="absolute inset-y-0 right-8 w-px md:right-12" style={{
						background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05))"
					}} />
				</div>

				{/* Badge */}
				<a
					className={cn(
						"group mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-white/10 px-3 py-1 shadow-lg",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
					)}
					style={{ background: "rgba(255,255,255,0.06)" }}
					href="#categories"
				>
					<BookOpenIcon className="size-3 text-white/50" />
					<span className="text-xs text-white/80">Open-source knowledge base</span>
					<span className="block h-5 border-l border-white/15" />
					<ArrowRightIcon className="size-3 text-white/60 duration-150 ease-out group-hover:translate-x-1" />
				</a>

				{/* Title */}
				<div className="relative w-fit mx-auto">
					<h1
						className={cn(
							"fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl font-bold tracking-tight text-white delay-100 duration-500 ease-out md:text-5xl lg:text-6xl"
						)}
						style={{ textShadow: "0 0 50px rgba(255,255,255,0.15)" }}
					>
						Doc<span style={{ color: "#f54e00" }}>Sii</span>
					</h1>
					
					{/* Small low-opacity book watermark near header */}
					<svg
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="rgba(255, 255, 255, 0.12)"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="absolute -right-12 -top-5 rotate-12 pointer-events-none select-none hidden sm:block"
					>
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
						<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
					</svg>
				</div>

				{/* Subtitle */}
				<p className="fade-in slide-in-from-bottom-10 mx-auto max-w-md animate-in fill-mode-backwards text-center text-base tracking-wider text-white/70 delay-200 duration-500 ease-out sm:text-lg md:text-xl">
					Curated technical notes by{" "}
					<strong className="text-white font-semibold">Dev Hari Ojha</strong>
				</p>

				{/* Search Block */}
				<div className="fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards w-full max-w-md mx-auto pt-2 delay-300 duration-500 ease-out">
					{children}
				</div>

				{/* Stats */}
				<p className="fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards text-center text-xs text-white/40 delay-500 duration-500 ease-out">
					Press <kbd className="inline-flex items-center justify-center size-5 text-[11px] font-semibold border border-white/20 rounded bg-white/5 text-white/60 mx-0.5 align-middle">/</kbd> to search · {totalNotes} notes across {totalTopics} topics
				</p>
			</div>
		</section>
	);
}
