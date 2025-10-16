import { Todo } from '@/utils/types'
import { Input } from './ui/input'
import axios from 'axios'


function SingleTask({task}:{task: Todo}) {
  
  const handleToggle = async () => {
    try {
      await axios.patch(`/api/todos/${task.id}`, {
        completed: !task.completed,
      })
      
    } catch (error) {
      console.error(error)
    }
  }
 
  return (
    <div className='flex items-center gap-x-4'>
     <input type='checkbox' checked={task.completed} onChange={handleToggle} />
     <p>{task.title}</p>
    </div>
  )
}

export default SingleTask