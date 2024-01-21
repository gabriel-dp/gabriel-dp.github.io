import TypeWriter from "typewriter-effect";
import { TextContainer } from "./styles";

interface TypeWriterComponentI {
	strings: string[];
	$className?: string;
}

export default function TypeWriterComponent(props: TypeWriterComponentI) {
	return (
		<TextContainer className={props.$className}>
			<TypeWriter
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

