function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

var celsiusInput = document.getElementById("celsius-input");
var convertBtn = document.getElementById("convert-btn");
var fahrenheitOutput = document.getElementById("fahrenheit-output");

convertBtn.addEventListener("click", function () {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = celsiusToFahrenheit(celsius);
    fahrenheitOutput.innerText = fahrenheit.toFixed(2) + " °F";
});