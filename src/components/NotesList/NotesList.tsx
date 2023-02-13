import React from 'react'
import { Card } from "../Card/Card"

interface Note{
    id:string,
    title:string,
    desc:string,
}

interface NotesProps{
  notes:Note[],
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}


const NotesList:React.FunctionComponent<NotesProps>=({notes, setNotes})=>{

  const handleDelete=(id:string)=>{
    console.log(id)
    setNotes(notes.filter(note=>note.id!==id))
  }

  return (
    <>
        {notes?.map(note=>
        <>
          <Card key={note.id} note={note} handleDelete={handleDelete}/>
        </>)}
    
    </>
  )
}

export  {NotesList}