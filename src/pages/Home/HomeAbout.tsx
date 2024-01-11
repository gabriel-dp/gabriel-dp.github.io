interface HomeAboutI {
	id: string;
}

export default function HomeAbout(props: HomeAboutI) {
	return <section id={props.id} style={{ minHeight: "100dvh", width: "100%", border: "1px solid black" }}></section>;
}

