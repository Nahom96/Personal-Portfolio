document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Create FormData object to send form data
    var formData = new FormData(this);

    // Send the form data using fetch
    fetch("/Contact/Submit", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            var notification = document.getElementById("notification");

            if (data.success) {
                // Display success message
                notification.style.backgroundColor = "green";
                notification.textContent = data.message || "Form submitted successfully!";
            } else {
                // Display validation errors
                notification.style.backgroundColor = "red";
                notification.innerHTML = ""; // Clear previous content

                // Loop through errors and create a list of error messages
                data.errors.forEach(function (error) {
                    var errorItem = document.createElement("div");
                    errorItem.textContent = error; // Set the error message text
                    notification.appendChild(errorItem);
                });
            }

            // Show the notification
            notification.style.display = "block";
        })
        .catch(error => {
            console.error("Error:", error);
        });
});;