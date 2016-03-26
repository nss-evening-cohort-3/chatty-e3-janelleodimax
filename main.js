"use strict";

let messageArray = [];
let chatBox = document.getElementById("chatbox");
let clearButton = document.getElementById("clear-messages");
let userInputField = document.getElementById("text-area");
let id = 5;

var Chatty = (function() {

  Chatty.loadStarterPack(Chatty.getStarterPack);

  Chatty.clearAllMessages = function (e) {
    clearButton.addEventListener("click", function (e) {
      chatBox.innerHTML = "";
      clearButton.disabled = true;
      messageArray=[];
      console.log("messageArray", messageArray);
            
    });   
  };
  
  Chatty.clearAllMessages();


  // This function listens for a click on the Dark Theme checkbox and runs a check to see if it is checked or not, then adds or removes a dark theme class. Then the function is called right below.

  Chatty.changeDarkTheme = function () {
    let darkCheck = document.getElementById("dark");

    darkCheck.addEventListener("click", function(e) {
      if (darkCheck.checked) {
        chatBox.classList.add("theme");
      }
      else if (darkCheck.checked === false) {
        chatBox.classList.remove("theme");
      }
    });
  }

  Chatty.changeDarkTheme();

// This function listens for a click on the Large Check checkbox and runs a check to see if it is checked or not, then adds or removes a enlarged font class. Then the function is called right below.
 
  Chatty.changeTextSize = function () {
    let largeCheck = document.getElementById("large-text");

    largeCheck.addEventListener("click", function(e) {
      if (largeCheck.checked) {
        chatBox.classList.add("large");
      }
      else if (largeCheck.checked === false) {
        chatBox.classList.remove("large");
      }
    });
  }

  Chatty.changeTextSize();



})(Chatty || {});