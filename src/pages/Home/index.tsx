import PageWrapper from "@/components/PageWrapper";
import Navbar, { NavButtonData } from "@/components/Navbar";

import HomeMain from "./HomeMain";

export default function Home() {
	const navButtons: NavButtonData[] = [
		{ text: "About", to: "#about" },
		{ text: "Skills", to: "#skills" },
		{ text: "Projects", to: "#projects" },
		{ text: "Contact", to: "#contact" },
	];

	return (
		<PageWrapper>
			<Navbar buttons={navButtons} />
			<HomeMain $id="home" />
		</PageWrapper>
	);
}

