// app/sitemap.ts
import { APP } from '@/lib/App'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD

  return [
    {
      url: `${APP.url}`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${APP.url}/contact-us.jpg`],
    },
  ]
}
