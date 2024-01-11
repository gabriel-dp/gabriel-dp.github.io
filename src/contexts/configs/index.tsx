import { createContext } from "react";

import useStoredState from "@/hooks/useStoredState";

interface ConfigsContextI {
	darkMode: boolean;
	toggleTheme: () => void;
}

type StoredConfigs = Pick<ConfigsContextI, "darkMode">;

export const ConfigsContext = createContext<ConfigsContextI>({} as ConfigsContextI);

export function ConfigsProvider(props: { children: React.ReactNode }) {
	const [configs, setConfigs] = useStoredState<StoredConfigs>("configs", { darkMode: false });

	const toggleTheme = () => {
		setConfigs((config) => ({
			...config,
			darkMode: !config.darkMode,
		}));
	};

	return (
		<ConfigsContext.Provider value={{ darkMode: configs.darkMode, toggleTheme: toggleTheme }}>
			{props.children}
		</ConfigsContext.Provider>
	);
}

