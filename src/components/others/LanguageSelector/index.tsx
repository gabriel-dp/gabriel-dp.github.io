import { useState } from "react";

import { useConfigs } from "@/contexts/configs/useConfigs";
import CountryFlag from "@/components/icons/CountryFlag";

import { CurrentSelected, DropdownLanguages, LanguageOption, Selector } from "./styles";

type LanguageCountry = { [key: string]: string };
const FLAGS: LanguageCountry = {
	"en-US": "us",
	"pt-BR": "br",
};

export default function LanguageSelector() {
	const { language: current, setLanguage } = useConfigs();
	const [isOpen, setIsOpen] = useState(false);

	function handleSelectorClick() {
		setIsOpen((state) => !state);
	}

	function handleLanguageClick(language: string) {
		setLanguage(language);
	}

	return (
		<Selector onClick={handleSelectorClick}>
			<CurrentSelected>
				<CountryFlag asset={FLAGS[current]} />
			</CurrentSelected>
			<DropdownLanguages $isOpen={isOpen.toString()}>
				{Object.entries(FLAGS).map((language) => (
					<LanguageOption key={`${language[0]}-${language[1]}`} onClick={() => handleLanguageClick(language[0])}>
						<CountryFlag asset={language[1]} />
					</LanguageOption>
				))}
			</DropdownLanguages>
		</Selector>
	);
}
