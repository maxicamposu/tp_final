import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

function NoteDeleteBtn({id}){
    let { remove } = useContext(NotesContext);
    return(
        <button className="btnEliminar" onClick={ev => remove(id)}>Eliminar</button>
    );
}

export default NoteDeleteBtn;