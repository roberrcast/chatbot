# 🤖 Chatbot Assistant - Programming Assignment
  
   A modern and interactive chatbot built with core web technologies (HTML, CSS, and JavaScript). This project was developed as an assignment to practice
   state management logic, DOM manipulation, and responsive design.
  
   ## 🚀 Features
  
   - **Response Logic:** Uses a JavaScript object to map user inputs to predefined answers.
   - **Professional Design:** UI inspired by *Material Design*, featuring a navigation sidebar and an optimized chat area.
   - **User Experience:**
     - Simulated response delay for a more realistic feel.
     - Automatic auto-scroll when new messages are received.
     - Support for sending messages using the "Enter" key.
   - **Iconography:** Uses *Google Material Symbols* for a modern look.
  
   ## 🛠️ Tech Stack
  
   - **HTML5:** Semantic site structure.
   - **CSS3:** Advanced styling using CSS variables and Flexbox for the layout.
   - **JavaScript (Vanilla):** Chatbot logic, event handling, and dynamic DOM manipulation.
  
   ## 📂 Project Structure
  ├── index.html    # Main structure and library imports
   
    ## 🧠 Chatbot Logic
   
    The core of the assistant is a simple yet effective response object:
  const responses = {
      'hello': 'Hi there! How are you?',
      'bye': 'Goodbye! Have a great day.',
      'how are you': 'I am doing well, thanks for asking.',
      'what can you do': 'I can answer your basic questions.'
  };

   
    The script normalizes the user input (converting it to lowercase and trimming spaces) to search for partial matches, allowing for a more natural
    interaction.
   
    ## 🔧 How to Run the Project
   
    1. Clone this repository:
    git clone https://github.com/your-username/chatbot-assignment.git

    2. Open the `index.html` file in any modern web browser.
    3. Start chatting!
   
    ---
    Developed with ❤️ as a programming assignment.
