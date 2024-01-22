import { animateScroll } from "react-scroll";

import { NAVBAR_HEIGHT_REM } from "@/components/Navbar";

import { CustomLinkExternal, CustomLinkRouter, CustomLinkScroll } from "./styles";

interface LinkContainerI {
	to: string;
	children: React.ReactNode;
	$onClick?: () => void;
}

export function LinkContainerRouter(props: LinkContainerI & { top?: boolean }) {
	function handleClick() {
		if (props.top) animateScroll.scrollToTop();
		if (props.$onClick) props.$onClick();
	}

	return (
		<CustomLinkRouter to={props.to} onClick={handleClick} aria-label={props.to}>
			{props.children}
		</CustomLinkRouter>
	);
}

export function LinkContainerScroll(props: LinkContainerI) {
	return (
		<CustomLinkScroll to={props.to} offset={-16 * (NAVBAR_HEIGHT_REM + 1)} smooth onClick={props.$onClick}>
			{props.children}
		</CustomLinkScroll>
	);
}

export function LinkContainerExternal(props: LinkContainerI & { label?: string }) {
	return (
		<CustomLinkExternal
			href={props.to}
			rel="noopener noreferrer"
			target="_blank"
			aria-label={props.label ?? props.to}
			onClick={props.$onClick}>
			{props.children}
		</CustomLinkExternal>
	);
}

