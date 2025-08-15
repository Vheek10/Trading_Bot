/** @format */

import BotInfoSection from "@/components/BotInfoSection";
import Hero from "@/components/Hero";
import MarketTicker from "@/components/MarketTicker";

export default function Home() {
	return (
		<>
			<Hero />
			<MarketTicker />
			<BotInfoSection />
		</>
	);
}
