document.addEventListener("DOMContentLoaded", function () {
  const chat = document.getElementById("chat");
  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", sendMessage);

  function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText === "") return;

    const user = Math.random() < 0.5 ? "Nate" : "Ani";
    const color = user === "Nate" ? "#007bff" : "#e74c3c"; // User-specific colors
    const message = createMessage(user, messageText, color);
    chat.innerHTML += message;

    // Scroll to the bottom of the chat
    chat.scrollTop = chat.scrollHeight;

    // Clear the input field
    messageInput.value = "";
  }

  function createMessage(user, text, color) {
    return `
      <div class="message" style="border-color: ${color};">
        <span class="user" style="color: ${color};">${user}:</span>
        <span class="text">${text}</span>
      </div>`;
  }
});
