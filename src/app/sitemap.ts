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
      images: [`${APP.url}/ocal-moving-sharjah-movers-2.jpg`],
    },
    {
      url: `${APP.url}/services`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [`${APP.url}/young-mover-with-packaged-product.jpg`],
    },
    {
      url: `${APP.url}/about-us`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${APP.url}/young-mover-with-packaged-product.jpg`],
    },
    {
      url: `${APP.url}/contact-us`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${APP.url}/contact-us.jpg`],
    },
    {
      url: `${APP.url}/apartment-movers-uae`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${APP.url}/apartment-moving-crew.jpg`],
    },
    {
      url: `${APP.url}/villa-movers-in-dubai`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${APP.url}/luxury-item-handling.jpg`],
    },
    
  ]
}
