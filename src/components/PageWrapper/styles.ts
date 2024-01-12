import styled from "styled-components";

import { NAVBAR_HEIGHT_REM } from "@/components/Navbar";

export const ScreenBackground = styled.div`
	height: 100lvh;
	width: 100%;
	position: fixed;
	z-index: -1;
	background-image: linear-gradient(135deg, ${(props) => `${props.theme.background1}, ${props.theme.background2}`});
`;

export const PageContainer = styled.div`
	width: min(100%, 100rem);
	margin: 0 auto;
	padding: 1.25rem;
	padding-top: ${NAVBAR_HEIGHT_REM}rem;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

