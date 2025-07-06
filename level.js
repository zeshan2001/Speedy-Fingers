// ************************* Level Class *************************** //
export default class Level {
  constructor(difficulty) {
    this.difficulty = difficulty
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
  setLevel(level) {
    this.difficulty = level
  }
  setEasySentences(easyList) {
    this.easySentences = easyList
  }
  setMediumSentences(mediumList) {
    this.mediumSentences = mediumList
  }
  setHardSentences(hardList) {
    this.hardSentences = hardList
  }

  // ************************ Getters ************************ //
  getLevel() {
    return this.difficulty
  }
  getEastSentences() {
    return this.easySentences
  }
  getMediumSentences() {
    return this.mediumSentences
  }
  getHardSentences() {
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
      console.log('something wrong happen when retrieving random sentences')
      return
    }
  }
}
