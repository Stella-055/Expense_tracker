"use client"
import React from 'react'
import Sidenav from './components/Sidenav'
import Dash from './components/Dash'
import { db } from '@/db'
import { Budget } from '@/db/schema'
import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';


const Dashboardlayout = ({children}) => {

  const {user}= useUser()
  const router = useRouter()
useEffect(() => {
 user && checkUserBudget()

}, [user])
 
  const checkUserBudget = async () => {
    const result= await db.select().from(Budget).where(eq(Budget.createdBy, user?.primaryEmailAddress?.emailAddress))
    if (result.length===0){
      router.replace('/dashboard/budget')
    }
  console.log(result)
  }
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block '><Sidenav/></div>
     
        <div className='md:ml-64 '>   <Dash/> {children}</div>
       
    </div>
  )
}

export default Dashboardlayout
