import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout =(props) => {
  return (
      <div>
      <header>
        <Navbar /> 
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout