import { useState, createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Global from "@/styles/global";
import { AppTheme } from "@/styles/themes/theme";
import { LightTheme } from "@/styles/themes/light";
import { DarkTheme } from "@/styles/themes/dark";
import useStoredState from "@/hooks/useStoredState";

interface ConfigsContextI {
	darkMode: boolean;
	toggleTheme: () => void;
}

interface StoredConfigs {
	darkMode: boolean;
}

export const ConfigsContext = createContext<ConfigsContextI>({ darkMode: false, toggleTheme: () => {} });

export function ConfigsProvider(props: { children: React.ReactNode }) {
	const [configs, setConfigs] = useStoredState<StoredConfigs>("configs", { darkMode: false });

	const [theme, setTheme] = useState<AppTheme>(LightTheme);
	useEffect(() => {
		setTheme(configs.darkMode ? DarkTheme : LightTheme);
	}, [configs.darkMode]);

	const toggleTheme = () => {
		setConfigs((config) => ({
			...config,
			darkMode: !config.darkMode,
		}));
	};

	return (
		<ConfigsContext.Provider value={{ darkMode: configs.darkMode, toggleTheme: toggleTheme }}>
			<Global theme={theme} />
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</ConfigsContext.Provider>
	);
}

