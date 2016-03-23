"use strict";

var Chatty = (function(originalChatty) {

  let chatBox = document.getElementById("chatbox");
  let starterPack;

  originalChatty.getStarterPack = function () {
    let starterPack = [];
    starterPack = JSON.parse(this.responseText);
    originalChatty.starterPackToDOM(starterPack.conversations);
    originalChatty.deleteAMessage();
    originalChatty.inputGetter();
  },

  originalChatty.loadStarterPack = function (callback) {
    let packLoader = new XMLHttpRequest();

    packLoader.addEventListener("load", callback);
    packLoader.open("GET", "conversation.json");
    packLoader.send();
  },

  originalChatty.starterPackToDOM = function (starterPack) {
    for (let i = 0; i < starterPack.length; i++) {
      let buildString = "";
      buildString += `<p>&nbsp&nbsp<strong>${starterPack[i].screename}:</strong>  `;
      buildString += `${starterPack[i].subject}  `;
      buildString += `<button id='delete'>Delete</button></p>`;
      chatbox.innerHTML += buildString;
    };
  }
  
  return originalChatty;

})(Chatty || {});