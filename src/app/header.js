import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <ul>
            <li className="mx-4 hover:list-disc">
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
        <ul className="flex list-none ">
          <li className="mx-4 hover:list-disc">
            <Link href="/login">Login</Link>
          </li>
          <li className="mx-4 hover:list-disc">
            <Link href="/blog">blog</Link>
          </li>
          <li className="mx-4 hover:list-disc">
            <Link href="/about">about</Link>
          </li>
          <li className="mx-4 hover:list-disc">
            <Link href="/application">application</Link>
          </li>
          <li className="mx-4 hover:list-disc">
            <Link href="/profile">profile</Link>
          </li>
        </ul>
        div
      </div>
    </>
  )
}

export default Header
