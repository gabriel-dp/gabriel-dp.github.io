import styled from "styled-components";

import { NAVBAR_HEIGHT_REM } from "@/components/layout/Navbar";

export const ScreenBackground = styled.div`
	height: 100lvh;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: -1;
`;

export const PageContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	padding-top: ${NAVBAR_HEIGHT_REM}rem;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

