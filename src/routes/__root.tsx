import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Soulahmd — AI Video Creator & Digital Marketer' },
      {
        name: 'description',
        content: 'Ahmed Sabith (Soulahmd) creates high-impact AI video, performance marketing systems, and distinct brand stories from Kerala, India.',
      },
      { name: 'theme-color', content: '#0A0910' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  )
}
