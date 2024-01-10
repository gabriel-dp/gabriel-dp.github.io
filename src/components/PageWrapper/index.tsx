import { PageContainer } from "./styles";

interface PageWrapperI {
	children: React.ReactNode;
}

export default function PageWrapper(props: PageWrapperI) {
	return <PageContainer>{props.children}</PageContainer>;
}

