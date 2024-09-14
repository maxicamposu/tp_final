import { useEffect } from "react";
import { useState } from "react";

const list = [
    {title:"Hola", message:"Mundo", id: "123"},
    {title:"Segundo", message:"Mundo", id: "12"},
    {title:"Tercero", message:"Munde", id: "11"}];


const  LOCALSTORAGE_KEY = "MIAPP.list";

function useNotes(){
    const [notes, setNotes] = useState([]);

    useEffect(()=>{

        let  localStorageSavedNotes = localStorage.getItem(LOCALSTORAGE_KEY);
        if(localStorageSavedNotes){
            setNotes(JSON.parse(localStorageSavedNotes));
        }
    }, []);

    useEffect(
        ()=>{
            if(!notes || notes.length == 0) return;
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes));
        },[notes]);
    

    function remove(id){
        let newNotes = notes.filter(note => note.id !==id);
        setNotes(newNotes);
    }

    function add(title,message){
        const id = Date.now();
        const noteObject = {title, message,id};
        setNotes([ noteObject, ...notes ]);
    }

    return {notes,add,remove}
        
}

export default useNotes;