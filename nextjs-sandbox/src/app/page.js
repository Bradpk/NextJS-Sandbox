import Image from 'next/image'
import styles from './page.module.css'
import Weather from './weather'
import DogYears from './dogYears'
import Eightball from './eightball'

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

    </>
  )
}
