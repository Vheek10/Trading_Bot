/** @format */
"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function BotBenefitsSection() {
	const textRef = useRef<HTMLDivElement>(null);
	const [textHeight, setTextHeight] = useState(0);

	useEffect(() => {
		if (textRef.current) {
			setTextHeight(textRef.current.clientHeight);
		}

		const handleResize = () => {
			if (textRef.current) {
				setTextHeight(textRef.current.clientHeight);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="w-full bg-gray-100 text-gray-900 py-16 relative">
			<div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-28 flex flex-col lg:flex-row items-start gap-10">
				{/* Left Text Content */}
				<div
					ref={textRef}
					className="flex-1 space-y-6 max-w-2xl">
					<h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600">
						Why you need our AI Trading Bot
					</h2>

					<ul className="space-y-3">
						{[
							"100% Free",
							"Plug and play system, no need to monitor trades.",
							"100% passive income",
							"25% to 80% monthly ROI",
							"Trade on multiple currencies",
							"Access to free trading course and ebook for beginners",
							"1 on 1 support/ guidance",
							"Free VPS for 1 year",
							"No trading knowledge or experience required",
							"3 to 8 trades daily",
							"Access to trading community",
						].map((item, idx) => (
							<li
								key={idx}
								className="flex items-center gap-3 text-gray-700 text-lg leading-relaxed group hover:text-indigo-600 transition-colors duration-300">
								<span className="inline-block w-4 h-4 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300"></span>
								{item}
							</li>
						))}
					</ul>

					<CTAButton
						label="Get Automated Trading Bot Now"
						link="https://wa.me/2349012345678"
					/>
				</div>

				{/* Right Side Illustration with Phone Image */}
				<div className="flex-1 flex justify-center lg:justify-end">
					<div
						className="relative w-full rounded-3xl flex items-center justify-center overflow-hidden"
						style={{ height: textHeight }}>
						{/* Rotating Star */}
						<Image
							src="/assets/star.png"
							alt="Rotating Star"
							width={130}
							height={130}
							className="absolute top-4 right-4 animate-spin-slow pointer-events-none"
						/>

						{/* Phone Image */}
						<Image
							src="/assets/phone.png"
							alt="Phone Illustration"
							width={textHeight} // same as text height
							height={textHeight}
							className="object-contain rounded-3xl"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
