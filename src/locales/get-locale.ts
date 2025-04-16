import { getScopedI18n } from "~/locales/server";
import { LocaleHeaderTypes } from "~/types/locale";

async function getLocaleHeader() {
    const scopedT = await getScopedI18n("header");
    const headerText: LocaleHeaderTypes = {
        home: scopedT('home'),
        intro: scopedT('intro'),
        guide: scopedT('guide'),
        product: scopedT('product'),
        service: scopedT('service'),
        resources: scopedT('resources'),
    };
    return headerText;
}

export {
    getLocaleHeader
}