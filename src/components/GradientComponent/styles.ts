import styled from "styled-components";

interface ComponentContainerI {
	$gradient: string;
	$text: boolean;
}

export const ComponentContainer = styled.div<ComponentContainerI>`
	& > * {
		background: linear-gradient(${(props) => props.$gradient});
		background-clip: ${(props) => (props.$text ? "text" : "none")};
		-webkit-text-fill-color: transparent;
		user-select: none;
	}
`;

