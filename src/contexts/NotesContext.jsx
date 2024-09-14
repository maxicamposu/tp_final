
import { createContext } from "react";
import useNotes from "../hooks/useNotes";

//mostrar a manera de demo en la segunda parte esta lista
//const list = [
   //{title:"Hola", message:"Mundo", id: "123"},
  //{title:"Segundo", message:"Mundo", id: "12"},
  //{title:"Tercero", message:"Mundo", id: "11"}];
   
  export const NotesContext = createContext();
  
  export function NotesProvider({children}){

    const { notes, add, remove } = useNotes();

    return(
        <NotesContext.Provider value={{ notes, add, remove } }>
            {children}
        </NotesContext.Provider>
    )
  }