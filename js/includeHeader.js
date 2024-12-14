// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Fetch the content of the "header.html" file
    fetch('header.html')
        .then(response => response.text()) // Convert the response to text
        .then(data => {
            // Insert the fetched content into the <header> element
            document.querySelector('header').innerHTML = data;
        });

});
