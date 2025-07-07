import Play from './play.js'
import Dummy from './dummy.js'
// ********************* Global variables ********************* //
const extractPara = new URLSearchParams(location.search)
const difficulty = extractPara.get('difficulty')
const dummyData = new Dummy()
const playObj = new Play(difficulty, 1)
playObj.setEasyLevel(dummyData.easy)
playObj.setMedLevel(dummyData.medium)
playObj.setHardLevel(dummyData.hard)
let currentPassage = playObj.randomSentence()
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
  levelE.innerText = playObj.getLevel()
  speedWPMEl.innerText = playObj.calculateSpeedWPM(
    wordsTyped,
    playObj.getTime()
  )
  accuracyEl.innerText = `${
    playObj.calculateAccuracy(correctedChars, inputEl.value.length) || 0
  }%`
}

const reset = () => {
  inputEl.value = ''
  currentPassage = playObj.randomSentence()
  render()
  clearInterval(interval)
  started = false
  inputEl.disabled = false
  timeEl.innerText = `0:60`
  levelE.innerText = playObj.getLevel()
  speedWPMEl.innerText = 0
  accuracyEl.innerText = `0%`
}

const userTyping = () => {
  if (!started) {
    startTimer(playObj.getTime())
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
