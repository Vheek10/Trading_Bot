/** @format */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
	"/assets/bitcoin.png",
	"/assets/ethereum.png",
	"/assets/cardano.png",
	"/assets/binance.png",
	"/assets/polkadot.png",
];

export default function EarnWithPhantomSection() {
	const [positions, setPositions] = useState<
		{ top: number; left: number; dur: number; delay: number }[]
	>([]);

	useEffect(() => {
		// Initialize random positions for logos
		setPositions(
			logos.map(() => ({
				top: Math.random() * 80,
				left: Math.random() * 80,
				dur: 5 + Math.random() * 5, // duration 5-10s
				delay: Math.random() * 5, // delay 0-5s
			})),
		);
	}, []);

	return (
		<section className="w-full bg-gray-900 text-white py-16 relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 xl:px-28 flex flex-col lg:flex-row items-start gap-10">
				{/* Left Card with floating logos */}
				<div className="relative flex-1 w-full lg:w-1/3 h-auto rounded-3xl bg-gray-800/70 overflow-hidden">
					{positions.map((pos, idx) => (
						<Image
							key={idx}
							src={logos[idx]}
							alt={`Logo ${idx}`}
							width={40}
							height={40}
							className="absolute rounded-full"
							style={{
								top: `${pos.top}%`,
								left: `${pos.left}%`,
								animation: `swim-${idx} ${pos.dur}s infinite ease-in-out`,
								animationDelay: `${pos.delay}s`,
							}}
						/>
					))}
				</div>

				{/* Right Text */}
				<div className="flex-1 max-w-2xl space-y-6">
					<h2 className="text-3xl md:text-4xl font-bold">
						Earn with Phantom{" "}
						<span className="text-yellow-400 animate-twinkle">AI</span>
					</h2>
					<p className="text-gray-300 text-lg leading-relaxed">
						Our goal at Learn And Trade Academy is to assist as many people as
						possible in becoming financially free through trading or, earning a
						side income without having any experience in trading.
					</p>
					<p className="text-gray-300 text-lg leading-relaxed">
						Everyone should have the chance to live the life of their desires,
						both in terms of financial security and time management.
					</p>
					<p className="text-gray-300 text-lg leading-relaxed">
						And we at Learn And Trade Academy have found an easy way to do this
						for free. Phantom AI does all the work and all you have to do is
						follow our instructions.
					</p>
					<p className="text-gray-300 text-lg leading-relaxed">
						The only criterion is that you have some money to trade with.
					</p>
				</div>
			</div>

			<style jsx>{`
				@keyframes twinkle {
					0%,
					100% {
						opacity: 1;
					}
					50% {
						opacity: 0.4;
					}
				}
				.animate-twinkle {
					animation: twinkle 1.5s infinite ease-in-out;
				}

				/* Dynamically generate random swim animations */
				${positions
					.map(
						(pos, idx) => `
					@keyframes swim-${idx} {
						0% { transform: translate(0px, 0px); }
						25% { transform: translate(${Math.random() * 20 - 10}px, ${
							Math.random() * 20 - 10
						}px); }
						50% { transform: translate(${Math.random() * 20 - 10}px, ${
							Math.random() * 20 - 10
						}px); }
						75% { transform: translate(${Math.random() * 20 - 10}px, ${
							Math.random() * 20 - 10
						}px); }
						100% { transform: translate(0px, 0px); }
					}
				`,
					)
					.join("\n")}
			`}</style>
		</section>
	);
}
