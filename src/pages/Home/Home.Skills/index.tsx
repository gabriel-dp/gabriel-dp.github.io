import skills from "@/configs/skills.json";
import Section from "@/components/Section";
import SkillIcon from "@/components/SkillIcon";

import { CategoryContainer, CategoryHeader, SingleSkill, SkillsWrapper } from "./styles";

function Category(props: { title: string; param: keyof typeof skills }) {
	return (
		<CategoryContainer>
			<CategoryHeader>
				<h3 className="title">{props.title}</h3>
			</CategoryHeader>
			<SkillsWrapper>
				{skills[props.param].map((skill) => (
					<SingleSkill key={skill.name}>
						<div className="logo">
							<SkillIcon asset={skill.asset} />
						</div>
						<p className="name">{skill.name}</p>
					</SingleSkill>
				))}
			</SkillsWrapper>
		</CategoryContainer>
	);
}

export default function HomeSkills(props: { $id: string }) {
	return (
		<Section $id={props.$id} title="Skills" sub="Tools I use to work">
			<Category title="Languages" param="languages" />
			<Category title="Frameworks & Libs" param="frameworks&libs" />
			<Category title="Others" param="others" />
		</Section>
	);
}
