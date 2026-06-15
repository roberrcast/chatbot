const responses = {
    hola: "¡Hola! ¿Cómo estás?",
    adios: "¡Adiós! Que tengas un buen día.",
    "cómo estás": "Estoy bien, gracias por preguntar",
    "que puedes hacer": "Puedo responder a tus preguntas básicas.",
};

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function getBotRespose(message) {
    const input = message.toLowerCase().trim();

    for (let key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }

    return "Lo siento, no entiendo esa pregunta. Prueba con 'hola'  o 'qué puedes hacer'.";
}

function sendMessage() {
    const text = userInput.value.trim();

    if (text === "") return;

    const userDiv = document.createElement("div");
    userDiv.classList.add("user-message");
    userDiv.textContent = text;
    chatBox.appendChild(userDiv);

    userInput.value = "";

    setTimeout(() => {
        const botText = getBotRespose(text);
        const botDiv = document.createElement("div");
        botDiv.classList.add("bot-message");
        botDiv.textContent = botText;
        chatBox.appendChild(botDiv);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
