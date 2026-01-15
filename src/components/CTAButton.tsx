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
				// animated background
				"bg-indigo-600",
				// hover effects
				"transition-all duration-300 ease-in-out",
				"hover:bg-indigo-700 hover:scale-105 hover:shadow-lg",
				chivo.className,
				className || "",
			].join(" ")}>
			{/* Button text */}
			<span className="relative z-10 text-white font-bold transition-colors duration-300 hover:text-gray-100">
				{label}
			</span>
		</a>
	);
}
