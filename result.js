import Play from './play.js'
// ********************* Global variables ********************* //
const extractPara = new URLSearchParams(location.search)
const time = extractPara.get('time')
const difficulty = extractPara.get('difficulty')
let randomCharList = []
let userCharList = []

const playObj = new Play(difficulty, parseInt(time))

// ********************* Cached elements references ********************* //
const timeElement = document.querySelector('#time')
const levelElement = document.querySelector('#level')
const randomTextElement = document.querySelector('#check-text').innerText
const userTextElement = document.querySelector('#typing-test')

timeElement.innerText = playObj.getTime()
levelElement.innerText = playObj.getLevel()
randomCharList = randomTextElement.split('')

// ********************* Methods ********************* //
const compareChars = (charList) => {
  let isCharsEqual
  isCharsEqual = charList.map((el, index) => {
    return el === randomCharList[index]
  })
  return isCharsEqual
}

const incorrectedChars = (charList) => {
  let incorrectedChars

  incorrectedChars = charList.map((char, index) => {
    return char === randomCharList[index] ? char : ''
  })
  return incorrectedChars
}

const userTyping = () => {
  let boolCharsList, incorrectCharsList
  userCharList = userTextElement.value.split('')

  boolCharsList = compareChars(userCharList)
  incorrectCharsList = incorrectedChars(userCharList)

  console.log(boolCharsList)
  console.log(incorrectCharsList)
}

// ********************* Events ********************* //
userTextElement.addEventListener('keyup', userTyping)
