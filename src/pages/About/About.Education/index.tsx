import SectionWrapper from "@/components/layout/SectionWrapper";
import { TimeLine, TimeLineElement } from "@/components/others/TimeLine";
import useLanguage from "@/contexts/language/useLanguage";

interface EducationI {
	name: string;
	institution: string;
	start: string;
	end: string;
}

export default function AboutEducation() {
	const t = useLanguage();
	const educations: EducationI[] = t("about.educations", { returnObjects: true });

	return (
		<SectionWrapper $id="education" title={t`sections.education.title`} sub={t`sections.education.subtitle`}>
			<TimeLine>
				{educations.map((education) => (
					<TimeLineElement key={education.name}>
						<h4 className="name">{education.name}</h4>
						<p>{education.institution}</p>
						<p>
							{education.start} - {education.end}
						</p>
					</TimeLineElement>
				))}
			</TimeLine>
		</SectionWrapper>
	);
}
