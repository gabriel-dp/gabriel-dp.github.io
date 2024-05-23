import { FaFilePdf } from "react-icons/fa";

import PageWrapper from "@/components/layout/PageWrapper";
import { LinkComponentExternal } from "@/components/utilities/LinkComponent";
import Navbar from "@/components/layout/Navbar";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/layout/Button";
import resumes from "@/assets/pdf/resume";
import useLanguage, { useLanguageConfigs } from "@/contexts/language/useLanguage";

import { ObjectPDF } from "./styles";

export default function Resume() {
	const t = useLanguage();
	const language = useLanguageConfigs().language;

	const file = resumes[`resume-${language}` as keyof typeof resumes];

	return (
		<PageWrapper>
			<Navbar />
			<SectionWrapper $id="resume" title={t`sections.resume.title`} sub={language}>
				<ObjectPDF data={file}>
					<Button>
						<LinkComponentExternal to={file} label="Resume">
							{t`resume.external-button`} <FaFilePdf className="icon" />
						</LinkComponentExternal>
					</Button>
				</ObjectPDF>
			</SectionWrapper>
		</PageWrapper>
	);
}
