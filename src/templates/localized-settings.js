
import { format } from 'date-fns';
import parse from 'date-fns/parse';

import esLocale from 'date-fns/locale/es';
import enLocale from 'date-fns/locale/en';

import LayoutEn from '../layouts/en';
import LayoutEs from '../layouts/es';

import enMessages from '../data/messages/en';
import esMessages from '../data/messages/es';

export const locale = {
    en: {
        messages: enMessages,
        locale: enLocale,
        format: 'dddd MMMM DD - YYYY',
        layout: LayoutEn
    },
    es: {
        messages: esMessages,
        locale: esLocale,
        format: 'DD dddd de MMMM del YYYY',
        layout: LayoutEs
    }
}

export const formatedDate = (dateString, localeCode) => {
    const dateLocale = locale[localeCode];
    const date = parse(dateString);
    const result = format(date, dateLocale.format,  { locale: dateLocale.locale });
    return result;
}


