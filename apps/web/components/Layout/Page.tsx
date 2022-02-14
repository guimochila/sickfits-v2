import styled from '@emotion/styled'
import React from 'react'
import { GlobalStyles } from '../styled/GlobalStyles'
import Header from './Header'

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`

interface IPage {
  children: React.ReactNode
}

function Page({ children }: IPage) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  )
}

export default Page
