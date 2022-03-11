import styled from '@emotion/styled'
import RequestReset from '../components/RequestReset'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
`

function SignInPage() {
  return (
    <Grid>
      <SignIn />
      <SignUp />
      <RequestReset />
    </Grid>
  )
}

export default SignInPage
