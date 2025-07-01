// ************************** Global Variables ************************** //

// ********************* Cached elements references ********************* //
const startButton = document.querySelector('#start-btn')
const timeDropdown = document.querySelector('#time')
const difficultyDropdown = document.querySelector('#difficulty')

// ************************** Methods ************************** //
const getUserInput = () => {
  const time = timeDropdown.value
  const difficulty = difficultyDropdown.value
  location.href = `./result.html?time=${time}&difficulty=${difficulty}`
}

// ************************** Events ************************** //
startButton.addEventListener('click', getUserInput)
