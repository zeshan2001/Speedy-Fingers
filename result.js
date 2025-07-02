import Play from './play.js'
// ********************* Global variables ********************* //
const extractPara = new URLSearchParams(location.search)
const time = extractPara.get('time')
const difficulty = extractPara.get('difficulty')
let randomCharList = []

const playObj = new Play(difficulty, parseInt(time))

// ********************* Cached elements references ********************* //
const timeElement = document.querySelector('#time')
const levelElement = document.querySelector('#level')
const randomTextElement = document.querySelector('#check-text').innerText
let userTextElement = document.querySelector('#typing-test')
const highlightOutput = document.getElementById('highlight-output')

timeElement.innerText = playObj.getTime()
levelElement.innerText = playObj.getLevel()
randomCharList = randomTextElement.split('')

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

const userTyping = () => {
  const userCharList = userTextElement.value.split('')
  const highlighted = highlightChar(userCharList)
  console.log(highlighted)

  highlightOutput.innerHTML = highlighted.join('')
}

// ********************* Events ********************* //
userTextElement.addEventListener('input', userTyping)
