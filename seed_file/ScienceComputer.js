let json = {
  "response_code": 0,
  "results": [
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What does CPU stand for?",
      "correct_answer": "Central Processing Unit",
      "incorrect_answers": [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
      "correct_answer": "1000",
      "incorrect_answers": [
        "512",
        "1024",
        "500"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which computer hardware device provides an interface for all other connected devices to communicate?",
      "correct_answer": "Motherboard",
      "incorrect_answers": [
        "Central Processing Unit",
        "Hard Disk Drive",
        "Random Access Memory"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What does the Prt Sc button do?",
      "correct_answer": "Captures whats on the screen and copies it to your clipboard",
      "incorrect_answers": [
        "Nothing",
        "Saves a .png file of whats on the screen in your screenshots folder in photos",
        "Closes all windows"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
      "correct_answer": "HD Graphics 500",
      "incorrect_answers": [
        "HD Graphics 700 ",
        "HD Graphics 600",
        "HD Graphics 7000"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the most preferred image format used for logos in the Wikimedia database?",
      "correct_answer": ".svg",
      "incorrect_answers": [
        ".png",
        ".jpeg",
        ".gif"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "How many kilobytes in one gigabyte?",
      "correct_answer": "1000000",
      "incorrect_answers": [
        "1024",
        "1000",
        "1048576"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which computer language would you associate Django framework with?",
      "correct_answer": "Python",
      "incorrect_answers": [
        "C#",
        "C++",
        "Java"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What does LTS stand for in the software market?",
      "correct_answer": "Long Term Support",
      "incorrect_answers": [
        "Long Taco Service",
        "Ludicrous Transfer Speed",
        "Ludicrous Turbo Speed"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The numbering system with a radix of 16 is more commonly referred to as ",
      "correct_answer": "Hexidecimal",
      "incorrect_answers": [
        "Binary",
        "Duodecimal",
        "Octal"
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
