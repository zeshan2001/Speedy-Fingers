// Variables

const startButton = document.querySelector('#start-btn')
let difficulty

// Methods

// Events
startButton.addEventListener('click', () => {
  const timeDropdown = document.querySelector('#time').value
  const difficultyDropdown = document.querySelector('#difficulty').value

  console.log(timeDropdown)
  console.log(difficultyDropdown)
})
