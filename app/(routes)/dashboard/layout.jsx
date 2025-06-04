import React from 'react'
import Sidenav from './components/Sidenav'

const Dashboardlayout = ({children}) => {
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block bg-red-100'><Sidenav/></div>
        <div className='md:ml-64 bg-green-200'>  {children}</div>
    
    </div>
  )
}

export default Dashboardlayout
