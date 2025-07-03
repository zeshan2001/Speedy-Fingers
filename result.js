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
const randomTextElement = document.querySelector('#check-text').innerText
const userTextElement = document.querySelector('#typing-test')
const highlightOutput = document.querySelector('#highlight-output')

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
      userTextElement.readOnly = true
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
let startTimer = 1

const userTyping = () => {
  startTimer--
  if (startTimer === 0) {
    timeCountDown(playObj.getTime()) // timer
  }

  const userCharList = userTextElement.value.split('')
  const highlighted = highlightChar(userCharList)

  const countChars = countCorrectedChars(userCharList)
  let speedWPM = playObj.calculateSpeedWPM(countChars, playObj.getTime()) // speed
  let accuracy = playObj.calculateAccuracy(countChars, userCharList.length) // accuracy

  speedWPMElement.innerText = speedWPM || 0
  accuracyElement.innerText = accuracy || 0
  highlightOutput.innerHTML = highlighted.join('')
}

// ********************* Events ********************* //
userTextElement.addEventListener('input', userTyping)
