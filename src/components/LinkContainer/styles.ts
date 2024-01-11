import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const CustomLink = css`
	display: inline-block;
	height: 100%;
	width: 100%;
	text-decoration: none;
	color: inherit;
`;

export const CustomLinkRouter = styled(LinkRouter).attrs({
	className: "link router",
})`
	${CustomLink};
`;

export const CustomLinkScroll = styled(LinkScroll).attrs({
	className: "link router",
})`
	${CustomLink};
`;

export const CustomLinkExternal = styled.a.attrs({
	className: "link router",
})`
	${CustomLink};
`;

