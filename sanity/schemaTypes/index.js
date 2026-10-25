import { species } from './species'
import { report } from './report'
import { chapter, learnSources } from './learn'
import { article, glossaryTerm, partner, region, resource, subscriber } from './content'

export const schema = {
  types: [species, report, chapter, learnSources, article, region, glossaryTerm, resource, partner, subscriber],
}
