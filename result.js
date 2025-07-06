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
const speedWPMElement = document.querySelector('#speed-wpm')
const accuracyElement = document.querySelector('#accuracy')
let randomTextElement = (document.querySelector('#check-text').innerText =
  playObj.randomSentence()) // random text
const userTextElement = document.querySelector('#typing-test')
const highlightOutput = document.querySelector('#highlight-output')

// randomTextElement = playObj.randomSentence()
timeElement.innerText = `${playObj.getTime()}:00`
levelElement.innerText = playObj.getLevel() // level
randomCharList = randomTextElement.split('')
randomWordList = randomTextElement.split(' ')

// ********************* Methods ********************* //

// https://docs.vultr.com/javascript/examples/create-countdown-timer
const timeCountDown = (minutes) => {
  const targetDate = new Date().getTime() + 1000 * 60 * minutes

  const updateTimer = () => {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference < 0) {
      userTextElement.setAttribute('contenteditable', 'false')
      timeElement.innerHTML = 'STOP'
      clearInterval(interval)
      return
    }

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    timeElement.innerText = `${minutes}:${seconds}`
  }

  let interval = setInterval(updateTimer, 1000)
}

const highlightChar = (userCharList) => {
  const highlighted = userCharList.map((char, index) => {
    if (char === randomCharList[index]) {
      return `<span style="color: green;">${randomCharList[index]}</span>`
    } else {
      return `<span style="color: red;">${randomCharList[index] || ' '}</span>`
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
// const countCorrectedChars = (userCharList) => {
//   let count = 0
//   userCharList.forEach((el, index) => {
//     if (el === randomCharList[index]) {
//       count++
//     }
//   })
//   return count
// }
let startTimer = 1

// ************ userTyping ************* //

const userTyping = () => {
  startTimer--
  if (startTimer === 0) {
    timeCountDown(playObj.getTime()) // timer
  }

  const userCharList = userTextElement.textContent.split('')

  const highlighted = highlightChar(userCharList)

  const correctedChars = playObj.countCorrectedChars(
    userCharList,
    randomCharList
  )
  let speedWPM = playObj.calculateSpeedWPM(correctedChars, playObj.getTime()) // speed
  let accuracy = playObj.calculateAccuracy(correctedChars, userCharList.length) // accuracy

  //Add remaining (untyped) chars as default color
  for (let i = userCharList.length; i < randomCharList.length; i++) {
    highlighted.push(`<span style="color: gray;">${randomCharList[i]}</span>`)
  }

  speedWPMElement.innerText = speedWPM || 0
  accuracyElement.innerText = accuracy || 0
  highlightOutput.innerHTML = highlighted.join('')
}

// ********************* Events ********************* //
addEventListener('load', () => {
  let highlighted = []
  for (let i = 0; i < randomCharList.length; i++) {
    highlighted.push(`<span style="color: gray;">${randomCharList[i]}</span>`)
  }
  highlightOutput.innerHTML = highlighted.join('')
})
userTextElement.addEventListener('input', userTyping)
