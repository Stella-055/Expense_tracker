import React from 'react'
import Sidenav from './components/Sidenav'
import Dash from './components/Dash'

const Dashboardlayout = ({children}) => {
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block '><Sidenav/></div>
     
        <div className='md:ml-64 '>   <Dash/> {children}</div>
       
    </div>
  )
}

export default Dashboardlayout
