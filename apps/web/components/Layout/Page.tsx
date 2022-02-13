import React from 'react'
import Header from './Header'

interface IPage {
  children: React.ReactNode
}

function Page({ children }: IPage) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Page
