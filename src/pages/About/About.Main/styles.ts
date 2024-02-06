import styled from "styled-components";

export const BioContainer = styled.div`
	width: min(100%, 35rem);

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	h2 {
		text-align: center;
	}
`;

export const TextContainer = styled.div`
	width: 100%;
	min-width: 15rem;
	padding: 1rem 1.5rem;
	border-radius: 0.5rem;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.primary}11;
	text-align: left;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const ImageContainer = styled.div`
	background: radial-gradient(${(props) => props.theme.background2}77, ${(props) => props.theme.background1}77);
	border: 1px solid ${(props) => props.theme.primary};
	border-radius: 50%;
	width: min(100%, 15rem);
	aspect-ratio: 1;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-width: 100%;
		max-height: 100%;
		filter: drop-shadow(0 -0.25rem 0.5rem ${(props) => props.theme.dark}22);
	}
`;

