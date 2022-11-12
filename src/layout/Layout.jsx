import React from 'react'
import Header from './Header'
import Footer from './Footer'

function layout({ children }) {
     return (
          <>
               <Header />
               <main>{children}</main>
               <Footer />
          </>
     )
}

export default layout