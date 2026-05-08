import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'
import { projectId, dataset } from './env'

export default defineConfig({
  basePath: '/admin/studio', // This must match the Next.js route
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    visionTool(),
  ],
})
