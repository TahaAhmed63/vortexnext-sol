import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/server/',
          '/private/',
          '/dashboard/',
          '/wp-json/',
          '/cgi-bin/',
        ],
      },
    ],
    sitemap: 'https://vortexsolution.io/sitemap.xml',
    host: 'https://vortexsolution.io/',
  }
}
