import PageWrapper from "@/components/PageWrapper";
import Navbar, { NavButtonData } from "@/components/Navbar";
import Footer from "@/components/Footer";

import HomeMain from "./Home.Main";
import HomeAbout from "./Home.About";
import HomeSkills from "./Home.Skills";
import HomeContact from "./Home.Contact";
import HomeProjects from "./Home.Projects";

const sections: {
	id: string;
	text: string;
	component: (props: { $id: string }) => JSX.Element;
}[] = [
	{ id: "#about", text: "About", component: HomeAbout },
	{ id: "#skills", text: "Skills", component: HomeSkills },
	{ id: "#projects", text: "Projects", component: HomeProjects },
	{ id: "#contact", text: "Contact", component: HomeContact },
];

const navButtons: NavButtonData[] = sections.map((section) => ({ text: section.text, to: section.id }));

export default function Home() {
	return (
		<PageWrapper>
			<Navbar buttons={navButtons} />
			<HomeMain $id="#home" />
			{sections.map((section) => (
				<section.component key={section.id} $id={section.id} />
			))}
			<Footer />
		</PageWrapper>
	);
}

