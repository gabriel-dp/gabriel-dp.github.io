import PageWrapper from "@/components/PageWrapper";
import Navbar, { NavButtonData } from "@/components/Navbar";
import Footer from "@/components/Footer";

import HomeMain from "./HomeMain";
import HomeProjects from "./HomeProjects";

const sections: {
	id: string;
	text: string;
	component: (props: { $id: string }) => JSX.Element;
}[] = [{ id: "#projects", text: "Projects", component: HomeProjects }];

export default function Home() {
	const navButtons: NavButtonData[] = sections.map((section) => ({ text: section.text, to: section.id }));

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

