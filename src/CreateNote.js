import React, { useState } from 'react'

const CreateNote = (props) => {

const [note,setNote] = useState({
  title:"",
  content:""
})

function handleChange(event){
  const {name,value} = event.target
  setNote(prevNote=>{
    return{
      ...prevNote,
      [name]:value
    }
  })
}

function submitNote(event){
  props.onAdd(note)
  setNote({ title:"",
  content:""})
  event.preventDefault()
}

  return (
    <form>
        <input name="title" placeholder="Title"  value={note.title}  onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
  )
}


export default CreateNote