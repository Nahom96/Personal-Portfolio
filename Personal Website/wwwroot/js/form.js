document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch("/Contact/Submit", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            showNotification("success", "Your message has been sent successfully!");
            form.reset(); // Clear the form fields
        } else {
            const errorText = await response.text();
            showNotification("error", errorText || "Failed to send your message. Please try again.");
        }
    } catch (error) {
        showNotification("error", "An unexpected error occurred. Please try again.");
    }

    return false; // Ensure the form doesn't refresh the page
});

function showNotification(type, message) {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerText = message;

    document.body.appendChild(notification);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}
