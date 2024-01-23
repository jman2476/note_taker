const express = require('express')
const path = require('path')
const fs = require('fs')
const { v4 } = require('uuid') 

const PORT = 3330 // server will run on port 3330

const app = express() // sets name to app

app.use(express.static('./public'))

app.use(express.json())

// function to get the notes
async function getNotes() {
    const notesArr = await fs.promises.readFile('./db/db.json', 'utf8')

    // returns the notes array
    return notesArr
}

// function to save the notes to json
async function saveNotes(userArr) {

}


// TODO:: GET /notes should return the notes.html file
app.get('/notes', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname,'./public/notes.html'))
})



// TODO:: GET /api/notes should read the db.json file and return the saved notes AS JSON
app.get('/api/notes', async (requestObj, responseObj) => {
    const notesArr = await getNotes() //get the  current notes
    console.log(notesArr)
    responseObj.send(notesArr)
})


// TODO:: POST /api/notes should receive new note from the request body, add it to db.json, then return the new note to the client. Give each note a unique ID
app.post('/api/notes', (requestObj, responseObj) => {
    
})

// TODO:: DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
app.delete('/api/notes/:id', (requestObj, responseObj) => {
    
})

// TODO:: GET * should return the index.html file
app.get('*', (requestObj, responseObj) => {
    responseObj.sendFile(path.join(__dirname, './public/index.html'))
})


// listen on the port for the sounds of the universe
app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})