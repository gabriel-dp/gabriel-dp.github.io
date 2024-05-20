import { useTranslation } from "react-i18next";

export default function useLanguage() {
	return useTranslation().t;
}

export function useLanguageConfigs() {
	return useTranslation().i18n;
}
