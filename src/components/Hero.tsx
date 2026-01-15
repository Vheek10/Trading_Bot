/** @format */
"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function Hero() {
	return (
		<section
			className="w-full text-blue-900 relative bg-[#D1E9FF] overflow-hidden">


			<div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-28 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 relative z-10">
				{/* Left Text Content */}
				<div className="flex-1 text-left space-y-6 max-w-xl">
					<h1 className="text-4xl md:text-5xl font-bold leading-tight">
						Make Consistent Passive Profits <br />
						by Using our{" "}
						<span className="text-indigo-700">
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
						{/* Rotating Star Over Image */}
						<div className="absolute -top-12 -right-12 pointer-events-none z-20 hidden md:block">
							<Image
								src="/assets/star.png"
								alt="Rotating Star"
								width={140}
								height={140}
								className="animate-spin-slow opacity-25"
							/>
						</div>

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
