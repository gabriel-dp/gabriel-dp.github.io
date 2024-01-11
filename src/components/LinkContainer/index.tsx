import { animateScroll } from "react-scroll";

import { NAVBAR_HEIGHT_REM } from "@/components/Navbar";

import { CustomLinkExternal, CustomLinkRouter, CustomLinkScroll } from "./styles";

interface LinkContainerI {
	to: string;
	children: React.ReactNode;
}

export function LinkContainerRouter(props: LinkContainerI & { top?: boolean }) {
	function handleClick() {
		if (props.top) animateScroll.scrollToTop();
	}

	return (
		<CustomLinkRouter to={props.to} onClick={handleClick} aria-label={props.to}>
			{props.children}
		</CustomLinkRouter>
	);
}

export function LinkContainerScroll(props: LinkContainerI) {
	return (
		<CustomLinkScroll to={props.to} offset={-16 * (NAVBAR_HEIGHT_REM + 1)} smooth>
			{props.children}
		</CustomLinkScroll>
	);
}

export function LinkContainerExternal(props: LinkContainerI) {
	return (
		<CustomLinkExternal href={props.to} rel="noopener noreferrer" target="_blank" aria-label={props.to}>
			{props.children}
		</CustomLinkExternal>
	);
}

