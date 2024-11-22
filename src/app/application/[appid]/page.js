import { notFound } from 'next/navigation'

import appli from './../compose'

const Test = async ({ params }) => {
  const { appid } = await params
  const num = appid - 1
  if (parseInt(appid) > appli.length || parseInt(appid) < 1) {
    return notFound()
  }
  return (
    <div>
      <h1>Test {appli[num].details}</h1>
    </div>
  )
}

export default Test
