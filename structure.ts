import {ListItemBuilder, StructureBuilder} from 'sanity/structure'

// Redeploy trigger: update timestamp when forcing a Vercel rebuild
// redeploy-timestamp: 2025-11-17T00:00:00Z
export const structure = (S: StructureBuilder): ListItemBuilder =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('blog').title('Blogs'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('education').title('Education'),
      S.documentTypeListItem('certificate').title('Certificates'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('contact').title('Contact Messages'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('stats').title('Stats'),
    ])
