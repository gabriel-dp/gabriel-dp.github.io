import { FaPlus } from "react-icons/fa";

import { Page } from "@/pages";
import { githubService } from "@/services/githubService";
import AsyncComponent from "@/components/utilities/AsyncComponent";
import SectionWrapper from "@/components/layout/SectionWrapper";
import RepoCard from "@/components/others/RepoCard";
import { LinkComponentRouter } from "@/components/utilities/LinkComponent";
import useLanguage from "@/contexts/language/useLanguage";

import { CardsContainer, SeeMoreButton } from "./styles";

export default function HomeProjects(props: { $id: string }) {
	const [repos, status] = githubService.Repos("main");
	const t = useLanguage();

	return (
		<SectionWrapper $id={props.$id} title={t`sections.projects.title`} sub={t`sections.projects.subtitle`}>
			<AsyncComponent status={status}>
				<CardsContainer>
					{repos.map((repo) => (
						<RepoCard key={repo.name} repo={repo} layout="horizontal" />
					))}
				</CardsContainer>
			</AsyncComponent>
			<SeeMoreButton>
				<LinkComponentRouter to={Page.Projects} top>
					<span>{t`projects.more-button`}</span>
					<FaPlus className="icon" />
				</LinkComponentRouter>
			</SeeMoreButton>
		</SectionWrapper>
	);
}
