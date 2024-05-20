import { useTheme } from "@/contexts/theme/useTheme";
import SectionWrapper from "@/components/layout/SectionWrapper";
import GradientComponent from "@/components/utilities/GradientComponent";
import me from "@/assets/images/me.webp";
import useLanguage from "@/contexts/language/useLanguage";

import { BioContainer, ImageContainer, TextContainer } from "./styles";

export default function AboutMain() {
	const theme = useTheme();
	const t = useLanguage();

	console.log(t("about.description", { returnObjects: true }));
	const description: string[] = t("about.description", { returnObjects: true });

	return (
		<SectionWrapper $id="#main" title={t`sections.about.title`} sub={t`sections.about.subpage`}>
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
					{description.map((paragraph) => (
						<p>{paragraph}</p>
					))}
				</TextContainer>
			</BioContainer>
		</SectionWrapper>
	);
}
