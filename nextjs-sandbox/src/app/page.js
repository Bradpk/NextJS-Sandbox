import Image from 'next/image'
import styles from './page.module.css'
import Weather from './weather'
import DogYears from './dogYears'
import Eightball from './eightball'

export default function Home() {
  return (
    <>
      <br></br>
      <Weather />
      <br></br>
      <DogYears />
      <br></br>
      <Eightball />
      <br></br>
      
    </>
  )
}
