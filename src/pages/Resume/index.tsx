import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";

import PageWrapper from "@/components/layout/PageWrapper";
import { LinkComponentExternal } from "@/components/utilities/LinkComponent";
import Navbar from "@/components/layout/Navbar";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Button from "@/components/layout/Button";
import useLanguage, { useLanguageConfigs } from "@/contexts/language/useLanguage";

import { ObjectPDF } from "./styles";

export default function Resume() {
	const [resume, setResume] = useState("");

	const t = useLanguage();
	const language = useLanguageConfigs().language;

	// Updates resume directory when language changes
	useEffect(() => {
		// Dynamic imports should be relative and do not have alias
		const RESUME_FOLDER = "../../assets/pdf";
		const RESUME_FILE = `resume-${language}.pdf`;
		const path = `${RESUME_FOLDER}/${RESUME_FILE}`;

		import(/* @vite-ignore */ path).then((file) => setResume(file.default));
	}, [language]);

	return (
		<PageWrapper>
			<Navbar />
			<SectionWrapper $id="resume" title={t`sections.resume.title`} sub={language}>
				<ObjectPDF data={resume}>
					<Button>
						<LinkComponentExternal to={resume} label="Resume">
							{t`resume.external-button`} <FaFilePdf className="icon" />
						</LinkComponentExternal>
					</Button>
				</ObjectPDF>
			</SectionWrapper>
		</PageWrapper>
	);
}
