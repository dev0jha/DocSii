import { InfiniteSlider } from "@/components/infinite-slider";

const categories = [
	{
		name: "React",
		href: "/framework/react/getting-started",
		svg: (
			<svg viewBox="0 0 24 24" fill="none" className="size-5 md:size-6">
				<circle cx="12" cy="12" r="2.5" fill="currentColor" />
				<ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
				<ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
			</svg>
		),
	},
	{
		name: "JavaScript",
		href: "/language/javascript/hello-world",
		svg: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-6">
				<path d="M3 3h18v18H3V3zm4.5 14.4c0 1.5.9 2.1 2.1 2.1.9 0 1.5-.3 1.95-.9l-1.05-.75c-.15.3-.45.45-.75.45-.45 0-.6-.3-.6-.75V13.5h-1.5v3.9zm5.25.45c0 1.35.9 2.1 2.25 2.1 1.2 0 2.1-.6 2.1-1.8 0-1.05-.6-1.5-1.65-1.95l-.3-.15c-.45-.15-.75-.3-.75-.6 0-.3.15-.45.45-.45.3 0 .45.15.6.45l.9-.6c-.45-.6-.9-.9-1.65-.9-1.05 0-1.65.6-1.65 1.5 0 1.05.6 1.5 1.35 1.8l.3.15c.45.15.9.3.9.75 0 .3-.3.45-.6.45-.45 0-.75-.15-.9-.6l-1.05.6z" />
			</svg>
		),
	},
	{
		name: "Python",
		href: "/language/python/overview",
		svg: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-6">
				<path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.403 3.35-3.403h5.766s3.24.052 3.24-3.134V3.2S18.28 0 11.914 0zM8.708 1.85a1.06 1.06 0 110 2.12 1.06 1.06 0 010-2.12z" />
				<path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H11.98v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.403-3.35 3.403H9.451s-3.24-.052-3.24 3.134v5.325S5.72 24 12.086 24zm3.206-1.85a1.06 1.06 0 110-2.12 1.06 1.06 0 010 2.12z" />
			</svg>
		),
	},
	{
		name: "Databases",
		href: "/language/databases/overview",
		svg: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5 md:size-6">
				<ellipse cx="12" cy="5" rx="9" ry="3" />
				<path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
				<path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
			</svg>
		),
	},
	{
		name: "TanStack Query",
		href: "/framework/tanstackquery/tanstackquery",
		svg: (
			<svg viewBox="0 0 24 24" fill="none" className="size-5 md:size-6">
				<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
				<path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				<circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
			</svg>
		),
	},
	{
		name: "Docker",
		href: "/tool/docker/intro",
		svg: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-6">
				<path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.187.186v1.887c0 .102.084.185.187.185zm-2.954-5.43h2.118a.186.186 0 00.187-.185V3.576a.186.186 0 00-.187-.186h-2.118a.186.186 0 00-.187.186v1.887c0 .102.084.185.187.185zm0 2.716h2.118a.187.187 0 00.187-.186V6.292a.187.187 0 00-.187-.186h-2.118a.187.187 0 00-.187.186v1.886c0 .103.084.186.187.186zm-2.93 0h2.12a.186.186 0 00.186-.186V6.292a.186.186 0 00-.187-.186H8.1a.186.186 0 00-.185.186v1.886c0 .103.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.292a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.886c0 .103.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.187.186v1.887c0 .102.084.185.187.185zm-2.93 0h2.12a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185zm-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.082.185.185.185zM23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.687 11.687 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.33 12.33 0 003.544-1.372 10.1 10.1 0 002.201-1.728c1.382-1.469 2.2-3.117 2.826-4.552h.244c1.514 0 2.447-.607 2.958-1.12.34-.355.596-.774.752-1.23l.105-.328-.096-.07z" />
			</svg>
		),
	},
	{
		name: "Git & GitHub",
		href: "/tool/git-and-github/basics",
		svg: (
			<svg viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-6">
				<path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 11-1.103 1.03l-2.48-2.48v6.53a1.838 1.838 0 11-1.512-.065V8.78a1.838 1.838 0 01-.998-2.41L7.629 3.64.452 10.818a1.55 1.55 0 000 2.188l10.48 10.48a1.55 1.55 0 002.186 0l10.428-10.43a1.55 1.55 0 000-2.127z" />
			</svg>
		),
	},
];

export function CategorySlider() {
	return (
		<div className="mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-hidden py-4">
			<InfiniteSlider gap={48} reverse speed={60} speedOnHover={20}>
				{categories.map((cat) => (
					<a
						key={cat.name}
						href={cat.href}
						className="flex shrink-0 items-center gap-2.5 text-white/50 transition-colors duration-200 hover:text-white select-none"
					>
						{cat.svg}
						<span className="text-sm font-medium tracking-tight md:text-base whitespace-nowrap">
							{cat.name}
						</span>
					</a>
				))}
			</InfiniteSlider>
		</div>
	);
}
