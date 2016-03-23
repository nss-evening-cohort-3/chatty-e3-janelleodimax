"use strict";

var Chatty = (function() {

  let chatBox = document.getElementById("chatbox");
  let clearButton = document.getElementById("clear-messages");

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
      if (chatBox.innerHTML = "") {
      clearButton[0].setAttribute("disabled", true);
    };
    });
  };

  Chatty.clearAllMessages();

  // Chatty.disableClearButton = function () {
  //   if (chatBox.innerHTML = "") {
  //     clearButton[0].setAttribute("disabled", true);
  //   };
  // }

  // Chatty.disableClearButton();

})(Chatty || {});