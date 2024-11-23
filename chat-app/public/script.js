document.getElementById('send-button').addEventListener('click', async () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    const username = 'Имя пользователя'; // Получите имя пользователя из контекста

    // Отправка сообщения на сервер
    await fetch('/api/chat/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, text: message })
    });

    messageInput.value = '';
    loadMessages();
});

async function loadMessages() {
    const response = await fetch('/api/chat/messages');
    const messages = await response.json();

    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = '';
    messages.forEach(msg => {
        const msgElement = document.createElement('div');
        msgElement.classList.add('message');
        msgElement.innerHTML = `<span class="username">${msg.username}:</span> ${msg.text}`;
        messagesContainer.prepend(msgElement);
    });
}

// Загрузка сообщений при загрузке страницы
loadMessages();
