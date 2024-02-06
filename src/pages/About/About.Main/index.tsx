import { useTheme } from "@/contexts/theme/useTheme";
import SectionWrapper from "@/components/layout/SectionWrapper";
import GradientComponent from "@/components/utilities/GradientComponent";
import me from "@/assets/images/me.webp";

import { BioContainer, ImageContainer, TextContainer } from "./styles";

export default function AboutMain() {
	const theme = useTheme();

	return (
		<SectionWrapper $id="#main" title="About">
			<BioContainer>
				<ImageContainer>
					<img src={me} alt="a handsome boy" />
				</ImageContainer>
				<GradientComponent
					direction={135}
					colors={[
						{ color: theme?.primary, position: 0 },
						{ color: theme?.secondary, position: 1 },
					]}
					text>
					<h2>Gabriel de Paula Meira</h2>
				</GradientComponent>
				<TextContainer>
					<p>
						I'm an enthusiastic software developer and Computer Science student. I began my journey in 2019 with
						robotics, and since then, my focus has been on tackling challenges, creating efficient and scalable
						solutions.
					</p>
					<p>
						I'm dedicated consistenly to applying and enhancing my skills, as well as contributing to innovative
						initiatives.
					</p>
				</TextContainer>
			</BioContainer>
		</SectionWrapper>
	);
}

