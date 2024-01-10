import { useState } from "react";
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
	const [menuActive, setMenuActive] = useState(false);

	// Controls menu visibility on low width
	function handleMenuClick() {
		setMenuActive((state) => !state);
	}

	// Controls menu closing
	function closeMenu() {
		setMenuActive(false);
	}

	function Button(props: { data: NavButtonData }) {
		return <NavbarButton>{props.data.text}</NavbarButton>;
	}

	return (
		<NavbarHeader height={NAVBAR_HEIGHT_REM}>
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
										<Button data={button} />
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

