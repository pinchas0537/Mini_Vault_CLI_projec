import test from "node:test";
import assert from "node:assert";
import { addNote, deleteNote, listNotes } from "../services/notesS.js";

const ownerUsername = "idTest"

test.describe("Checking notes functions in the services folder (success)", ()=>{
    test("Testing the addNote function", ()=>{
        assert.deepStrictEqual(addNote(ownerUsername), )
    })
    // test("Testing the listNotes function", ()=>{
    //     assert.deepStrictEqual(listNotes(ownerUsername), )
    // })
    // test("Testing the deleteNote function", ()=>{
    //     assert.deepStrictEqual(deleteNote(ownerUsername), )
    // })
})