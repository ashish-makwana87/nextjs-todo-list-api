"use client";
import { Todo } from "@/utils/types";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { startTransition, useActionState, useEffect, useOptimistic, useRef, useState} from "react";
import { toast } from "sonner";
import { updateTask, updateTaskTitle } from "@/utils/actions";

const initialState = {status:"", message: ""}

function SingleTask({ task, handleDelete }: { task: Todo, handleDelete: (id:string) => void }) {

  const [editTask, setEditTask] = useState(false);
  const [state, formAction] = useActionState(updateTaskTitle, initialState);
  const [optimisticCheck, setOptimisticCheck] = useOptimistic(task.completed);
  
  const handleEdit = () => {
   setEditTask((prev) => !prev);
  }

  const handleToggle = () => {
    startTransition(async () => {
      const newValue = !optimisticCheck;
      setOptimisticCheck(newValue);
      
      const updated = await updateTask(task.id, newValue);

      if(updated?.message) {toast.success(updated.message)}
    });
  };
  
  useEffect(() => {

   if(state.status === "success") {

  toast.success(state.message)
   } else if (state.status === "error") {
    toast.warning(state.message)
   }
   
   setEditTask(false)
  }, [state])

  return (
    <>
    {editTask ? <div className="flex justify-between bg-gray-100 p-2 rounded">
      <form action={formAction}>
        <div className='flex gap-x-2'>
        <input type="hidden" name="task-id" value={task.id} />
        <Input type="text" name="new-title" defaultValue={task.title} className=" border-2 border-gray-500" />
        <Button type="submit">Submit</Button>
        </div>
      </form>
      <Button className="bg-red-500 hover:bg-red-600" onClick={handleEdit}>Cancel</Button>
    </div> : <div className='flex justify-between gap-x-4 gap-y-4'>
      <div className='flex items-center gap-x-2 md:gap-x-4'>
        <Input
          type='checkbox'
          checked={optimisticCheck}
          onChange={handleToggle}
          className='w-3 h-3 md:w-4 md:h-4 flex-shrink-0'
        />
        <p
          className={
            optimisticCheck
              ? "text-sm line-through md:text-base"
              : "text-sm md:text-base"
          }
        >
          {task.title}
        </p>
      </div>
      <div className='flex items-center gap-x-2 md:gap-x-4'>
        <Button size='sm' onClick={() => handleEdit()}>
          Edit
        </Button>
        <Button size='sm' onClick={() => handleDelete(task.id)}>
          Delete
        </Button>
      </div>
    </div>}
    </>
  );
}

export default SingleTask;
