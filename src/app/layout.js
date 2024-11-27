import { Metadata } from 'next'

export const metadata = {
  title: {
    absolute: '',
    default: 'First Next app',
    template: '%s | First Next app',
  },
  description: 'This is a Next.js app',
}

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '10px' }}>
          {' '}
          Header
        </header>
        {children}
        <footer style={{ backgroundColor: 'whitesmoke', padding: '10px' }}>
          {' '}
          Footer
        </footer>
      </body>
    </html>
  )
}
