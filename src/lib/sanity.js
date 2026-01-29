import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: 'i8n8hd39',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

export const urlFor = (source) => {
  return createImageUrlBuilder(client).image(source)
}