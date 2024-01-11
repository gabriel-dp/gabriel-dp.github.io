import Router from "@/routes";
import { ConfigsProvider } from "@/contexts/ConfigsContext";

export default function App() {
	return (
		<ConfigsProvider>
			<Router />
		</ConfigsProvider>
	);
}

