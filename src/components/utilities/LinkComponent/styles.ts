import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const CustomLink = css`
	height: 100%;
	width: 100%;
	text-decoration: none;

	display: flex;
	justify-content: center;
	align-items: center;

	&,
	* {
		transition: inherit;
		color: inherit;
	}
`;

export const CustomLinkRouter = styled(LinkRouter).attrs({
	className: "link router",
})`
	${CustomLink};
`;

export const CustomLinkScroll = styled(LinkScroll).attrs({
	className: "link scroll",
})`
	${CustomLink};
`;

export const CustomLinkExternal = styled.a.attrs({
	className: "link external",
})`
	${CustomLink};
`;

