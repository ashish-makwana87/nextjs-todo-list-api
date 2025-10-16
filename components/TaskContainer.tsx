import { useEffect, useState } from 'react'
import axios from 'axios'
import SingleTask from './SingleTask';
import { Todo } from '@/utils/types'

function TaskContainer({refreshPage}: {refreshPage: number}) {
const [todos, setTodos] = useState<Todo[]>([]);

useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todos')
        setTodos(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchTodos()
  }, [refreshPage])

  return (
    <section className='mt-4 md:mt-6 p-4 border rounded'>
     {todos.map((task) => {
     
     return <SingleTask key={task.id} task={task} />
     })}
    </section>
  )
}

export default TaskContainer