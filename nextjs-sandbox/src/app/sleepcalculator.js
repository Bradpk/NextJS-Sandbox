'use client';
import {useState} from "react";

function SleepCalculator () {
const getSleepHours = (day) => {
    switch (day) {
      case'Monday':
      return 7
      break;
      case 'Tuesday':
      return 8
      break;
      case'Wednesday':
      return 9
      break;
      case 'Thursday':
      return 7
      break;
      case 'Friday':
      return 8 
      break; 
      case 'Saturday':
      return 9 
      break; 
      case 'Sunday':
      return 7
      break; 
      default:
      return 'Not Valid'
      break;
    }
  }
  
  const getActualSleepHours = () => 
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday') 
  
  
  const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
  }
  
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
  
    if(actualSleepHours === idealSleepHours){
      console.log('Perfect amount of sleep')
      
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You overslept by ' + (actualSleepHours - idealSleepHours) + ' hours')
    } else if(actualSleepHours < idealSleepHours) {
      console.log('You need ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep')
    }
  }
  
  console.log(calculateSleepDebt())



return (
    <>
    <p>Sleep Debt Calculator</p>
    <p>Week Goal: 56 hours of sleep</p>
    <input></input>
    <button></button>
    <p></p>
    </>
)}

export default SleepCalculator;



  //convert this to react