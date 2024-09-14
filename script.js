function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

const celsiusInput = parseFloat(
  prompt("Please enter the temperature in Celsius:")
);
const fahrenheitOutput = celsiusToFahrenheit(celsiusInput);
console.log("The equivalent temperature in Fahrenheit is: " + fahrenheitOutput);
