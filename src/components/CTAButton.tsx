/** @format */
"use client";

import React from "react";
import { Chivo } from "next/font/google";

const chivo = Chivo({
	weight: "400",
	subsets: ["latin"],
});

interface CTAButtonProps {
	label: string;
	link: string;
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
				"px-8 py-4 text-base md:text-lg font-semibold cursor-pointer overflow-hidden",
				// 🌈 animated gradient background
				"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
				"bg-[length:200%_200%] animate-borderGlow",
				// ✨ hover effects
				"transition-all duration-500 ease-in-out",
				"hover:scale-105 hover:shadow-glow",
				chivo.className,
				className || "",
			].join(" ")}>
			{/* Button text */}
			<span className="relative z-10 text-white font-bold transition-colors duration-300 hover:text-gray-100">
				{label}
			</span>

			{/* 💫 shimmer overlay */}
			<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 ease-out"></span>
		</a>
	);
}
