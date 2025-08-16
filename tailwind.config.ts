/** @format */

// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}", // 👈 make sure app dir is included
	],
	theme: {
		extend: {
			keyframes: {
				"gradient-xy": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
			animation: {
				"gradient-xy": "gradient-xy 6s ease infinite",
			},
			backgroundSize: {
				"200%": "200% 200%", // 👈 ensures smooth gradient animation
			},
		},
	},
	plugins: [],
};

export default config;
