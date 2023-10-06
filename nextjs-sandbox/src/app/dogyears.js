'use client';
import {useState} from 'react';

function DogYears() {
    const [yourAge, setYourAge] = useState('')
    let earlyYears = 2
    earlyYears *= 10.5
    let laterYears = yourAge - 2
    laterYears *= 4
    let myAgeInDogYears = earlyYears + laterYears

    const handleAge = (event) => {
        setYourAge(event.target.value);
    }

    return (
        <>
        <p>Enter Your Age Below</p>
        <input type='text' value={yourAge} onChange={handleAge}></input>
            <p>Your age is {yourAge} years old in human years which is {myAgeInDogYears} years old in dog years.</p>
        </>
    )
}

export default DogYears