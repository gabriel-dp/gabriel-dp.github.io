import { ComponentContainer } from "./styles";

interface Color {
	color: string;
	position: number; // 0~1
}

interface GradientTextI {
	direction: number; // deg
	colors: Color[];
	text?: boolean;
	children: React.ReactElement<HTMLElement>;
}

export default function GradientText(props: GradientTextI) {
	const colors: string[] = [];

	if (props.colors.length < 2) {
		// Default gradient (error)
		colors.push("#FFFFFF", "#000000");
	} else {
		// Provided gradient with position
		colors.push(...props.colors.map((color) => `${color.color} ${color.position * 100}%`));
	}

	// CSS linear-gradient() text
	const gradient: string = `${props.direction}deg, ${colors.join(", ")}`;

	return (
		<ComponentContainer $gradient={gradient} $text={props.text ?? false}>
			{props.children}
		</ComponentContainer>
	);
}

