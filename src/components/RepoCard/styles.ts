import styled from "styled-components";

interface CardContainerI {
	layout: "horizontal" | "vertical";
}

export const CardContainer = styled.div<CardContainerI>`
	width: max(100%, 10rem);
	height: auto;
	flex-direction: column;
	border-radius: 0.75rem;
	overflow: hidden;
	overflow-x: auto;
	background-color: ${(props) => props.theme.primary}DD;
	border: 2px solid ${(props) => props.theme.primary}DD;
	transition: all 0.25s ease-in-out;

	display: flex;
	flex-direction: column;

	&:hover {
		filter: drop-shadow(0 0 1rem ${(props) => props.theme.text}77);
		border: 2px solid ${(props) => props.theme.primary};
	}

	${(props) =>
		props.layout != "horizontal"
			? ""
			: `
		@media screen and (min-width: 768px) {
			flex-direction: row;
	
			&:nth-child(even) {
				flex-direction: row-reverse;
			}
	
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
	border-radius: calc(inherit - 0.25rem);
	overflow: hidden;
	position: relative;

	img {
		max-height: 100%;
		object-fit: cover;
	}
`;

export const DataContainer = styled.div.attrs({
	className: "data-container",
})`
	width: auto;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.75rem;

	* {
		color: ${(props) => props.theme.primaryText};
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
	border: 1px solid ${(props) => props.theme.primaryText}DD;
	background-color: transparent;
	font-weight: bolder;
	cursor: pointer;
	color: ${(props) => props.theme.primaryText};

	span {
		max-width: 100%;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: max-width 0.25s ease-in-out;
	}

	&:hover {
		background-color: ${(props) => props.theme.primaryText}DD;
		* {
			color: ${(props) => props.theme.primary};
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

export const LanguageContainer = styled.div.attrs({
	className: "language-container",
})`
	padding: 0.5rem 1rem;
	position: absolute;
	background-color: ${(props) => props.theme.primary}CC;
	border: 1px solid ${(props) => props.theme.primaryText}CC;
	border-radius: 100rem;
	user-select: none;

	right: 1rem;
	top: 1rem;

	.language {
		font-size: 0.85rem;
		color: ${(props) => props.theme.primaryText};
	}
`;

export const DataTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

