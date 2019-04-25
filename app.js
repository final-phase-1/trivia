const express = require("express")
const app = express()
const path = require("path")
const PORT = 3000

const session = require('express-session')

const Model = require("./models")

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public"))) //Set static folder

app.use(session({
    secret: 'alvin'
}))

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/login", (req, res) => {
    res.render("login.ejs")
})

app.post("/login", (req, res) => {
    let info = req.body
    res.redirect("/")
})

app.get("/register", (req, res) => {
    res.render("register.ejs")
})

app.post("/register", (req, res) => {
    let info = req.body
    res.send(info)
    res.redirect("/")
})

app.get("/topics", (req, res) => {
    res.render("topics.ejs")
})

app.post("/topics/:topic", (req, res) => {
    let topic = req.params.topic
    Topic.findOne()
    res.render("topics.ejs")
})

app.get("/leaderboard", (req, res) => {
    res.render("leaderboard.ejs")
})

app.get("/account", (req, res) => {
    res.render("account.ejs")
})

app.get("/quiz:id", (req, res) => {
    let qid = req.params.id
    res.send(qid)
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))