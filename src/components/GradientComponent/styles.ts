import styled, { css } from "styled-components";

interface ComponentContainerI {
	$gradient: string;
	$text: boolean;
}

const styleNormalGradient = css<ComponentContainerI>`
	background: linear-gradient(${(props) => props.$gradient});
`;

const styleTextGradient = css<ComponentContainerI>`
	background: linear-gradient(${(props) => props.$gradient});
	background-clip: ${(props) => (props.$text ? "text" : "none")};
	user-select: none;
	-webkit-text-fill-color: transparent;
`;

export const ComponentContainer = styled.div<ComponentContainerI>`
	align-self: stretch;

	& > * {
		${(props) => (props.$text ? styleTextGradient : styleNormalGradient)};
	}
`;

