import SectionWrapper from "@/components/layout/SectionWrapper";
import ContestCard, { ContestI } from "@/components/others/ContestCard";
import useLanguage from "@/contexts/language/useLanguage";

export default function AboutContests() {
	const t = useLanguage();
	const contests: ContestI[] = t("about.contests", { returnObjects: true });

	return (
		<SectionWrapper $id="contests" title={t`sections.contests.title`} sub={t`sections.contests.subtitle`}>
			{contests.map((card) => (
				<ContestCard key={card.title} card={card} />
			))}
		</SectionWrapper>
	);
}
