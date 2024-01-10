import { useEffect, useState } from "react";
import { ThemeConsumer } from "styled-components";
import { MdMenu, MdOutlineClose } from "react-icons/md";

import { MainButton, MenuButton, NavbarButton, NavbarHeader, NavbarList, NavbarNav, NavbarWrapper } from "./styles";

export const NAVBAR_HEIGHT_REM = 3.5;

export interface NavButtonData {
	text: string;
	to: string;
}

interface NavbarI {
	buttons?: NavButtonData[];
}

export default function Navbar(props: NavbarI) {
	const [menuActive, setMenuActive] = useState<boolean>(false);
	const [isAtTop, setIsAtTop] = useState<boolean>(true);

	// Controls menu visibility on low width
	function handleMenuClick() {
		setMenuActive((state) => !state);
	}

	// Controls menu closing
	function closeMenu() {
		setMenuActive(false);
	}

	// Check if scroll is at the top of the page
	const handleScroll = () => {
		setIsAtTop(document.documentElement.scrollTop == 0);
	};

	// Set up a event to listen to the user scroll
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<NavbarHeader height={NAVBAR_HEIGHT_REM} $isAtTop={isAtTop}>
			<NavbarWrapper>
				<MainButton>
					<ThemeConsumer>{(theme) => <img src={theme?.logo} />}</ThemeConsumer>
				</MainButton>
				{props.buttons && props.buttons.length > 0 && (
					<>
						<NavbarNav className={menuActive ? "menu-on" : "menu-off"}>
							<NavbarList>
								{props.buttons.map((button) => (
									<li key={button.text} onClick={closeMenu}>
										<NavbarButton>{button.text}</NavbarButton>
									</li>
								))}
							</NavbarList>
						</NavbarNav>
						<MenuButton onClick={handleMenuClick}>{menuActive ? <MdOutlineClose /> : <MdMenu />}</MenuButton>
					</>
				)}
			</NavbarWrapper>
		</NavbarHeader>
	);
}

