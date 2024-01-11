import { useEffect, useState } from "react";
import { ThemeConsumer } from "styled-components";
import { MdMenu, MdOutlineClose } from "react-icons/md";

import Page from "@/pages/Page";
import { LinkContainerRouter, LinkContainerScroll } from "@/components/LinkContainer";
import ThemeSwitch from "@/components/ThemeSwitch";

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
					<LinkContainerRouter to={Page.Home} top>
						<ThemeConsumer>{(theme) => <img src={theme?.logo} />}</ThemeConsumer>
					</LinkContainerRouter>
				</MainButton>
				{props.buttons && props.buttons.length > 0 && (
					<>
						<NavbarNav className={menuActive ? "menu-on" : "menu-off"}>
							<NavbarList>
								{props.buttons.map((button) => (
									<li key={button.text} onClick={closeMenu}>
										<NavbarButton>
											<LinkContainerScroll to={button.to}>{button.text}</LinkContainerScroll>
										</NavbarButton>
									</li>
								))}
							</NavbarList>
							<ThemeSwitch />
						</NavbarNav>
						<MenuButton onClick={handleMenuClick}>{menuActive ? <MdOutlineClose /> : <MdMenu />}</MenuButton>
					</>
				)}
			</NavbarWrapper>
		</NavbarHeader>
	);
}

