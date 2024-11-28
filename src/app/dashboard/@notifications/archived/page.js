import Card from '@/components/card'
import Link from 'next/link'

const Archived = () => {
  return (
    <>
      <Card>
        Archived Notifications
        <Link href={'/dashboard'}> default</Link>
      </Card>
    </>
  )
}

export default Archived
