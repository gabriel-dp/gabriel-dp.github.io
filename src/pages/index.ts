import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import NotFound from "./NotFound";

export { Home, About, Projects, Resume, NotFound };

export enum Page {
	Home = "/",
	About = "/about",
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

