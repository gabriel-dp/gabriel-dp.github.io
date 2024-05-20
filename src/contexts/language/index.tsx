import i18next, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import localeEN from "@/locales/enUS.json";
import localePT from "@/locales/ptBR.json";

const resources: Resource = {
	"en-US": { translation: localeEN },
	"pt-BR": { translation: localePT },
};

i18next.use(initReactI18next).init({
	resources,
	supportedLngs: ["en-US", "pt-BR"],
	lng: "en-US",
	fallbackLng: "en-US",
	interpolation: {
		escapeValue: false,
	},
	updateMissing: true,
});

export default i18next;
