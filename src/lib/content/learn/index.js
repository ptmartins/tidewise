// Long-form /learn content per locale. Only English exists for now; other
// locales fall back to it, and `locale` reports which language was served.

import { en } from './en'

const CONTENT = { en }

export function getLearnContent(locale) {
  const served = locale in CONTENT ? locale : 'en'
  return { ...CONTENT[served], locale: served }
}
