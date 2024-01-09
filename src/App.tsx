import { ThemeProvider } from "styled-components";

import Router from "@/routes";
import Global from "@/styles/global";
import { LightTheme } from "@/styles/themes/light";

export default function App() {
	return (
		<ThemeProvider theme={LightTheme}>
			<Global theme={LightTheme} />
			<Router />
		</ThemeProvider>
	);
}

