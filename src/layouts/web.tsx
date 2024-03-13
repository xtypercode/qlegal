import React from 'react'
import { Header } from '../components/web/header'
import { Footer } from '../components/web/footer'

const WebLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <>
        <Header />
            <main>{children}</main>
        <Footer />
    </>
  )
}

export default WebLayout