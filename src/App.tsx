import Router from "@/routes";
import { AppProvider } from "@/contexts";

export default function App() {
	return (
		<AppProvider>
			<Router />
		</AppProvider>
	);
}

