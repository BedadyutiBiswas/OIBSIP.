// Get references to the Celsius and Fahrenheit input fields
const celsius = document.querySelector("#celsius"),
fahrenheit = document.querySelector("#fahrenheit");

// Set focus to the Celsius input field when the page loads
window.addEventListener("load", () => celsius.focus());

// Convert Celcius to Fahrenheit when Celcius value changes
celsius.addEventListener("input", () =>{
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    // Clear fahrenheit input when celcius input is empty
    if(!celsius.value) fahrenheit.value ="";
});

// Convert Fahrenheit to Celcius when Fahrenheit value changes
fahrenheit.addEventListener("input", () => {
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
    // Clear celcius input when fahrenheit input is empty
    if(!fahrenheit.value) celsius.value ="";
});