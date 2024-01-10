import { DefaultTheme } from "styled-components";

export type HexColor = `#${string}`;

export interface AppTheme extends DefaultTheme {
	logo: string;
	primary: HexColor;
	secondary: HexColor;
	primaryText: HexColor;
	primaryHighlight: HexColor;
	text: HexColor;
	background1: HexColor;
	background2: HexColor;
	light: HexColor;
	dark: HexColor;
	gray: HexColor;
}

