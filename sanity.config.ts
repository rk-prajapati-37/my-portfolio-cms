import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/index'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'my-portfolio-cms',

  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'i8n8hd39',
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'production',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
