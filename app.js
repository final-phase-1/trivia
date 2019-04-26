const express = require("express")
const app = express()
const path = require("path")
const PORT = 3000

const bcrypt = require("bcrypt")
const session = require('express-session')

const Model = require("./models")

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public"))) //Set static folder

app.use(session({
    secret: 'alvinmaxtrivia',
    resave: false,
    saveUninitialized: true,
}))

app.get("/", (req, res) => {

    if(!req.session.loggedin) {
        req.session.loggedin = false
    }

    console.log(`
        ${JSON.stringify(req.session)}
    `)
    res.render("home.ejs", {
        loggedin: req.session.loggedin,
        email: req.session.email
    })
})

app.get("/login", (req, res) => {
    res.render("login.ejs", {
        loggedin: req.session.loggedin,
        email: req.session.email
    })
})

app.post("/login", (req, res) => {

    let info = req.body

    Model.User.findOne({
        where: {
            email: info.email
        }
    })
    .then(user => {
        if(!user) {
            res.render("print_msg.ejs", {
                msg: "Email not registered",
                loggedin: req.session.loggedin,
                email: req.session.email
            })
            return
        }
        console.log(`
            email: ${info.email}
            password: ${info.password}
            user.password: ${user.password}
            user: ${user}
        `)
        if(bcrypt.compareSync(info.password, user.password)) {


            req.session.email = info.email;
            req.session.password = info.password;
            req.session.loggedin = true;

            console.log(`
            ${JSON.stringify(req.session)}
            `)

            res.render("print_msg.ejs", {
                msg: "Login Success",
                loggedin: req.session.loggedin,
                email: req.session.email
            })
        }
        else {
            res.render("print_msg.ejs", {
                msg: "Login Failed",
                loggedin: req.session.loggedin,
                email: req.session.email
            })
        }
    })
})

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})

app.get("/register", (req, res) => {
    res.render("register.ejs", {
        loggedin: req.session.loggedin,
        email: req.session.email
    })
})

app.post("/register", (req, res) => {

    let info = req.body

    Model.User.create({
        name: info.name,
        email: info.email,
        password: info.password,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(() => {
        res.render("print_msg.ejs", {
            msg: "Successfully registered",
            loggedin: req.session.loggedin,
            email: req.session.email
        })
    })
    .catch(err => {res.send(err)})

})

app.get("/topics", (req, res) => {
    res.render("topics.ejs", {
        loggedin: req.session.loggedin,
        email: req.session.email
    })
})

app.post("/topics/:topic", (req, res) => {
    let topic = req.params.topic
    Model.Topic.findOne()
    res.render("topics.ejs", {
        loggedin: req.session.loggedin,
        email: req.session.email
    })
})

app.get("/leaderboard", (req, res) => {
    res.render("leaderboard.ejs", {
        loggedin: req.session.loggedin,
        email: req.session.email
    })
})

app.get("/account", (req, res) => {
    res.render("account.ejs", {
        loggedin: req.session.loggedin,
        email: req.session.email
    })
})

app.get("/quiz/:id", (req, res) => {
    let qid = req.params.id
    Model.Question.findAll({
        where:{
            TopicId: qid
        },
        include: [{model: Model.Answer}]
    })
    .then(data => {
        // res.send(data)
        res.render("quiz.ejs", {
            data:data,
            qid:qid,
            loggedin: req.session.loggedin,
            email: req.session.email
        })
    })
})

app.post("/quiz/:id", (req, res) => {
  let qid = req.params.id
  totalScore(req.body,qid)
  .then(score=>{
    return Model.UserTopic.create({
      UserId:2,
      TopicId:qid,
      score:score,
      createdAt:new Date,
      updatedAt:new Date,
    })
  })
  .then(data=>{
    res.redirect("/quiz?result=" + score)
  })
  .catch(err=>{
    res.send(err)
  })
  // res.send(req.body,req.params.id)
  
})

app.post("/cname", (req, res) => {
    Model.User.update({name: req.body.newname}, {
        where: {
            email: req.session.email
        }
    })
    .then(() => {
        res.render("print_msg.ejs", {
            msg: `Successfully Updated Name for: ${req.session.email}`,
            loggedin: req.session.loggedin,
            email: req.session.email
        })
    })
    .catch(err=>{
        res.send(err)
    })

})

app.post("/cpassword", (req, res) => {
    Model.User.findOne({
        where: {
            email: req.session.email
        }
    })
    .then(user => {
        if(bcrypt.compareSync(req.body.oldpassword, user.password)) {
            req.session.loggedin = true;

            let newpass = {
                password: req.body.newpassword
            }

            Model.User.update(newpass, {
                where: {
                    email: req.session.email
                }
            })
            .then(() => {
                res.render("print_msg.ejs", {
                    msg: `Successfully Changed Password for: ${req.session.email}`,
                    loggedin: req.session.loggedin,
                    email: req.session.email
                })
            })
            .catch(err=>{
                res.send(err)
            })
        
        }
        else {
            res.render("print_msg.ejs", {
                msg: "Old password is incorrect",
                loggedin: req.session.loggedin,
                email: req.session.email
            })
        }
    })  
})

app.post("/delete", (req, res) => {
    Model.User.destroy({
        where: {
            email: req.session.email.toString()
        }
    })
    .then(() => {
        req.session.destroy();
        res.render("print_msg.ejs", {
            msg: "Account destroyed",
            loggedin: false,
            email: null
        })
    })
    .catch(err=>{
        res.send(err)
    })
})  

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))