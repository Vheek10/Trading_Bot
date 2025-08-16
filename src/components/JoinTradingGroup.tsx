/** @format */

import React from "react";

export default function JoinTradingGroup() {
	return (
		<section className="relative overflow-hidden py-16 px-6 text-center">
			{/* Animated gradient background */}
			<div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-xy"></div>
			<div className="absolute inset-0 bg-black opacity-70"></div>

			<div className="relative max-w-3xl mx-auto text-white">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					Join Our Trading Group{" "}
					<span className="text-yellow-300">for free</span>
				</h2>

				<p className="text-lg md:text-xl text-gray-200 mb-6">
					Do you want to trade without stress, just like hundreds of our members
					do?
				</p>

				<p className="text-gray-300 mb-8">
					Get access to our chat community with members from all around the
					world to learn, chat and share knowledge with — including a beginner
					trading course, all for
					<span className="ml-1 font-extrabold text-yellow-300 animate-pulse drop-shadow-lg">
						100% Free 🎉
					</span>
				</p>

				<a
					href="https://wa.me/2349012345678" // <-- replace with your WhatsApp link
					target="_blank"
					rel="noopener noreferrer"
					className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg 
                     transition-all duration-500 hover:scale-110 hover:shadow-2xl">
					Enroll Now
				</a>
			</div>
		</section>
	);
}
