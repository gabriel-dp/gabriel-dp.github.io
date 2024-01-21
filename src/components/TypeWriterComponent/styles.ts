import styled from "styled-components";

export const TextContainer = styled.div`
	.Typewriter {
		width: min-content;
		white-space: nowrap;
		user-select: none;

		* {
			color: ${(props) => props.theme.secondary};
		}
	}
`;

