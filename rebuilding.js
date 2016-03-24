"use strict";


var Chatty = (function(originalChatty) {
  
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
    buildString += `<span>${userMessage}</span>  `;
    buildString += `<button id='delete'>Delete</button></p>`;
    chatbox.innerHTML += buildString;   
    messageArray.push({screename: "MonkeyButt", subject: userMessage});
    console.log("messageArray", messageArray);
   
  },

  originalChatty.deleteAMessage = function () {
    chatBox.addEventListener("click", function(e) {
      originalChatty.messageDeleter(e);
    });
  }

  return originalChatty;

})(Chatty || {});
