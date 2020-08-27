// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");
const { Console } = require("console");


// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// HTML ROUTES
app.get('./index.html', (req, res) =>{
    res.send('Does this thing work?');
});



// GET

app.get ('/api/notes', function(req, res) {
    res.send (`db.json`)
});

app.get (`*`, function (req,res) {
    res.send (`index.html`)
}

// POST

app.post (`/api/notes`, function(req, res) {}

});

// DELETE

app.delete ('/', function(req, res) {

});
