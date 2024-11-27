'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/login', label: 'Login' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/application', label: 'Application' },
  { href: '/profile', label: 'Profile' },
]

const Header = () => {
  const pathname = usePathname()
  return (
    <>
      {/* <div className=""> */}
      <div>
        <ul>
          <li className="mx-4 hover:list-disc">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
      <ul className="flex list-none ">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`} className="mx-4 hover:list-disc">
            <Link
              href={href}
              className={
                pathname.startsWith(href)
                  ? 'bg-slate-500 m-2 border-solid rounded-lg font-bold p-2 '
                  : 'bg-slate-300 m-2 border-dotted border-2 border-slate-500 rounded-lg p-2 '
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      div
      {/* </div> */}
    </>
  )
}

export default Header
