import { InfiniteSlider } from "@/components/infinite-slider";
import { React } from "@/components/svgs/react";
import { JavaScript } from "@/components/svgs/javascript";
import { Python } from "@/components/svgs/python";
import { PostgreSQL } from "@/components/svgs/database";
import { TanStack } from "@/components/svgs/tanstack";
import { Docker } from "@/components/svgs/docker";
import { Git } from "@/components/svgs/git";

const categories = [
	{
		name: "React",
		href: "/framework/react/getting-started",
		svg: <React className="size-5 md:size-6" />,
	},
	{
		name: "JavaScript",
		href: "/language/javascript/hello-world",
		svg: <JavaScript className="size-5 md:size-6" />,
	},
	{
		name: "Python",
		href: "/language/python/overview",
		svg: <Python className="size-5 md:size-6" />,
	},
	{
		name: "Databases",
		href: "/language/databases/overview",
		svg: <PostgreSQL className="size-5 md:size-6" />,
	},
	{
		name: "TanStack Query",
		href: "/framework/tanstackquery/tanstackquery",
		svg: <TanStack className="size-5 md:size-6" />,
	},
	{
		name: "Docker",
		href: "/tool/docker/intro",
		svg: <Docker className="size-5 md:size-6" />,
	},
	{
		name: "Git & GitHub",
		href: "/tool/git-and-github/git-basics",
		svg: <Git className="size-5 md:size-6" />,
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
