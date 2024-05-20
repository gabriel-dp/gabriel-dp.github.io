import { useState } from "react";

import CountryFlag from "@/components/icons/CountryFlag";

import { CurrentSelected, DropdownLanguages, LanguageOption, Selector } from "./styles";

type Language = { abbreviation: string; country: string };
const LANGUAGES: Language[] = [
	{ abbreviation: "en", country: "us" },
	{ abbreviation: "pt", country: "br" },
];

export default function LanguageSelector() {
	const [current, setCurrent] = useState<Language>(LANGUAGES[0]);
	const [isOpen, setIsOpen] = useState(false);

	function handleSelectorClick() {
		setIsOpen((state) => !state);
	}

	function handleLanguageClick(language: Language) {
		setCurrent(language);
	}

	return (
		<Selector onClick={handleSelectorClick}>
			<CurrentSelected>
				<CountryFlag asset={current.country} />
			</CurrentSelected>
			<DropdownLanguages $isOpen={isOpen.toString()}>
				{LANGUAGES.map((language) => (
					<LanguageOption
						key={`${language.abbreviation}-${language.country}`}
						onClick={() => handleLanguageClick(language)}>
						<CountryFlag asset={language.country} />
					</LanguageOption>
				))}
			</DropdownLanguages>
		</Selector>
	);
}
