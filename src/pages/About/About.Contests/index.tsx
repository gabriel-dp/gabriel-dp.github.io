import SectionWrapper from "@/components/layout/SectionWrapper";
import ContestCard from "@/components/others/ContestCard";
import aboutConfigs from "@/configs/about.json";

export default function AboutContests() {
	return (
		<SectionWrapper $id="contests" title="Contests" sub="Team and individual achievements">
			{aboutConfigs.contests.map((card) => (
				<ContestCard key={card.title} card={card} />
			))}
		</SectionWrapper>
	);
}
