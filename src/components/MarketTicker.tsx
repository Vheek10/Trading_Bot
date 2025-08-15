/** @format */
"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function MarketTicker() {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
		script.async = true;
		script.innerHTML = JSON.stringify({
			symbols: [
				{ description: "Apple", proName: "NASDAQ:AAPL" },
				{ description: "Google", proName: "NASDAQ:GOOGL" },
				{ description: "Bitcoin", proName: "BINANCE:BTCUSDT" },
				{ description: "Ethereum", proName: "BINANCE:ETHUSDT" },
				{ description: "Tesla", proName: "NASDAQ:TSLA" },
			],
			showSymbolLogo: true,
			colorTheme: "dark",
			isTransparent: true,
			displayMode: "scroll",
			locale: "en",
		});
		document.getElementById("tradingview-widget")?.appendChild(script);
	}, []);

	return (
		<section className="w-full bg-gray-700 relative flex items-center h-16 overflow-hidden">
			{/* TradingView ticker */}
			<div
				id="tradingview-widget"
				className="w-full overflow-hidden"
				style={{ height: "60px", boxShadow: "none" }}></div>

			{/* Fixed TradingView icon on the right */}
			<a
				href="https://www.tradingview.com"
				target="_blank"
				rel="noopener noreferrer"
				className="absolute right-4 top-1/2 -translate-y-1/2"></a>
		</section>
	);
}
