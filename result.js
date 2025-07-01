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
const userTextElement = document.querySelector('#typing-test')

// ********************* Methods ********************* //
timeElement.innerText = playObj.getTime()
levelElement.innerText = playObj.getLevel()

for (let i = 0; i < randomTextElement.length; i++) {
  randomCharList[i] = randomTextElement[i]
}

// randomCharList.forEach((el) => {
//   console.log(el)
// })
const type = () => {}

// ********************* Events ********************* //
userTextElement.addEventListener('keyup', type)
