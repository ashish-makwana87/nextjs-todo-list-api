'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SingleTask from './SingleTask';
import { Todo } from '@prisma/client';

function TaskContainer() {
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
  }, [])

  return (
    <section className='mt-4 md:mt-6'>
     {todos.map((task) => {
     
     return <SingleTask key={task.id} task={task} />
     })}
    </section>
  )
}

export default TaskContainer