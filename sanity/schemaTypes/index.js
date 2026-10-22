import { species } from './species'
import { report } from './report'
import { article, glossaryTerm, partner, region, resource, subscriber } from './content'

export const schema = {
  types: [species, report, article, region, glossaryTerm, resource, partner, subscriber],
}
