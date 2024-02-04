import styled from "styled-components";

import Button from "@/components/layout/Button";

export const AboutContainer = styled.div`
	width: min(100%, 35rem);
	min-width: 10rem;
	padding: 1.5rem;
	border-radius: 0.5rem;
	background-color: ${(props) => props.theme.primary}11;
	border: 1px solid ${(props) => props.theme.primary};

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1.5rem;
	row-gap: 1rem;
`;

export const ImageContainer = styled.div`
	width: min(12rem, 100%);
	aspect-ratio: 1;
	border-radius: 100%;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.primary}11;
	overflow: hidden;
	transition: all 0.25s ease-in-out;
	filter: drop-shadow(0 -0.25rem 0.5rem ${(props) => props.theme.dark}22);

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-height: 100%;
	}
`;

export const DataContainer = styled.div`
	max-width: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	.details {
		max-width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 0.5rem;

		* {
			color: ${(props) => props.theme.primary};
		}

		h3 {
			font-size: 1.25rem;
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		p {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem;
			flex-wrap: wrap;

			.icon {
				transition: all 0.25s ease;
				&:hover {
					transform: rotate(360deg);
				}
			}

			span {
				width: max-content;
				white-space: nowrap;
				max-width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
`;

export const ResumeButton = styled(Button)`
	font-size: 0.9rem;

	.link {
		padding: 0.5rem 1.5rem;
		gap: 0.5rem;
	}
`;

export const MoreAboutButton = styled(Button)`
	&:hover {
		.icon {
			transform: translateX(0.15rem);
		}
	}
`;

