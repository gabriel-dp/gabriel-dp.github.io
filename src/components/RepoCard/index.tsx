import { FaCode, FaLink } from "react-icons/fa";

import githubConfig from "@/configs/github.json";
import { Repo } from "@/hooks/useGitHubRepos";
import { LinkContainerExternal } from "@/components/LinkContainer";
import LazyLoadImage from "@/components/LazyLoadImage";

import {
	ActionButton,
	ActionButtonsContainer,
	CardContainer,
	DataContainer,
	DataTextContainer,
	LanguageContainer,
	SocialPreviewContainer,
} from "./styles";

interface RepoCardI {
	repo: Repo;
	layout: "horizontal" | "vertical";
}

export default function RepoCard(props: RepoCardI) {
	const socialPreviewUrl = `https://raw.githubusercontent.com/${githubConfig.user}/${props.repo.name}/main/docs/social-preview.png`;

	return (
		<CardContainer layout={props.layout}>
			<SocialPreviewContainer>
				<LazyLoadImage src={socialPreviewUrl} alt={props.repo.name} />
				<LanguageContainer>
					<span className="language">{props.repo.language}</span>
				</LanguageContainer>
			</SocialPreviewContainer>
			<DataContainer>
				<DataTextContainer>
					<h4>{props.repo.name}</h4>
					<p className="description">{props.repo.description}</p>
				</DataTextContainer>
				<ActionButtonsContainer>
					<ActionButton>
						<LinkContainerExternal to={props.repo.html_url}>
							<span>Code</span>
							<FaCode className="icon" />
						</LinkContainerExternal>
					</ActionButton>
					{props.repo.homepage != "" && (
						<ActionButton>
							<LinkContainerExternal to={props.repo.homepage}>
								<span>Website</span>
								<FaLink className="icon" />
							</LinkContainerExternal>
						</ActionButton>
					)}
				</ActionButtonsContainer>
			</DataContainer>
		</CardContainer>
	);
}

