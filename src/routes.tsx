import { HashRouter, Routes, Route } from "react-router-dom";

import { Page, Home, Projects, NotFound, Resume } from "@/pages";

export default function Router() {
	return (
		<HashRouter>
			<Routes>
				<Route path={Page.Home} element={<Home />} />
				<Route path={Page.Projects} element={<Projects />} />
				<Route path={Page.Resume} element={<Resume />} />
				<Route path={Page.NotFound} element={<NotFound />} />
			</Routes>
		</HashRouter>
	);
}

