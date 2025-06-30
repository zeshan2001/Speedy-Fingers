import Level from './level.js'
// ************************* Play Class *************************** //
class Play extends Level {
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
}
