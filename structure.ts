import {ListItemBuilder, StructureBuilder} from 'sanity/structure'
import VideoPreview from './src/components/VideoPreview'

// Redeploy trigger: update timestamp when forcing a Vercel rebuild
// redeploy-timestamp: 2025-11-17T00:00:00Z
export const structure = (S: StructureBuilder): ListItemBuilder =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Projects').child(
        S.documentTypeList('project').title('Projects').child((documentId) =>
          S.document().documentId(documentId).schemaType('project').views([S.view.form(), S.view.component(VideoPreview).title('Preview')])
        )
      ),
      S.documentTypeListItem('blog').title('Blogs'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('education').title('Education'),
      S.documentTypeListItem('certificate').title('Certificates'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('contact').title('Contact Messages'),
    ])
