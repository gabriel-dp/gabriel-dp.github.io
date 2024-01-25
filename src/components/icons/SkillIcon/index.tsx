import skills from "@/assets/icons/skills";

interface SkillIconI {
	asset: string;
}

export default function SkillIcon(props: SkillIconI): JSX.Element | null {
	const Icon = skills[props.asset as keyof typeof skills];
	if (!Icon) return null;
	return <Icon />;
}

