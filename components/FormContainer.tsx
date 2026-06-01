"use client"
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useActionState, useEffect } from 'react';
import { toast } from "sonner";
import { createTask } from '@/utils/actions';

const initialState = {status: "", message: ""}; 

function FormContainer() {
 const [state, formAction, isPending] = useActionState(createTask, initialState); 
 
 useEffect(() => {

  if(state.status === "success") {
    toast.success(state.message)
  } else {
    toast.error(state.message)
  }

 }, [state])

  return (
    <section>
     <form action={formAction}>
      <div className='flex gap-x-2'>
     <Input type='text' name='task' required placeholder='Task details' />
     <Button type='submit' disabled={isPending}>{isPending ? "Adding..." : "Add Task"}</Button>
      </div>
     </form>
    </section>
  )
}

export default FormContainer;