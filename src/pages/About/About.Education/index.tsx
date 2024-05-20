import SectionWrapper from "@/components/layout/SectionWrapper";
import useLanguage from "@/contexts/language/useLanguage";

import { EducationContainer, EducationPath, SingleEducation, VerticalLine } from "./styles";

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
			<EducationContainer>
				<VerticalLine />
				<EducationPath>
					{educations.map((education) => (
						<SingleEducation key={education.name}>
							<h4 className="name">{education.name}</h4>
							<p>{education.institution}</p>
							<p>
								{education.start} - {education.end}
							</p>
						</SingleEducation>
					))}
				</EducationPath>
			</EducationContainer>
		</SectionWrapper>
	);
}
