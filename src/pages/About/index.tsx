import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";

import AboutMain from "./About.Main";
import AboutEducation from "./About.Education";

export default function About() {
	return (
		<PageWrapper>
			<Navbar />
			<AboutMain />
			<AboutEducation />
			<Footer />
		</PageWrapper>
	);
}

