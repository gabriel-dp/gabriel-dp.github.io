import styled from "styled-components";

interface CardContainerI {
	$layout: "horizontal" | "vertical";
}

export const CardContainer = styled.div<CardContainerI>`
	width: max(100%, 10rem);
	height: auto;
	flex-direction: column;
	border-radius: 0.75rem;
	overflow: hidden;
	overflow-x: auto;
	border: 2px solid ${(props) => props.theme.primary};
	transition: all 0.25s ease-in-out;
	cursor: pointer;

	display: flex;
	flex-direction: column;

	&:hover {
		filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.text}44);

		.social-preview-container {
			filter: drop-shadow(0 0 0.25rem ${(props) => props.theme.dark}77);
			&::before {
				opacity: 0;
			}
		}
	}

	${(props) =>
		props.$layout != "horizontal"
			? ""
			: `
		@media screen and (min-width: 768px) {
			flex-direction: row;
	
			.social-preview-container {
				flex: 1;
			}
	
			.data-container {
				width: 40%;
			}
		}
	`}
`;

export const SocialPreviewContainer = styled.div.attrs({
	className: "social-preview-container",
})`
	width: 100%;
	aspect-ratio: 2;
	border-radius: 0.625rem;
	outline: 2px solid ${(props) => props.theme.primary};
	overflow: hidden;
	position: relative;
	transition: all 0.25s ease-in-out, height 0s;

	img {
		max-width: 100%;
		object-fit: cover;
	}
`;

export const DataContainer = styled.div.attrs({
	className: "data-container",
})`
	width: auto;
	padding: 1rem 1.5rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.75rem;

	* {
		color: ${(props) => props.theme.light};
	}

	.description {
		font-size: 0.9rem;
	}
`;

export const ActionButtonsContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
`;

export const ActionButton = styled.button`
	flex: 1;
	max-width: 100%;
	padding: 0.5rem;
	border-radius: 0.25rem;
	border: 1px solid ${(props) => props.theme.light}DD;
	background-color: transparent;
	font-weight: bolder;
	cursor: pointer;
	color: ${(props) => props.theme.light};

	span {
		max-width: 100%;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: max-width 0.25s ease-in-out;
	}

	&:hover {
		background-color: ${(props) => props.theme.light};
		* {
			color: ${(props) => props.theme.color1};
		}
	}

	.icon {
		margin: 0 0.5rem;
	}

	@media screen and (max-width: 374px) {
		span {
			max-width: 0;
		}
	}
`;

export const DataTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

