document.getElementById('entryForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const discordUsername = document.getElementById('discordUsername').value;

    if (name && discordUsername) {
        try {
            const response = await fetch('https://formspree.io/f/mpzvvglk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    discordUsername: discordUsername
                })
            });

            if (response.ok) {
                // Redirect to thank you page
                window.location.href = 'thank-you.html';
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting your entry. Please try again later.');
        }
    } else {
        alert('Please fill out all fields.');
    }
});
