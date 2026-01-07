import {listByOwner} from "../DAL/notesD.js"

export function listNotes(ownerUsername){
    try{
        if(typeof(ownerUsername)==="string"){
            const listNotes_by_username=listByOwner(ownerUsername)
            return listNotes_by_username
    }else{
        console.log("The ownerUsername not string.")
    }}catch{error}{
        console.error(error)
    }
}