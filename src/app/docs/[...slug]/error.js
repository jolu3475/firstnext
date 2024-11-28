'use client'

const ErrorBondary = ({ error, reset }) => {
  return (
    <>
      <div>
        {error.message} <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default ErrorBondary
