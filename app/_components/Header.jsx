"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
   const { user } = useUser()
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'> 
      <Image src={"./logo.svg"} width={160} height={100} alt='logo'/>
       { user ?<UserButton/> : 
       <Link href="/sign-in">
      <Button >Get Started</Button> </Link> }
    </div>
  )
}

export default Header
