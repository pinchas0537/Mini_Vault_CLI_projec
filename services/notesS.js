import {listByOwner} from "../DAL/notesD.js"
export async function listNotes(ownerUsername){
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


// export function addNote(ownerUsername, text){
//     const new_date=new Date()
//     const new_note=new Notes{
//         id:id,
//         ownerUsername:ownerUsername,
//         text: text,
//         createdAt:`${new_date.getDate()}/${new_date.getMonth()+1}/${new_date.getFullYear()}`
//     }
//     if()
//     const insert=add(new_note)
//     console.log("The note is added.")
