/** @format */

import BotInfoSection from "@/components/BotInfoSection";
import Hero from "@/components/Hero";
import MarketTicker from "@/components/MarketTicker";
import BotBenefitsSection from "@/components/BotBenefitsSection";
import EarnWithPhantomSection from "@/components/EarnWithPhantomSection";
import PhantomAICosts from "@/components/PhantomAICosts";
import WhyUseAI from "@/components/WhyUseAI";
import JoinTradingGroup from "@/components/JoinTradingGroup";
import Testimonials from "@/components/Testimonials";
export default function Home() {
	return (
		<>
			<Hero />
			<MarketTicker />
			<BotInfoSection />
			<BotBenefitsSection />
			<EarnWithPhantomSection />
			<PhantomAICosts />
			<WhyUseAI />
			<JoinTradingGroup />
			<Testimonials />
		</>
	);
}
