function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    var resultElement = document.getElementById("result");

    var celsius = parseFloat(celsiusInput.value);

    if (isNaN(celsius)) {
        resultElement.innerHTML = "Lütfen geçerli bir sayı giriniz.";
        return;
    }

    var fahrenheit = (celsius * 9 / 5) + 32;
    var kelvin = celsius + 273.15;

    resultElement.innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2) + " °F<br>" +
                              "Kelvin: " + kelvin.toFixed(2) + " K";
}
