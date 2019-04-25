let json = {
  "response_code": 0,
  "results": [
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the most common surname Wales?",
      "correct_answer": "Jones",
      "incorrect_answers": [
        "Williams",
        "Davies",
        "Evans"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What word represents the letter T in the NATO phonetic alphabet?",
      "correct_answer": "Tango",
      "incorrect_answers": [
        "Target",
        "Taxi",
        "Turkey"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Red Vines is a brand of what type of candy?",
      "correct_answer": "Licorice",
      "incorrect_answers": [
        "Lollipop",
        "Chocolate",
        "Bubblegum"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is on display in the Madame Tussauds museum in London?",
      "correct_answer": "Wax sculptures",
      "incorrect_answers": [
        "Designer clothing",
        "Unreleased film reels",
        "Vintage cars"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of these colours is NOT featured in the logo for Google?",
      "correct_answer": "Pink",
      "incorrect_answers": [
        "Yellow",
        "Blue",
        "Green"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Five dollars is worth how many nickles?",
      "correct_answer": "100",
      "incorrect_answers": [
        "50",
        "25",
        "69"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which American-owned brewery led the country in sales by volume in 2015?",
      "correct_answer": "D. G. Yuengling and Son, Inc",
      "incorrect_answers": [
        "Anheuser Busch",
        "Boston Beer Company",
        "Miller Coors"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What machine element is located in the center of fidget spinners?",
      "correct_answer": "Bearings",
      "incorrect_answers": [
        "Axles",
        "Gears",
        "Belts"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of the following presidents is not on Mount Rushmore?",
      "correct_answer": "John F. Kennedy",
      "incorrect_answers": [
        "Theodore Roosevelt",
        "Abraham Lincoln",
        "Thomas Jefferson"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is Tasmania?",
      "correct_answer": "An Australian State",
      "incorrect_answers": [
        "A flavor of Ben and Jerrys ice-cream",
        "A Psychological Disorder",
        "The Name of a Warner Brothers Cartoon Character"
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
