export const metadata = {
  title: {
    absolute: '',
    default: 'First Next app',
    template: '%s | First Next app',
  },
  description: 'This is a Next.js app',
}

export default function Layout({
  children,
  notifications,
  revenueMetrics,
  UserAnalytics,
  login,
}) {
  const isLog = false
  return isLog ? (
    <>
      <div>
        <div>{children}</div>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{UserAnalytics}</div>
            <div>{revenueMetrics}</div>
          </div>
          <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
        </div>
      </div>
    </>
  ) : (
    login
  )
}
