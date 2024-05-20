import skills from "@/configs/skills.json";
import SectionWrapper from "@/components/layout/SectionWrapper";
import SkillIcon from "@/components/icons/SkillIcon";
import useLanguage from "@/contexts/language/useLanguage";

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
	const t = useLanguage();

	return (
		<SectionWrapper $id={props.$id} title={t`sections.skills.title`} sub={t`sections.skills.subtitle`}>
			<Category title={t`skills.languages`} param="languages" />
			<Category title={t`skills.frameworks&libs`} param="frameworks&libs" />
			<Category title={t`skills.others`} param="others" />
		</SectionWrapper>
	);
}
