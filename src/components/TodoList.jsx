import React from 'react'
import Todo from './Todo'


function TodoList({ todos, deleteTodo, checkTodo, changeTask, changeLastDate }) {
  
  return (
    <div className='h-96 max-h-96 w-11/12 sm:w-11/12 bg-teal-50 mt-5 overflow-y-scroll scroll-m-6 scrollbar-hide'>
        <ul className='flex flex-col'>
            {todos.map(todo => (<li key={todo.id}>
                <Todo 
                  task={todo.task} 
                  id={todo.id} 
                  deleteTodo={deleteTodo} 
                  checkTodo={checkTodo} 
                  completed={todo.completed}
                  changeTask={changeTask}
                  changeLastDate={changeLastDate}
                  lastDay={todo.lastDate.day}
                />
            </li>))}
        </ul>
    </div>
  )
}

export default TodoList