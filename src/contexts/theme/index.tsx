import { useEffect, useState } from "react";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";

import { useConfigs } from "@/contexts/configs/useConfigs";
import Global from "@/styles/global";
import { AppTheme } from "@/styles/global";
import { LightTheme } from "@/styles/themes/lightTheme";
import { DarkTheme } from "@/styles/themes/darkTheme";

export function ThemeProvider(props: { children: React.ReactNode }) {
	const { darkMode } = useConfigs();

	const [theme, setTheme] = useState<AppTheme>(LightTheme);
	useEffect(() => {
		setTheme(darkMode ? DarkTheme : LightTheme);
	}, [darkMode]);

	return (
		<StyledComponentsProvider theme={theme}>
			<Global theme={theme} />
			{props.children}
		</StyledComponentsProvider>
	);
}

