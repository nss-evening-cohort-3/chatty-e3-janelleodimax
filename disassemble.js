"use strict";

var Chatty = (function(originalChatty) {

  originalChatty.messageDeleter = function (e) {
    if (e.target.id === "delete") {
      let toDelete = e.target.parentNode;
      chatBox.removeChild(toDelete);
    };
  };

  return originalChatty;

})(Chatty || {});  