/** @format */
"use client";

import { useMemo } from "react";
import CTAButton from "@/components/CTAButton";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function PhantomAICosts() {
	return (
		<section className="w-full relative bg-gray-900 text-white py-16 overflow-hidden">
			{/* Content */}
			<div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-28 flex flex-col items-center gap-10 relative z-10">
				<h2 className="text-3xl md:text-4xl font-bold text-white text-center">
					Phantom AI Robot Costs
				</h2>

				{/* Solid Border Wrapper */}
				<div className="relative w-full max-w-md rounded-3xl p-[2px] bg-indigo-600 shadow-lg">
					{/* Price Card */}
					<div className="rounded-3xl p-8 flex flex-col gap-6 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl bg-gray-800">
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
									<CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
									{feature}
								</li>
							))}
						</ul>

						<div className="flex justify-center mt-4">
							<CTAButton
								label="Get Started"
								link="https://wa.me/2348116062226"
								className="px-6 py-2 text-sm rounded-full transition-transform transform hover:scale-110"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
