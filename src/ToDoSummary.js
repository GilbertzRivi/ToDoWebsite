import React from 'react'

export default function ToDoSummary({todoelements}) {
  return (
    <div>Items left to do: {todoelements.length}</div>
  )
}
