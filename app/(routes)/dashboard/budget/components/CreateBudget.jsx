"use client"
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const CreateBudget = () => {
  const [emoji, setEmoji] = useState("💰");
  const [opeEmojiPicker,setopenEmojiPicker] = useState(false);
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
          }} variant= "outline" size= "lg"> {emoji} </Button>
          <div className='absolute'>
        
          <EmojiPicker open={opeEmojiPicker}
          onEmojiClick={(emojiData) => {
            setEmoji(emojiData.emoji);
            setopenEmojiPicker(false);
          }
          }
          /> 

          </div>
        
          </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default CreateBudget
