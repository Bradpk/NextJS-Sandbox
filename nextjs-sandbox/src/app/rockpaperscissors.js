'use client';
import { useState } from 'react';

function RockPaperScissors() {
  const [userInput, setUserInput] = useState('');
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value.toLowerCase());
  }

  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Not a valid option, must choose rock, paper or scissors');
      return null;
    }
  }

  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'rock'; 
    }
  }

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Draw';
    }
    if (userChoice === 'paper') {
      return computerChoice === 'rock' ? 'You Won!' : 'Computer Won!';
    }
    if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'Computer Won!' : 'You Won!';
    }
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'Computer Won!' : 'You Won!';
    }
  }

  const playGame = () => {
    const userChoice = getUserChoice(userInput);
    if (!userChoice) return; 

    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    setComputerChoice(computerChoice);
    setResult(winner);
  }

  return (
    <>
      <p>Rock Paper Scissors</p>
      <input onChange={handleInputChange} value={userInput}></input>
      <button onClick={playGame} onKeyPress={playGame}>Shoot!</button>
      {computerChoice && <p>Computer threw: {computerChoice}</p>}
      {result && <p>{result}</p>}
    </>
  );
}

export default RockPaperScissors;