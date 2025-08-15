/** @format */
"use client";

import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function PhantomAICosts() {
	return (
		<section className="w-full relative bg-gray-900 text-white py-16 overflow-hidden">
			{/* Floating crypto logos and stars in the background */}
			<div className="absolute inset-0 pointer-events-none">
				<Image
					src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
					alt="Bitcoin Logo"
					width={50}
					height={50}
					className="absolute top-10 left-20 animate-float-slow"
				/>
				<Image
					src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
					alt="Ethereum Logo"
					width={50}
					height={50}
					className="absolute top-32 right-16 animate-float-slow delay-2000"
				/>
				<Image
					src="https://cryptologos.cc/logos/solana-sol-logo.png"
					alt="Solana Logo"
					width={50}
					height={50}
					className="absolute top-20 left-40 animate-float-slow delay-3000"
				/>
				<Image
					src="https://cryptologos.cc/logos/ripple-xrp-logo.png"
					alt="Ripple Logo"
					width={50}
					height={50}
					className="absolute top-50 right-10 animate-float-slow delay-4000"
				/>
				<Image
					src="https://pngimg.com/uploads/star/star_PNG57.png"
					alt="Shining Star"
					width={30}
					height={30}
					className="absolute top-5 right-10 animate-spin-slow opacity-70"
				/>
				<Image
					src="https://pngimg.com/uploads/star/star_PNG57.png"
					alt="Shining Star"
					width={30}
					height={30}
					className="absolute bottom-10 left-5 animate-pulse-slow opacity-50"
				/>
			</div>

			<div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-28 flex flex-col items-center gap-10 relative z-10">
				{/* Title above the card */}
				<h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-center">
					Phantom AI Robot Costs
				</h2>

				{/* Price Card */}
				<div className="w-full max-w-md bg-gray-800/90 rounded-3xl p-8 flex flex-col gap-6 shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
					{/* One-Time Installation */}
					<div className="text-center space-y-2">
						<p className="text-lg text-gray-300">One-Time Installation</p>
						<p className="text-4xl font-bold text-white">$300</p>
					</div>

					{/* Subscription Value */}
					<div className="text-center space-y-2">
						<p className="text-lg text-gray-400 line-through">$2500</p>
						<p className="text-2xl font-bold text-green-400">FREE</p>
					</div>

					{/* Features List with Tick Circle */}
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
								className="flex items-center gap-3 text-lg leading-relaxed">
								{/* Tick Circle */}
								<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500 text-gray-900 font-bold flex-shrink-0">
									✓
								</span>
								{feature}
							</li>
						))}
					</ul>

					{/* Get Started Button */}
					<div className="flex justify-center mt-4">
						<CTAButton
							label="Get Started"
							link="https://wa.me/2349012345678"
							className="px-6 py-2 text-sm rounded-full transition-transform transform hover:scale-110"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
