function rateScore(score){
  let rating = ""
  if(score <= 20) rating = "YOU SUCK!!!"
  else if(21 <= score && score <= 40) rating = "TRY AGAIN!!!"
  else if(41 <= score && score <= 60) rating = "YOU SUCK!!!"
  else if(61 <= score && score <= 80) rating = "YOU SUCK!!!"
  else rating = "YOU SUCK!!!"
  return rating
}

module.exports = rateScore