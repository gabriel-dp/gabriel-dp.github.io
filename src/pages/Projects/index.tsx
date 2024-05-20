import { FaGithub } from "react-icons/fa";

import { githubService } from "@/services/githubService";
import socialConfigs from "@/configs/social.json";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import AsyncComponent from "@/components/utilities/AsyncComponent";
import RepoCard from "@/components/others/RepoCard";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/layout/Button";
import Footer from "@/components/layout/Footer";
import { LinkComponentExternal } from "@/components/utilities/LinkComponent";
import useLanguage from "@/contexts/language/useLanguage";

import { CardsContainer } from "./styles";

export default function Projects() {
	const [repos, status] = githubService.Repos("normal");
	const t = useLanguage();

	return (
		<PageWrapper>
			<Navbar />
			<SectionWrapper $id="projects" title={t`sections.projects.title`} sub={t`sections.projects.subpage`}>
				<AsyncComponent status={status}>
					<CardsContainer>
						{repos.map((repo) => (
							<RepoCard key={repo.name} repo={repo} layout="vertical" />
						))}
					</CardsContainer>
				</AsyncComponent>
				<Button>
					<LinkComponentExternal to={socialConfigs.github} label="projects github">
						<span>{t`projects.github-button`}</span>
						<FaGithub />
					</LinkComponentExternal>
				</Button>
			</SectionWrapper>
			<Footer />
		</PageWrapper>
	);
}
