import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function ToDoInput({todoelements, setTodoelements}) {

  const todoNameRef = useRef()

  function AddTodo(){
    const name = todoNameRef.current.value
    if (name === '') return
    setTodoelements(prevelements => {
      return [...prevelements, {name: name, id: uuidv4(), complete: false}]
    })
    todoNameRef.current.value = null
  }

  function DeleteTodos(){
    const newElements = []
    todoelements.forEach(element => {
      if (!element.complete) newElements.push(element)
    })
    console.log(newElements)
    setTodoelements(newElements)
  }

  return (
    <div>
        <input type='text' ref={todoNameRef}></input>
        <button type='button' onClick={AddTodo}>Add element</button>
        <button type='button' onClick={DeleteTodos}>Clear done todos</button>
    </div>
  )
}
