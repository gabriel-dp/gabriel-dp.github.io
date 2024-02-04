import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Footer from "@/components/layout/Footer";

export default function About() {
	return (
		<PageWrapper>
			<Navbar />
			<SectionWrapper $id="#main" title="About">
				<p>Gabriel</p>
			</SectionWrapper>
			<Footer />
		</PageWrapper>
	);
}

