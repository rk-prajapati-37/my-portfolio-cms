/*
  Usage:
  1) Install '@sanity/client' if you don't have it: npm install @sanity/client
  2) Set SANITY_TOKEN with a token that has write access
     On PowerShell: $env:SANITY_TOKEN = "<token>"
  3) Run: node ./scripts/migrate-description-to-details.js

  What it does:
  - Fetches project documents that have `description` but do not have `details`
  - Converts `description` string into a Portable Text `details` array
  - Saves it back to the document as `details`
*/

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'i8n8hd39',
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'production',
  token: process.env.SANITY_TOKEN, // required for updates
  useCdn: false,
})

async function migrate() {
  const query = `*[_type == "project" && defined(description) && !defined(details)]{_id, description}`
  const docs = await client.fetch(query)

  console.log(`Found ${docs.length} docs to migrate`)

  for (const doc of docs) {
    try {
      const paragraphs = (doc.description || '')
        .split(/\n{2,}/g)
        .map((p) => p.trim())
        .filter(Boolean)

      const blocks = paragraphs.map((p) => ({
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: p }],
      }))

      await client.patch(doc._id).set({ details: blocks }).commit({ autoGenerateArrayKeys: true })
      console.log(`Migrated ${doc._id}`)
    } catch (err) {
      console.error(`Failed migrating ${doc._id}: ${err.message}`)
    }
  }
}

migrate().then(() => console.log('Migration completed')).catch((err) => console.error(err))
