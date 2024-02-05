import styled from "styled-components";

export const ImageContainer = styled.div`
	border: 1px solid ${(props) => props.theme.primary};
	border-radius: 50%;
	width: min(100%, 15rem);
	aspect-ratio: 1;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-height: 100%;
	}
`;

