// ************************* Play Class *************************** //
export default class Play {
  constructor(difficulty, time) {
    this.difficulty = difficulty
    this.time = time
    this.easySentences = []
    this.mediumSentences = []
    this.hardSentences = []
  }

  // ************************ Setters ************************ //
  setLevel(difficulty) {
    this.difficulty = difficulty
  }
  setTime(time) {
    this.time = time
  }
  setEasyLevel(easySentences) {
    this.easySentences = easySentences
  }
  setMedLevel(mediumSentences) {
    this.mediumSentences = mediumSentences
  }
  setHardLevel(hardSentences) {
    this.hardSentences = hardSentences
  }

  // ************************ Getters ************************ //
  getLevel() {
    return this.difficulty
  }
  getTime() {
    return this.time
  }

  getEasyLevel() {
    return this.easySentences
  }
  getMedLevel() {
    return this.mediumSentences
  }
  getHardLevel() {
    return this.hardSentences
  }

  // ************************ Methods ************************ //
  randomSentence() {
    if (this.difficulty === 'easy') {
      let index = Math.floor(Math.random() * this.easySentences.length)
      return this.easySentences[index]
    } else if (this.difficulty === 'medium') {
      let index = Math.floor(Math.random() * this.mediumSentences.length)
      return this.mediumSentences[index]
    } else if (this.difficulty === 'hard') {
      let index = Math.floor(Math.random() * this.hardSentences.length)
      return this.hardSentences[index]
    } else {
      return null
    }
  }

  calculateSpeedWPM(countTypedWords, timeInMinutes) {
    return Math.round(countTypedWords / timeInMinutes)
  }

  calculateAccuracy(countCorrectedChars, totalChars) {
    return Math.round((countCorrectedChars / totalChars) * 100)
  }
}
