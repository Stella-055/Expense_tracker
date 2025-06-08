import React from 'react'
import CreateBudget from './components/CreateBudget'
import BudgetList from './components/BudgetList'

function page() {
  return (
  < div className='p-10'>
    <h2 className='font-bold text-3xl'>My Budget</h2>
   <BudgetList/>
   </div>
 
    
  )
}

export default page
