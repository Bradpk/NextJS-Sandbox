'use client';
import React, { useState } from 'react';

function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');

  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Draw';
    }
  
    if (userChoice === 'rock') {
      return computerChoice === 'scissors' ? 'You Won!' : 'Computer Won!';
    }
  
    if (userChoice === 'paper') {
      return computerChoice === 'rock' ? 'You Won!' : 'Computer Won!';
    }
  
    if (userChoice === 'scissors') {
      return computerChoice === 'paper' ? 'You Won!' : 'Computer Won!';
    }
  };

  const playGame = () => {
    const computerChoice = getComputerChoice();
    const gameResult = determineWinner(userChoice, computerChoice);
    setResult(gameResult);
  };

  return (
    <>
      <p>Rock Paper Scissors</p>
      <p>Type Rock, Paper, or Scissors:</p>
      <input
        value={userChoice}
        onChange={(e) => setUserChoice(e.target.value.toLowerCase())}
      />
      <button onClick={playGame}>Shoot!</button>
      <p>You chose: {userChoice} | Computer Chose {getComputerChoice()}</p>
      <p>{result}</p>
    </>
  );
}

export default RockPaperScissors;


// Look at this tommorow its all fucked up 