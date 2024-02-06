import { FaHourglassHalf, FaMapMarkerAlt, FaGraduationCap, FaFile, FaArrowRight } from "react-icons/fa";

import { Page } from "@/pages";
import aboutConfigs from "@/configs/about.json";
import { calculateAge } from "@/utils/time";
import me from "@/assets/images/me.webp";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { LinkComponentRouter } from "@/components/utilities/LinkComponent";

import { AboutContainer, DataContainer, ImageContainer, ResumeButton, MoreAboutButton } from "./styles";

export default function HomeAbout(props: { $id: string }) {
	return (
		<SectionWrapper $id={props.$id} title="About" sub="Who am I?">
			<AboutContainer>
				<ImageContainer>
					<img src={me} alt="a handsome boy" />
				</ImageContainer>
				<DataContainer>
					<div className="details">
						<h3 className="title">Gabriel de Paula Meira</h3>
						<p>
							<FaHourglassHalf className="icon" />
							<span>{calculateAge(new Date(aboutConfigs.birthdate))} years old</span>
						</p>
						<p>
							<FaGraduationCap className="icon" />
							<span>Computer Science</span>
							<span>(UFSJ)</span>
						</p>
						<p>
							<FaMapMarkerAlt className="icon" />
							<span>São João del Rei,</span>
							<span>MG / Brazil</span>
						</p>
					</div>
					<ResumeButton>
						<LinkComponentRouter to={Page.Resume} top>
							<span>View resume</span>
							<FaFile className="icon" />
						</LinkComponentRouter>
					</ResumeButton>
				</DataContainer>
			</AboutContainer>
			<MoreAboutButton>
				<LinkComponentRouter to={Page.About} top>
					<span>More about me</span>
					<FaArrowRight className="icon" />
				</LinkComponentRouter>
			</MoreAboutButton>
		</SectionWrapper>
	);
}

