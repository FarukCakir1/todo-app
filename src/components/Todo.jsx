import React, { useState } from 'react'
import DetailTab from './DetailTab'


function Todo({ task, deleteTodo, id, checkTodo, completed, changeTask, changeLastDate, lastDay }) {
    const dif = lastDay - new Date().getDate()
    const [editing, setEditing] = useState(false)
    const [newTask, setNewTask] = useState("")
    const [detail, setDetail] = useState(false)
    const [datedif, setDateDif] = useState(dif)

   
    const handleDelete = () => {
        deleteTodo(id)
    }

    const handleCheck = () => {
        checkTodo(id)
        console.log(datedif);
    }

    const handleEdit = (e) => {
        setEditing(!editing)
    }

    const editTask = (e) => {
        setNewTask(e.target.value)
    }

    const handleTaskChange = () => {
        if (newTask !== "") {
            changeTask(id, newTask)
            setEditing(false)
        } else {
            changeTask(id, task)
            setEditing(false)
        }
    }

    return (
        <div>
            <div 
                className=
                {
                    `flex flex-row items-center justify-between p-3 duration-500
                    ${completed ? "bg-slate-300" : "bg-green-300" } 
                    ${datedif < 0 && "bg-red-400" }`
                }
            >
                {editing ? (
                    <div className='w-6/12'>
                        <input className='w-8/12' placeholder={task} type="text" value={newTask} onChange={editTask} />
                        <button className='w-8 h-8 rounded-full bg-emerald-500 p-1 ml-3' onClick={handleTaskChange}>V</button>
                    </div>
                ) : <span className={`text-xl font-semibold duration-500 ${completed && "line-through text-slate-500"}`}>{task}</span>}
                <div className="buttons">
                    <span onClick={() => setDetail(!detail)} className='underline text-sm mr-4 font-semibold cursor-pointer'>Details</span>
                    <button onClick={handleCheck} className='bg-emerald-500 p-1 w-8 mr-1 h-8 rounded-full font-bold text-sm'><i className="fa-solid fa-check duration-300 hover:scale-125"></i></button>
                    <button onClick={handleDelete} className='bg-red-500 p-1 w-8 h-8 mr-1 rounded-full text-xs'><i className="fa-solid fa-trash duration-300 hover:scale-125"></i></button>
                    <button onClick={handleEdit} className='bg-indigo-500 p-1 w-8 mr-1 h-8 rounded-full text-xs'><i className="fa-solid fa-pencil duration-300 hover:scale-125"></i></button>
                </div>
            </div>
            <DetailTab detail={detail} changeLastDate={changeLastDate} id={id} setDateDif={setDateDif} datedif={datedif} lastDay={lastDay}/>
        </div>

    )
}

export default Todo