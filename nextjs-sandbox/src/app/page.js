import Image from 'next/image'
import styles from './page.module.css'
import Weather from './weather'
import DogYears from './dogyears'
import Eightball from './eightball'
import RockPaperScissors from './rockpaperscissors'
import SleepCalculator from './sleepcalculator'
import Experiment from './experiment'
import ApiTest from './api'


export default function Home() {
  return (
    <>
      <br></br>
      <br></br>
      <Weather />
      <br></br>
      <br></br>
      <DogYears />
      <br></br>
      <br></br>
      <Eightball />
      <br></br>
      <br></br>
      <RockPaperScissors />
      <br></br>
      <br></br>
      <SleepCalculator />
      <br></br>
      <br></br>
      <Experiment />
      <br></br>
      <br></br>
      <ApiTest />
    </>
  )
}
