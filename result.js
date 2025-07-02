import Play from './play.js'
// ********************* Global variables ********************* //
const extractPara = new URLSearchParams(location.search)
const time = extractPara.get('time')
const difficulty = extractPara.get('difficulty')
let randomCharList = []
let randomWordList = []

const playObj = new Play(difficulty, parseInt(time))

// ********************* Cached elements references ********************* //
const timeElement = document.querySelector('#time')
const levelElement = document.querySelector('#level')
const randomTextElement = document.querySelector('#check-text').innerText
const userTextElement = document.querySelector('#typing-test')
const highlightOutput = document.getElementById('highlight-output')

timeElement.innerText = playObj.getTime()
levelElement.innerText = playObj.getLevel()
randomCharList = randomTextElement.split('')
randomWordList = randomTextElement.split(' ')
console.log(randomCharList)

// ********************* Methods ********************* //

// const compareChars = (userCharList) => {
//   let isCharsEqual = userCharList.map((el, index) => {
//     return el === randomCharList[index]
//   })
//   return isCharsEqual
// }

const highlightChar = (userCharList) => {
  const highlighted = userCharList.map((char, index) => {
    if (char === randomCharList[index]) {
      return `<span style="color: green;">${char}</span>`
    } else {
      return `<span style="color: red;">${char || ' '}</span>`
    }
  })
  return highlighted
}

const countCorrectedWord = (wordList) => {
  let count = 0
  wordList.forEach((el, index) => {
    if (el === randomWordList[index]) {
      count++
    }
  })
  return count
}

const countCorrectedChars = (userCharList) => {
  let count = 0
  userCharList.forEach((el, index) => {
    if (el === randomCharList[index]) {
      count++
    }
  })
  return count
}

const userTyping = () => {
  const userCharList = userTextElement.value.split('')
  const highlighted = highlightChar(userCharList)
  const userWordList = userTextElement.value.split(' ')

  const countWords = countCorrectedWord(userWordList)
  const countChars = countCorrectedChars(userCharList)

  highlightOutput.innerHTML = highlighted.join('')
}

// ********************* Events ********************* //
userTextElement.addEventListener('input', userTyping)
