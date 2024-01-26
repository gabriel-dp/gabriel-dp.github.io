import styled, { keyframes } from "styled-components";

const detailsShow = keyframes`
	from {
		opacity:0;
		transform: var(--details-translate, translateY(-0.5rem));
	}
`;

export const CategoryContainer = styled.details`
	width: min(100%, 50rem);
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	border: 1px solid ${(props) => props.theme.primary};
	background-color: ${(props) => props.theme.primary}11;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	* {
		transition: all 0.25s ease-in-out;
		user-select: none;
	}

	&[open] > *:not(summary) {
		animation: ${detailsShow} 0.25s ease-in-out;
	}
`;

export const CategoryHeader = styled.summary`
	padding: 0.5rem;
	list-style: none;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	.title {
		text-align: center;
		font-size: 1.25rem;
		color: ${(props) => props.theme.primary};
	}

	&::before,
	&::after {
		content: "";
		width: 0.75em;
		height: 0.15rem;
		background-color: ${(props) => props.theme.primary};
		position: absolute;
		top: calc(50% - 0.15rem);
		right: 0;
		transition: all 0.25s ease-in-out;
	}

	&::after {
		transform: rotate(90deg);
		transform-origin: 50% 50%;
	}
	[open] &::after {
		transform: rotate(0deg);
	}
`;

export const SkillsWrapper = styled.div`
	padding: 1rem 0;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	row-gap: 1.5rem;
`;

export const SingleSkill = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	.logo {
		width: 3rem;
		height: 3rem;

		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			max-width: 100%;
			max-height: 100%;

			* {
				transition: none;
				fill: ${(props) => props.theme.primary};
			}
		}
	}

	.name {
		font-size: 0.75rem;
		transition: all 0.25s ease-in-out;
	}

	&:hover {
		.logo {
			svg {
				transform: scale(1.1);
			}
		}
	}
`;

