'use client'

import { createContext, useContext } from 'react';

// Root params can't be read in Client Components, so the root layout
// hands the locale and dictionary down through context instead.
const I18nContext = createContext(null);

export function I18nProvider({ locale, dict, children }) {
    return <I18nContext.Provider value={{ locale, dict }}>{children}</I18nContext.Provider>;
}

export const useLocale = () => useContext(I18nContext).locale;

export const useDictionary = () => useContext(I18nContext).dict;
