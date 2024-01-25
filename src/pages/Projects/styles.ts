import styled from "styled-components";

export const CardsContainer = styled.div`
	width: min(60rem, 100%);
	padding: 1rem;

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	gap: 1.5rem;

	& > * {
		max-width: 25rem;
		height: 100%;
		margin: auto;
	}
`;

