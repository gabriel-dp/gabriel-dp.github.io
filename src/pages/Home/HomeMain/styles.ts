import styled, { keyframes } from "styled-components";

import { NAVBAR_HEIGHT_REM } from "@/components/Navbar";

export const MainSection = styled.div`
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
	gap: 0;

	* {
		transition: font-size 0.25s ease-in-out;
	}

	h1 {
		font-size: 3rem;
		text-align: center;
		font-weight: bold;

		span {
			font-family: inherit;
			display: inline-block;
		}
	}

	p {
		padding: 0 0.5rem;
		font-size: 1.25rem;
		font-weight: light;
		text-align: center;
		text-decoration: dashed;
		color: ${(props) => props.theme.text};

		span {
			color: inherit;
			display: inline-block;
		}
	}

	@media screen and (max-width: 767px) {
		h1 {
			font-size: 2.5rem;
		}

		p {
			font-size: 0.9rem;
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
	width: 0;
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

