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
						<p>
							<span>Made with love and work by&nbsp;</span>
							<span className="author">Gabriel de Paula</span>
						</p>
						<p>All rights reserved</p>
					</div>
					<button className="source-code">
						<LinkContainerExternal to={githubConfigs.repo}>Website source code</LinkContainerExternal>
					</button>
				</AuthorContainer>
				<SocialContainer>
					<SocialIconGithub />
					<SocialIconInstagram />
					<SocialIconLinkedin />
				</SocialContainer>
			</FooterWrapper>
		</FooterContainer>
	);
}

