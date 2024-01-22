import styled from "styled-components";

export const ProjectsSection = styled.section`
	width: 100%;
	padding: 1.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

export const CardsContainer = styled.div`
	width: min(100%, 25rem);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	@media screen and (min-width: 768px) {
		width: min(100%, 50rem);
	}
`;

export const SeeMoreButton = styled.div`
	padding: 0.5rem 1.5rem;
	border-radius: 100rem;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.primaryText};
	user-select: none;
	cursor: pointer;
`;

