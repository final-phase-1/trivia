const json = {
  "response_code": 0,
  "results": [
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which German field marshal was known as the `Desert Fox`?",
      "correct_answer": "Erwin Rommel",
      "incorrect_answers": [
        "Ernst Busch",
        "Wolfram Freiherr von Richthofen",
        "Wilhelm List"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In what year did the Wall Street Crash take place?",
      "correct_answer": "1929",
      "incorrect_answers": [
        "1932",
        "1930",
        "1925"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which one of these tanks was designed and operated by the United Kingdom?",
      "correct_answer": "Tog II",
      "incorrect_answers": [
        "M4 Sherman",
        "Tiger H1",
        "T-34"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "During WWII, in 1945, the United States dropped atomic bombs on the two Japanese cities of Hiroshima and what other city?",
      "correct_answer": "Nagasaki",
      "incorrect_answers": [
        "Kawasaki",
        "Tokyo",
        "Kagoshima"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The collapse of the Soviet Union took place in which year?",
      "correct_answer": "1991",
      "incorrect_answers": [
        "1992",
        "1891",
        "1990"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In which year did the Invasion of Kuwait by Iraq occur?",
      "correct_answer": "1990",
      "incorrect_answers": [
        "1992",
        "1988",
        "1986"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of the following countries was not an axis power during World War II?",
      "correct_answer": " Soviet Union",
      "incorrect_answers": [
        "Italy",
        "Germany",
        "Japan"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In 1939, Britain and France declared war on Germany after it invaded which country?",
      "correct_answer": "Poland",
      "incorrect_answers": [
        "Czechoslovakia",
        "Austria",
        "Hungary"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?",
      "correct_answer": "The Polish President",
      "incorrect_answers": [
        "Pope John Paul II",
        "Bang-Ding Ow",
        "Albert Putin"
      ]
    },
    {
      "category": "History",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which country was Josef Stalin born in?",
      "correct_answer": "Georgia",
      "incorrect_answers": [
        "Russia",
        "Germany",
        "Poland"
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
