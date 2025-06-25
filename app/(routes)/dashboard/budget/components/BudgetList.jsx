"use client"
import React, { useEffect } from 'react'
import CreateBudget from './CreateBudget'
import { db } from '@/db'
import { getTableColumns } from 'drizzle-orm'
import { Expenses, Budget } from '@/db/schema'
import { sql } from 'drizzle-orm'
import { eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'

const BudgetList = () => {
  const {user} = useUser();
  useEffect(() => {
    getBudgetList()
  }, [user])
 
const getBudgetList = async () => {
  // This function can be used to fetch the budget list from the database
const budgets= await db.select({

  ...getTableColumns(Budget),
  totalSpend:sql `SUM(${Expenses.amount})`.mapWith(Number),
 totalItems:sql `COUNT(${Expenses.id})`.mapWith(Number)


}).from(Budget)
.leftJoin(Expenses,eq(Budget.id, Expenses.budget))
.where (eq(Budget.createdBy, user?.primaryEmailAddress?.emailAddress))
.groupBy(Budget.id)

console.log(budgets);



}
  return (
    <div className='mt-7'>
        
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          <CreateBudget/>
          </div>
   
    </div>
  )
}

export default BudgetList
