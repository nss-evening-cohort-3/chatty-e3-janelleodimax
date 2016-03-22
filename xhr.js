"use strict";

var Chatty = (function(originalChatty) {

  originalChatty.getStarterPack = function () {
    var starterPack = [];
    starterPack = JSON.parse(this.responseText);
    console.log("starterPack", starterPack);
    originalChatty.starterPackToDOM(starterPack.conversations);
    },

  originalChatty.loadStarterPack = function (callback) {
    var packLoader = new XMLHttpRequest();

    packLoader.addEventListener("load", callback);
    packLoader.open("GET", "conversation.json");
    packLoader.send();
    },

  originalChatty.starterPackToDOM = function (starterPack) {

    var chatBox = document.getElementById("chatbox");
      
      for (let i = 0; i < starterPack.length; i++) {
        let buildString = "";
        buildString += `<message>`
        buildString += `<p>&nbsp&nbsp<strong>${starterPack[i].screename}:</strong>  `;
        buildString += `${starterPack[i].subject}  `;
        buildString += `<button id='delete'>Delete</button></p>`;
        buildString += `</message>`;
        chatbox.innerHTML += buildString;
      };
  }
  
  return originalChatty;

})(Chatty || {});