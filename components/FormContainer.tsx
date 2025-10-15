import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

function FormContainer() {

  return (
    <section >
     <form action="">
      <div className='flex gap-x-2'>
     <Input type='text' name='task'  />
     <Button type='submit'>Add Task</Button>
      </div>
     </form>
    </section>
  )
}

export default FormContainer