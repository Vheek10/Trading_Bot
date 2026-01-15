/** @format */

"use client";

import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqs = [
	{
		question: "Is my trading capital safe?",
		answer:
			"Yes. The A.I Robot only has access to open and close trades. You control all access to deposit and withdraw from your account.",
	},
	{
		question: "Is the Robot profitable in all trades?",
		answer:
			"The Robot is Profitable in 80% of all trades it takes and has been programmed to close weekly in profit or Breakeven, so it works to meet set targets.",
	},
	{
		question: "Does the Robot require updates?",
		answer:
			"The Robot is programmed to update itself based on market trends and does not require frequent manual reconfigurations.",
	},
	{
		question: "What does the Robot trade on?",
		answer: "It trades on selected forex market pairs.",
	},
	{
		question: "How does the Robot manage risk of loss?",
		answer:
			"The Robot has a preset risk management system to minimize loss and maximize profit. This adjusts based on your trading capital.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="w-full py-20 bg-gray-950 text-white">
			<div className="max-w-4xl mx-auto px-6">
				{/* Heading */}
				<h2 className="text-4xl font-bold text-center mb-6 text-white">
					Frequently Asked Questions
				</h2>
				<p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
					Everyone should have the chance to live the life of their desires,
					both in terms of financial security and time management. And since
					other people making money doesn’t affect us making money too, why not
					share with them?
				</p>

				{/* FAQ List */}
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="border border-gray-700 rounded-lg overflow-hidden">
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full flex justify-between items-center px-6 py-4 bg-gray-800 hover:bg-gray-700 transition">
								<span className="font-medium">{faq.question}</span>
								{openIndex === index ? (
									<MinusIcon className="w-5 h-5 text-purple-400" />
								) : (
									<PlusIcon className="w-5 h-5 text-purple-400" />
								)}
							</button>
							{openIndex === index && (
								<div className="px-6 py-4 bg-gray-900 text-gray-300 animate-fadeIn">
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
