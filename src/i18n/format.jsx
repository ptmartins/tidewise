import { Fragment } from 'react';
import { LOCALE_DETAILS } from './config';

// "Showing {count} species" + { count: 3 } -> "Showing 3 species"
export const format = (template, vars = {}) =>
    template.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? vars[key] : match));

// Same as `format`, but placeholders can be React elements
export const formatRich = (template, vars = {}) =>
    template.split(/(\{\w+\})/g).map((part, index) => {
        const key = part.match(/^\{(\w+)\}$/)?.[1];
        return <Fragment key={index}>{key && key in vars ? vars[key] : part}</Fragment>;
    });

// Data values are stored in English; dictionaries map them to translations
// and anything without an entry falls back to the original value.
export const label = (map, value) => map?.[value] ?? value;

export const formatNumber = (locale, value) =>
    new Intl.NumberFormat(LOCALE_DETAILS[locale].htmlLang, { maximumFractionDigits: 2 }).format(value);
