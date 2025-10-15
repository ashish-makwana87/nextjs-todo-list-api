import { Todo } from '@/utils/types'
import { Input } from './ui/input'


function SingleTask({task}:{task: Todo}) {
  
 
  return (
    <div className='flex items-center gap-x-4'>
     <input type='checkbox' checked={task.completed} />
     <p>{task.title}</p>
    </div>
  )
}

export default SingleTask