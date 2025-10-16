import { Input } from './ui/input'
import { Button } from './ui/button'
import { memo, useState } from 'react'
import axios from 'axios'
import { toast } from "sonner"

function FormContainer({onTaskAdded}: { onTaskAdded: () => void }) {
 const [task, setTask] = useState<string>("")
 const [loading, setLoading] = useState<boolean>(false);

 const onSubmit = async (e: React.FormEvent) => {

  e.preventDefault();

  if (!task) {
      toast.error('please add a task name')
      return;
    };

  setLoading(true);

  try {
    const response = await axios.post("/api/todos", {task});
    console.log('created todo', response.data);
    setTask("")
    onTaskAdded();
    toast.success('Task added')
  } catch (error) {
    console.log(error)
  }
  finally {
    setLoading(false)
  }

 }


  return (
    <section>
     <form onSubmit={onSubmit}>
      <div className='flex gap-x-2'>
     <Input type='text' name='task' value={task} onChange={(e) => setTask(e.target.value)} required placeholder='Enter task name' />
     <Button type='submit' disabled={loading}>{loading ? "Adding..." : "Add Task"}</Button>
      </div>
     </form>
    </section>
  )
}

export default memo(FormContainer)