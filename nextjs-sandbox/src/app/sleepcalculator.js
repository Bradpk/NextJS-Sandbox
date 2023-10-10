'use client';
import {useState} from "react";

function SleepCalculator () {
    const [getSleepHours, setGetSleepHours] = useState('');

    const handleChange = (event) => {
        setGetSleepHours(event.target.value)
    }
  
  const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
  }
  
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getSleepHours
    let idealSleepHours = getIdealSleepHours()
  
    if(actualSleepHours == idealSleepHours){
      return('Perfect amount of sleep')
    } else if (actualSleepHours > idealSleepHours) {
      return('You overslept by ' + (actualSleepHours - idealSleepHours) + ' hours')
    } else if(actualSleepHours < idealSleepHours) {
      return('You need ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep')
    }
  }
  
  console.log(calculateSleepDebt())



return (
    <>
    <p>Sleep Debt Calculator</p>
    <p>Enter total hours of sleep per week</p>
    <input onChange={handleChange} value={getSleepHours}></input>
    <button onClick={calculateSleepDebt}>Calculate</button>
    <p>{calculateSleepDebt()}</p>
    </>
)}

export default SleepCalculator;

