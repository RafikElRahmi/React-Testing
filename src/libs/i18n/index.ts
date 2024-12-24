import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import fr from "./fr";
import ar from "./ar";

export interface LangFiles {
    button: any;
    common: any;
    links: any;
    toast: any;
    validations: any;
}
interface LangResouce {
    [key: string]: {
        translation: LangFiles;
    };
}

const resources = (): LangResouce => {
    return {
        en,
        fr,
        ar,
    };
};
i18n.use(initReactI18next).init({
    fallbackLng: "en",
    resources: resources(),
    lng: "en",
});
export default i18n;
