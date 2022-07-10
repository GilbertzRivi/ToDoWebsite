import React from 'react'

export default function ToDoSummary({todoelements}) {
  return (
    <div id='Summary'>
      <p>Items left to do: {todoelements.length}</p>
    </div>
  )
}
