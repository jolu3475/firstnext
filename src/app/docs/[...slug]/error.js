'use client'

const ErrorBondary = ({ error }) => {
  return (
    <>
      <div>{error.message}</div>
    </>
  )
}

export default ErrorBondary
