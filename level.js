// ************************* Level Class *************************** //
export default class Level {
  constructor(difficulty) {
    this.difficulty = difficulty
    this.easySentences = [
      'this is',
      'what is this',
      'can you beat me',
      'na na na'
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
}
