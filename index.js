import express from "express";
const app = express();
const port = 4000;

import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));



// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
})


// ALL SONGS
app.get("/songs", (req, res) => {
    res.json(songs);
})

// GET RANDOM SONG
app.get("/random", (req, res) => {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    res.json(randomSong);
})



// GET SPECIFIC SONG
app.get("/song/:id", (req, res) => {
    const requestedID = parseInt(req.params.id);
    const songWithMatchingID = songs.filter((x) => x.id === requestedID);
    res.json(songWithMatchingID);
})


// FILTER SONGS BY YEAR & AUTHOR
app.get("/filter", (req, res) => {
    const year = req.query.year;
    const author = req.query.author;
  
    const filteredSongs = songs.filter(x => {
      let match = true;
  
      if (year) {
        match = match && x.year === parseInt(year);
      }
  
      if (author) {
        match = match && x.author.toLowerCase() === author.toLowerCase();
      }
  
      return match;
    });
  
    res.json(filteredSongs);
  });
  




app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})




// ALL SONGS

const songs = [
    {
        id: 1,
        song: "Why I'm Here",
        author: "Matt",
        year: 2016,
        originalSong: true,
    },

    {
        id: 2,
        song: "Little People",
        author: "Matt & Dan",
        year: 2018,
        originalSong: true,
    },


    {
        id: 3,
        song: "We Are Red",
        author: "Dan",
        year: 2014,
        originalSong: true,
    },


    {
        id: 4,
        song: "Friend",
        author: "Dan",
        year: 2021,
        originalSong: true,
    },



    {
        id: 5,
        song: "Around",
        author: "Matt",
        year: 2020,
        originalSong: true,
    },


    {
        id: 6,
        song: "Oxygen",
        author: "Dan",
        year: 2018,
        originalSong: true,
    },



    {
        id: 7,
        song: "Richard Cory",
        author: "Paul",
        year: 2018,
        originalSong: false,
    },


    {
        id: 8,
        song: "Paper Chains",
        author: "Dan",
        year: 2014,
        originalSong: true,
    },



    {
        id: 9,
        song: "Retry",
        author: "Matt",
        year: 2019,
        originalSong: true,
    },


    {
        id: 10,
        song: "April Song",
        author: "Matt",
        year: 2021,
        originalSong: true,
    },

    {
        id: 11,
        song: "Parade",
        author: "Dan",
        year: 2016,
        originalSong: true,
    },


    {
        id: 12,
        song: "Racing Mind",
        author: "Matt",
        year: 2019,
        originalSong: true,
    },

    {
        id: 13,
        song: "I Did",
        author: "Matt",
        year: 2015,
        originalSong: true,
    },


    {
        id: 14,
        song: "2012",
        author: "Dan",
        year: 2019,
        originalSong: true,
    },

    {
        id: 15,
        song: "Wild Fear",
        author: "Matt",
        year: 2021,
        originalSong: true,
    },

]