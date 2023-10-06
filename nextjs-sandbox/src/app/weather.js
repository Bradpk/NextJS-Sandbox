'use client';
import { useState } from "react";

function Weather() {

const[fahrenheit, setFahrenehit] = useState('')
    const kelvin = 293
    let celsius = kelvin - 273
    let newton = celsius * (33 / 100)
    newton = Math.floor(newton);

    return (
        <div>
            <p>Enter the temperature in fahrenheit:</p>
            <input></input>
            <p>The temperature is {fahrenheit} degrees Fahrenheit</p>
            <p>The temperature is {celsius} degrees Newtons</p>
            <p>The temperature is {newton} degrees Newtons</p>
        </div>
    )
}

export default Weather