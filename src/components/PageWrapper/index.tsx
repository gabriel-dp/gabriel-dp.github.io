import { PageContainer, ScreenBackground } from "./styles";

interface PageWrapperI {
	children: React.ReactNode;
}

export default function PageWrapper(props: PageWrapperI) {
	return (
		<>
			<ScreenBackground></ScreenBackground>
			<PageContainer>{props.children}</PageContainer>
		</>
	);
}

