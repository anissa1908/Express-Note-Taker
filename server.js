// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");
const fileJSON = require("./db/db.json");

// Express App set up
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewware handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES

app.get(`/notes`, (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// note is saved in the database and sent back to the browser and rendered onto the page

//fs writefile to store data from req.body

app.post(`/api/notes`, function (req, res) {
  //adding new note to db array

  fs.readFile("./db/db.json", "utf-8", (err, db) => {
    if (err) throw err;
    db = JSON.parse(db);
    const lastnote = db[db.length - 1];
    const id = lastnote ? lastnote.id + 1 : 1;
    db.push({ ...req.body, id });
    fs.writeFile("./db/db.json", JSON.stringify(db), function (err, data) {
      if (err) throw err;
      res.json("success!");
    });
  });
});

// DELETE

app.delete(`/api/notes/:id`, function (req, res) {
  fs.readFile("./db/db.json", "utf-8", (err, db) => {
    if (err) throw err;
    db = JSON.parse(db);
    const filtered = db.filter(function (note) {
      return note.id != req.params.id;
    });
    fs.writeFile("./db/db.json", JSON.stringify(filtered), function (
      err,
      data
    ) {
      if (err) throw err;
      res.json("success!");
    });
  });
});

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// LISTENER
app.listen(PORT, function () {
  console.log("server is running!");
});

module.exports = app;
