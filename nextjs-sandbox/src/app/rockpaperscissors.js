'use client';
import React, { useState } from 'react';

function RockPaperScissors() {
    const getUserChoice = userInput => {
        userInput = userInput.toLowerCase();
        if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors'){
          return userInput 
        } else {
          console.log('Not a valid option, must choose rock, paper or scissors')
        }
        }
        
        const getComputerChoice = () => {
        let randomNumber = Math.floor(Math.random() * 3);
        switch(randomNumber) {
          case 0:
          return 'rock';
          break;
          case 1:
          return 'paper';
          break;
          case 2:
          return 'scissors'
          break;
        }
        }
        
        const determineWinner = (userChoice, computerChoice) => {
          if (userChoice === computerChoice){
            return 'Draw'
          } 
          if (userChoice === 'paper'){
            if(computerChoice === 'rock'){
              return 'You Won!'
            } else {
              return 'Computer Won!'
            }
          }
          if (userChoice === 'scissors'){
            if (computerChoice ==='rock'){
              return 'Computer Won!'
            } else {
              return 'You Won!'
            }
          }
          if(userChoice === 'rock'){
            if(computerChoice === 'paper'){
              return 'Computer Won!'
            } else {
              return 'You Won!'
            }
          }
        }
        
        const playGame = () => {
          let userChoice = getUserChoice('rock')
          let computerChoice = getComputerChoice()
          console.log(userChoice)
          console.log(computerChoice)
          console.log(determineWinner(userChoice, computerChoice))
        }
        
        playGame()
}

export default RockPaperScissors;


// Convert this vanilla js to next.js on tuesday