let json = {
  "response_code": 0,
  "results": [
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who was the only god from Greece who did not get a name change in Rome?",
      "correct_answer": "Apollo",
      "incorrect_answers": [
        "Demeter",
        "Zeus",
        "Athena"
      ]
    },
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?",
      "correct_answer": "Jason",
      "incorrect_answers": [
        "Castor",
        "Daedalus",
        "Odysseus"
      ]
    },
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "This Greek goddesss name was chosen for the dwarf planet responsible for discord on Plutos classification amongst astronomers.",
      "correct_answer": "Eris",
      "incorrect_answers": [
        "Charon",
        "Ceres",
        "Dysnomia"
      ]
    },
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who was the King of Gods in Ancient Greek mythology?",
      "correct_answer": "Zeus",
      "incorrect_answers": [
        "Apollo",
        "Hermes",
        "Poseidon"
      ]
    },
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which Greek &amp; Roman god was known as the god of music, truth and prophecy, healing, the sun and light, plague, poetry, and more?",
      "correct_answer": "Apollo",
      "incorrect_answers": [
        "Aphrodite",
        "Artemis",
        "Athena"
      ]
    },
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The greek god Poseidon was the god of what?",
      "correct_answer": "The Sea",
      "incorrect_answers": [
        "War",
        "Sun",
        "Fire"
      ]
    },
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which figure from Greek mythology traveled to the underworld to return his wife Eurydice to the land of the living?",
      "correct_answer": "Orpheus",
      "incorrect_answers": [
        "Hercules",
        "Perseus",
        "Daedalus"
      ]
    },
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In most traditions, who was the wife of Zeus?",
      "correct_answer": "Hera",
      "incorrect_answers": [
        "Aphrodite",
        "Athena",
        "Hestia"
      ]
    },
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of these mythological creatures is said to be half-man and half-horse?",
      "correct_answer": "Centaur",
      "incorrect_answers": [
        "Minotaur",
        "Pegasus",
        "Gorgon"
      ]
    },
    {
      "category": "Mythology",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What mythology did the god Apollo come from?",
      "correct_answer": "Greek and Roman",
      "incorrect_answers": [
        "Roman and Spanish",
        "Greek and Chinese",
        "Greek, Roman and Norse"
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
