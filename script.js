document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value; // Retrieve email
    const message = document.getElementById('message').value;

    // Here you can handle the message, e.g., send it to a server or display it
    console.log(`Message from ${name} (${email}): ${message}`); // Include email in log

    // Display a response to the user
    document.getElementById('response').innerText = `Thank you, ${name}! Your message has been sent.`;

    // Optionally, clear the form fields
    this.reset();
});