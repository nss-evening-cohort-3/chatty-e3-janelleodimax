"use strict";

var Chatty = (function() {

  Chatty.loadStarterPack(Chatty.getStarterPack);
    
})(Chatty || {});

 let box = document.getElementById("chatbox");
 let check = document.getElementById("dark");

 check.addEventListener("click", function(){
    if(check.checked)
    box.classList.add("theme");
    else if(check.checked === false)
    box.classList.remove("theme");
 });