import { githubService } from "@/services/githubService";
import AsyncComponent from "@/components/utilities/AsyncComponent";
import SectionWrapper from "@/components/layout/SectionWrapper";
import RepoCard from "@/components/others/RepoCard";

import { CardsContainer, SeeMoreButton } from "./styles";

export default function HomeProjects(props: { $id: string }) {
	const [repos, status] = githubService.Repos("main");

	return (
		<SectionWrapper $id={props.$id} title="Projects" sub="My works">
			<AsyncComponent status={status}>
				<CardsContainer>
					{repos.map((repo) => (
						<RepoCard key={repo.name} repo={repo} layout="horizontal" />
					))}
				</CardsContainer>
			</AsyncComponent>
			<SeeMoreButton>More projects</SeeMoreButton>
		</SectionWrapper>
	);
}

