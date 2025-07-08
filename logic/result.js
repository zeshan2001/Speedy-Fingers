import Play from './play.js'
import Dummy from './dummy.js'
// ********************* Global variables ********************* //
// source: https://www.shecodes.io/athena/27074-understanding-window-location-search-and-urlsearchparams-in-javascript
const extractPara = new URLSearchParams(location.search)
const difficulty = extractPara.get('difficulty')
const DummyData = new Dummy()
const PlayObj = new Play(difficulty, 1)
PlayObj.setEasyLevel(DummyData.easy)
PlayObj.setMedLevel(DummyData.medium)
PlayObj.setHardLevel(DummyData.hard)
let currentPassage = PlayObj.randomSentence()
let started = false
let correctedChars = 0
let interval = null

// ********************* Cached elements references ********************* //
const passageEl = document.querySelector('#passage')
const inputEl = document.querySelector('#input')
const timeEl = document.querySelector('#time')
const levelE = document.querySelector('#level')
const speedWPMEl = document.querySelector('#speed-wpm')
const accuracyEl = document.querySelector('#accuracy')
const resetEl = document.querySelector('#restart')

// ********************* Methods ********************* //
// source: https://docs.vultr.com/javascript/examples/create-countdown-timer
const startTimer = (minutes) => {
  const targetDate = new Date().getTime() + 1000 * 60 * minutes

  const updateTimer = () => {
    const now = new Date().getTime()
    const difference = targetDate - now
    if (difference < 0) {
      timeEl.innerHTML = 'STOP'
      inputEl.disabled = true
      clearInterval(interval)
      return
    }
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)
    timeEl.innerText = `${minutes}:${seconds}`
  }
  interval = setInterval(updateTimer, 1000)
}

const render = () => {
  const userInput = inputEl.value
  let highlighted = ''
  correctedChars = 0
  for (let i = 0; i < currentPassage.length; i++) {
    if (userInput[i] == null) {
      highlighted += `<span>${currentPassage[i]}</span>`
    } else if (userInput[i] === currentPassage[i]) {
      highlighted += `<span class="correct">${currentPassage[i]}</span>`
      correctedChars++
    } else {
      highlighted += `<span class="incorrect">${currentPassage[i]}</span>`
    }
  }
  passageEl.innerHTML = highlighted
}

const updateResults = () => {
  const wordsTyped = inputEl.value.trim().split(/\s+/).length
  levelE.innerText = PlayObj.getLevel()
  speedWPMEl.innerText = PlayObj.calculateSpeedWPM(
    wordsTyped,
    PlayObj.getTime()
  )
  accuracyEl.innerText = `${
    PlayObj.calculateAccuracy(correctedChars, inputEl.value.length) || 0
  }%`
}

const reset = () => {
  inputEl.value = ''
  currentPassage = PlayObj.randomSentence()
  render()
  clearInterval(interval)
  started = false
  inputEl.disabled = false
  timeEl.innerText = `0:60`
  levelE.innerText = PlayObj.getLevel()
  speedWPMEl.innerText = 0
  accuracyEl.innerText = `0%`
}

const userTyping = () => {
  if (!started) {
    startTimer(PlayObj.getTime())
    started = true
  }

  render()
  updateResults()

  if (inputEl.value.length >= currentPassage.length) {
    clearInterval(interval)
    inputEl.disabled = true
  }
}

// ********************* Events ********************* //
inputEl.addEventListener('input', userTyping)
resetEl.addEventListener('click', reset)
addEventListener('load', () => {
  render()
  reset()
})
