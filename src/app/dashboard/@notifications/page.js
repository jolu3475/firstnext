import Card from '@/components/card'
import Link from 'next/link'

const Notification = () => {
  return (
    <>
      <Card>
        Notifications
        <Link href={'/dashboard/archived'}>Archived</Link>
      </Card>
    </>
  )
}

export default Notification
