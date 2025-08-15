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
				"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-[position:0%_50%]",
				"shadow-lg transform-gpu",
				"transition-all duration-500 ease-out",
				"group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-[position:100%_0%]",
				chivo.className, // apply Chivo font
				className || "",
			].join(" ")}
			style={{
				backgroundPosition: "0% 50%", // initial gradient position
			}}>
			<span className="relative z-10 text-white">{label}</span>
		</a>
	);
}
