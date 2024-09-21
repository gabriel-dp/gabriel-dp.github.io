import {
	FaHourglassHalf as AgeIcon,
	FaMapMarkerAlt as LocationIcon,
	FaGraduationCap as GraduationIcon,
	FaSuitcase as JobIcon,
	FaFile as FileIcon,
	FaArrowRight as NextIcon,
} from "react-icons/fa";

import { Page } from "@/pages";
import aboutConfigs from "@/configs/about.json";
import { calculateAge } from "@/utils/time";
import me from "@/assets/images/me.webp";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { LinkComponentRouter } from "@/components/utilities/LinkComponent";
import useLanguage from "@/contexts/language/useLanguage";

import { AboutContainer, DataContainer, ImageContainer, ResumeButton, MoreAboutButton } from "./styles";

export default function HomeAbout(props: { $id: string }) {
	const t = useLanguage();

	return (
		<SectionWrapper $id={props.$id} title={t`sections.about.title`} sub={t`sections.about.subtitle`}>
			<AboutContainer>
				<ImageContainer>
					<img src={me} alt="a handsome boy" />
				</ImageContainer>
				<DataContainer>
					<div className="details">
						<h3 className="title">Gabriel de Paula Meira</h3>
						<p>
							<AgeIcon className="icon" />
							<span>
								{calculateAge(new Date(aboutConfigs.birthdate))} {t`about.y/o`}
							</span>
						</p>
						<p>
							<GraduationIcon className="icon" />
							<span>{t`about.CS`}</span>
							<span>({t`about.university`})</span>
						</p>
						<p>
							<LocationIcon className="icon" />
							<span>{t`about.local.city`},</span>
							<span>
								{t`about.local.state`} / {t`about.local.country`}
							</span>
						</p>
						<p>
							<JobIcon className="icon" />
							<span>{t`about.job.company`}</span>
							<span>({t`about.job.role`})</span>
						</p>
					</div>
					<ResumeButton>
						<LinkComponentRouter to={Page.Resume} top>
							<span>{t`about.resume-button`}</span>
							<FileIcon className="icon" />
						</LinkComponentRouter>
					</ResumeButton>
				</DataContainer>
			</AboutContainer>
			<MoreAboutButton>
				<LinkComponentRouter to={Page.About} top>
					<span>{t`about.more-button`}</span>
					<NextIcon className="icon" />
				</LinkComponentRouter>
			</MoreAboutButton>
		</SectionWrapper>
	);
}
