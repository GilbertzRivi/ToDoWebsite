import React from 'react'
import ToDoElement from './ToDoElement'

export default function ToDoList({todoelements, setTodoelements}) {
  return (
    todoelements.map(element => {
        return <ToDoElement key={element.id} element={element} elements={todoelements} setTodoelements={setTodoelements}/>
    })
  )
}