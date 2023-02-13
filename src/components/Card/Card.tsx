import React from 'react'

interface Note {
  id:string,
  title:string,
  desc:string,
}

interface NoteProps{
  note:Note;
  handleDelete:(id: string) => void
}



const Card:React.FunctionComponent<NoteProps>=({note,handleDelete})=> {
  return (
    <div className="card">
      <div className="card-title">{note.title}</div>
      <div className="card-desc">{note.desc}</div>
      <button className="delete-btn" onClick={()=>handleDelete(note.id)}>Delete</button>
    </div>
  )
}

export  {Card}