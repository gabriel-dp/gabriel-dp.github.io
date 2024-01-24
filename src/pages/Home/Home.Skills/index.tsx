import Section from "@/components/Section";
import skills from "@/configs/skills.json";

import { CategoryContainer, SingleSkill, SkillsContainer } from "./styles";

export default function HomeSkills(props: { $id: string }) {
	return (
		<Section $id={props.$id} title="Skills" sub="Tools I use to work">
			<CategoryContainer>
				<h3>&lt; Languages /&gt;</h3>
				<SkillsContainer>
					{skills.languages.map((skill) => (
						<SingleSkill key={skill.name}>
							<div>
								<img src={skill.link} />
							</div>
							<p>{skill.name}</p>
						</SingleSkill>
					))}
				</SkillsContainer>
			</CategoryContainer>
		</Section>
	);
}

