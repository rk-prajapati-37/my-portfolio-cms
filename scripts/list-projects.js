const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'i8n8hd39',
  dataset: process.env.SANITY_STUDIO_API_DATASET || 'production',
  useCdn: false,
})

async function list() {
  const res = await client.fetch('*[_type == "project"][0...100]{_id, title, slug, _createdAt, _updatedAt, video}')
  console.log(`Found ${res.length} project(s)`)
  res.forEach((p) => console.log(p._id, '-', p.title, ' | video:', p.video))
}

list().catch((err) => { console.error(err); process.exit(1) })
