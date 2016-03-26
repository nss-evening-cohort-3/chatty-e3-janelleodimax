"use strict";

var Chatty = (function(originalChatty) {

  originalChatty.messageDeleter = function (e) {
    if (e.target.id === "delete") {
      let toDelete = e.target.parentNode;
      chatBox.removeChild(toDelete);
      messageArray.splice(this, 1);
      for (let i = 0; i < messageArray.length; i++) { 
        if (messageArray[i].id >= toDelete.id) {
          messageArray[i].id--;
        }
      }   
    };        
  }

  return originalChatty;

})(Chatty || {});  