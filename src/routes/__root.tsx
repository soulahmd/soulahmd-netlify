import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Soulahmd | Ahmed Sabith - AI Video Creator & Digital Marketer in Kerala' },
      {
        name: 'description',
        content: 'Official portfolio of Ahmed Sabith (Soulahmd). Top AI Video Creator, Digital Marketer, and Brand Strategist in Kerala specialising in high-impact visual storytelling, performance marketing, and social media handling.',
      },
      {
        name: 'keywords',
        content: 'Soulahmd, Ahmed Sabith, Ahammed Sabith, Ahmd Sabith, soul.ahmd, AI Video Creator in Kerala, Digital Marketer Kerala, Best AI Video Creator, Branding Strategist Kerala, Social Media Manager Thrissur, Founder of Soulix Fragrance, CEO of Evoq.ai, Soulix',
      },
      { name: 'author', content: 'Ahmed Sabith' },
      { name: 'theme-color', content: '#0A0910' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://soulahmd.in/' },
      { property: 'og:title', content: 'Soulahmd | AI Video Creator & Digital Marketer in Kerala' },
      { property: 'og:description', content: 'High-impact growth strategies, AI-powered visuals, and brand stories built to hold attention in 3 seconds.' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Soulahmd | AI Video Creator & Digital Marketer' },
      { property: 'twitter:description', content: 'AI Video Creator and Brand Growth Strategist helping brands scale with visual-first storytelling.' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Ahmed Sabith',
          'alternateName': ['Soulahmd', 'soul.ahmd'],
          'url': 'https://soulahmd.in',
          'jobTitle': 'AI Video Creator & Digital Marketer',
          'worksFor': {
            '@type': 'Organization',
            'name': 'Evoq.ai',
          },
          'address': {
            '@type': 'PostalAddress',
            'addressRegion': 'Kerala',
            'addressCountry': 'India',
          },
          'sameAs': [
            'https://www.instagram.com/soul.ahmd',
            'https://github.com/soulahmd',
          ],
          'knowsAbout': [
            'AI Video Creation',
            'Digital Marketing',
            'Brand Growth Strategy',
            'Social Media Handling & Management',
            'Visual Storytelling',
            'Performance Marketing',
            'Evoq.ai',
            'Soulix',
          ],
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
