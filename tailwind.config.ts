/** @format */

// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 20s linear infinite", // slow rotation
			},
		},
	},
	plugins: [],
};

export default config;
