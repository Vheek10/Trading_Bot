/** @format */
"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function Hero() {
	return (
		<section
			className="w-full text-blue-900 relative bg-[#D1E9FF] overflow-hidden">
			{/* Subtle Light Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-blue-300/20"></div>

			{/* Rotating Star in the Middle */}
			<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
				<Image
					src="/assets/star.png"
					alt="Rotating Star"
					width={150}
					height={150}
					className="animate-spin-slow opacity-20"
				/>
			</div>

			<div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-28 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 relative z-10">
				{/* Left Text Content */}
				<div className="flex-1 text-left space-y-6 max-w-xl">
					<h1 className="text-4xl md:text-5xl font-bold leading-tight">
						Make Consistent Passive Profits <br />
						by Using our{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
							Phantom A.I Trading Software
						</span>
					</h1>

					{/* Button */}
					<CTAButton
						label="Get Automated Trading Bot Now"
						link="https://wa.me/2348116062226"
					/>

					{/* Image + Divider + Rating */}
					<div className="flex items-center gap-6 mt-6">
						<Image
							src="/assets/whitepilot.png"
							alt="Whitepilot Logo"
							width={135}
							height={135}
							className="object-contain"
						/>
						<div className="w-px h-20 bg-blue-900/20"></div>
						<h3 className="font-bold text-blue-900">
							4.5 <br />
							AVG RATING
						</h3>
					</div>
				</div>

				{/* Hero Image */}
				<div className="flex-1 flex justify-center lg:justify-end">
					<div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[450px]">
						<Image
							src="/assets/hero-image.jpg"
							alt="Phantom AI Trading Bot"
							fill
							className="object-cover rounded-2xl"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
