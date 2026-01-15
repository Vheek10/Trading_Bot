/** @format */

"use client";

import React from "react";

export default function WhyUs() {
	return (
		<section className="w-full py-20 bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto px-6 text-center">
				{/* Heading */}
				<h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
					No Credit Card Required
				</h2>
				<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
					Our goal is to help as many people as possible become financially free
					through day trading—or at least make some extra money every single
					day.
				</p>

				{/* Features */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
					<div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition">
						<h3 className="text-xl font-semibold mb-2">
							8 Years of Experience
						</h3>
						<p className="text-gray-400">
							We’ve been in the game long enough to know what works.
						</p>
					</div>
					<div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition">
						<h3 className="text-xl font-semibold mb-2">
							5,000+ Successful Traders
						</h3>
						<p className="text-gray-400">
							Helped over 5,000 people trade profitably and consistently.
						</p>
					</div>
					<div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition">
						<h3 className="text-xl font-semibold mb-2">2.4 Billion Profit</h3>
						<p className="text-gray-400">
							Our community has generated over $2.4 billion in total profit.
						</p>
					</div>
					<div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition">
						<h3 className="text-xl font-semibold mb-2">70+ Hours Weekly</h3>
						<p className="text-gray-400">
							We dedicate 70+ hours combined each week analyzing markets.
						</p>
					</div>
					<div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500 transition">
						<h3 className="text-xl font-semibold mb-2">No Hidden Charges</h3>
						<p className="text-gray-400">
							All you need is your own funds to trade—our AI bot does the rest.
						</p>
					</div>
				</div>

				{/* CTA Button */}
				<div className="mt-12">
					<a
						href="#"
						className="px-8 py-4 text-lg font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 transition transform hover:scale-105 inline-block shadow-lg">
						Get Automated Trading Bot Now
					</a>
				</div>
			</div>
		</section>
	);
}
