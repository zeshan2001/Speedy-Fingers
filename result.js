import Play from './play.js'
// ********************* Global variables ********************* //
const extractPara = new URLSearchParams(location.search)
const time = extractPara.get('time')
const difficulty = extractPara.get('difficulty')
let currentPassage = 'Typing tests are a fun way to improve your speed.'
const playObj = new Play(difficulty, parseInt(time))

// ********************* Cached elements references ********************* //
const timeElement = document.querySelector('#time')
const levelElement = document.querySelector('#level')
const speedWPMElement = document.querySelector('#speed-wpm')
const accuracyElement = document.querySelector('#accuracy')

const passageEl = document.querySelector('#passage')
const inputEl = document.querySelector('#input')

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

const render = () => {
  const userInput = inputEl.value
  let highlighted = ''
  for (let i = 0; i < currentPassage.length; i++) {
    if (userInput[i] == null) {
      highlighted += `<span>${currentPassage[i]}</span>`
    } else if (userInput[i] === currentPassage[i]) {
      highlighted += `<span class="correct">${currentPassage[i]}</span>`
    } else {
      highlighted += `<span class="incorrect">${currentPassage[i]}</span>`
    }
  }
  passageEl.innerHTML = highlighted
}

// ************ userTyping ************* //

const userTyping = () => {
  render()
}

// ********************* Events ********************* //
inputEl.addEventListener('input', userTyping)
