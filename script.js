"use strict";

var enterButton =document.getElementById("input2");
var input=document.getElementById("input1");
var ul=document.querySelector("ul");

function inputLength(){
    return input.value.length;
}
function createListElement(){
    var li =document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";

    function completed(){
        li.classList.toggle("done");
    }
    li.addEventListener("click", completed);

    var deleteButton=document.createElement("button");
    deleteButton.appendChild(document.createTextNode("x"));
    li.appendChild(deleteButton)
    deleteButton.addEventListener("click",deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }
    li.addEventListener("click", completed);
}
function addListAfterClick(){
   if (inputLength()>0) {
       createListElement()
   }
}
function addListAfterKeypress(event){
    if (inputLength()>0 && event.which ===13){
         createListElement()
        }
}
enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

