// ************************* Play Class *************************** //
export default class Play {
  constructor(difficulty, time) {
    this.difficulty = difficulty
    this.time = time
    this.easySentences = [
      'The quick brown fox jumps over the lazy dog.',
      'Typing tests are a fun way to improve your speed.',
      'Practice makes perfect when it comes to typing.',
      'JavaScript powers interactive web applications.',
      'Speedy Fingers helps you become a faster typist.'
    ]
    this.mediumSentences = ['djncdc fjvfunv', 'lllllllllllllll']
    this.hardSentences = ['dddddddddddddddddddddd', 'gggggggggggggggggggg']
  }

  // ************************ Setters ************************ //
  setLevel(difficulty) {
    this.difficulty = difficulty
  }
  setTime(time) {
    this.time = time
  }

  // ************************ Getters ************************ //
  getLevel() {
    return this.difficulty
  }
  getTime() {
    return this.time
  }

  // ************************ Methods ************************ //
  // calculateSpeedWPM(countCorrectedChars, timeInMinutes) {
  //   // console.log(countCorrectedChars / 5)
  //   return Math.floor((countCorrectedChars / 5 / timeInMinutes) * 10) / 10
  //   // return countCorrectedChars / 5 / timeInMinutes
  // }
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
      console.log('something wrong happen when retrieving random sentences')
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
