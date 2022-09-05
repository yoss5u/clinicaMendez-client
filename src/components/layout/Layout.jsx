import React from 'react'

import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

export default function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  )
}