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

	.title:hover,
	.sub:hover {
		letter-spacing: 0.1rem;
	}

	@media screen and (max-width: 767px) {
		.title {
			font-size: 2rem;
		}

		.sub {
			font-size: 1.15rem;
		}
	}
`;

