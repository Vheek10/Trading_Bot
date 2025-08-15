/** @format */
"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="w-full bg-gray-900 text-white">
			<div
				className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-28 py-16 lg:py-24
                      flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
				{/* Left Text Content */}
				<div className="flex-1 text-left space-y-6 max-w-xl">
					<h1 className="text-4xl md:text-5xl font-bold leading-tight">
						Make Consistent Passive Profits <br />
						by Using our{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
							Phantom A.I Trading Software
						</span>
					</h1>

					{/* Stars + text */}
					<div className="flex items-center gap-3">
						<span className="text-yellow-400 text-xl">★ ★ ★ ★ ☆</span>
						<p className="text-gray-400">4.5 AVG rating</p>
					</div>

					{/* Button */}
					<CTAButton
						label="Get Automated Trading Bot Now"
						link="https://wa.me/2349012345678"
					/>

					{/* Image + Divider + Rating */}
					<div className="flex items-center gap-6 mt-6">
						{/* Left image */}
						<Image
							src="/assets/whitepilot.png"
							alt="Whitepilot Logo"
							width={100}
							height={95}
							className="object-contain"
						/>

						{/* Divider */}
						<div className="w-px h-10 bg-white"></div>

						{/* Rating text */}
						<h3 className="text-shadow-2xsl font-bold ">
							4.5 <br />
							AVG RATING
						</h3>
					</div>
				</div>

				{/* Right Side Image Placeholder */}
				<div className="flex-1 flex justify-center lg:justify-end">
					<div className="w-72 md:w-80 h-72 md:h-80 bg-gray-800/80 rounded-xl flex items-center justify-center">
						<span className="text-gray-500">[Image Here]</span>
					</div>
				</div>
			</div>
		</section>
	);
}
