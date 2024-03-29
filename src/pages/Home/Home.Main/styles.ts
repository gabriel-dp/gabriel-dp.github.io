import styled, { keyframes } from "styled-components";
import { FaChevronDown } from "react-icons/fa";

import { NAVBAR_HEIGHT_REM } from "@/components/layout/Navbar";

export const MainSection = styled.section`
	width: 100%;
	min-height: calc(100svh - (${NAVBAR_HEIGHT_REM}rem + 0rem));
	padding: 0 1.25rem;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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

	.typewriter {
		font-size: 1.5rem;
		* {
			color: ${(props) => props.theme.secondary};
		}
	}

	@media screen and (max-width: 767px) {
		.title {
			h1 {
				font-size: 2rem;
			}
		}

		.typewriter {
			font-size: 1.25rem;
		}

		.social {
			font-size: 1.75rem;
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
	margin: 1.25rem 0;
	background-color: ${(props) => props.theme.secondary};
	border-radius: 100rem;
	z-index: -1;

	animation: ${lineAnimation} 0.625s ease-in-out forwards;
`;

export const SocialContainer = styled.div`
	font-size: 2rem;
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;

	a {
		width: min-content;
		transition: all 0.25s ease-in-out, filter 0.25s ease;
		color: ${(props) => props.theme.secondary};

		&:hover {
			color: ${(props) => props.theme.primary};
			filter: drop-shadow(0 0 1rem ${(props) => props.theme.primary}77);
		}
	}
`;

export const ArrowContainer = styled.button.attrs({
	className: "arrow",
})`
	border: none;
	background-color: transparent;
	cursor: pointer;
	position: absolute;
	bottom: 10%;
	font-size: 1.75rem;
	padding-bottom: 1.75rem;

	display: flex;
	justify-content: center;
	align-items: flex-start;

	&,
	* {
		color: ${(props) => props.theme.secondary};
		transition: all 0.25s ease-in-out;
	}

	&:hover {
		filter: drop-shadow(0 0 1rem ${(props) => props.theme.primary});
		* {
			color: ${(props) => props.theme.primary};
		}
	}

	@media screen and (max-width: 767px) {
		height: 3rem;
		font-size: 1.5rem;
		padding-bottom: 1.5rem;
	}
`;

const slideAnimation = keyframes`
	0%, 100% {
		transform: translateY(0);
	}
	
	50% {
		transform: translateY(100%);
	}
`;

export const ArrowDown = styled(FaChevronDown)`
	animation: ${slideAnimation} 3s ease-in-out infinite 2s;
`;

