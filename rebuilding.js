"use strict";

var Chatty = (function(originalChatty) {
  
//user message input function
  originalChatty.inputGetter = function () {
//event listener for the user to input the message
    userInputField.addEventListener("keydown", function (e) {
      if (e.which === 13) {
        let userMessage = userInputField.value;         
        originalChatty.userMessageToDOM(userMessage);
        userInputField.value = "";
        clearButton.disabled = false;  
      };
    });  
  },

  //building the string of what the usermessage would look like with the username as Monkeybutt

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

  //delete single message function
  originalChatty.deleteAMessage = function () {
    chatBox.addEventListener("click", function(e) {
      originalChatty.messageDeleter(e);
    });
  }

  return originalChatty;

})(Chatty || {});
