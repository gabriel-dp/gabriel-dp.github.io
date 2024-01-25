import styled from "styled-components";

export const ProjectsSection = styled.section`
	border-top: 1px solid ${(props) => props.theme.secondary}77;
	width: 100%;
	padding: 1.5rem;

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

export const CardsContainer = styled.div`
	width: min(100%, 25rem);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	@media screen and (min-width: 768px) {
		width: min(100%, 50rem);

		.card:nth-child(even) {
			flex-direction: row-reverse;
		}

		> :nth-child(even) {
			margin-left: 5%;
		}

		> :nth-child(odd) {
			margin-right: 5%;
		}
	}
`;

export const SeeMoreButton = styled.button`
	padding: 0.5rem 1.5rem;
	border-radius: 0.5rem;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.color1}00;
	color: ${(props) => props.theme.primary};
	user-select: none;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.primary};
		color: ${(props) => props.theme.background1};
	}
`;
