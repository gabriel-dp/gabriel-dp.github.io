import styled from "styled-components";

export const NavbarHeader = styled.header`
	width: 100%;
	height: 4rem;
	padding: 0.5rem 1rem;
	position: fixed;

	display: flex;
	justify-content: center;

	@media screen and (max-width: 767px) {
		nav {
			height: 100dvh;
			width: 100%;
			background-color: ${(props) => props.theme.background2}BB;
			backdrop-filter: blur(1px);
			overflow: hidden;
			transition: left 0.5s ease-in-out;

			display: flex;
			align-items: center;

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
			opacity: 1;
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
`;

export const MainButton = styled.button`
	height: 100%;
	background-color: transparent;
	border: none;
	padding: 0.5rem;
	cursor: pointer;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;

	img {
		height: 100%;
		max-height: 100%;
	}
`;

export const NavbarNav = styled.nav`
	height: 100%;
`;

export const NavbarList = styled.ul`
	height: 100%;

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
	border: none;
	padding: 0.75rem 0.5rem;
	flex: 1;
	cursor: pointer;
	font-size: 0.85rem;
`;

export const MenuButton = styled.button.attrs({
	className: "menu-button",
})`
	opacity: 0;
	background-color: transparent;
	border: none;
	font-size: 1.5rem;
	padding: 0.25rem;
	cursor: pointer;
	color: ${(props) => props.theme.secondary};

	display: flex;
	justify-content: center;
	position: absolute;
	top: 50%;
	right: 1rem;
	transform: translateY(-50%);
`;

