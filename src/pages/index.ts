import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import NotFound from "./NotFound";

export { Home, NotFound, Projects, Resume };

export enum Page {
	Home = "/",
	Projects = "/projects",
	Resume = "/resume",
	NotFound = "*",
}

export const paramPage = (page: Page, ...replacements: { param: string; value: string }[]): string => {
	let newPage: string = page;
	for (const replacement of replacements) {
		newPage = newPage.replace(`:${replacement.param}`, replacement.value);
	}
	return newPage;
};

