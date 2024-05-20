import { createContext, useEffect } from "react";

import useStoredState from "@/hooks/useStoredState";
import { darkThemePreferred } from "@/utils/browser";
import { useLanguageConfigs } from "@/contexts/language/useLanguage";

interface ConfigsContextI {
	darkMode: boolean;
	language: string;

	toggleTheme: () => void;
	setLanguage: (language: string) => void;
}

type StoredConfigs = Pick<ConfigsContextI, "darkMode" | "language">;

export const ConfigsContext = createContext<ConfigsContextI>({} as ConfigsContextI);

export function ConfigsProvider(props: { children: React.ReactNode }) {
	const [configs, setConfigs] = useStoredState<StoredConfigs>("configs", {
		darkMode: darkThemePreferred(),
		language: "pt-BR",
	});

	const languageConfigs = useLanguageConfigs();
	useEffect(() => {
		languageConfigs.changeLanguage(configs.language);
	}, [configs, languageConfigs]);

	const toggleTheme = () => {
		setConfigs((prev) => ({
			...prev,
			darkMode: !prev.darkMode,
		}));
	};

	const setLanguage = (language: string) => {
		setConfigs((prev) => ({
			...prev,
			language,
		}));
	};

	const value = {
		darkMode: configs.darkMode,
		language: configs.language,
		toggleTheme,
		setLanguage,
	};

	return <ConfigsContext.Provider value={value}>{props.children}</ConfigsContext.Provider>;
}
