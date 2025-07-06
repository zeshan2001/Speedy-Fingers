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
  // calculateSpeedWPM(countCorrectedChars, timeInMinutes) {
  //   // console.log(countCorrectedChars / 5)
  //   return Math.floor((countCorrectedChars / 5 / timeInMinutes) * 10) / 10
  //   // return countCorrectedChars / 5 / timeInMinutes
  // }
  calculateSpeedWPM(countTypedWords, timeInMinutes) {
    return Math.round(countTypedWords / timeInMinutes)
  }

  calculateAccuracy(countCorrectedChars, totalChars) {
    return Math.round((countCorrectedChars / totalChars) * 100)
  }
}
