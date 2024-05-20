import "./language";
import { ConfigsProvider } from "./configs";
import { ThemeProvider } from "./theme";

export function AppProvider(props: { children: React.ReactNode }) {
	return (
		<ConfigsProvider>
			<ThemeProvider>{props.children}</ThemeProvider>
		</ConfigsProvider>
	);
}
