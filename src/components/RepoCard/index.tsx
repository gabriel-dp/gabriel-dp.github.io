import { FaCode, FaLink } from "react-icons/fa";

import { useTheme } from "@/contexts/theme/useTheme";
import githubConfig from "@/configs/github.json";
import { Repo } from "@/hooks/useGitHubRepos";
import { LinkContainerExternal } from "@/components/LinkContainer";
import LazyLoadImage from "@/components/LazyLoadImage";
import GradientComponent from "@/components/GradientComponent";

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
	const theme = useTheme();

	return (
		<GradientComponent
			className="gradient"
			direction={180}
			colors={[
				{ color: theme?.color1, position: 0 },
				{ color: theme?.color2, position: 1.5 },
			]}>
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
							<LinkContainerExternal to={props.repo.html_url} label="source code">
								<span>Code</span>
								<FaCode className="icon" />
							</LinkContainerExternal>
						</ActionButton>
						{props.repo.homepage != "" && (
							<ActionButton>
								<LinkContainerExternal to={props.repo.homepage} label="live website">
									<span>Website</span>
									<FaLink className="icon" />
								</LinkContainerExternal>
							</ActionButton>
						)}
					</ActionButtonsContainer>
				</DataContainer>
			</CardContainer>
		</GradientComponent>
	);
}

