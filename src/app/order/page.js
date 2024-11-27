'use client'
import { useRouter } from 'next/navigation'

const Order = () => {
  const router = useRouter()
  const HandleClick = () => {
    console.log('clicked')
    router.push('/')
  }
  return (
    <>
      <h5>Order</h5>
      <button className="rounded-full bg-indigo-600 p-2" onClick={HandleClick}>
        Accepter
      </button>
    </>
  )
}

export default Order
