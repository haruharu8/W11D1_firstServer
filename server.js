const express = require('express')

const app = express();

let myMessages = ["hello", 'hi','welcome']

app.get("/", (req, res) => {
    res.send("Welcome to my server! This is updating currently")
})

app.get("/messages", (req,res) => {
    res.send(myMessages);
})

app.listen(3000, () => {
    console.log("server has started");
})