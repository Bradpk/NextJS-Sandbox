'use client';
import {useState} from 'react';

function DogYears() {
    const [yourAge, setYourAge] = useState('')
    let myAge = 30
    let earlyYears = 2
    earlyYears *= 10.5
    let laterYears = myAge - 2
    laterYears *= 4
    let myAgeInDogYears = earlyYears + laterYears
    let myName = 'Brad';

    return (
        <>
        <input></input>
            <p>My age is {myAge} years old in human years which is {myAgeInDogYears} years old in dog years.</p>
        </>
    )
}

export default DogYears