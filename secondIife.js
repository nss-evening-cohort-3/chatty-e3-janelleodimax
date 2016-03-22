"use strict";
let = var

//variable set by the "use strict" method
let chatbox = (function(newChatbox){
  let userInputField = document.getElementById("text-area");
  let userMessage = document.getElementById("user-message");
  let deleteMessage = document.getElementById("delete-message");
  let inputString;

//user input here
userInputField.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {

    inputString =`<div>${userInput.value}`;
    inputString += `<button class = "btn btn-default">Delete</button></div>`;
    userMessage.innerHTML += inputString;
    userInputField.value = "";
  };
});

deleteMessage.addEventListener("click", function() {
  userInputField.innerHTML = "";
})

return newChatbox;
})(chatbox || {});

//creating the chatbox
let chatbox = (function(oldChatbox) {
  oldChatbox.loopThrough = function(messageArray) {
    let string = "";
    for(var i = 0; i <messageArray.length; i++) {
      string += `<div>${messageArray[i].content}`;
      string += `button class = "btn btn-default">Delete</button></div>`;
    }
    document.getElementById("messages").innerHTML = string;
  }
  return oldChatbox;
})
(chatbox || {});

//delete the messages
let chatbox = (function (oldChatbox) {
  oldChatbox.deleteButton = function(event) {
    this.removeChild(event.target.parentNode);
  }
  return oldChatbox;
})
(chatbox || {});