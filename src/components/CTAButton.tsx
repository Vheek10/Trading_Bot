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
				"group relative z-10 inline-flex items-center justify-center rounded-xl",
				"px-8 py-4 text-base md:text-lg font-semibold cursor-pointer overflow-hidden",
				// gradient background
				"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
				"bg-[length:200%_200%] bg-[position:0%_50%]",
				// hover & animation
				"transition-all duration-700 ease-in-out transform-gpu",
				"group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]",
				"group-hover:bg-[position:100%_50%]",
				chivo.className,
				className || "",
			].join(" ")}
			style={{
				backgroundSize: "200% 200%",
				backgroundPosition: "0% 50%",
			}}>
			{/* Button text with subtle shimmer */}
			<span className="relative z-10 text-white transition-colors duration-500 group-hover:text-gray-100">
				{label}
			</span>

			{/* Optional shimmer overlay */}
			<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></span>
		</a>
	);
}
