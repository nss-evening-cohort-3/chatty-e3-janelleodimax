"use strict";

var Chatty = (function(originalChatty) {

  originalChatty.getStarterPack = function () {
    var starterPack = [];
    starterPack = JSON.parse(this.responseText);
    console.log("starterPack", starterPack);
    },

  originalChatty.loadStarterPack = function (callback) {
    var packLoader = new XMLHttpRequest();

    packLoader.addEventListener("load", callback);
    packLoader.open("GET", "conversation.json");
    packLoader.send();
    }
  
  return originalChatty;

})(Chatty || {});