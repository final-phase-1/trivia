let json = {
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who created the digital distribution platform Steam?",
      "correct_answer": "Valve",
      "incorrect_answers": [
        "Pixeltail Games",
        "Ubisoft",
        "Electronic Arts"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the name of the main healing item in Dark Souls?",
      "correct_answer": "Estus Flask",
      "incorrect_answers": [
        "Health Potion",
        "Orange Juice",
        "Ashen Flask"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Tomb Raider icon Lara Croft was originally called...",
      "correct_answer": "Laura Cruz",
      "incorrect_answers": [
        "Laura Craft",
        "Laura Croft",
        "Lara Craft"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In the first game of the Sly Cooper franchise, what family heirloom did Sly Cooper want to steal back?",
      "correct_answer": "Thievius Raccoonus",
      "incorrect_answers": [
        "Raccoon Training 101",
        "The Art of Sneak",
        "Raccoonus Teachus"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Gordon Freeman is said to have burnt and destroyed what food in the break room microwave?",
      "correct_answer": "Casserole",
      "incorrect_answers": [
        "Sub Sandwich",
        "Chicken Soup",
        "Pepperoni Pizza"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who is the protagonist in Dead Rising (2006)?",
      "correct_answer": "Frank West",
      "incorrect_answers": [
        "Chuck Greene",
        "John North",
        "Jason Grey"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who is the main protagonist of Dead Space?",
      "correct_answer": "Isaac Clarke",
      "incorrect_answers": [
        "Commander Shepard",
        "Gordon Freeman",
        "Master Chief"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of these is NOT a playable character in Left 4 Dead?",
      "correct_answer": "Nick",
      "incorrect_answers": [
        "Louis",
        "Zoey",
        "Bill"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who is the leader of Team Mystic in Pok&eacute;mon Go?",
      "correct_answer": "Blanche",
      "incorrect_answers": [
        "Candela",
        "Spark",
        "Willow"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In the video game Overwatch, which playable character is infamous for saying Its high noon.?",
      "correct_answer": "McCree",
      "incorrect_answers": [
        "Hanzo",
        "Pharah",
        "Soldier: 76"
      ]
    }
  ]
}

json.results = json.results.map((obj, i) => {
  return {
    topic: obj.category,
    question: obj.question,
    answer: [
      obj.correct_answer, ...obj.incorrect_answers]
  }
})

module.exports = json.results
