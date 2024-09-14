import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Note from "./Note";
// A modo de ejemplo hardcodeado
//const list = [
  //  {title:"Hola", message:"Mundo", id: "123"},
  //  {title:"Segundo", message:"Mundo", id: "12"}
//];

function NotesList(){
    
    const { notes } = useContext(NotesContext);

    return(
       
        <div>
           <p>Tienes {notes.length} notas guardadas</p>
          
           {
           notes.map(note=><Note key={note.id} id={note.id} title={note.title} message={note.message}/>)
           
           }
        </div>
    );
}

export default NotesList;