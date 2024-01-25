import styled from "styled-components";

interface ImageComponentI {
	loading: string;
}

export const ImageComponent = styled.img<ImageComponentI>`
	opacity: ${(props) => (props.loading == "true" ? 0 : 1)};
	transition: opacity 0.25s ease-in-out;
`;

