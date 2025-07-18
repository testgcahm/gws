import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gujranwala Medical College Welfare Society',
    short_name: 'GWS',
    description: 'A Progressive Web App for Gujranwala Medical College Welfare Society',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3e3e2',
    theme_color: '#1b2e3c',
    icons: [
      {
        src: '/logox.png',
        sizes: '500x500',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/logox-144.png',
        sizes: '144x144',
        type: 'image/png',
      },
    ],
  }
}