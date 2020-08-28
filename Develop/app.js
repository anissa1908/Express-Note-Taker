// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");
const fileJSON = require('./db/db.json');


// Express App set upddcc
const app = express();
const PORT = process.env.PORT || 3000;

//useless commentdd
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));


// HTML ROUTES
app.get(`/notes`, (req, res) =>{
    res.sendFile(path.join(__dirname, "public/notes.html"))
});





// API ROUTES

// GET

app.get('/api/notes', function(req, res) {
    res.json(fileJSON)
})


// // POST

app.post (`/api/notes`, function(req, res) {
    console.log(req.body);
    //fs writefile to store data from req.body
});

// // DELETE

// app.delete (`/api/notes/:id`), function(req, res) {
    
// })
app.get(`*`, (req, res) =>{
    res.sendFile(path.join(__dirname, "public/index.html"))
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));