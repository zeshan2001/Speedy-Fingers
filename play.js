import Level from './level.js'
// ************************* Play Class *************************** //
export default class Play extends Level {
  constructor(difficulty, time) {
    super(difficulty)
    this.time = time
    this.speedWPM = 0
    this.accuracy = 0
  }

  // ************************ Setters ************************ //
  setTime(time) {
    this.time = time
  }
  setSpeedWPM(speedWPM) {
    this.speedWPM = speedWPM
  }
  setAccuracy(accuracy) {
    this.accuracy = accuracy
  }

  // ************************ Getters ************************ //
  getTime() {
    return this.time
  }
  getspeedWPM() {
    return this.speedWPM
  }
  getAccuracy() {
    return this.accuracy
  }

  // ************************ Methods ************************ //
  timeCountDown() {
    let time = this.time
    let timerID
    const timer = () => {
      console.log(time) // display the timer
      time--
      if (time === 0) clearInterval(timerID)
    }
    timerID = setInterval(timer, 1000) //starts timer
  }

  //   const timeCountDown = (minutes) => {
  //   let id
  //   let min = minutes
  //   let sec = 0
  //   const timer = () => {
  //     if (min === 0 && sec === 0) {
  //       clearInterval(id) // end timer
  //     } else {
  //       if (sec === 0) {
  //         min--
  //         sec = 60
  //       }
  //       sec--
  //       console.log(`${min}:${sec}`) // console 1:59
  //       timeElement.innerText = `${min}:${sec}`
  //     }
  //   }

  //   id = setInterval(timer, 1000) // start timer
  // }

  // calculateSpeedWPM(countCorrectedWords, timeInMinutes) {
  //   return countCorrectedWords / timeInMinutes
  // }

  countCorrectedChars(userCharList, randomCharList) {
    let count = 0
    userCharList.forEach((el, index) => {
      if (el === randomCharList[index]) {
        count++
      }
    })
    return count
  }
  calculateSpeedWPM(countCorrectedChars, timeInMinutes) {
    // console.log(countCorrectedChars / 5)
    return Math.floor((countCorrectedChars / 5 / timeInMinutes) * 10) / 10
    // return countCorrectedChars / 5 / timeInMinutes
  }

  calculateAccuracy(countCorrectedChars, totalChars) {
    // return (countCorrectedChars / totalChars) * 100
    return Math.floor((countCorrectedChars / totalChars) * 100 * 10) / 10
  }
}
