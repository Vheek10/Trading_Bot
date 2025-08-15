/** @format */
"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function BotInfoSection() {
	return (
		<section className="w-full bg-gray-50 text-gray-900 py-16">
			<div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-28 flex flex-col lg:flex-row items-start gap-10">
				{/* Left Side Illustration with Rotating Star */}
				<div className="flex-1 flex justify-center lg:justify-start relative">
					<div className="w-full max-w-md h-100 bg-gray-200 rounded-xl flex items-center justify-center relative">
						<span className="text-gray-500">[Illustration Here]</span>

						{/* Rotating Star */}
						<div className="absolute top-0 right-0 -translate-x-1/4 -translate-y-1/4 pointer-events-none">
							<Image
								src="/assets/star.png"
								alt="Rotating Star"
								width={100}
								height={100}
								className="animate-spin-slow"
							/>
						</div>
					</div>
				</div>

				{/* Right Text Content */}
				<div className="flex-1 space-y-6 max-w-2xl">
					<h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600">
						Phantom A.I <br />
						Trading Robot
					</h1>

					<p className="text-gray-700 text-lg leading-relaxed">
						It is a trading computer program that uses artificial intelligence
						and machine learning to make automated trading decisions in
						financial markets. It analyzes data, develops trading strategies,
						and executes buy or sell orders based on predefined criteria set by
						our team of trading experts. This robot offers speed, efficiency,
						and emotion-free trading.
					</p>

					<CTAButton
						label="Get Automated Trading Bot Now"
						link="https://wa.me/2349012345678"
					/>
				</div>
			</div>
		</section>
	);
}
