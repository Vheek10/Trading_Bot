/** @format */
"use client";

import { useMemo } from "react";
import CTAButton from "@/components/CTAButton";

const emojis = ["✨", "💸", "⭐", "🌟"];

export default function PhantomAICosts() {
	// Generate randomized floating emojis once per render
	const floatingEmojis = useMemo(
		() =>
			Array.from({ length: 12 }).map((_, i) => ({
				id: i,
				emoji: emojis[Math.floor(Math.random() * emojis.length)],
				top: `${Math.random() * 90}%`,
				left: `${Math.random() * 90}%`,
				duration: `${8 + Math.random() * 12}s`,
				delay: `${Math.random() * 5}s`,
				size: `${1 + Math.random() * 2}rem`,
				opacity: 0.4 + Math.random() * 0.6,
			})),
		[],
	);

	return (
		<section className="w-full relative bg-gray-900 text-white py-16 overflow-hidden">
			{/* Floating emojis */}
			<div className="absolute inset-0 pointer-events-none select-none">
				{floatingEmojis.map((item) => (
					<span
						key={item.id}
						style={{
							top: item.top,
							left: item.left,
							animationDuration: item.duration,
							animationDelay: item.delay,
							fontSize: item.size,
							opacity: item.opacity,
						}}
						className="absolute animate-float-slow">
						{item.emoji}
					</span>
				))}
			</div>

			{/* Content */}
			<div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-28 flex flex-col items-center gap-10 relative z-10">
				<h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-center">
					Phantom AI Robot Costs
				</h2>

				{/* Glowing Gradient Border Wrapper */}
				<div className="relative w-full max-w-md rounded-3xl p-[2px] animate-borderGlow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-glow">
					{/* Price Card */}
					<div className="rounded-3xl p-8 flex flex-col gap-6 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
						<div className="text-center space-y-2">
							<p className="text-lg text-gray-300">One-Time Installation</p>
							<p className="text-3xl font-bold text-white">$300</p>
						</div>

						<div className="text-center space-y-2">
							<p className="text-lg text-gray-400 line-through">$2500</p>
							<p className="text-2xl font-bold text-green-400">FREE</p>
						</div>

						<ul className="space-y-3 text-gray-200">
							{[
								"AI Predictions",
								"Algorithmic Trading",
								"Arbitrage",
								"Sentiment Analysis",
								"Real-time Monitoring",
								"Portfolio Optimization",
								"Risk Assessment",
							].map((feature, idx) => (
								<li
									key={idx}
									className="flex items-center gap-3 text-lg">
									<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-gray-900 font-bold flex-shrink-0">
										✓
									</span>
									{feature}
								</li>
							))}
						</ul>

						<div className="flex justify-center mt-4">
							<CTAButton
								label="Get Started"
								link="https://wa.me/2349012345678"
								className="px-6 py-2 text-sm rounded-full transition-transform transform hover:scale-110"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
