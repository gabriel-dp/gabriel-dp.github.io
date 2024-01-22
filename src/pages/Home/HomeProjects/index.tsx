import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import RepoCard from "@/components/RepoCard";

import { CardsContainer, ProjectsSection } from "./styles";

export default function HomeProjects(props: { $id: string }) {
	const repos = useGitHubRepos("main");

	return (
		<ProjectsSection id={props.$id}>
			<CardsContainer>
				{repos.map((repo) => (
					<RepoCard key={repo.name} repo={repo} />
				))}
			</CardsContainer>
		</ProjectsSection>
	);
}

