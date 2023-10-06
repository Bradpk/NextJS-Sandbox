'use client';
import { useState } from "react";

function Weather() {
const[fahrenheit, setFahrenehit] = useState('')
    let celsius = fahrenheit - 32 * 0.56;
    celsius = Math.floor(celsius)
    let newton = celsius * (33 / 100)
    newton = Math.floor(newton);

    const handleTemp = (event) => {
        setFahrenehit(event.target.value);
    }

    return (
        <div>
            <p>Enter the temperature in fahrenheit:</p>
            <input type='text' value={fahrenheit} onChange={handleTemp}></input>
            <p>The temperature is {fahrenheit} degrees Fahrenheit</p>
            <p>Which is {celsius} degrees celsius</p>
            <p>Which is {newton} degrees Newtons</p>
        </div>
    )
}

export default Weather