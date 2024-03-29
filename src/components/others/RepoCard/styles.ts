import styled from "styled-components";

import Button from "@/components/layout/Button";

interface CardContainerI {
	$layout: "horizontal" | "vertical";
}

export const CardContainer = styled.div<CardContainerI>`
	width: max(100%, 10rem);
	min-width: 12rem;
	height: auto;
	flex-direction: column;
	border-radius: 0.75rem;
	overflow: hidden;
	border: 1px solid ${(props) => props.theme.primary};
	transition: all 0.25s ease-in-out;
	background-color: ${(props) => props.theme.primary}11;

	display: flex;
	flex-direction: column;

	&:hover {
		filter: drop-shadow(0 0 0.5rem ${(props) => props.theme.text}33);

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
	outline: 1px solid ${(props) => props.theme.primary};
	overflow: hidden;
	position: relative;
	transition: all 0.25s ease-in-out, height 0s;

	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	img {
		object-fit: cover;
		min-width: 100%;
		min-height: 100%;
	}
`;

export const DataContainer = styled.div.attrs({
	className: "data-container",
})`
	width: auto;
	flex: 1;
	padding: 1rem 1.5rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;

	* {
		color: ${(props) => props.theme.primary};
	}

	.name {
		font-size: 1.25rem;
		font-family: "Poppins", "Segoe UI", sans-serif !important;
		font-weight: bolder;
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

export const ActionButton = styled(Button)`
	flex: 1;
	max-width: 100%;
	font-size: 0.75rem;

	.link {
		padding: 0.75rem;
		gap: 0.25rem;
	}

	span {
		max-width: 100%;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: max-width 0.25s ease-in-out;
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

