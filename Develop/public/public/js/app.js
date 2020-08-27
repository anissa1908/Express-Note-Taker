// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");
const fileJSON = require('./db/db.json');


// Express App set up

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// HTML ROUTES
app.get(`/notes`, (req, res) =>{
    res.send(`notes.html`);
});

app.get(`*`, (req, res) =>{
    res.send(`index.html`);
});


// API ROUTES

// GET

app.get (`/notes`, function (req,res) {
    res.send (`notes.html`);

app.get (`*`, function (req,res) {
    res.json ([{"title":"Test Title","text":"Test text"}])
    }

app.get ('/api/notes', function(req, res) {
    res.json ([{"title":"Test Title","text":"Test text"}])
};


// POST

app.post (`/api/notes`, function(req, res) {
    res.json ([{"title":"Test Title","text":"Test text"}])
});

// DELETE

app.delete (`/api/notes/:id`), function(req, res) {
    
})
