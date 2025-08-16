/** @format */

// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}", // 👈 add this
	],
	theme: {
		extend: {
			keyframes: {
				gradient: {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
			animation: {
				gradient: "gradient 4s ease infinite",
			},
		},
	},
	plugins: [],
};

export default config;
