import { FaHome } from "react-icons/fa";

import { Page } from "@/pages";
import { useTheme } from "@/contexts/theme/useTheme";
import PageWrapper from "@/components/layout/PageWrapper";
import Navbar from "@/components/layout/Navbar";
import Button from "@/components/layout/Button";
import GradientComponent from "@/components/utilities/GradientComponent";
import { LinkComponentRouter } from "@/components/utilities/LinkComponent";
import useLanguage from "@/contexts/language/useLanguage";

import { NotFoundContainer } from "./styles";

export default function NotFound() {
	const theme = useTheme();
	const t = useLanguage();

	return (
		<PageWrapper>
			<Navbar />
			<NotFoundContainer>
				<div className="error">
					<GradientComponent
						direction={180}
						colors={[
							{ color: theme?.primary, position: 0 },
							{ color: theme?.secondary, position: 1 },
						]}
						text>
						<h1 className="number">404</h1>
					</GradientComponent>
					<h1>{t`404.page-not-found`}</h1>
				</div>
				<div className="home">
					<p>{t`404.are-you-lost`}</p>
					<Button>
						<LinkComponentRouter to={Page.Home} top>
							<span>{t`404.home-button`}</span>
							<FaHome className="icon" />
						</LinkComponentRouter>
					</Button>
				</div>
			</NotFoundContainer>
		</PageWrapper>
	);
}
