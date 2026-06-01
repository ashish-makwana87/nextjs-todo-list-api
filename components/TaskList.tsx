'use client'
import { startTransition, useOptimistic } from 'react';
import SingleTask from './SingleTask';
import { Todo } from '@/utils/types'
import { deleteTask } from '@/utils/actions';
import { toast } from 'sonner';

function TaskList({todos}:{todos: Todo[]}) {
  
 const [optimisticList, setOptimisticList] = useOptimistic(todos, (state, id) => { return state.filter(task => task.id !== id)})

 const handleDelete = (id: string) => {
  
  startTransition(async () => {
    
   setOptimisticList(id)
   
   const deleted = await deleteTask(id)
   
   if(deleted?.status === "success") {
    toast.success("Task deleted...")
   }
  })
 }


  return (
    <>
    {optimisticList.map((task) => {

      return <SingleTask task={task} handleDelete={handleDelete} key={task.id} />
     })}
    </>
  )
}

export default TaskList