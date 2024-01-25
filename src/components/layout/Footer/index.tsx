import githubConfigs from "@/configs/github.json";
import { LinkComponentExternal } from "@/components/utilities/LinkComponent";
import { SocialIconGithub, SocialIconInstagram, SocialIconLinkedin } from "@/components/icons/SocialIcons";

import { AuthorContainer, FooterContainer, FooterWrapper, SocialContainer } from "./styles";

export default function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>
				<AuthorContainer>
					<div>
						<p className="author">
							<span>Made with love and work</span>
							&nbsp;
							<span>by Gabriel de Paula</span>
						</p>
						<p className="rights">All rights reserved</p>
					</div>
					<button className="source-code">
						<LinkComponentExternal to={githubConfigs.repo} label="Website source code">
							Website source code
						</LinkComponentExternal>
					</button>
				</AuthorContainer>
				<SocialContainer>
					<SocialIconGithub />
					<SocialIconLinkedin />
					<SocialIconInstagram />
				</SocialContainer>
			</FooterWrapper>
		</FooterContainer>
	);
}

