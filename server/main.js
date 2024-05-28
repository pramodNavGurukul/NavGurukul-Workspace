document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('chat-input').value;

    // Send the message to the server
    fetch('/generate-test-cases', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        const chatBox = document.getElementById('chat-box');
        // Display the user's message
        const userMessageElement = document.createElement('p');
        userMessageElement.textContent = `You: ${message}`;
        chatBox.appendChild(userMessageElement);
        
        // Display the AI's response
        const aiResponseElement = document.createElement('p');
        aiResponseElement.textContent = `AI: ${data.response}`;
        chatBox.appendChild(aiResponseElement);
        
        // Clear the input field
        document.getElementById('chat-input').value = '';
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});