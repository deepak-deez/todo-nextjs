"use client"
import React from 'react'

type TodoItemProps ={
    id: string
    title: string
    complete: boolean
    toggleTodo: {id:string, complete: boolean}
}

const TodoItem = ({id, title, complete, toggleTodo}:TodoItemProps) => {
  return (
    <li className='flex gap-1 items-center'> 
        <input  type="checkbox" className='cursor-pointer peer' defaultChecked={complete} onChange={e=>toggleTodo(id,e.target.checked)}/>
        <label htmlFor={id} className='peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
    </li>
  )
}

export default TodoItem