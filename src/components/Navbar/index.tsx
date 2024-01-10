import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";

import { MainButton, MenuButton, NavbarButton, NavbarHeader, NavbarList, NavbarNav, NavbarWrapper } from "./styles";

interface ButtonData {
	text: string;
	to: string;
}

function Button(props: { data: ButtonData }) {
	return <NavbarButton>{props.data.text}</NavbarButton>;
}

const buttons: ButtonData[] = [
	{ text: "About", to: "about" },
	{ text: "Skills", to: "skills" },
	{ text: "Projects", to: "projects" },
	{ text: "Contact", to: "contact" },
];

interface NavbarI {
	hideNavButtons?: boolean;
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

	return (
		<NavbarHeader>
			<NavbarWrapper>
				<MainButton>
					<img src={"./logo-gradient.svg"} />
				</MainButton>
				{!props.hideNavButtons && (
					<>
						<NavbarNav className={menuActive ? "menu-on" : "menu-off"}>
							<NavbarList>
								{buttons.map((button) => (
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

