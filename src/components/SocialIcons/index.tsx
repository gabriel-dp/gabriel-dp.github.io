import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import socialConfigs from "@/configs/social.json";
import { LinkContainerExternal } from "@/components/LinkContainer";

interface IconProps {
	link: string;
	icon: IconType;
}

function SocialIcon(props: IconProps) {
	return (
		<LinkContainerExternal to={props.link}>
			<props.icon className="social-icon" />
		</LinkContainerExternal>
	);
}

export function SocialIconGithub() {
	return <SocialIcon icon={FaGithub} link={socialConfigs.github} />;
}

export function SocialIconLinkedin() {
	return <SocialIcon icon={FaLinkedin} link={socialConfigs.linkedin} />;
}

export function SocialIconInstagram() {
	return <SocialIcon icon={FaInstagram} link={socialConfigs.instagram} />;
}

