const kelvin = 300 // kelvin temperature

const celcius = kelvin - 273 // temperature in celcius is 273 less than kelvin

let fahrenheit = celcius * (9/5) + 32 // fahrenheit temperature calculation

let newton = celcius * (33/100) // newton temperature calculation

newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees Newton.`)

fahrenheit = Math.floor(fahrenheit) // when converting Celcius to Fahrenheit, you often get a decimal value. Math.floor() rounds down the value
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
