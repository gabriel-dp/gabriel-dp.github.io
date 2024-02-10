import about from "@/configs/about.json";
import SectionWrapper from "@/components/layout/SectionWrapper";

import { EducationContainer, EducationPath, SingleEducation, VerticalLine } from "./styles";

export default function AboutEducation() {
	return (
		<SectionWrapper $id="education" title="Education" sub="My student life">
			<EducationContainer>
				<VerticalLine />
				<EducationPath>
					{about.educations.map((education) => (
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

