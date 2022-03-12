import { useRouter } from 'next/router'
import RequestReset from '../components/RequestReset'
import ResetPassword from '../components/ResetPassword'

function ResetPage() {
  const router = useRouter()
  const token = router.query.token as string

  if (!token) {
    return (
      <div>
        <p>Sorry you must supply a token</p>
        <RequestReset />
      </div>
    )
  }

  return <ResetPassword token={token} />
}

export default ResetPage
