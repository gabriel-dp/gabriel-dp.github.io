import GradientComponent from "@/components/GradientComponent";
import { MainSection, MainContainer, HorizontalLine } from "./styles";
import { useTheme } from "@/contexts/theme/useTheme";

export default function HomeMain(props: { $id: string }) {
	const theme = useTheme();

	return (
		<MainSection id={props.$id}>
			<MainContainer>
				<GradientComponent
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
					direction={45}
					colors={[
						{ color: theme?.primary, position: 0 },
						{ color: theme?.secondary, position: 1 },
					]}>
					<HorizontalLine />
				</GradientComponent>
			</MainContainer>
		</MainSection>
	);
}

