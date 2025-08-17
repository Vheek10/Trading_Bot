/** @format */

"use client";

import React from "react";

const videos = [
	"/vid1.mp4",
	"/vid2.mp4",
	"/vid3.mp4",
	"/vid4.mp4",
	"/vid5.mp4",
];

export default function Reviews() {
	return (
		<section className="w-full py-16 bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto px-6 text-center">
				{/* Gradient Heading */}
				<h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
					Our Reviews
				</h2>

				{/* Flex videos */}
				<div className="flex flex-wrap justify-center gap-6">
					{videos.map((video, index) => (
						<div
							key={index}
							className="rounded-xl overflow-hidden border border-gray-700 w-72 transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]">
							<video
								src={video}
								controls
								className="w-full h-64 object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
