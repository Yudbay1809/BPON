import { type SchemaTypeDefinition } from 'sanity'

import article from './article'
import product from './product'
import category from './category'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, product, category, siteSettings],
}
