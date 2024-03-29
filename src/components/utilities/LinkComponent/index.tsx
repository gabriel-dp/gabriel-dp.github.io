import { animateScroll } from "react-scroll";
import { useLocation } from "react-router-dom";

import { NAVBAR_HEIGHT_REM } from "@/components/layout/Navbar";

import { CustomLinkExternal, CustomLinkRouter, CustomLinkScroll } from "./styles";

interface LinkComponentI {
	to: string;
	children: React.ReactNode;
	$onClick?: () => void;
}

export function LinkComponentRouter(props: LinkComponentI & { top?: boolean }) {
	// Disables scroll transition in different pages
	const { pathname } = useLocation();
	const duration = pathname == props.to ? 1000 : 0;

	function handleClick() {
		if (props.top) animateScroll.scrollToTop({ duration, smooth: true });
		if (props.$onClick) props.$onClick();
	}

	return (
		<CustomLinkRouter to={props.to} onClick={handleClick} aria-label={props.to}>
			{props.children}
		</CustomLinkRouter>
	);
}

export function LinkComponentScroll(props: LinkComponentI) {
	const offset = -16 * NAVBAR_HEIGHT_REM - 0.5; // 1rem = 16px
	return (
		<CustomLinkScroll to={props.to} offset={offset} smooth onClick={props.$onClick} href="" aria-label={props.to}>
			{props.children}
		</CustomLinkScroll>
	);
}

export function LinkComponentExternal(props: LinkComponentI & { label?: string }) {
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

