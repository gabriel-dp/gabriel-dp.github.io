import PageWrapper from "@/components/layout/PageWrapper";
import Navbar, { NavButtonData } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/contexts/language/useLanguage";

import HomeMain from "./Home.Main";
import HomeAbout from "./Home.About";
import HomeSkills from "./Home.Skills";
import HomeContact from "./Home.Contact";
import HomeProjects from "./Home.Projects";

export default function Home() {
	const t = useLanguage();

	const sections: {
		id: string;
		text: string;
		component: (props: { $id: string }) => JSX.Element;
	}[] = [
		{ id: "#about", text: t`sections.about.title`, component: HomeAbout },
		{ id: "#skills", text: t`sections.skills.title`, component: HomeSkills },
		{ id: "#projects", text: t`sections.projects.title`, component: HomeProjects },
		{ id: "#contact", text: t`sections.contact.title`, component: HomeContact },
	];
	const navButtons: NavButtonData[] = sections.map((section) => ({ text: section.text, to: section.id }));

	return (
		<PageWrapper>
			<Navbar buttons={navButtons} />
			<HomeMain $id="#home" next={sections[0].id} />
			{sections.map((section) => (
				<section.component key={section.id} $id={section.id} />
			))}
			<Footer />
		</PageWrapper>
	);
}
