import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import RepoCard from "@/components/RepoCard";

import { CardsContainer, ProjectsSection, SeeMoreButton } from "./styles";

export default function HomeProjects(props: { $id: string }) {
	const repos = useGitHubRepos("main");

	return (
		<ProjectsSection id={props.$id}>
			<h2>Projects</h2>
			<CardsContainer>
				{repos.map((repo) => (
					<RepoCard key={repo.name} repo={repo} layout="horizontal" />
				))}
			</CardsContainer>
			<SeeMoreButton>More projects</SeeMoreButton>
		</ProjectsSection>
	);
}

