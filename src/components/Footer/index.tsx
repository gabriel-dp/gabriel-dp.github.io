import githubConfigs from "@/configs/github.json";
import { LinkContainerExternal } from "@/components/LinkContainer";
import { SocialIconGithub, SocialIconInstagram, SocialIconLinkedin } from "@/components/SocialIcons";

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
						<LinkContainerExternal to={githubConfigs.repo}>Website source code</LinkContainerExternal>
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

