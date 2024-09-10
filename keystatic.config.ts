// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/posts/peliculas/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción' }),
        fecha: fields.text({ label: 'Fecha de publicación' }),
        video: fields.text({ label: 'URL del video' }),
        content: fields.markdoc({ label: 'Contenido' }),
        image: fields.object({
          url: fields.text({ label: 'URL de la imagen' }),
        }),
      },
    }),
  },
});