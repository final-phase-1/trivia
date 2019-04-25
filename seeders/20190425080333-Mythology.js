'use strict';

const json = require("../seed_file/Mythology.js")
const Model = require("../models")

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return Model.Question.findAll()
      .then(all => {
        // console.log(all)
        let topic = [{
          name: json[0].topic,
          createdAt: new Date,
          updatedAt: new Date
        }]
        let question = json.map((obj, i) => {
          return {
            content: obj.question,
            TopicId: 5,
            createdAt: new Date,
            updatedAt: new Date
          }
        })
        let answers = []
        json.forEach((obj, i) => {
          obj.answer.forEach((jawaban, j) => {
            let ret = {
              content: jawaban,
              QuestionId: all.length + i + 1,
              createdAt: new Date,
              updatedAt: new Date
            }
            if (j == 0) ret.correct = true
            else ret.correct = false
            answers.push(ret)
          })
        })

        return Promise.all([
          queryInterface.bulkInsert('Topics', topic, {}),
          queryInterface.bulkInsert('Questions', question, {}),
          queryInterface.bulkInsert('Answers', answers, {})
        ])
      })
      .catch(err => {
        console.log(err)
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
