const { default: Link } = require('next/link')

const F1 = () => {
  return (
    <>
      <div>
        F1 page
        <br /> <Link href={'/f1/f2'}> F2</Link>
      </div>
    </>
  )
}

export default F1
