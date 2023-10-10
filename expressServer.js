const express = require('express')

const app = express();

let myMessages = ["hello", 'hi','welcome']

app.get("/", (req, res) => {
    res.send("<h1>Welcome to my server, make a request to '/info' to learn more<h1>")
})

app.get("/info", (req, res) => {
    res.send("This server will send you ddata about the creator of this erver if you make a GET request to '/data' ");
})

app.get("/data", (req, res) => {
        res.send({
            name: "Kelly",
            location: "Seattle",
            education: 'Per Scholas'
        })
})


app.listen(3005, () => {
    console.log("let's goooo");
})