import icons from "@/assets/icons/skills";

interface SkillIconI {
	asset: string;
}

export default function SkillIcon(props: SkillIconI): JSX.Element | null {
	const Icon = icons[props.asset as keyof typeof icons];
	if (!Icon) return null;
	return <Icon />;
}
