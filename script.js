function login() {
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    if (username !== 'kbobs' && username !== 'sufplo' && password !== 'h0ukbobs1') {
        // User is Tosin
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('messagePage').style.display = 'block';
        document.getElementById('usernameDisplay').innerText = 'Toshinshinnn 💘';
        document.getElementById('message').innerText = 'Will you be my Valentine? 🦦';
    } 
}

function submitForm() {
    const selectedResponse = document.querySelector('input[name="response"]:checked');

    if (selectedResponse) {
        const response = selectedResponse.value;
        const messageElement = document.getElementById('message');
        const submitButton = document.getElementById('submitButton');
        const forfeitButton = document.getElementById('forfeitButton');
        const proceedButton = document.getElementById('proceedButton');

        // Add a CSS class to trigger the animation
        messageElement.classList.add('animate-swell');

        // Set the text content with the response
        messageElement.innerText = `Yayy! 14th it is. Can’t wait to be with you my love ♾❤`;

        // Remove the CSS class after a delay (1 second in this example)
        setTimeout(() => {
            messageElement.classList.remove('animate-swell');
            
            // Hide submit and forfeit buttons, show proceed button
            submitButton.style.display = 'none';
            forfeitButton.style.display = 'none';
            proceedButton.style.display = 'inline-block';
        }, 1000);
    } else {
        alert('Please select a response.');
    }
}

function proceedToPicture() {
    // Display a picture or navigate to a new page
    alert('Proceeding to picture! 📷'); // You can replace this with your actual implementation
}

function showForfeit() {
    alert('Nibo!! go back and pick one jorr 😂😂');
}
