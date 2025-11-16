import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('projects').title('Projects'),
      S.documentTypeListItem('blog').title('Blogs'),
      S.documentTypeListItem('skill').title('Skills'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('contact').title('Contact Messages'),
    ])
