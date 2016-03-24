"use strict";

let messageArray = [];
let chatBox = document.getElementById("chatbox");
let clearButton = document.getElementById("clear-messages");
let userInputField = document.getElementById("text-area");

var Chatty = (function() {

  Chatty.loadStarterPack(Chatty.getStarterPack);    


 
 let check = document.getElementById("dark");

 check.addEventListener("click", function(){
    if(check.checked)
    chatBox.classList.add("theme");
    else if(check.checked === false);
    chatBox.classList.remove("theme");
 });

  Chatty.clearAllMessages = function (e) {
    clearButton.addEventListener("click", function (e) {
      chatBox.innerHTML = "";
    });   
  };
  
  Chatty.clearAllMessages();

  Chatty.disableClearButton = function (e) {
    if (chatBox.innerHTML = "") {
      clearButton[0].setAttribute("disabled", true);
    };
  }

  Chatty.changeDarkTheme = function (e) {
    let check = document.getElementById("dark");

    check.addEventListener("click", function() {
      if (check.checked) {
        chatBox.classList.add("theme");
      }
      else if (check.checked === false) {
        chatBox.classList.remove("theme");
      }
    });
  }

  Chatty.changeDarkTheme();


})(Chatty || {});