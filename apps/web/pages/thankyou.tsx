import { useRouter } from 'next/router'

function ThankYouPage() {
  const router = useRouter()
  const { email } = router.query
  return (
    <div>
      <p>
        Thank you for register in Sickfits! An email were sent to {email}.
        Please, confirm your email address
      </p>
    </div>
  )
}

export default ThankYouPage
