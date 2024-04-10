import React from 'react'

export default function Content({parts}) {
  return (
    <>
    {parts.map((part) => (
        <div key={part.id}>{part.name} {part.exercises} </div>
    ))}
    </>
  )
}
