// Glossary terms per locale. Only English exists for now; other locales fall
// back to it, and `locale` reports which language was served.

import { en } from './en'

const CONTENT = { en }

export function getGlossary(locale) {
  const served = locale in CONTENT ? locale : 'en'
  return { terms: CONTENT[served], locale: served }
}
