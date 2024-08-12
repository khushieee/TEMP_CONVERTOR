function convertTemperature() {
    let temp = parseFloat(document.getElementById('temperatureInput').value);
    let unit = document.getElementById('inputUnit').value;

    if (isNaN(temp)) {
        document.getElementById('result').innerHTML = "Please enter a valid number!";
        return;
    }

    let resultText;
    if (unit === 'Celsius') {
        resultText = `<strong>${temp}°C</strong> = ${(temp * 9/5 + 32).toFixed(2)}°F = ${(temp + 273.15).toFixed(2)}K`;
    } else if (unit === 'Fahrenheit') {
        resultText = `<strong>${temp}°F</strong> = ${((temp - 32) * 5/9).toFixed(2)}°C = ${((temp - 32) * 5/9 + 273.15).toFixed(2)}K`;
    } else if (unit === 'Kelvin') {
        resultText = `<strong>${temp}K</strong> = ${(temp - 273.15).toFixed(2)}°C = ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    document.getElementById('result').innerHTML = resultText;
}
