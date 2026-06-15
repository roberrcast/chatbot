# Descripción:

En esta práctica, crearás un chatbot simple que puede responder a un conjunto predefinido de preguntas, es decir, se definirán previamente con un objeto, las posibles entradas del usuario y qué respuesta dara el chatbot. El chatbot se implementará utilizando HTML para la estructura, CSS para el estilo y JavaScript para la lógica

## Paso a paso:

### Estructura HTML:

- [ ] Define la estructura básica de una página HTML que incluirá un contenedor para el chatbot, un área de input para los mensajes del usuario, y un botón para enviar los mensajes.

### Estilizado CSS:

- [ ] En este archivo, escribe las reglas de estilo para el contenedor del chatbot, el área de mensajes, el campo de input, y el botón de enviar. Asegúrate de estilizar el contenedor del chatbot para que tenga un aspecto atractivo y sea fácil de usar.

### Funcionalidad JavaScript:

En este archivo, escribe la lógica para manejar el envío de mensajes del usuario y la respuesta del chatbot. Define una función para enviar el mensaje del usuario, agregarlo al contenedor de chat, y generar una respuesta del chatbot basada en el mensaje del usuario.

Define una función que se ejecutará cuando el usuario haga clic en el botón de enviar. Esta función debe capturar el mensaje del usuario desde el campo de input, crear un nuevo elemento en el div de mensajes, y agregar el mensaje del usuario a este elemento.

Define una función adicional para generar una respuesta del chatbot basada en el mensaje del usuario. Puedes usar una estructura de datos simple, como un objeto, para mapear las respuestas del chatbot a las posibles inputs del usuario.

Asegúrate de que la función para enviar mensajes también llame a la función que genera la respuesta del chatbot y añada esta respuesta al div de mensajes.

El objeto predefinido de respuestas en el que se basará la funcionalidad podria ser algo parecido al siguiente:

```js
const responses = {
    hola: "¡Hola! ¿Cómo estás?",

    adiós: "¡Adiós! Que tengas un buen día.",

    "cómo estás": "Estoy bien, gracias por preguntar.",

    "qué puedes hacer": "Puedo responder a tus preguntas básicas.",
};
```

Integración y Pruebas:

Abre el archivo index.html en tu navegador web para ver el chatbot en acción. Escribe diferentes mensajes en el campo de input y haz clic en el botón de enviar para ver cómo el chatbot responde.
