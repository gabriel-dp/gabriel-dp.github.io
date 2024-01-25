import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Page, Home, Projects, NotFound } from "@/pages";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={Page.Home} element={<Home />} />
				<Route path={Page.Projetcs} element={<Projects />} />
				<Route path={Page.NotFound} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

