import SectionWrapper from "@/components/SectionWrapper";

interface HomeAboutI {
	$id?: string;
}

export default function HomeAbout(props: HomeAboutI) {
	return (
		<SectionWrapper $id={props.$id}>
			<h1>Section</h1>
		</SectionWrapper>
	);
}

