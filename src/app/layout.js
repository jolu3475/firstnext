import { Metadata } from 'next'
import Header from './header'
import './global.css'

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
        <header
          style={{
            backgroundColor: 'lightblue',
            padding: '10px',
            margin: '1rem ',
          }}
          className="rounded-full"
        >
          <Header />
        </header>
        <div className="m-5">{children}</div>
        <footer
          style={{
            backgroundColor: 'darkblue',
            color: 'white',
          }}
          className="rounded-t-2xl text-center mt-auto py-8"
        >
          Footer
        </footer>
      </body>
    </html>
  )
}
