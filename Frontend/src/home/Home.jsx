import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
     <div className=''>
      <Navbar/>
      <Banner/>
      <div>
      <Freebook/>
      </div> 
      <Footer/>
    </div>
    </>
  )
}

export default Home
