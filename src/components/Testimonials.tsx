/** @format */
"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
	"/assets/1.jpeg",
	"/assets/2.jpeg",
	"/assets/3.jpeg",
	"/assets/4.jpeg",
	"/assets/5.jpeg",
	"/assets/6.jpeg",
	"/assets/7.jpeg",
];

export default function Testimonials() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (dir: "left" | "right") => {
		if (!scrollRef.current) return;
		const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

		if (dir === "left") {
			if (scrollLeft === 0) {
				scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
			} else {
				scrollRef.current.scrollBy({ left: -clientWidth, behavior: "smooth" });
			}
		} else {
			if (scrollLeft + clientWidth >= scrollWidth) {
				scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
			} else {
				scrollRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
			}
		}
	};

	// Swipe handlers
	const handlers = useSwipeable({
		onSwipedLeft: () => scroll("right"),
		onSwipedRight: () => scroll("left"),
		preventScrollOnSwipe: true,
		trackMouse: true, // allows mouse dragging too
	});

	return (
		<section className="relative py-16 bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
					Hear From Our Students
				</h2>

				<div className="relative">
					{/* Slider with swipe support */}
					<div
						{...handlers}
						ref={scrollRef}
						className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide scroll-smooth touch-pan-x">
						{testimonials.map((img, i) => (
							<div
								key={i}
								className="group relative min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] snap-center rounded-xl overflow-hidden bg-gray-900/70 p-3">
								<Image
									src={img}
									alt={`Testimonial ${i + 1}`}
									width={400}
									height={400}
									className="w-full h-72 md:h-80 lg:h-96 object-contain rounded-lg transform transition-transform duration-500 group-hover:scale-105"
								/>

								{/* Shadow overlay on hover */}
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
							</div>
						))}
					</div>

					{/* Arrows (only lg+) */}
					<button
						onClick={() => scroll("left")}
						className="hidden lg:flex absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full shadow-lg transition-all duration-300">
						<ChevronLeftIcon className="w-6 h-6" />
					</button>
					<button
						onClick={() => scroll("right")}
						className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full shadow-lg transition-all duration-300">
						<ChevronRightIcon className="w-6 h-6" />
					</button>
				</div>
			</div>
		</section>
	);
}
