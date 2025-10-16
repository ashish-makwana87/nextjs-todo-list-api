import { Todo } from '@/utils/types'
import { Input } from './ui/input'
import axios from 'axios'
import { Button } from './ui/button'
import { useState } from 'react'


function SingleTask({task, onTaskAdded}:{task: Todo, onTaskAdded: () => void}) {
   
  const [loading, setLoading] = useState<boolean>(false)

  const handleToggle = async () => {
    try {
      await axios.patch(`/api/todos/${task.id}`, {
        completed: !task.completed,
      })
      onTaskAdded();
    } catch (error) {
      console.error(error)
    }
  }
 
const handleDelete = async () => {
    
    setLoading(true)
    try {
      await axios.delete(`/api/todos/${task.id}`)
      onTaskAdded()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='flex justify-between gap-x-4 gap-y-4'>
    <div className='flex items-center gap-x-2 md:gap-x-4'>
     <Input type='checkbox' checked={task.completed} onChange={handleToggle} className='w-4 h-4' />
     <p>{task.title}</p>
      </div>
      <div>
      <Button size='sm' onClick={handleDelete} disabled={loading}>{loading ? "Deleting..." : "Delete"}</Button>
      </div>
    </div>
  )
}

export default SingleTask