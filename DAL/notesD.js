import notesDB from "../db/notesDB.js"

export async function deleteNotes(id, username) {
    try {
        for (let i = 0; i < notesDB.length; i++) {
            if (notesDB[i].id === id && notesDB[i].username === username) {
                notesDB.splice(i, 1)
                console.log("Deleted successfully")
            }
        }
        return notesDB
    }

    }
}

export async function listByOwner(username) {
    try {
        const ListOfNotes = notesDB.forEach(element => {
            element.username === username;
        });
        return ListOfNotes;
    } catch (err) {
        return a.message;
    catch (error) {
        console.error(error);
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

export function add(note = {}) {
    try {
        notesDB.push(note)
        return true
    } catch (error) {
        console.error(error)
    }
}

// export async function existsUser(username) {
//     try{
//         var search=false
//         for(let i=0;i<usersDB.length;i++){
//             if(usersDB[i].username===username){
//                 search=true
//             }
//         }
//         return search
//     }catch{
//         console.error(error)
//     }
// }

// export async function findhByUsername(username){
//     try{
//         var search_user=true
//         for(let i=0;i<usersDB.length;i++){
//             if(usersDB[i].username===username){
//                 search_user=usersDB[i]
//                 }}
//         if(search_user===true){
//             console.log("User not found")}
//             else{
//                 console.log(search_user)
//             }}catch{
//         console.error(error)
//     }
// }
