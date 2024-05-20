import backgrounds from "@/assets/images/contests/backgrounds";
import logos from "@/assets/images/contests/logos";

import { CardContainer, Description, Header, LogoContainer, Title } from "./styles";

export interface ContestI {
	title: string;
	time: string;
	assets: string;
	achievement: string;
	description: string;
}

export default function ContestCard({ card }: { card: ContestI }) {
	return (
		<CardContainer $backgroundUrl={backgrounds[card.assets]}>
			<Header>
				<Title>
					<h3 className="title">{card.title}</h3>
					<p className="time">{card.time}</p>
				</Title>
				<LogoContainer>
					<img src={logos[card.assets]} alt={card.title} draggable="false" />
				</LogoContainer>
			</Header>
			<Description>
				<h3 className="achievement">{card.achievement}</h3>
				<p className="description">{card.description}</p>
			</Description>
		</CardContainer>
	);
}
