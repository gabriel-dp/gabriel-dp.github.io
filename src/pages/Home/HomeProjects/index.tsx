import { useGitHubRepos } from "@/hooks/useGitHubRepos";
import Section from "@/components/Section";
import RepoCard from "@/components/RepoCard";

import { CardsContainer, SeeMoreButton } from "./styles";

export default function HomeProjects(props: { $id: string }) {
	const [repos, status] = useGitHubRepos("main");

	return (
		<Section $id={props.$id} title="Projects" sub="My works">
			{status == "success" && (
				<CardsContainer>
					{repos.map((repo) => (
						<RepoCard key={repo.name} repo={repo} layout="horizontal" />
					))}
				</CardsContainer>
			)}
			<SeeMoreButton>More projects</SeeMoreButton>
		</Section>
	);
}

