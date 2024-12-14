// Wait for the page to fully load before running the script
window.addEventListener("load", () => {

    // Get references to HTML elements
    let num1 = document.getElementById("num1"); // First input field for numbers
    let num2 = document.getElementById("num2"); // Second input field for numbers
    let button = document.getElementById("calcular"); // Button to trigger the calculation
    let verify = document.getElementById("verify"); // Message for validating the first number
    let verify2 = document.getElementById("verify2"); // Message for validating the second number
    let form = document.getElementById("numbers"); // Form container for the inputs
    let calc = document.getElementById("calc"); // Div to display the result

    // Validate inputs as the user types
    form.addEventListener("keyup", () => {

        // Check if the first input is a valid number
        if (isNaN(parseFloat(num1.value))) {
            verify.style.color = "red"; // Show error in red
            verify.innerHTML = "<strong>Por favor, introduce un número válido</strong>"; // Error message
        } else {
            verify.style.color = "green"; // Show success in green
            verify.innerHTML = "<strong>Número válido</strong>"; // Success message
        }

        // Check if the second input is a valid number
        if (isNaN(parseFloat(num2.value))) {
            verify2.style.color = "red"; // Show error in red
            verify2.innerHTML = "<strong>Por favor, introduce un número válido</strong>"; // Error message
        } else {
            verify2.style.color = "green"; // Show success in green
            verify2.innerHTML = "<strong>Número válido</strong>"; // Success message
        }
    });

    // Handle button click to compare numbers
    button.addEventListener("click", (e) => {
        // Compare the two numbers after converting them to Number type
        if (Number(num1.value) > Number(num2.value)) {
            calc.style.color = "black"; // Display result in black
            calc.innerText = `${num1.value} es mayor que ${num2.value}`; // Show greater message
        } else if (Number(num1.value) < Number(num2.value)) {
            calc.style.color = "black"; // Display result in black
            calc.innerText = `${num1.value} es menor que ${num2.value}`; // Show less message
        } else if (Number(num1.value) == Number(num2.value)) {
            calc.innerText = `${num1.value} y ${num2.value} son iguales`; // Show equality message
        } else {
            calc.style.color = "red"; // Error message in red
            calc.innerText = `Por favor introduce números válidos`; // Error message
            e.preventDefault(); // Prevent further actions on invalid input
        }
    });

});
