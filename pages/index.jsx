import { BasicInfo } from "../components/content/basicInfo";
import { Step } from "../components/content/devSteps";
import { Faq } from "../components/content/faq";
import { Services } from "../components/content/ourServices";
import { Pricing } from "../components/content/pricing";
import { WhatWeDo } from "../components/content/whatWeDo";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Nav } from "../components/nav";

export default function Home() {
	if (typeof window !== "undefined") {
		const SmoothScroll = require("smooth-scroll");
		var scroll = new SmoothScroll('a[href*="#"]');
	}
	return (
		<>
			<Nav />
			<header className="select-none">
				<Header />
			</header>
			<main className="select-none">
				<WhatWeDo />
				<BasicInfo />
				{/* <Step />
				<Services /> */}
				<Pricing />
				{/* <Faq /> */}
			</main>
			<Footer />
		</>
	);
}
