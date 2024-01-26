import socialConfigs from "@/configs/social.json";
import resume from "@/assets/pdf/resume.pdf";
import PageWrapper from "@/components/layout/PageWrapper";

import { ObjectPDF } from "./styles";

export default function Resume() {
	return (
		<PageWrapper>
			<ObjectPDF data={resume}>
				<iframe src={socialConfigs.resume} />
			</ObjectPDF>
		</PageWrapper>
	);
}

