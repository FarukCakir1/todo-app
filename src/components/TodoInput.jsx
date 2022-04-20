import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

function TodoInput({ setTodos, todos }) {

  const [task,setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const addNewTodo = () => {

    {task && setTodos([...todos, {
      task: task,
      id: uuid(),
      completed: false,
      lastDate: {
        month: 0,
        day: new Date().getDate(),
      }
    }])
    setTask("")}
    
  }


  const handleKey = (e) => {
    if(e.keyCode === 13){
      addNewTodo()
    }
  }

  return (
    <div className='w-full flex flex-row justify-center items-center mt-7'>
        <input className='w-6/12 h-9 outline-none pl-2 text-xl rounded-md' onKeyUp={handleKey} type="text" value={task} onChange={handleChange} />
        <button onClick={addNewTodo} className='bg-lime-300 h-9 px-4 rounded-md ml-3'><i className="fa-solid fa-plus"></i></button>
    </div>
  )
}

export default TodoInput