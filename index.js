// ********************* Cached elements references ********************* //
const startButton = document.querySelector('#start-btn')
const difficultyDropdown = document.querySelector('#difficulty')

// ************************** Methods ************************** //
const getUserInput = () => {
  const difficulty = difficultyDropdown.value
  location.href = `./result.html?difficulty=${difficulty}`
}

// ************************** Events ************************** //
startButton.addEventListener('click', getUserInput)
