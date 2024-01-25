import { default as TypeWriterComponent } from "typewriter-effect";
import { TextContainer } from "./styles";

interface TypeWriterI {
	strings: string[];
	$className?: string;
}

export default function TypeWriter(props: TypeWriterI) {
	return (
		<TextContainer className={props.$className}>
			<TypeWriterComponent
				options={{
					strings: props.strings,
					autoStart: true,
					loop: true,
					delay: 75,
					deleteSpeed: 50,
					wrapperClassName: "text",
					cursorClassName: "cursor",
				}}
			/>
		</TextContainer>
	);
}

