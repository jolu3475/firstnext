const Docs = async ({ params }) => {
  const { slug } = await params
  //   console.log(slug)
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
