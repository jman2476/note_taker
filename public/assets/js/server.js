const express = require('express')
const path = require('path')
const fs = require('fs')
const { v4 } = require('uuid') 

const PORT = 3330 // server will run on port 3330

const app = express() // sets name to app

// TODO:: GET /notes should return the notes.html file


// TODO:: GET * should return the index.html file


// TODO:: GET /api/notes should read the db.json file and return the saved notes AS JSON


// TODO:: POST /api/notes should receive new note from the request body, add it to db.json, then return the new note to the client. Give each note a unique ID


// TODO:: DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.