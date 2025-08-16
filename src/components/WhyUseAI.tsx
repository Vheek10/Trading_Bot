/** @format */
"use client";

import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function WhyUseAI() {
	return (
		<section className="relative py-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
			<div className="max-w-6xl mx-auto text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-extrabold mb-4">
					Why Should You Use Our AI Trading Robot?​
				</h2>
				<p className="text-lg text-gray-300">
					Compare the benefits of trading with{" "}
					<span className="text-purple-400 font-bold">Phantom AI</span> vs.
					trading manually yourself.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
				{/* Phantom AI Robot */}
				<div className="p-8 rounded-2xl bg-gray-800/60 shadow-lg hover:shadow-purple-500/30 transition">
					<h3 className="text-2xl font-bold mb-6 text-purple-400">
						Trading With Phantom AI Robot
					</h3>
					<ul className="space-y-4 text-left">
						<li className="flex items-center space-x-3">
							<CheckCircleIcon className="w-6 h-6 text-green-400" />
							<span>Access To Our Experts</span>
						</li>
						<li className="flex items-center space-x-3">
							<CheckCircleIcon className="w-6 h-6 text-green-400" />
							<span>Emotion-Free Trading</span>
						</li>
						<li className="flex items-center space-x-3">
							<CheckCircleIcon className="w-6 h-6 text-green-400" />
							<span>Consistent Profits</span>
						</li>
						<li className="flex items-center space-x-3">
							<CheckCircleIcon className="w-6 h-6 text-green-400" />
							<span>Saves Time</span>
						</li>
						<li className="flex items-center space-x-3">
							<CheckCircleIcon className="w-6 h-6 text-green-400" />
							<span>100% Passive Income</span>
						</li>
					</ul>
				</div>

				{/* Trading Yourself */}
				<div className="p-8 rounded-2xl bg-gray-800/60 shadow-lg hover:shadow-red-500/30 transition">
					<h3 className="text-2xl font-bold mb-6 text-red-400">
						Trading Yourself
					</h3>
					<ul className="space-y-4 text-left">
						<li className="flex items-center space-x-3">
							<XCircleIcon className="w-6 h-6 text-red-400" />
							<span>Personal Data Analysis</span>
						</li>
						<li className="flex items-center space-x-3">
							<XCircleIcon className="w-6 h-6 text-red-400" />
							<span>Slow Execution</span>
						</li>
						<li className="flex items-center space-x-3">
							<XCircleIcon className="w-6 h-6 text-red-400" />
							<span>High Risk Possibility</span>
						</li>
						<li className="flex items-center space-x-3">
							<XCircleIcon className="w-6 h-6 text-red-400" />
							<span>Emotional Trading</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
