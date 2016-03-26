"use strict";

var Chatty = (function(originalChatty) {
  
  originalChatty.inputGetter = function () {
    userInputField.addEventListener("keydown", function (e) {
      if (e.which === 13) {
        let userMessage = userInputField.value;         
        originalChatty.userMessageToDOM(userMessage);
        userInputField.value = "";
        clearButton.disabled = false;  
      };
    });  
  },

  originalChatty.userMessageToDOM = function (userMessage) {
    let buildString = "";
    buildString += `<p id = ${id}>&nbsp&nbsp<strong>MonkeyButt:</strong>  `;
    buildString += `<span>${userMessage}</span>  `;
    buildString += `<button id='delete'>Delete</button></p>`;
    chatbox.innerHTML += buildString;   
    messageArray.push({id: id++, screename: "MonkeyButt", subject: userMessage});
    console.log("messageArray", messageArray);  
    console.log("chatBox.innerHTML", chatBox.innerHTML);
        
  },

  originalChatty.deleteAMessage = function () {
    chatBox.addEventListener("click", function(e) {
      originalChatty.messageDeleter(e);
    });
  }

  return originalChatty;

})(Chatty || {});
