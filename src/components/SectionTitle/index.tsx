import { useTheme } from "@/contexts/theme/useTheme";
import GradientComponent from "@/components/GradientComponent";

import { TitleContainer } from "./styles";

interface SectionTitleI {
	title: string;
	sub?: string;
}

export default function SectionTitle(props: SectionTitleI) {
	const theme = useTheme();

	return (
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
	);
}

