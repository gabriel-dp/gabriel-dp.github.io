import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "@/pages/Page";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={Page.Home} element={<Home />} />
				<Route path={Page.NotFound} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

