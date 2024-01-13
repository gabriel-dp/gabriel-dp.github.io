import { useTheme } from "@/contexts/theme/useTheme";
import GradientComponent from "@/components/GradientComponent";

import { PageContainer, ScreenBackground } from "./styles";

interface PageWrapperI {
	children: React.ReactNode;
}

export default function PageWrapper(props: PageWrapperI) {
	const theme = useTheme();

	return (
		<>
			<GradientComponent
				direction={135}
				colors={[
					{ color: theme?.background1, position: 0 },
					{ color: theme?.background2, position: 1 },
				]}>
				<ScreenBackground></ScreenBackground>
			</GradientComponent>
			<PageContainer>{props.children}</PageContainer>
		</>
	);
}

