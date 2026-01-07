import notesDB from "../db/notesDB.js"
import usersDB from "../db/usersDB.js"
export async function deleteNotes(id,username){
    try{for(let i= 0;i<notesDB.length;i++){
        if(notesDB[i].id===id&&notesDB[i].username===username){
            notesDB.splice(i,1)
            console.log("Deleted successfully")
        }
    }
    return notesDB}
    catch{
        console.error(error);
        
    }
}

export async function existsUser(username) {
    try{
        var search=false
        for(let i=0;i<usersDB.length;i++){
            if(usersDB[i].username===username){
                search=true
            }
        }
        return search
    }catch{
        console.error(error)
    }
}

export async function findhByUsername(username){
    try{
        var search_user=true
        for(let i=0;i<usersDB.length;i++){
            if(usersDB[i].username===username){
                search_user=usersDB[i]
                }}
        if(search_user===true){
            console.log("User not found")}
            else{
                console.log(search_user)
            }}catch{
        console.error(error)
    }
}

export async function listNotes(ownerUsername){
    try{
        if(typeof(ownerUsername)===String){
        return ownerUsername
    }else{
        console.log("The ownerUsername not string.")
    }}catch{error}{
        console.error(error)
    }
}



