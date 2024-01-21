import { useTheme } from "@/contexts/theme/useTheme";
import GradientComponent from "@/components/GradientComponent";
import TypeWriterComponent from "@/components/TypeWriterComponent";

import { MainSection, MainContainer, HorizontalLine } from "./styles";

export default function HomeMain(props: { $id: string }) {
	const theme = useTheme();

	const strings = ["Software Developer", "3D Modeler"];

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
				<p>
					<em>
						<span>Always trying to</span> <span>be better and</span> <span>discover new things</span>
					</em>
				</p>
				<GradientComponent
					className="line"
					direction={45}
					colors={[
						{ color: theme?.primary, position: 0 },
						{ color: theme?.secondary, position: 1 },
					]}>
					<HorizontalLine />
				</GradientComponent>
				<TypeWriterComponent strings={strings} $className="typewriter" />
			</MainContainer>
		</MainSection>
	);
}

