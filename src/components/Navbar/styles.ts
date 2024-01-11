import styled from "styled-components";

interface NavbarHeaderI {
	height: number;
	$isAtTop: boolean;
}

export const NavbarHeader = styled.header<NavbarHeaderI>`
	width: 100%;
	height: ${(props) => props.height}rem;
	padding: 0.5rem 1.5rem;
	position: fixed;
	top: 0;
	left: 0;

	backdrop-filter: blur(7px);
	-webkit-backdrop-filter: blur(5px);
	filter: ${(props) => (props.$isAtTop ? "none" : `drop-shadow(0 0 0.5rem ${props.theme.dark}33)`)};
	transition: filter 0.25s ease-in-out;

	display: flex;
	justify-content: center;

	@media screen and (max-width: 767px) {
		nav {
			height: 100dvh;
			width: 100%;
			background-color: ${(props) => props.theme.background2}BB;
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(1px);
			transition: left 0.5s ease-in-out;

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
		padding: 0.5rem;
	}
`;

export const NavbarNav = styled.nav`
	height: 100%;

	display: flex;
	flex-direction: row;
	gap: 1.5rem;
`;

export const NavbarList = styled.ul`
	height: 100%;
	max-width: 100%;
	overflow: hidden;

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
	background-color: transparent;
	color: ${(props) => props.theme.text};
	border: none;
	flex: 1;
	cursor: pointer;
	font-size: 0.85rem;
	transition: color 0.25s ease-in-out;

	display: flex;
	justify-content: center;
	align-items: center;

	.link {
		padding: 0.75rem 0.5rem;
	}
`;

export const MenuButton = styled.button.attrs({
	className: "menu-button",
})`
	visibility: hidden;
	background-color: transparent;
	border: none;
	font-size: 1.5rem;
	padding: 0.25rem;
	cursor: pointer;
	color: ${(props) => props.theme.secondary};
	z-index: 2;

	display: flex;
	justify-content: center;

	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
`;

