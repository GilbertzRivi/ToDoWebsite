import React from 'react'

export default function ToDoElement({element, elements, setTodoelements}) {
  
  function CompleteChange(){
    const newElements = [...elements]
    const changedelement = newElements.find(elem => elem.id === element.id)
    changedelement.complete = !changedelement.complete
    setTodoelements(newElements)
  }

  return (
    <div class='ToDoElement' onClick={CompleteChange}>
        <label>
            <input class='Checkbox' type='checkbox' checked={element.complete} onClick={CompleteChange}/>
            {element.name}
        </label>
    </div>
  )
}
