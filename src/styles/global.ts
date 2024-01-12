import { createGlobalStyle, DefaultTheme } from "styled-components";

export type HexColor = `#${string}`;

export interface AppTheme extends DefaultTheme {
	name: string;
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
	color1: HexColor;
	color2: HexColor;
}

export default createGlobalStyle<{ theme: AppTheme }>`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        -webkit-tap-highlight-color: transparent;
        
        color: ${(props) => props.theme.text};
        ::selection {
            background-color: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.primaryText};
        }
    }

    body {
        background-color: ${(props) => props.theme.background2};
        transition: background 0.25s ease, color 0.25s ease;
    }

`;

