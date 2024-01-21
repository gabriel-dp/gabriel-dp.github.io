import styled, { keyframes } from "styled-components";

import { NAVBAR_HEIGHT_REM } from "@/components/Navbar";

export const MainSection = styled.section`
	width: 100%;
	min-height: calc(100dvh - (${NAVBAR_HEIGHT_REM}rem + 1rem));
	padding: 0 1.25rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0;

	* {
		transition: font-size 0.25s ease-in-out;
	}

	.title {
		h1 {
			font-size: 3rem;
			text-align: center;
			font-weight: bold;

			span {
				font-family: inherit;
				display: inline-block;
			}
		}
	}

	p {
		padding: 0 0.5rem;
		font-size: 1.25rem;
		font-weight: light;
		text-align: center;
		text-decoration: dashed;

		span {
			color: ${(props) => props.theme.secondary};
			display: inline-block;
		}
	}

	.Typewriter {
		width: min-content;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
		flex-wrap: nowrap;

		font-size: 1.25rem;
		* {
			color: ${(props) => props.theme.secondary};
		}
	}

	@media screen and (max-width: 767px) {
		.title {
			h1 {
				font-size: 2.5rem;
			}
		}

		p {
			font-size: 0.9rem;
		}

		.Typewriter {
			font-size: 1rem;
		}
	}
`;

const lineAnimation = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

export const HorizontalLine = styled.div`
	height: 2px;
	margin: 1rem auto;
	position: relative;
	z-index: -1;

	animation: ${lineAnimation} 0.625s ease-in-out forwards 0.25s;

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		width: 6px;
		aspect-ratio: 1;
		border-radius: 50%;
	}

	&::before {
		left: 0;
		transform: translate(-50%, -50%);
		background-color: ${(props) => props.theme.primary};
	}

	&::after {
		right: 0;
		transform: translate(50%, -50%);
		background-color: ${(props) => props.theme.secondary};
	}
`;

