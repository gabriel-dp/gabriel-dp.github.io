import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Footer from "@/components/layout/Footer";
import me from "@/assets/images/me.webp";

import { ImageContainer } from "./styles";

export default function About() {
	return (
		<PageWrapper>
			<Navbar />
			<SectionWrapper $id="#main" title="About">
				<ImageContainer>
					<img src={me} alt="a handsome boy" />
				</ImageContainer>
				<p>* In progress *</p>
			</SectionWrapper>
			<Footer />
		</PageWrapper>
	);
}

