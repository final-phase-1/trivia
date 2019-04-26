const express = require("express")
const app = express()
const path = require("path")
const PORT = 3001
const Model = require("./models")
const totalScore = require("./helpers/totalScore.js")
const rateScore = require("./helpers/rateScore")

// const User = require("./models").User
// const UserTopic = require("./models").UserTopic
// const Topic = require("./models").Topic
// const Question = require("./models").Question
// const Answer = require("./models").Answer

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public"))) //Set static folder

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

app.get("/topics", (req, res) => {
  Model.Topic.findAll()
  .then(allData=>{
    res.render("topics.ejs",{topics:allData})
  })
  .catch(err=>{
    res.send(err)
  })
})

// app.post("/topics/:topic", (req, res) => {
//   let topic = req.params.topic
//   res.render("topics.ejs")
// })

app.get("/leaderboard", (req, res) => {
  Model.UserTopic.findAll({
    group: ['score'],
    include:[
      {model:Model.User},
      {model:Model.Topic}
    ],
    // attributes: ['User.name','Topic.name','UserTopic.score'],
    
  // order: ["TopicId"]
  })
  .then(allData=>{
    console.log(allData)
    let obj = {}
    if(req.query.result){
      obj = {
        leader: allData,
        rating: rateScore(req.query.result),
        result: req.query.result
      }
    }
    res.render("leaderboard.ejs",obj)
  })
  .catch(err=>{
    res.send(err)
  })
    
})

app.get("/account", (req, res) => {
    res.render("account.ejs")
})

app.get("/quiz/:id", (req, res) => {
    let qid = req.params.id
    Model.Question.findAll({
      where:{TopicId:qid},
      include: [{model: Model.Answer}]
    })
    .then(data=>{
      // res.send(data)
      res.render("quiz.ejs",{data:data,qid:qid})
    })
    .catch(err=>{
      res.send(err)
    })
})

app.post("/quiz/:id", (req, res) => {
  let qid = req.params.id
  let score
  totalScore(req.body,qid)
  .then(scored=>{
    score = scored
    return Model.User.findOne({where:{email:req.session.email}})
  })
  .then(found=>{
    return Model.UserTopic.create({
      UserId:found.id,
      TopicId:qid,
      score:scored,
      createdAt:new Date,
      updatedAt:new Date,
    })
  })
  .then(()=>{
    console.log("LALNCUABUCBUIZBBBZIBCZICBZIU")
    res.redirect("/leaderboard?result="+score)
  })
  .catch(err=>{
    res.send(err)
  })
  // res.send(req.body,req.params.id)
  
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))