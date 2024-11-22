import appli from './../compose'

const Test = async ({ params }) => {
  const { appid } = await params
  const num = appid - 1
  return (
    <div>
      <h1>Test {appli[num].details}</h1>
    </div>
  )
}

export default Test
