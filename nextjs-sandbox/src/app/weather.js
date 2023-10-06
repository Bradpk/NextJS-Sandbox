function Weather(){
const kelvin = 293
let celsius = kelvin - 273 
let newton = celsius * (33/100)
newton = Math.floor(newton);
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit);

    return (
        <div>
<p>The temperature is {fahrenheit} degrees Fahrenheit</p>
<p>The temperature is {newton} degrees Newtons</p>
        </div>
    )
}

export default Weather