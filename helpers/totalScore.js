    
const Model = require("../models")

function totalScore(reqBody,TopicId){
  return Model.Question.findAll({where:{TopicId:TopicId},include:{model:Model.Answer}})
  .then(questions=>{
    let scores = 0
    questions = questions.reduce((objTotal,obj)=>{
      objTotal[obj.id] = obj
      return objTotal
    },{})
    // console.log(reqBody)
    for(let x in reqBody){
      if(x !== 'submit'){
        if(reqBody[x] == questions[x].Answers[0].content){
          scores += 10
        }
      }
    }
    // console.log(scores)
    return scores
  })
  .catch(err=>{
    console.log(err)
  })
  
  
}

module.exports = totalScore