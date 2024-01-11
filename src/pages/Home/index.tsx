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
		<>
			<Navbar buttons={navButtons} />
			<HomeAbout id="#home" />
			<HomeAbout id="#about" />
			<HomeAbout id="#skills" />
			<HomeAbout id="#projects" />
			<HomeAbout id="#contact" />
		</>
	);
}

