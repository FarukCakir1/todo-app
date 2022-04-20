import React, { useState, useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function Main() {

  const todosFromLs = JSON.parse(window.localStorage.getItem("todos"))
  const [todos,setTodos] = useState(todosFromLs || [])
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const checkTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {
          task: todo.task,
          id: todo.id,
          completed: !todo.completed,
          lastDate: todo.lastDate
        }
      }
      return todo
    }))
  }

  const changeLastDate = (month, day, id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return{
          task: todo.task,
          id: todo.id,
          completed: todo.completed,
          lastDate: {
            month: month,
            day: day,
          }
        }
      }
      return todo
    }))
  }

  const changeTask = (id, newTask) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {
          task: newTask,
          id: todo.id,
          completed: todo.completed,
          lastDate: todo.lastDate
        }
      }

      return todo
    }))
  }

  return (
    <div className='todo-main w-9/12 md:w-6/12 lg:w-5/12 bg-amber-200 h-5/6 shadow-lg rounded-md flex flex-col items-center justify-start'>
        <h2 className='text-4xl text-slate-900 font-bold mt-3 opacity-50'>My Todos</h2>
        <TodoInput setTodos={setTodos} todos={todos}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} changeTask={changeTask} changeLastDate={changeLastDate}/>
    </div>
  )
}

export default Main