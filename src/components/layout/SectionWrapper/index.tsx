import { useTheme } from "@/contexts/theme/useTheme";
import GradientComponent from "@/components/utilities/GradientComponent";

import { SectionContainer, TitleContainer } from "./styles";

interface SectionWrapperI {
	$id: string;
	title?: string;
	sub?: string;
	children: React.ReactNode;
}

export default function SectionWrapper(props: SectionWrapperI) {
	const theme = useTheme();

	return (
		<SectionContainer id={props.$id}>
			<TitleContainer>
				<GradientComponent
					direction={135}
					colors={[
						{ color: theme?.primary, position: 0 },
						{ color: theme?.secondary, position: 1 },
					]}
					text>
					<h2 className="title">- {props.title} -</h2>
				</GradientComponent>
				<p className="sub"> {props.sub} </p>
			</TitleContainer>
			{props.children}
		</SectionContainer>
	);
}

