import { PropsWithChildren } from "react";

import { ElementTimeLine, TimeLineContainer, TimeLinePath, VerticalLine } from "./styles";

export function TimeLineElement(props: PropsWithChildren) {
	return <ElementTimeLine>{props.children}</ElementTimeLine>;
}

export function TimeLine(props: PropsWithChildren) {
	return (
		<TimeLineContainer>
			<VerticalLine />
			<TimeLinePath>{props.children}</TimeLinePath>
		</TimeLineContainer>
	);
}
