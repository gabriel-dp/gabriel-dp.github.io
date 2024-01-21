import { useTheme } from "@/contexts/theme/useTheme";
import GradientComponent from "@/components/GradientComponent";
import TypeWriterComponent from "@/components/TypeWriterComponent";
import { SocialIconGithub, SocialIconInstagram, SocialIconLinkedin } from "@/components/SocialIcons";

import { MainSection, MainContainer, HorizontalLine, SocialContainer } from "./styles";

const TYPEWRITER_STRINGS = ["Software Developer", "3D Modeler"];

export default function HomeMain(props: { $id: string }) {
	const theme = useTheme();

	return (
		<MainSection id={props.$id}>
			<MainContainer>
				<GradientComponent
					className="title"
					direction={150}
					colors={[
						{ color: theme?.primary, position: 0 },
						{ color: theme?.secondary, position: 1 },
					]}
					text>
					<h1>
						<span>Gabriel</span> <span>de Paula</span>
					</h1>
				</GradientComponent>
				<TypeWriterComponent strings={TYPEWRITER_STRINGS} $className="typewriter" />
				<GradientComponent
					className="line"
					direction={45}
					colors={[
						{ color: theme?.primary, position: 0 },
						{ color: theme?.secondary, position: 1 },
					]}>
					<HorizontalLine />
				</GradientComponent>
				<SocialContainer className="social">
					<SocialIconGithub />
					<SocialIconLinkedin />
					<SocialIconInstagram />
				</SocialContainer>
			</MainContainer>
		</MainSection>
	);
}

