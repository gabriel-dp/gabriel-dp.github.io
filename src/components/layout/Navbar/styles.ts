import styled from "styled-components";

interface NavbarHeaderI {
	height: number;
	$isAtTop: boolean;
}

export const NavbarHeader = styled.header<NavbarHeaderI>`
	width: 100%;
	height: ${(props) => props.height}rem;
	padding: 0.375rem 1.5rem;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;

	display: flex;
	justify-content: center;
	align-items: center;

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		backdrop-filter: blur(7px);
		box-shadow: ${(props) => (props.$isAtTop ? "none" : `0 0 0.5rem ${props.theme.dark}55`)};
		transition: box-shadow 0.25s ease-in-out;
	}

	@media screen and (max-width: 767px) {
		nav {
			height: 100lvh;
			width: 100%;
			padding: 1rem;
			background-color: ${(props) => props.theme.background2}BB;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			position: fixed;
			top: 0;
			right: 0;

			&.menu-off {
				left: 100%;
			}

			&.menu-on {
				left: 0;
			}

			&::before {
				content: "";
				position: absolute;
				inset: 0;
				backdrop-filter: blur(7px);
			}
		}

		ul {
			width: 100%;
			height: min-content;
			flex-direction: column;
		}

		.nav-button {
			font-size: 1.5rem;
			color: ${(props) => props.theme.secondary}CC;
		}

		.menu-button {
			visibility: visible;
		}
	}
`;

export const NavbarWrapper = styled.div`
	width: min(100%, 100rem);
	height: 100%;
	position: relative;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

export const MainButton = styled.button`
	height: 100%;
	background-color: transparent;
	border: none;
	cursor: pointer;
	z-index: 2;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;

	img {
		height: 100%;
		max-height: 100%;
	}

	.link {
		padding: 0.5rem 0;
	}
`;

export const NavbarNav = styled.nav`
	height: 100%;

	backdrop-filter: blur(0);
	-webkit-backdrop-filter: blur(0);
	transition: left 0.5s ease-in-out, backdrop-filter 1s ease-in-out;

	display: flex;
	flex-direction: row;
	gap: 1.5rem;
`;

export const NavbarList = styled.ul`
	height: 100%;
	max-width: 100%;
	overflow-x: hidden;
	overflow-y: auto;

	display: flex;
	flex-direction: row;
	gap: 1rem;

	li {
		list-style: none;
		height: 100%;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const NavbarButton = styled.button.attrs({
	className: "nav-button",
})`
	height: 100%;
	width: min-content;
	background-color: transparent;
	color: ${(props) => props.theme.text};
	border: none;
	cursor: pointer;
	font-size: 1rem;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	.link {
		padding: 0.75rem 0.5rem;
	}

	* {
		transition: color 0.25s ease-in-out, transform 0.25s ease-in-out;
	}

	@media (hover: hover) {
		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%;
			right: 50%;
			transform: translate(0, -0.5rem);
			height: 1px;
			border-radius: 100rem;
			background-color: ${(props) => props.theme.primary};
			transition: all 0.25s ease-in-out;
		}

		&:hover::after {
			left: 25%;
			right: 25%;
		}

		&:hover {
			span {
				color: ${(props) => props.theme.primary};
				transform: translateY(-0.1rem);
			}
		}
	}
`;

export const MenuButton = styled.button.attrs({
	className: "menu-button",
})`
	visibility: hidden;
	background-color: transparent;
	border: none;
	font-size: 1.25rem;
	padding: 0.25rem;
	cursor: pointer;
	z-index: 2;

	display: flex;
	justify-content: center;

	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);

	.icon > path {
		color: ${(props) => props.theme.secondary};
	}
`;

