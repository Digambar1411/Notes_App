import React from 'react'
import "./Card.css"

interface Note {
  id:string,
  title:string,
  desc:string,
  color:string
}

interface NoteProps{
  note:Note;
  handleDelete:(id: string) => void
}

const Card:React.FunctionComponent<NoteProps>=({note,handleDelete})=> {
  return (
    <div className="card" style={{backgroundColor:note.color}}>
      <div className="card-title">{note.title}</div>
      <div className="card-desc">{note.desc}</div>
      <button className="btn delete" onClick={()=>handleDelete(note.id)}>Delete</button>
    </div>
  )
}

export  {Card}