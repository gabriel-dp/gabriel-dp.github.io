import { createGlobalStyle } from "styled-components";

import { AppTheme } from "@/styles/themes/theme";

export default createGlobalStyle<{ theme: AppTheme }>`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        -webkit-tap-highlight-color: transparent;
        
        ::selection {
            background-color: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.primaryText};
        }
    }

    body {
        background-image: linear-gradient(135deg, ${(props) =>
					`${props.theme.background1}, ${props.theme.background2}`});
        background-attachment: fixed;
        color: ${(props) => props.theme.text};
        transition: background 0.25s ease, color 0.25s ease;
    }
`;

