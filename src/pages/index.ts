import Home from "./Home";
import Projects from "./Projects";
import NotFound from "./NotFound";

export { Home, NotFound, Projects };

export enum Page {
	Home = "/",
	Projects = "/projects",
	NotFound = "*",
}

export const paramPage = (page: Page, ...replacements: { param: string; value: string }[]): string => {
	let newPage: string = page;
	for (const replacement of replacements) {
		newPage = newPage.replace(`:${replacement.param}`, replacement.value);
	}
	return newPage;
};

