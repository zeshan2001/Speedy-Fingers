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

  calculateSpeedWPM(countCorrectedWords, timeInMinutes) {
    return countCorrectedWords / timeInMinutes
  }

  calculateAccuracy(countCorrectedChars, timeInMinutes) {
    return countCorrectedChars / timeInMinutes
  }
}
