import styled from "styled-components";

export const TitleContainer = styled.div`
	padding: 1rem;
	cursor: default;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	* {
		transition: all 0.25s ease-in-out;
	}

	.title {
		font-size: 2.5rem;
		white-space: nowrap;
		color: ${(props) => props.theme.primary};
	}

	.sub {
		font-size: 1.25rem;
		color: ${(props) => props.theme.secondary};
	}

	.line {
		width: 80%;
		margin: 0.5rem 0;
		height: 0.125rem;
		background-color: ${(props) => props.theme.primary};
		border-radius: 100rem;
	}

	.title:hover,
	.sub:hover {
		letter-spacing: 0.1rem;
	}
`;

