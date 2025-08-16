/** @format */

// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
  extend: {
    animation: {
      "spin-slow": "spin 20s linear infinite",
      "float-slow": "float 6s ease-in-out infinite",
      "pulse-slow": "pulse 3s ease-in-out infinite",
    },
    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-15px)" },
      },
    },
  },
}

	plugins: [],
};

export default config;
