/** @format */
"use client";

import React from "react";

interface CTAButtonProps {
	label: string;
	link: string; // e.g. "https://wa.me/2349012345678"
	className?: string;
}

export default function CTAButton({ label, link, className }: CTAButtonProps) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={[
				"relative z-10 inline-flex items-center justify-center rounded-xl",
				"px-8 py-4 text-base md:text-lg font-semibold cursor-pointer",
				// base gradient + shadow
				"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg",
				// transitions (keep it simple + reliable)
				"transition-all duration-300 ease-out",
				// transforms (works across Tailwind versions)
				"transform-gpu will-change-transform",
				// hover effects: bigger, deeper shadow, gradient shift
				"hover:scale-110 hover:shadow-2xl",
				"hover:from-indigo-400 hover:via-fuchsia-500 hover:to-rose-500",
				className || "",
			].join(" ")}>
			{label}
		</a>
	);
}
