import { SectionContainer } from "./styles";

interface SectionWrapperI {
	$id?: string;
	children: React.ReactNode;
}

export default function SectionWrapper(props: SectionWrapperI) {
	return <SectionContainer id={props.$id}>{props.children}</SectionContainer>;
}

