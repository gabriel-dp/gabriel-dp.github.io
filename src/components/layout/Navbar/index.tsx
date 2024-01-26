import { useEffect, useState } from "react";
import { FaBars as MenuIcon, FaTimes as CloseIcon } from "react-icons/fa";

import { Page } from "@/pages";
import { useTheme } from "@/contexts/theme/useTheme";
import { LinkComponentRouter, LinkComponentScroll } from "@/components/utilities/LinkComponent";
import ThemeSwitch from "@/components/others/ThemeSwitch";

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
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const theme = useTheme();

	return (
		<NavbarHeader height={NAVBAR_HEIGHT_REM} $isAtTop={isAtTop}>
			<NavbarWrapper>
				<MainButton aria-label="home-button">
					<LinkComponentRouter to={Page.Home} top $onClick={closeMenu}>
						<img src={import.meta.env.BASE_URL + theme?.logo} alt="dp" />
					</LinkComponentRouter>
				</MainButton>
				{props.buttons && props.buttons.length > 0 ? (
					<>
						<NavbarNav className={menuActive ? "menu-on" : "menu-off"}>
							<NavbarList>
								{props.buttons.map((button) => (
									<li key={button.text}>
										<NavbarButton>
											<LinkComponentScroll to={button.to} $onClick={closeMenu}>
												<span>{button.text}</span>
											</LinkComponentScroll>
										</NavbarButton>
									</li>
								))}
							</NavbarList>
							<ThemeSwitch />
						</NavbarNav>
						<MenuButton onClick={handleMenuClick} aria-label="menu-button">
							{menuActive ? <CloseIcon className="icon" /> : <MenuIcon className="icon" />}
						</MenuButton>
					</>
				) : (
					<>
						<ThemeSwitch />
					</>
				)}
			</NavbarWrapper>
		</NavbarHeader>
	);
}

