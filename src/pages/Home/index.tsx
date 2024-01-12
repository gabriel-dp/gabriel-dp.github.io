import PageWrapper from "@/components/PageWrapper";
import Navbar, { NavButtonData } from "@/components/Navbar";

import HomeAbout from "./HomeAbout";

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
			<HomeAbout />
			<HomeAbout $id="#about" />
			<HomeAbout $id="#skills" />
			<HomeAbout $id="#projects" />
			<HomeAbout $id="#contact" />
		</PageWrapper>
	);
}

