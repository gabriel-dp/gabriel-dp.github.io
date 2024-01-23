import styled from "styled-components";

export const SectionContainer = styled.section`
	border-top: 1px solid ${(props) => props.theme.secondary}77;
	width: 100%;
	padding: 1.5rem 1.5rem 3rem 1.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.5rem;
	}
`;

export const TitleContainer = styled.div`
	padding: 2rem 0;
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

