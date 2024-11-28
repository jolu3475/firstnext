// const number = (count) => {
//   return Math.floor(Math.random * count)
// }

const Docs = async ({ params }) => {
  const { slug } = await params
  const num = Math.floor(Math.random() * 3)
  console.log('test', num)
  if (num === 1) {
    throw new Error(`This reviews doesn't exist`)
  }
  if (slug.length === 2) {
    return (
      <>
        <h1>
          Docs of the feature {slug[0]} in the component {slug[1]}{' '}
        </h1>
      </>
    )
  } else {
    return (
      <>
        <h1>Docs of the feature {slug[0]}</h1>
      </>
    )
  }
}

export default Docs
