"use client";
import React from 'react'
import Image from 'next/image'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
function Sidenav() {
    const menulist = [
        { name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
        { name: "Budgets", icon: PiggyBank , path: "/dashboard/budget"},
        { name: "Expense", icon: ReceiptText, path: "/dashboard/expense" },
        { name: "Upgrade", icon: ShieldCheck,path: "/dashboard/upgrade" },
    ];
    const Params= usePathname()
  return (
    <div  className='h-screen p-5 border shadow-sm '>
        < Image src={"/logo.svg"} alt="logo"  width={160} height={100} />
    <div className='mt-5'>
        {menulist.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer ${Params === item.path ? 'bg-gray-200' : ''}`}onClick={() => window.location.href = item.path}>
                <item.icon className='w-5 h-5 text-gray-600' />
                <span className='text-gray-700'>{item.name}</span>
            </div>
        ))}
    </div>
    <div className='fixed bottom-10 p-5 flex items-center'><UserButton/>  profile</div>
    </div>
  )
}

export default Sidenav
