import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import socialConfigs from "@/configs/social.json";
import { LinkComponentExternal } from "@/components/utilities/LinkComponent";

interface IconProps {
	link: string;
	icon: IconType;
}

function SocialIcon(props: IconProps) {
	return (
		<LinkComponentExternal to={props.link}>
			<props.icon className="social-icon" />
		</LinkComponentExternal>
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

