/** @format */

import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			colors: {
				primary: "#7B3FE4",
				secondary: "#14F195",
			},
		},
	},
	plugins: [
		forms,
		typography,
		animate,
	],
} satisfies Config;
