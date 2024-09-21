import SectionWrapper from "@/components/layout/SectionWrapper";
import useLanguage from "@/contexts/language/useLanguage";
import { TimeLine, TimeLineElement } from "@/components/others/TimeLine";

import { ExperienceCard } from "./styles";

interface ExperienceI {
	name: string;
	local: string;
	start: string;
	end: string;
}

export default function AboutExperience() {
	const t = useLanguage();
	const experiences: ExperienceI[] = t("about.experiences", { returnObjects: true });

	return (
		<SectionWrapper $id="experience" title={t`sections.experience.title`} sub={t`sections.experience.subtitle`}>
			<TimeLine>
				{experiences.map((experience) => (
					<TimeLineElement key={experience.name}>
						<ExperienceCard>
							<h4 className="name">{experience.name}</h4>
							<p className="local">{experience.local}</p>
							<p className="time">
								{experience.start} - {experience.end}
							</p>
						</ExperienceCard>
					</TimeLineElement>
				))}
			</TimeLine>
		</SectionWrapper>
	);
}
