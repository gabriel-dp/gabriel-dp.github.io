import { FaCode, FaLink } from "react-icons/fa";

import githubConfig from "@/configs/github.json";
import { Repo } from "@/services/githubService";
import { LinkComponentExternal } from "@/components/utilities/LinkComponent";
import LazyLoadImage from "@/components/utilities/LazyLoadImage";

import {
	ActionButton,
	ActionButtonsContainer,
	CardContainer,
	DataContainer,
	DataTextContainer,
	SocialPreviewContainer,
} from "./styles";

interface RepoCardI {
	repo: Repo;
	layout: "horizontal" | "vertical";
}

export default function RepoCard(props: RepoCardI) {
	const socialPreviewUrl = `https://raw.githubusercontent.com/${githubConfig.user}/${props.repo.name}/main/docs/social-preview.png`;

	return (
		<CardContainer $layout={props.layout} className="card">
			<SocialPreviewContainer>
				<LazyLoadImage src={socialPreviewUrl} alt={props.repo.name} />
			</SocialPreviewContainer>
			<DataContainer>
				<DataTextContainer>
					<p className="name">{props.repo.name}</p>
					<p className="description">{props.repo.description}</p>
				</DataTextContainer>
				<ActionButtonsContainer>
					<ActionButton>
						<LinkComponentExternal to={props.repo.html_url} label="source code">
							<span>Code</span>
							<FaCode className="icon" />
						</LinkComponentExternal>
					</ActionButton>
					{props.repo.homepage != "" && (
						<ActionButton>
							<LinkComponentExternal to={props.repo.homepage} label="live website">
								<span>Website</span>
								<FaLink className="icon" />
							</LinkComponentExternal>
						</ActionButton>
					)}
				</ActionButtonsContainer>
			</DataContainer>
		</CardContainer>
	);
}

