import flags from "@/assets/icons/flags";

interface CountryFlagI {
	asset: string;
}

export default function CountryFlag(props: CountryFlagI): JSX.Element | null {
	const Icon = flags[props.asset as keyof typeof flags];
	if (!Icon) return null;
	return <Icon />;
}
