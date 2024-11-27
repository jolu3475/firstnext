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
