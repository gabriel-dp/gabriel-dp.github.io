import { FaCode, FaLink } from "react-icons/fa";

import githubConfig from "@/configs/github.json";
import { Repo } from "@/hooks/useGitHubRepos";
import { LinkContainerExternal } from "@/components/LinkContainer";

import {
	ActionButton,
	ActionButtonsContainer,
	CardContainer,
	DataContainer,
	LanguageContainer,
	SocialPreviewContainer,
} from "./styles";

interface RepoCardI {
	repo: Repo;
}

export default function RepoCard(props: RepoCardI) {
	const socialPreviewUrl = `https://raw.githubusercontent.com/${githubConfig.user}/${props.repo.name}/main/docs/social-preview.png`;

	return (
		<CardContainer>
			<SocialPreviewContainer>
				<img src={socialPreviewUrl} />
			</SocialPreviewContainer>
			<DataContainer>
				<h4>{props.repo.name}</h4>
				<p className="description">{props.repo.description}</p>
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
			<LanguageContainer>
				<p className="language">{props.repo.language}</p>
			</LanguageContainer>
		</CardContainer>
	);
}

