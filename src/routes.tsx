import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import { Page, Home, About, Projects, Resume, NotFound } from "@/pages";

export default function Router() {
	// Alternates router if it is a Vercel deployment
	const BaseRouter = import.meta.env.VITE_VERCEL_ENV == "production" ? BrowserRouter : HashRouter;

	return (
		<BaseRouter>
			<Routes>
				<Route path={Page.Home} element={<Home />} />
				<Route path={Page.About} element={<About />} />
				<Route path={Page.Projects} element={<Projects />} />
				<Route path={Page.Resume} element={<Resume />} />
				<Route path={Page.NotFound} element={<NotFound />} />
			</Routes>
		</BaseRouter>
	);
}

