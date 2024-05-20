import githubConfigs from "@/configs/github.json";
import { LinkComponentExternal } from "@/components/utilities/LinkComponent";
import { SocialIconGithub, SocialIconInstagram, SocialIconLinkedin } from "@/components/icons/SocialIcons";
import useLanguage from "@/contexts/language/useLanguage";

import { AuthorContainer, FooterContainer, FooterWrapper, SocialContainer } from "./styles";

export default function Footer() {
	const t = useLanguage();

	return (
		<FooterContainer>
			<FooterWrapper>
				<AuthorContainer>
					<div>
						<p className="author">
							<span>{t`footer.made-by`}</span>
							&nbsp;
							<span>Gabriel de Paula</span>
						</p>
						<p className="rights">{t`footer.rights`}</p>
					</div>
					<button className="source-code">
						<LinkComponentExternal to={githubConfigs.repo} label="Website source code">
							{t`footer.source-code`}
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
