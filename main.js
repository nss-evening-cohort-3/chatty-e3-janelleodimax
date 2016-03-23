"use strict";

var Chatty = (function() {

  let chatBox = document.getElementById("chatbox");
  let clearButton = document.getElementById("clear-messages");

  Chatty.loadStarterPack(Chatty.getStarterPack);

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