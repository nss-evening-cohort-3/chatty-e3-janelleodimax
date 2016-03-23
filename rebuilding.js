"use strict";

var Chatty = (function(originalChatty) {
  
  let userInputField = document.getElementById("text-area");
  let chatBox = document.getElementById("chatbox");

  originalChatty.inputGetter = function () {
    userInputField.addEventListener("keydown", function (e) {
      if (e.which === 13) {
        let userMessage = userInputField.value;         
        originalChatty.userMessageToDOM(userMessage);
        userInputField.value = ""; 
      };
    });  
  },

  originalChatty.userMessageToDOM = function (userMessage) {
    let buildString = "";
    buildString += `<p>&nbsp&nbsp<strong>MonkeyButt:</strong>  `;
    buildString += `${userMessage}  `;
    buildString += `<button id='delete'>Delete</button></p>`;
    chatbox.innerHTML += buildString;
  },

  originalChatty.deleteAMessage = function () {
    chatBox.addEventListener("click", function(e) {
      originalChatty.messageDeleter(e);
    });
  }

  return originalChatty;

})(Chatty || {});
