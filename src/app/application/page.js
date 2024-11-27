import Link from 'next/link'
import appli from './compose'

const Application = () => {
  return (
    <>
      <p>There are 3 application</p>
      <ul>
        {appli.map((app, index) => (
          <li key={index}>
            <Link
              className="hover:underline"
              href={`/application/${index + 1}`}
            >
              {app.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Application
