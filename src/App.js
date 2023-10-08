      
import { useState } from 'react';
import './App.css';
import CreateNote from './CreateNote';
import Header from './Header';
import Note from './Note';


function App() {

const[notes,setNote] = useState([])

  function addNote(newNote){
    setNote(prevNote=>{
      return[...prevNote,newNote]
    })
  }

  function deleteNote(id){
    setNote(prevNotes =>{
      return prevNotes.filter((noteItem,index)=>{
        return index!==id
      })
    })
  }

  
  return (
    <div className="App">
     <Header/>
     <CreateNote onAdd={addNote} />
    {notes.map((note,index) => {
    return (<Note 
    key={index} 
    id={index} 
    title={note.title} 
    content={note.content} 
    onDelete={deleteNote}
    />)
    })}
     
    </div>
  );
}

export default App;
