"use client"
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { db } from '@/db'
import { Budget } from '@/db/schema'
import { useUser } from '@clerk/nextjs'
import { toast } from "sonner"

const CreateBudget = () => {
  const [emoji, setEmoji] = useState("💰");
  const [opeEmojiPicker,setopenEmojiPicker] = useState(false);
  const [budgetName , setBudgetName] = useState();
  const [budgetAmount , setBudgetAmount] = useState();
  const { user } = useUser()

async function onSubmitBudget() {
  const results= await db.insert(Budget).values({
name:budgetName,
amount:budgetAmount,
createdBy:user?.primaryEmailAddress?.emailAddress,
icon:emoji

  }).returning({insertedId:Budget.id})

  if (results){
    toast("Budget has been created.")
  }
  
}

  return (
    <div>
       
    
    <Dialog>
  <DialogTrigger><div className='bg-slate-100 p-10 rounded-md items-center flex flex-col  border-2 border-dashed cursor-pointer hover:shadow-md'>
     <h2 className='text-3xl'>+</h2>
     <h2>Create New Budget</h2>
    </div></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Budget</DialogTitle>
      <DialogDescription>
       <div className='mt-5'>
          <Button onClick= {()=>{
            setopenEmojiPicker(!opeEmojiPicker);
          }} variant= "outline" size= "lg" className="text-lg"> {emoji} </Button>
          <div className='absolute'>
        
          <EmojiPicker open={opeEmojiPicker}
          onEmojiClick={(emojiData) => {
            setEmoji(emojiData.emoji);
            setopenEmojiPicker(false);
          }
          }
          /> 

          </div>
          <div className='mt-3'>
          <h2 className='text-black my-1 font-medium'>Budget Name</h2>
          <Input placeholder="eg .Home deco" onChange= { (e)=>{ setBudgetName( e.target.value)}}/>
          </div>
          <div className='mt-3'>
          <h2 className='text-black my-1 font-medium'>Budget Amount</h2>
          <Input placeholder="eg 10000ksh" type="number" onChange= { (e)=>{ setBudgetAmount (e.target.value)}}/>
          </div>
        
          </div>
          
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
          <Button className="mt-5 w-full" disabled= {!(budgetAmount && budgetName)} onClick ={()=>onSubmitBudget()} >Create Budget</Button>
          </DialogClose>
        </DialogFooter>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default CreateBudget
