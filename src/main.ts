import './style.css'

const teamOneName = document.querySelector('.team1 h2')
const teamOneInput = document.querySelector('.team1 input')

function handleInput(event: Event) {
  const targetElement = event.target

  if (targetElement instanceof HTMLInputElement) {
    const teamOneInputName = targetElement.value
    if (teamOneName) {
      teamOneName.textContent = teamOneInputName
    }
  }
}

teamOneInput?.addEventListener('input', handleInput)

let teamOneScore = 0
const teamOneScoreElement = document.querySelector('.team1 h3')
const teamOneAddButton = document.querySelector('.team1 .add')
const teamOneSubtractButton = document.querySelector('.team1 .subtract')

function handleTeamOneAdd(event: Event) {
  teamOneScore++

  if (teamOneScoreElement) {
    teamOneScoreElement.textContent = teamOneScore.toString()
  }
}

function handleTeamOneSubtract(event: Event) {
  teamOneScore--

  if (teamOneScoreElement) {
    teamOneScoreElement.textContent = teamOneScore.toString()
  }
}

teamOneAddButton?.addEventListener('click', handleTeamOneAdd)
teamOneSubtractButton?.addEventListener('click', handleTeamOneSubtract)
